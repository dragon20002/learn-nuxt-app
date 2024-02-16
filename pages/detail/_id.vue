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
  head() {
    // 메타정보를 동적으로 보여주려면 head 대신 head() 함수형으로 작성한다
    return {
      title: `Shooping Item - ${this.product.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `이 상품은 ${this.product.name} 입니다`,
        },
      ],
    }
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
