<template>
  <div class="py-8 md:py-32 lg:px-32">
    <img
        alt="Illustration Alice"
        src="../assets/alice-logo_extra-large-with-tagline.svg"
        title="Alice, your guide to bitcoin wallets"
        class="mx-auto mb-16 w-screen md:hidden block"
    >
    <img
        alt="Illustration Alice"
        src="../assets/alice-logo_large-with-tagline.svg"
        title="Alice, your guide to bitcoin wallets"
        class="mx-auto mb-16 w-screen hidden md:block"
    >
    <Button
      to="/question/how-familiar-are-you-with-bitcoin"
    >
      Get Started
    </Button>
  </div>
</template>

<script>
import Button from '../components/Button';

export default {
  name: 'Home',
  components: {
    Button
  }
}
</script>
