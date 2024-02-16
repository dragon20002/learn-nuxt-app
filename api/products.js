import axios from 'axios'

const products = axios.create({
  baseURL: 'http://localhost:3000/products',
})

export default {
  fetchProducts() {
    return products.get(``)
  },

  fetchProductById(id) {
    return products.get(`/${id}`)
  },

  fetchProductsByKeyword(keyword) {
    return products.get(``, {
      params: {
        name_like: keyword,
      },
    })
  },
}
