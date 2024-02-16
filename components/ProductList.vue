<template>
  <div>{{ products }}</div>
</template>

<script>
import axios from 'axios'

export default {
  components: {},
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    console.log(response) // ProductList 화면에서만 console.log 가능함!
    const products = response.data
    return { products }
  },
  data() {
    return {
      products: [],
    }
  },
}
</script>

<style lang="scss" scoped></style>
