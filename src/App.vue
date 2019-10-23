<template>
  <div id="app">
    <component
      @next-level="toNextLevel"
      @calculate-points="calculateTotalPoints"
      :is="currentTabComponent"
      :method="parentMethod"
      :level="currentLevel">
    </component>

  </div>
</template>

<script>
    /* eslint-disable indent */

    import intro from './components/intro.vue';
    import rules from './components/rules.vue';
    import materials from './components/materials.vue';
    import structures from './components/structures.vue';

    export default {
        data() {
            return {
                currentLevel: 'materials',
                levels: ['intro', 'rules', 'materials', 'structures'],
                totalPoints: 0,
            };
        },
        methods: {
            toNextLevel(levelName) {
                this.currentLevel = levelName;
            },
            calculateTotalPoints(points) {
                if (points) {
                    this.totalPoints += points;
                    console.log('Total: ' + this.totalPoints);
                }
            },
            parentMethod() {
                this.currentLevel = 'materials';
                console.log(this.currentLevel);
            },
        },
        computed: {
            currentTabComponent() {
                // console.log(this.currentLevel);
                return this.currentLevel.toLowerCase();
            },
        },
        components: {
            intro, rules, materials, structures,
        },
        mounted() {
            /*document.querySelectorAll('img').addEventListener('dragstart', (event) => {
               event.preventDefault();
            });*/
        },
    };
</script>

<style lang="scss">
  #app {
  }
</style>
