<template>
  <div class="wrapper structures">
    <div class="level-header structures-header">
      <div class="level__counter">2.</div>
      <div class="level__title structures__title">
        Виды деревянных строений
      </div>
    </div>
    <div class="structures-area dropArea">
      <div v-for="(task, index) in tasks"
           :key="index"
           :class="task"
           class="structures-dropzone-wrapper">
        <div class="structures-dropzone__img">
          <img :src="require('@/img/' + `structures_${index}.png`)" alt="">
        </div>
        <div class="structures-dropzone dropzone"
             :data-compare="task"
        >
          <div class="queryMark">
            ?
          </div>
        </div>
        <div key="enter" class="dropzone__caption"></div>
      </div>
    </div>
    <div class="structures-answers dropzone draggable-dropzone--occupied dragArea">
      <div v-for="answer in answers"
           :key="answer.name"
           :class="[answer.name]"
           :data-compare="answer.name"
           :hasPoint="answer.hasPoint"
           class="answer isDraggable">
        <div>
          <div class="answer__name">
            {{ answer.caption }}
          </div>
        </div>
      </div>
    </div>
    <div class="task-block">
      <div class="task-block__title">
        Сопоставьте название строения и его рисунок
      </div>
      <div class="task-block__caption">
        Перетащите мышью кнопку на соответствующую картинку здания
      </div>
    </div>
    <transition name="fade"
                :duration="400">
      <button v-if="levelFinished"
              @click="$emit('next-level', 'structures')"
              class="levelControl next-level">
        продолжить
      </button>
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
                :explanation="'name'"
                :answerOffset="[-12, 20]"
                @level-finished="levelFinished = $event"
                @calculate-points="$emit('calculate-points', $event)"
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
                tasks: ['house', 'mill', 'church', 'barn', 'bathhouse', 'well', 'forge', 'riga'],
                answers: [
                    {name: 'bathhouse', caption: 'Баня', hasPoint: true},
                    {name: 'house', caption: 'Дом', hasPoint: true},
                    {name: 'riga', caption: 'Рига', hasPoint: true},
                    {name: 'barn', caption: 'Амбар', hasPoint: true},
                    {name: 'well', caption: 'Колодец', hasPoint: true},
                    {name: 'forge', caption: 'Кузница', hasPoint: true},
                    {name: 'mill', caption: 'Мельница', hasPoint: true},
                    {name: 'church', caption: 'Церковь', hasPoint: true},
                ],
            };
        },
        methods: {
            level(event) {
                console.log(event)
            }
        },
    };
</script>
