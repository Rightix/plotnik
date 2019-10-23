<template>
  <div class="wrapper rules">
    <div class="rules__head">
      <img src="../img/intro_title.png" alt="">
    </div>
    <div class="rules-inner">
      <div class="rules-text">
        <p>Дорогой друг!</p>
        <p>Основами плотницкого дела на Русском Севере владел каждый крестьянин, но шедевры
          деревянного зодчества
          создавались настоящими профессионалами — плотниками. Предлагаем тебе проверить, достаточно
          ли твоих знаний,
          чтобы стать полноправным участником плотницкой артели!
        </p>
        <p>Игра содержит семь разделов с заданиями. За каждое задание, выполненное правильно с
          первой попытки,
          начисляется один балл. Максимальное количество баллов, которое можно заработать за игру, —
          49. Соответственно
          количеству баллов будет присвоено звание, с которым ты мог бы начать работать в плотницкой
          артели: ученик,
          подмастерье, плотник, мастер, зодчий.</p>
        <p>Удачи!</p>
        <button @click="$emit('next-level', 'materials')"
                class="levelControl rules-button startButton">
          Начать
        </button>
      </div>
      <div class="rules-master">
        <img src="../img/master.png" alt="">
      </div>
    </div>
    <footer class="footer footer--rules">
      <div class="footer__copyright">
        © 2019 Государственный историко-архитектурный и этнографический музей-заповедник «Кижи»
      </div>
      <div class="footer__logo">
        <img src="../img/kizhi_logo.png" alt="">
      </div>
    </footer>
  </div>
</template>
<script>
    export default {
        props: {
            newFunc: Function,
            level: String,
            method: {type: Function},
        },
        data() {
            return {
                test: 'test'
            }
        },
        methods: {},
        mounted() {
            // Use the parent function directly here
            // this.method();
        },
        // data: function () {
        //   return {
        //     counter: 0,
        //   }
        // },

        // data: function () {
        //   return {
        //     message: 'Test string',
        //   };
        // },

    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
