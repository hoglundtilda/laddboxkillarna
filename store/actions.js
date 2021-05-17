export default {
    async contactEmail({ commit }, email) {
      console.log(email)
      const response = await this.$axios
        .$post(`/api/email/contact`, {email})
        .then((response) => {
          console.log(response.data)})
        .catch((error) => {
          console.log(error)
        })
      console.log(response)
      //commit('TEST', products)
    },
}