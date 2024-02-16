import axios from 'axios'

const carts = axios.create({
  baseURL: 'http://localhost:3000/carts',
})

export default {
  createCartItem(cartItem) {
    return carts.post('', cartItem)
  },
  fetchCartItem(id) {
    return carts.get(`${id}`)
  },
  fetchCartItems() {
    return carts.get(``)
  }
}
