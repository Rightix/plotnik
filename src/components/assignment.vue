<template>
  <div class="wrapper assignment">
    <div class="level-header assignment-header">
      <div class="level__counter">4.</div>
      <div class="level__title assignment__title">
        НАЗНАЧЕНИЕ ИНСТРУМЕНТОВ
      </div>
    </div>
    <div class="assignment-area dropArea">
      <div v-for="(task, index) in tasks"
           :key="index"
           :class="task"
           class="assignment-dropzone-wrapper">
        <transition name="fade"
                    :duration="400">
          <div
            v-if="isActiveAnswer(index)">
            <div class="assignment-dropzone__img">
              <img class="dropzone__start"
                   :src="require('@/img/' + `assign_${index}.png`)" alt="">
              <img class="dropzone__finished"
                   :src="require('@/img/' + `assign_${index}_active.png`)" alt="">
            </div>
            <div class="assignment__text"
                 v-html="assignmentText[index]">
            </div>
            <div class="assignment-dropzone dropzone"
                 :data-compare="task">
              <div class="queryMark">?</div>
            </div>
            <div key="enter" class="dropzone__caption"></div>
          </div>
        </transition>
      </div>
    </div>
    <div class="assignment-answers dropzone draggable-dropzone--occupied dragArea">
      <div v-for="(answer, index) in answers"
           :key="answer.name"
           :class="[answer.name]"
           :data-compare="answer.name"
           :hasPoint="answer.hasPoint"
           class="answer isDraggable">
        <div>
          <img class="common" :src="require('@/img/' + `a_tool_${index}.png`)" alt="">
          <img class="active" :src="require('@/img/' + `a_tool_${index}_active.png`)" alt="">
          <div class="answer__name">
            {{ answer.caption }}
          </div>
        </div>
      </div>
    </div>
    <div class="task-block">
      <div class="task-block__title">
        Выберите подходящий инструмент и вложите в руки мастеру
      </div>
      <div class="task-block__caption">
        Перетащите мышью правильное изображение инструмента в руки мастеру
      </div>
    </div>
    <div class="assignment__next">
      <button @click="nextAssignment"
              v-show="answerGuessed"
              class="levelControl next-level">
        следующий
      </button>
    </div>
    <transition name="fade"
                :duration="400">
      <div class="finished-wrapper"
           v-if="levelFinished">
        <div class="finished__caption">Отлично!</div>
        <button @click="$emit('next-level', 'detail')"
                class="levelControl next-level">
          продолжить
        </button>
      </div>
    </transition>
    <footer class="footer">
      <div class="footer__logo">
        <img src="../img/kizhi_logo.png" alt="">
      </div>
      <div class="footer__copyright">
        © 2019 Государственный историко-архитектурный и этнографический музей-заповедник «Кижи»
      </div>
    </footer>
    <level-core :tasks="tasks"
                :answers="answers"
                :explanation="'assignment'"
                :answerOffset="[0, 0]"
                @level-finished="onLevelFinished"
                @calculate-points="$emit('calculate-points', $event)"
                @assignment-guessed="handleGuessed"
    ></level-core>
  </div>
</template>

<script>
    /* eslint-disable indent */

    import levelCore from './level-сore.vue';

    export default {
        components: {
            levelCore,
        },
        data() {
            return {
                levelPoints: 0,
                levelFinished: false,
                currentAnswer: 0,
                answerGuessed: false,
                tasks: ['adze', 'saw', 'planer', 'chisel', 'drill', 'staple', 'axe'],
                answers: [
                    {name: 'saw', caption: 'Пила', hasPoint: true},
                    {name: 'drill', caption: 'Сверло', hasPoint: true},
                    {name: 'axe', caption: 'Топор', hasPoint: true},
                    {name: 'adze', caption: 'Тесло', hasPoint: true},
                    {name: 'planer', caption: 'Рубанок', hasPoint: true},
                    {name: 'staple', caption: 'Скобель', hasPoint: true},
                    {name: 'chisel', caption: 'Долото', hasPoint: true},
                ],
                assignmentText: [
                    'Мастер<br>выдалбливает теслом<br>продольный паз в брусе',
                    'Мастера распиливают бревно двуручной пилой',
                    'Мастер строгает<br>доску рубанком',
                    'Мастер вырубает<br> отверстие в бревне<br>долотом',
                    'Мастер сверлит<br> отверстие в бревне',
                    'Мастер удаляет кору<br> с бревна с помощью скобеля',
                    'Мастер отесывает<br> бревно топором',
                ],
            };
        },
        methods: {
            isActiveAnswer(taskIndex) {
                return this.currentAnswer === taskIndex;
            },
            nextAssignment() {
                this.currentAnswer += 1;
                this.answerGuessed = !this.answerGuessed;
            },
            handleGuessed() {
                this.answerGuessed = true;
            },
            onLevelFinished(event) {
                this.levelFinished = event;
                this.answerGuessed = false;
            },
        },
    };
</script>
