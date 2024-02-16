<template>
  <div>
    <Logo />
    <h1>메인 페이지</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
import Logo from '@/components/NuxtLogo.vue'

export default {
  components: {
    Logo,
    ProductList,
  },

  async created() {},
}
</script>
