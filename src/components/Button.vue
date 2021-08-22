<template>
  <span>
    <router-link v-if="[true,'true'].includes(router)" :to="to" class="inline-block bg-orange-light p-4 md:px-8 font-semibold text-xl md:text-2xl rounded-lg">
      <slot></slot>
    </router-link>
    <button v-if="[false, 'false'].includes(router)" type="button" class="inline-block bg-orange-light p-4 md:px-8 font-semibold text-xl md:text-2xl rounded-lg">
      <slot></slot>
    </button>
  </span>
</template>

<script>
export default {
  name: 'Button',
  props: {
    to: {
      default: '/',
      type: String
    },
    disabled: Boolean,
    router: {
      default: true,
      type: Boolean
    }
  },
  created(){
    console.log(this.router)
  }
}
</script>
