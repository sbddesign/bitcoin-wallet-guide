<template>
  <div class="container mx-auto px-4 py-16 lg:p-16 max-w-4xl text-left">
    <h1 class="text-4xl mb-8" v-html="currentQuestion.question"></h1>
    <div v-if="currentQuestion.type === 'radio'">
      <div v-for="option in currentQuestion.options" :key="option.value" class="mb-4 flex flex-row items-start text-2xl">
        <input type="radio" :id="option.value" :value="option.value" v-model="answer" class="mr-2 mt-2">
        <label :for="option.value">{{option.answer}}</label>
      </div>
      <nav class="flex flex-row mt-8">
        <Button v-if="previousQuestionIndex !== null" :to="'/question/' + this.questions[ previousQuestionIndex ].name" class="mx-4">Previous</Button>
        <Button v-if="nextQuestionIndex !== null && nextQuestionIndex !== questions.length" :to="'/question/' + this.questions[ nextQuestionIndex ].name" class="mx-4" @click="answerQuestion">Continue</Button>
        <Button v-if="nextQuestionIndex === questions.length" router="false" class="mx-4" @click="$emit('build-recommendation')">Let's Go!</Button>
      </nav>

    </div>
  </div>
</template>

<script>
import Questions from '../data/questions.json';
import Button from '../components/Button';
import router from '../router';

export default {
  name: 'Question',
  components: {
    Button
  },
  props: {
    questionName: String
  },
  data(){
    return {
      questions: [],
      currentQuestion: {},
      currentQuestionIndex: null,
      previousQuestion: {},
      previousQuestionIndex: null,
      nextQuestion: {},
      nextQuestionIndex: null,
      number: null,
      answer: null
    }
  },
  created(){
    // console.log(this.questionName)
    this.loadQuestion()
  },
  updated() {
    this.loadQuestion()
  },
  methods: {
    reloadQuestion(){
      console.log('relaoding question')
    },
    loadQuestion(){
      console.log(this.questionName)
      this.questions = Questions
      let currentQuestion = this.questions.filter( question => question.name === this.questionName )
      this.currentQuestion = currentQuestion[0]
      let index = this.questions.findIndex( question => question.name === this.questionName )
      this.currentQuestionIndex = index
      this.previousQuestionIndex = this.currentQuestionIndex > 0 ? this.currentQuestionIndex - 1 : null
      this.nextQuestionIndex = this.currentQuestionIndex !== this.questions.length ? this.currentQuestionIndex + 1 : null
    },
    answerQuestion(){
      this.$emit('answer-question', [this.currentQuestionIndex, this.answer])
    },
    buildRecommendation(){
      console.log('yo im gonna build a rec for you')
      router.push('/about')
    }
  }
}
</script>
