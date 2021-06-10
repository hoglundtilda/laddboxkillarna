export default {
  async contactEmail({ commit }, email) {
    await this.$axios
      .post(`${this.$axios.defaults.baseURL}/email/contact`, email)
      .then((response) => {
        console.log(response)
        commit('responseHandler', response.data)
      })
      .catch((error) => {
        if (error) {
          commit('responseHandler', error.response.data.error)
        }
      })
  },

  async orderEmail({ commit }, order) {
    await this.$axios
      .post(`${this.$axios.defaults.baseURL}/email/order`, order)
      .then((response) => {
        commit('responseHandler', response.data)
      })
      .catch((error) => {
        commit('responseHandler', error.response.data.error)
      })
  },
}
