export default {
  async contactEmail({ commit }, email) {
    console.log(email)
    await this.$axios
      .post(`${this.$axios.defaults.baseURL}/email/contact`, { email })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  async orderEmail({ commit }, order) {
    console.log(order)

    await this.$axios
      .post(`${this.$axios.defaults.baseURL}/email/order`, { order })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    console.log(response)
  },
}
