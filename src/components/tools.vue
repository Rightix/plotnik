<template>
  <div class="wrapper tools">
    <div class="level-header tools-header">
      <div class="level__counter">3.</div>
      <div class="level__title tools__title">
        НАЗВАНИЯ ИНСТРУМЕНТОВ
      </div>
    </div>
    <div class="tools-area dropArea">
      <div v-for="(task, index) in tasks"
           :key="index"
           :class="task"
           class="tools-dropzone-wrapper">
        <div class="tools-dropzone__img">
          <img :src="require('@/img/' + `tools_${index}.png`)" alt="">
        </div>
        <div class="tools-dropzone dropzone"
             :data-compare="task"
        >
          <div class="queryMark">
            ?
          </div>
        </div>
        <div key="enter" class="dropzone__caption"></div>
      </div>
    </div>
    <div class="tools-answers dropzone draggable-dropzone--occupied dragArea">
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
        Сопоставьте название инструмента и его изображение
      </div>
      <div class="task-block__caption">
        Перетащите мышью каждое из названий на картинку соответствующего инструмента
      </div>
    </div>
    <transition name="fade"
                :duration="400">
      <div class="finished-wrapper"
           v-if="levelFinished">
        <div class="finished__caption">Отлично!</div>
        <button @click="$emit('next-level', 'structures')"
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
                tasks: ['saw', 'drill', 'adze', 'staple', 'planer', 'axe', 'chisel'],
                answers: [
                    {name: 'saw', caption: 'Пила', hasPoint: true},
                    {name: 'drill', caption: 'Сверло', hasPoint: true},
                    {name: 'adze', caption: 'Тесло', hasPoint: true},
                    {name: 'staple', caption: 'Скобель', hasPoint: true},
                    {name: 'planer', caption: 'Рубанок', hasPoint: true},
                    {name: 'axe', caption: 'Топор', hasPoint: true},
                    {name: 'chisel', caption: 'Долото', hasPoint: true},
                ],
            };
        },
        methods: {

        },
    };
</script>
