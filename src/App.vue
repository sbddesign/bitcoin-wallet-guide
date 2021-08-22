<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/wallets">Wallets</router-link> |
    <router-link :to="recommendedTestLink">Recommendations</router-link>
  </div>
  <router-view/>
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
export default {
  name: 'Wallets',
  data(){
    return {
      recommendedTestLink: "",
      recommendedTestBase: "/wallets/recommendations/",
      recommendedTestData: {
        recommendedWallets: ['wallet1', 'wallet3']
      }
    }
  },
  created(){
    let testData = JSON.stringify(this.recommendedTestData)
    testData = btoa(testData)
    this.recommendedTestLink = this.recommendedTestBase + testData
  }
}
</script>
