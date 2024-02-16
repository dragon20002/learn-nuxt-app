<template>
  <div>
      <table border="1">
        <thead>
          <th>index</th>
          <th>id</th>
          <th>name</th>
          <th>price</th>
          <th>imageUrl</th>
        </thead>
        <tr
          v-for="(cartItem, index) in $store.state.cartItems"
          :key="cartItem.id"
        >
          <td>{{ index }}</td>
          <td>{{ cartItem.id }}</td>
          <td>{{ cartItem.name }}</td>
          <td>{{ cartItem.price }}</td>
          <td>{{ cartItem.imageUrl }}</td>
        </tr>
      </table>
    </div>
</template>

<script>
import { FETCH_CART_ITEMS } from '@/store';

export default {
  // asyncData({store}) {
    // 여기에선 `this` 사용불가
  //   store.dispatch(FETCH_CART_ITEMS)
  // },
  async fetch() {
    /*
     * Cart의 URL로 바로 진입 시 서버에서 데이터를 내려줌
     * 다른 페이지에서 Cart 페이지로 진입 시 미리 생성된 VueComponent의 데이터를 내려줌
     */
    await this.$store.dispatch(FETCH_CART_ITEMS)
  }
}
</script>

<style lang="scss" scoped>

</style>
