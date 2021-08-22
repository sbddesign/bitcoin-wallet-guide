<template>
  <router-link :to="to" class="inline-block bg-orange-light p-8 font-semibold text-2xl">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'Button',
  props: {
    to: String
  }
}
</script>
