<template>
  <div class="wrapper rules">
    <div class="rules__head">
      <img src="../img/intro_title.png" alt="">
    </div>
    <div class="finish-inner">
      <div class="finish-axes">
        <img
          v-for="a in axeAmount"
          :src="require('@/img/' + 'axe_gold.png')"
          alt=""
          draggable="false">
        <img
          :src="require('@/img/' + 'axe_place.png')"
          v-for="b in (5 - axeAmount)"
          alt="">
      </div>
      <div class="finish-text"
           v-html="computedGradeText">
      </div>
    </div>
    <button class="finish-reboot"
            @click="$emit('restart')"
    >НАЧАТЬ СНАЧАЛА?</button>
    <div class="finish-master"></div>
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
    /* eslint-disable indent */
    export default {
        props: {
            totalPoints: {type: Number},
        },
        data() {
            return {
                axeAmount: 0,
                grades: [
                    {
                        name: 'Ученик',
                        text: `Поздравляем! Вы набрали ${this.totalPoints} баллов.<br>
Вы приняты в плотницкую артель в качестве <span>Ученика</span>.`,
                    },
                    {
                        name: 'Подмастерье',
                        text: `Поздравляем! Вы набрали ${this.totalPoints} баллов.<br>
Вы приняты в плотницкую артель в качестве <span>Подмастерья</span>.`,
                    },
                    {
                        name: 'Плотник',
                        text: `Поздравляем! Вы набрали ${this.totalPoints} баллов.<br>
В плотницкой артели вам доверят выполнение важных работ.<br>
Вы — настоящий <span>Плотник</span>.`,
                    },
                    {
                        name: 'Мастер',
                        text: `Поздравляем! Вы набрали ${this.totalPoints} баллов.<br>
Без вас не начнется строительство.<br>Вы — <span>Мастер</span>.`,
                    },
                    {
                        name: 'Зодчий',
                        text: `Поздравляем! Вы набрали ${this.totalPoints} баллов.<br>
Плотницкая артель доверяет вашим знаниям.<br>Вы — <span>Зодчий</span>.`,
                    },
                ],
            };
        },
        methods: {
            getGrade() {
                switch (true) {
                    case this.totalPoints < 11:
                        this.axeAmount = 1;
                        return this.grades[0];
                    case this.totalPoints < 25:
                        this.axeAmount = 2;
                        return this.grades[1];
                    case this.totalPoints < 40:
                        this.axeAmount = 3;
                        return this.grades[2];
                    case this.totalPoints < 49:
                        this.axeAmount = 4;
                        return this.grades[3];
                    case this.totalPoints === 49:
                        this.axeAmount = 5;
                        return this.grades[4];
                }
            },
        },
        computed: {
            computedGrade() {
                return this.getGrade();
            },
            computedGradeText() {
                return this.computedGrade.text;
            },
        },
        mounted() {
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
