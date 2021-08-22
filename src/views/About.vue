<template>
  <div class="container py-8 max-w-4xl mx-auto text-left">
    <h1 class="text-4xl mb-4">About Alice</h1>

    <p>
      Alice is a tool for helping you find a bitcoin wallet. Whether you are brand new to bitcoin or an experienced
      bitcoin holder that's looking to learn, Alice can help you find your way around bitcoin wallets.
    </p>

    <h2 class="my-4 text-2xl">Work In Progress</h2>

    <p class="mb-4">
      This project is currently a work-in-progress. Think of this as a proof-of-concept. At this time, it has not been
      vetted by other bitcoiners yet.
    </p>

    <p class="mb-4">
      If you are interested in contributing, check out this
      <a href="https://github.com/sbddesign/bitcoin-wallet-guide" class="text-orange-dark font-bold">project on GitHub</a>
      or join the <a href="http://bitcoindesigners.org/" class="text-orange-dark font-bold">Bitcoin Design slack.</a>
    </p>

    <footer id="bitcoin-design-tag">
      <div>
        <p>
          Made by the<br />
          <strong><a href="https://bitcoin.design">Bitcoin Design Community</a></strong>
        </p>
      </div>
      <img src="../assets/bitcoin-design-community.svg" alt="Bitcoin Design Community logo" title="Bitcoin Design Community" />
    </footer>


  </div>
</template>

<style>
#bitcoin-design-tag {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 2rem;
}

#bitcoin-design-tag img {
  width: 200px;
}

</style>
