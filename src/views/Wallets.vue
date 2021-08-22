<template>
  <div class="about">
    <h1>Wallets</h1>
    <div class="filters">
      <label>Lightning</label>
      <input type="checkbox" value="require_ln" v-model="filters.require_ln" @change="updateIsChecked" />

      <label>Purchase BTC</label>
      <input type="checkbox" value="require_purchase_btc" v-model="filters.require_purchase_btc" @change="updateIsChecked" />

      <label>Non-custodial</label>
      <input type="checkbox" value="require_non-require_non_custodial" v-model="filters.require_non_custodial" @change="updateIsChecked" />
    </div>
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
  data(){
    return {
      filters: {
        require_ln: false,
        require_purchase_btc: false,
        require_non_custodial: false
      },
      wallets: [],
    }
  },
  mounted(){
    this.loadWalletJSON()
  },
  methods: {
    loadWalletJSON(){
      this.wallets = Wallets
      let filtered_wallets = this.wallets
      if(this.filters.require_ln === true) filtered_wallets = filtered_wallets.filter( wallet => wallet.lightning === true )
      if(this.filters.require_purchase_btc === true) filtered_wallets = filtered_wallets.filter( wallet => wallet.purchase_btc === true )
      if(this.filters.require_non_custodial === true) filtered_wallets = filtered_wallets.filter( wallet => wallet.custodial === false )

      this.wallets = filtered_wallets
    },
    updateIsChecked(e){
      this.filters[ e.target.name ] = e.target.checked
      this.loadWalletJSON()
    }
  }
}
</script>
