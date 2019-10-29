<template>
  <div id="app">
    <transition name="fade" :duration="400">
    <component
      @next-level="toNextLevel"
      @calculate-points="calculateTotalPoints"
      @restart="restartGame"
      :is="currentTabComponent"
      :level="currentLevel"
      :totalPoints="totalPoints">
    </component>
    </transition>
  </div>
</template>

<script>
    /* eslint-disable indent */

    import intro from './components/intro.vue';
    import rules from './components/rules.vue';
    import materials from './components/materials.vue';
    import structures from './components/structures.vue';
    import tools from './components/tools.vue';
    import assignment from './components/assignment.vue';
    import detail from './components/detail.vue';
    import elements from './components/elements.vue';
    import node from './components/node.vue';
    import finish from './components/finish.vue';

    export default {
        data() {
            return {
                currentLevel: 'finish',
                levels: [
                    'intro',
                    'rules',
                    'materials',
                    'structures',
                    'tools',
                    'assignment',
                    'detail',
                    'elements',
                    'node',
                    'finish',
                ],
                totalPoints: 0,
            };
        },
        methods: {
            toNextLevel(levelName) {
                this.currentLevel = levelName;
            },
            restartGame() {
                this.currentLevel = 'intro';
                this.totalPoints = 0;
            },
            calculateTotalPoints(points) {
                if (points) {
                    this.totalPoints += points;
                    console.log('Total: ' + this.totalPoints);
                }
            },
        },
        computed: {
            currentTabComponent() {
                return this.currentLevel.toLowerCase();
            },
        },
        components: {
            intro, rules, materials, structures, tools, assignment, detail, elements, node, finish,
        },
        mounted() {
            let elements = document.getElementsByTagName('img');
            Array.from(elements).forEach((item) => {
                item.draggable = false;
            });
        },
    };
</script>

<style lang="scss">
  #app {
  }
</style>
