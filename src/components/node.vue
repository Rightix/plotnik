<template>
  <div class="wrapper node">
    <div class="level-header node-header">
      <div class="level__counter">7.</div>
      <div class="level__title node__title">
        Узлы
      </div>
    </div>
    <div class="node-area dropArea">
      <div v-for="(task, index) in tasks"
           :key="index"
           :class="task"
           class="node-dropzone-wrapper">
        <div class="node-dropzone__img">
          <img :src="require('@/img/' + `node_${index}.png`)" alt="">
        </div>
        <div class="node-dropzone dropzone"
             :data-compare="task">
          <div class="queryMark">?</div>
        </div>
        <div key="enter" class="dropzone__caption"></div>
      </div>
    </div>
    <div class="node-answers dropzone draggable-dropzone--occupied dragArea">
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
        Сопоставьте названия бревенчатых узлов и их изображения
      </div>
      <div class="task-block__caption">
        Перетащите мышью кнопки элементов в соответствующие слоты на картинках
      </div>
    </div>
    <transition name="fade"
                :duration="400">
      <div class="finished-wrapper"
           v-if="levelFinished">
        <div class="finished__caption">Отлично!</div>
        <button @click="$emit('next-level', 'finish')"
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
                tasks: ['arbor', 'hook', 'kurdyuk', 'paw', 'pan', 'ohryap', 'ohlop', 'tooth'],
                answers: [
                    {name: 'arbor', caption: 'Обло', hasPoint: true},
                    {name: 'hook', caption: 'Крюк', hasPoint: true},
                    {name: 'kurdyuk', caption: 'Курдюк', hasPoint: true},
                    {name: 'paw', caption: 'Лапа', hasPoint: true},
                    {name: 'pan', caption: 'Сковородень', hasPoint: true},
                    {name: 'ohryap', caption: 'Охряп', hasPoint: true},
                    {name: 'ohlop', caption: 'Охлоп', hasPoint: true},
                    {name: 'tooth', caption: 'Голландский зуб', hasPoint: true},
                ],
            };
        },
    };
</script>
