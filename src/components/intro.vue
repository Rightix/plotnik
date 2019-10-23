<template>
  <div class="wrapper intro">
    <div class="intro__title">
      <img src="../img/intro_title.png" alt />
    </div>
    <div class="intro__message">
      Ответь правильно на десять вопросов плотника Петра и получи награду!
    </div>
    <div class="materials-correct">

    </div>
    <div class="intro-buttons">
      <button @click="$emit('next-level', 'rules')" class="dashed levelControl rules">
        Правила
      </button>
      <button @click="$emit('next-level', 'materials')" class="dashed levelControl startButton">
        Начать
      </button>
    </div>

    <footer class="intro-footer">
      <div class="intro-footer__logo">
        <img src="../svg/intro_kizhi.svg" alt="">
      </div>
      <div class="intro-footer__copyright">
        © 2019 Государственный историко-архитектурный и этнографический музей-заповедник «Кижи»
      </div>
      <div class="intro-footer__interso">
        © 2019 Разработка и поддержка ООО «Интэрсо»
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  props: {
    newFunc: Function,
    level: String,
    method: { type: Function },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
