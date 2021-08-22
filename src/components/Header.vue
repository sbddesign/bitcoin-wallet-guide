<template>
  <header class="border-b border-gray lg:text-2xl">
    <div class="container mx-auto flex flex-wrap lg:flex-row items-center justify-items-center justify-center pt-4">
      <div class="flex-auto text-xl font-medium text-black pl-4 pb-4">
        <p class="site-title">Alice</p>
        <router-link to="/">
          <img src="../assets/alice-logo_small.png" alt="Alice logo" class="site-logo" />
        </router-link>
      </div>
      <button class="pr-4 pb-4 font-semibold md:hidden" type="button" @click="showMenu = !showMenu">Menu</button>
      <nav class="flex-grow w-screen md:w-auto border-t md:border-0 border-gray py-4 md:pt-0 pb-4" :data-visible="showMenu">
        <ul class="md:flex md:flex-row md:justify-end md:w-auto">
          <li class="px-4"><router-link to="/about">About</router-link></li>
          <li class="px-4"><router-link to="/wallets">Wallets</router-link></li>
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
    return {
      showMenu: false
    }
  },
  watch:{
    $route (){
      this.showMenu = false;
    }
  }
}
</script>

<style>
.site-title {
  position: absolute;
  left: -999rem;
}

.site-logo {
  width: 100px;
}
@media (max-width: 767px) {
  nav[data-visible="false"] {
    position: absolute;
    left: -999rem;
  }
}


nav[data-visible="true"] {

}

</style>
