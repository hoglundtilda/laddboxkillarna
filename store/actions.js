export default {
    async contactEmail({ commit }, email) {
      console.log(email)
      const response = await this.$axios
        .$post(`localhost:8000/email/contact`, {email})
        .then((response) => response.data)
        .catch((error) => {
          console.log(error)
        })
      console.log(response)
      //commit('TEST', products)
    },
}