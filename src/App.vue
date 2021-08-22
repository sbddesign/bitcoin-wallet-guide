<template>
  <Header :recommended-test-link="recommendedTestLink" />
  <div class="container mx-auto px-4">
    <router-view v-on:answer-question="answerQuestion" v-on:build-recommendation="buildRecommendation" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Header from './components/Header';
import Questions from './data/questions.json';
import router from './router';

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return {
      recommendedTestLink: "",
      recommendedTestBase: "/wallets/recommendations/",
      recommendedTestData: {
        recommendedWallets: ['wallet1', 'wallet3']
      },
      questions: [],
      currentQuestion: 0,
      previousQuestion: null,
      nextQuestion: null,
      answers: []
    }
  },
  created(){
    let testData = JSON.stringify(this.recommendedTestData)
    testData = btoa(testData)
    this.recommendedTestLink = this.recommendedTestBase + testData

    this.loadQuestions()
  },
  methods: {
    loadQuestions(){
      this.questions = Questions
      this.previousQuestion = this.currentQuestion > 0 ? this.currentQuestion - 1 : null
      this.nextQuestion = this.currentQuestion !== (this.questions.length - 1) ? this.currentQuestion + 1 : null
    },
    answerQuestion(data){
      this.answers[ data[0] ] = data[1]
    },
    buildRecommendation(){
      // The logic for constructing a recommendation would go here
      // For now, using a preset list of wallets for demo purposes
      router.push(this.recommendedTestLink)
    }
  }
}
</script>
