export default {
  async contactEmail({ commit }, email) {
    console.log(email)
    await this.$axios
      .post(`${this.$axios.defaults.baseURL}/email/contact`, { email })
      .then((response) => {
        commit('responseHandler', response.data)
      })
      .catch((error) => {
        commit('responseHandler', error.response)
      })
  },

  async orderEmail({ commit }, order) {
    console.log(order)

    await this.$axios
      .post(`${this.$axios.defaults.baseURL}/email/order`, { order })
      .then((response) => {
        commit('responseHandler', response.data)
      })
      .catch((error) => {
        commit('responseHandler', error.response)
      })
   
  },
}
