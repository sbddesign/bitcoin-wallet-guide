<template>
  <div class="container mx-auto max-w-4xl text-left">
    <h1 class="py-4 text-4xl">Wallet Recommendations</h1>
    <div
        class="wallet py-8 border-b border-gray text-left"
        v-for="wallet in wallets"
        v-bind:key="wallet.name"
    >
      <h3 class="text-2xl my-4">{{wallet.title}}</h3>
      <p>{{wallet.description}}</p>
      <h4 class="my-4 text-xl">Features</h4>
      <p><font-awesome-icon :icon="iconBitcoin" class="mr-2" /> Bitcoin</p>
      <p v-if="!wallet.custodial"><font-awesome-icon :icon="iconNonCustodial" class="mr-2" /> Non-Custodial</p>
      <p v-if="!wallet.lightning"><font-awesome-icon :icon="iconLN" class="mr-2" />  Instant Lightning Payments</p>
      <p v-if="!wallet.purchase_btc"><font-awesome-icon :icon="iconPurchase" class="mr-2" /> Bitcoin Purchases</p>
    </div>

    <h3 class="text-xl mt-8 mb-4">Share These Recommendations</h3>
    <input type="text" readonly :value="shareLink" class="w-1/2 border border-gray p-4 rounded-lg" />
  </div>
</template>

<script>
import Wallets from '../data/wallets.json'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Wallets',
  components: {
    FontAwesomeIcon
  },
  props: {
    recommendedData: String,
  },
  data(){
    return {
      iconLN: faBolt,
      iconBitcoin: faBitcoin,
      iconNonCustodial: faKey,
      iconPurchase: faMoneyBill,
      recommendedWallets: [],
      wallets: [],
      shareLink: window.location.href
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
    console.log(window.location)
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
