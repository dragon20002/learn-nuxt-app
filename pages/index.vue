<template>
  <div class="app">
    <main>
      <SearchInput
        :search-keyword="searchKeyword"
        @inputEvt="searchKeyword = $event"
        @search="searchProducts"
      />
      <!-- @input="updateSearchKeyword"
        v-model="searchKeyword" -->
      <div>
        <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
      </div>

      <ul>
        <li
          v-for="product in products"
          :key="product.id"
          class="item flex"
          style="background-color: antiquewhite"
          @click="moveToDetailPage(product.id)"
        >
          <!-- <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          /> -->
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue'
import productsApi from '@/api/products'

export default {
  components: { SearchInput },
  async asyncData() {
    const response = await productsApi.fetchProducts()
    const products = response.data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }))
    return { products }
  },

  data() {
    return {
      searchKeyword: '',
    }
  },

  methods: {
    moveToDetailPage(id) {
      this.$router.push(`detail/${id}`)
    },
    async searchProducts() {
      const response = await productsApi.fetchProductsByKeyword(this.searchKeyword)
      this.products = response.data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }))
    },
    moveToCartPage() {
      this.$router.push('/cart')
    },
  },
}
</script>
