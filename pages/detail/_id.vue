<template>
  <div>
    <!-- <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          /> -->
    <p>{{ product.name }}</p>
    <span>{{ product.price }}</span>
    <div>
      <button type="button" @click="addToCart">카트에 담기</button>
    </div>
    <!-- <NuxtLink></NuxtLink> 사용해도 됨! -->
  </div>
</template>

<script>
import productsApi from '@/api/products'
import cartsApi from '@/api/carts'

export default {
  async asyncData({ params }) {
    const response = await productsApi.fetchProductById(params.id)
    const product = response.data
    return { product }
  },
  methods: {
    addToCart() {
      cartsApi.createCartItem(this.product)
      this.$router.push('/cart')
    },
  },
}
</script>

<style lang="scss" scoped></style>
