<template>

</template>

<script>
    /* eslint-disable indent */
    import {Droppable} from '@shopify/draggable';

    export default {
        props: {
            answers: {
                type: Array,
            },
            tasks: {
                type: Array,
            },
            explanation: {
                type: String,
            },
            answerOffset: {
                type: Array,
            },
        },
        data() {
            return {
                answersLeft: this.answers.length,
                levelPoints: 0,
            };
        },
        methods: {
            getAnswer(name) {
                const [answerResult] = this.answers.filter((item) => {
                    if (item.name === name) {
                        return item;
                    }
                });
                // console.log(answerResult)
                return answerResult;
            },
            calculatePoints() {
                return this.answers.reduce((acc, item) => {
                    if (item.hasPoint === true) {
                        return acc + 1;
                    } else {
                        return acc;
                    }
                }, 0);
            },
            lowerPoint(answerName) {
                this.getAnswer(answerName).hasPoint = false;
            },
            showGuessed(className, droppedClassName) {
                const explainWrapper = document.querySelector('.explain-wrapper');
                if (!droppedClassName.contains(className)) {
                    explainWrapper.querySelector(`.equally.${className}`).classList.add('guessed');
                } else {
                    explainWrapper.querySelector(`.${className}`).classList.add('guessed');
                }
            },
            compareEqually(equally1, equally2) {
                if (equally1 && equally2) {
                    return equally1 === equally2;
                } else {
                    return null;
                }
            },
            insertAnswerName(dropzoneContainer, answerName) {
                const element = dropzoneContainer.querySelector('.dropzone__caption');
                const { caption } = this.getAnswer(answerName);
                element.innerHTML = caption;
            },
            showAssignment(dragName, dropzoneContainer) {
                dropzoneContainer.closest(`.${dragName}`).classList.add('guessed');
                this.$emit('assignment-guessed');
            },
        },
        watch: {
            answersLeft() {
                console.log(this.answersLeft);
                if (this.answersLeft === 0) {
                    this.levelFinished = true;
                    this.levelPoints = this.calculatePoints();
                    this.$emit('level-finished', true);
                }
                return false;
            },
            levelPoints() {
                console.log(this.levelPoints)
                this.$emit('calculate-points', this.levelPoints);
            },
        },
        computed: {},
        updated() {
        },
        mounted() {
            console.log('START');
            console.log(this.levelPoints);
            const containers = document.querySelectorAll('.dropzone');
            if (containers.length === 0) {
                return false;
            }
            const droppable = new Droppable(containers, {
                draggable: '.isDraggable',
                dropzone: '.dropzone',
                mirror: {
                    constrainDimensions: true,
                    cursorOffsetX: this.answerOffset[0],
                    cursorOffsetY: this.answerOffset[1],
                },
            });
            let currentSourceItem;
            let currentSourceContainer;
            let dropzoneContainer;
            let draggedCompareName;
            let droppedCompareName;
            let equally1;
            let equally2;

            // ['outside', 'inside']
            let dragPosition = null;
            // ['resolve', 'reject', 'finished']
            let dragState = 'reject';

            droppable.on('drag:start', (evt) => {
                console.log(evt)
                dragPosition = null;
                dragState = null;
                currentSourceItem = evt.originalSource;
                currentSourceContainer = evt.sourceContainer;
                draggedCompareName = currentSourceItem.dataset.compare;
            });
            droppable.on('drag:over', (evt) => {
                const overContainerClasses = evt.overContainer.classList;
                if (!overContainerClasses.contains('dragArea')) {
                    dragPosition = 'inside';
                }
            });
            droppable.on('drag:out', (evt) => {
                dragPosition = 'outside';
            });
            droppable.on('drag:out:container', (evt) => {
                dragPosition = 'outside';
            });
            droppable.on('droppable:dropped', (evt) => {
                dragPosition = 'inside';
                dragState = 'resolve';
                droppedCompareName = evt.dropzone.dataset.compare;
                equally1 = evt.dropzone.dataset.equally;
                equally2 = currentSourceItem.dataset.equally;
                const compareResult = draggedCompareName === droppedCompareName;
                const equallyResult = this.compareEqually(equally1, equally2);
                if ((!compareResult) && !equallyResult) {
                    dragState = 'reject';
                    evt.cancel();
                }
            });
            droppable.on('droppable:stop', (evt) => {
                droppedCompareName = evt.dropzone.dataset.compare;
                dropzoneContainer = evt.dropzone.parentNode;
                const dropzoneClasses = evt.dropzone.classList;
                const resolveDragActions = () => {
                    dropzoneClasses.toggle('afterDrop', true);
                    this.answersLeft -= 1;
                    switch (this.explanation) {
                        case 'name':
                            this.insertAnswerName(dropzoneContainer, droppedCompareName);
                            break;
                        case 'explain':
                            this.showGuessed(draggedCompareName, dropzoneClasses);
                            break;
                        case 'assignment':
                            this.showAssignment(draggedCompareName, dropzoneContainer);
                            break;
                        default:
                            this.insertAnswerName(dropzoneContainer);
                    }
                };
                if (dragPosition === 'inside' && dragState === 'reject') {
                    this.lowerPoint(draggedCompareName);
                }
                // Add class only for dropzone 'container'
                if (dropzoneContainer.closest('.dropArea')) {
                    dragState = 'finished';
                    resolveDragActions();
                }
            });
        },
    };
</script>

<style scoped>

</style>
