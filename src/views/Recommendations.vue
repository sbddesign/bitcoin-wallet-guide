<template>
  <div class="recommendations">
    <div class="wallets">
      <div class="wallet" v-for="wallet in wallets" v-bind:key="wallet.name">
        <h2>{{wallet.title}}</h2>
        <p>{{wallet.description}}</p>
        <p>Non-Custodial = {{!wallet.custodial}}</p>
        <p>Lightning = {{wallet.lightning}}</p>
        <p>Bitcoin Purchases = {{wallet.purchase_btc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Wallets from '../data/wallets.json'

export default {
  name: 'Wallets',
  props: {
    recommendedData: String,
  },
  data(){
    return {
      recommendedWallets: [],
      wallets: [],
    }
  },
  created() {
    let data;

    // Parse the recommendation data
    try{
      if(this.recommendedData.substr(0, 1) === "{") {
        data = this.recommendedData
      }
      else {
        data = atob(this.recommendedData)
      }
    }
    catch(e) {
      console.log('Invalid Base64 data in URI.')
    }

    try {
      data = JSON.parse(data)
      this.recommendedWallets = data.recommendedWallets
    }
    catch(e) {
      console.log('Invalid JSON for recommendation data.')
    }
  },
  mounted(){
    this.loadWalletJSON()
  },
  methods: {
    loadWalletJSON(){
      this.wallets = Wallets
      let filtered_wallets = this.wallets
      filtered_wallets = filtered_wallets.filter(wallet => this.recommendedWallets.includes(wallet.name))
      this.wallets = filtered_wallets
    },
  }
}
</script>
