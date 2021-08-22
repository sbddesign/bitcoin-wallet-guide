<template>
  <header class="border-b border-gray-400 text-2xl">
    <div class="container mx-auto flex items-center py-4 px-4">
      <div class="flex-auto text-xl font-medium text-black">
        <p class="site-title">Alice</p>
        <img src="../assets/alice-logo_small.png" alt="Alice logo" />
      </div>
      <nav>
        <ul class="flex flex-row">
          <li class="px-4"><router-link to="/">Home</router-link></li>
          <li class="px-4"><router-link to="/about">About</router-link></li>
          <li class="px-4"><router-link to="/wallets">Wallets</router-link></li>
          <li class="px-4"><router-link :to="recommendedTestLink">Recommendations</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    recommendedTestLink: String
  },
  data(){

  }
}
</script>

<style>
.site-title {
  position: absolute;
  left: -999rem;
}
</style>
