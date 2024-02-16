<template>
  <div>
    <header>
      <h1>APP 타이틀</h1>
      <!-- router-link -->
      <NuxtLink to="/">홈페이지</NuxtLink>
      <NuxtLink to="/main">메인페이지</NuxtLink>
    </header>
    <!-- router-view -->
    <Nuxt />
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$route)
  },
}
</script>
