<template>
  <div class="container mx-auto max-w-4xl text-left">
    <h1 class="py-4 text-4xl">Bitcoin Wallets</h1>
    <div class="lg:flex lg:flex-row">
      <div
        class="p-8 filters flex flex-column sm:flex-row items-center justify-center flex-wrap bg-gray-light lg:block lg:mr-8"
      >
        <h2 class="text-2xl w-screen flex-grow lg:w-auto mb-4">Filter Wallets</h2>
        <div class="mr-4 mb-4 sm:mb-0">
          <input type="checkbox" id="require_ln" value="require_ln" v-model="filters.require_ln" @change="updateIsChecked" />
          <label for="require_ln" class="ml-2"><font-awesome-icon :icon="iconLN" /> Lightning</label>
        </div>

        <div class="mr-4 mb-4 sm:mb-0">
          <input type="checkbox" id="require_purchase_btc" value="require_purchase_btc" v-model="filters.require_purchase_btc" @change="updateIsChecked" />
          <label for="require_purchase_btc" class="ml-2">Purchase BTC</label>
        </div>

        <div class="mr-4 mb-4 sm:mb-0">
          <input type="checkbox" id="require_non_custodial" value="require_non-require_non_custodial" v-model="filters.require_non_custodial" @change="updateIsChecked" />
          <label for="require_non_custodial" class="ml-2">Non-custodial</label>
        </div>
      </div>
      <div class="wallets">
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
      </div>
    </div>
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
  data(){
    return {
      iconLN: faBolt,
      iconBitcoin: faBitcoin,
      iconNonCustodial: faKey,
      iconPurchase: faMoneyBill,
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

<style>
@media(min-width: 1024px) {
  .filters {
    min-width: 300px !important;
  }
}

</style>
