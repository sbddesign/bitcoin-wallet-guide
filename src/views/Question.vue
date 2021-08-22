<template>
  <div class="container mx-auto p-8 lg:p-16">
    <h1 class="text-4xl mb-4" v-html="currentQuestion.question"></h1>
    <div v-if="currentQuestion.type === 'radio'">
      <div v-for="option in currentQuestion.options" :key="option.value" class="mb-4 flex flex-row items-start text-left">
        <input type="radio" :id="option.value" :value="option.value" v-model="answer" class="mr-2 mt-1">
        <label :for="option.value">{{option.answer}}</label>
      </div>
      <Button :to="'/question/' + currentQuestion.next">Continue</Button>

    </div>
  </div>
</template>

<script>
import Questions from '../data/questions.json';
import Button from '../components/Button';

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
    }
  }
}
</script>
