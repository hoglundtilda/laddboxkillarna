import axios from "axios";

export default {
    async contactEmail({ commit }, email) {
      console.log(email)
      const response = await this.$axios
        .post(`/email/contact`, {email})
        .then((response) => {
          console.log(response)})
        .catch((error) => {
          console.log(error)
        })
      //console.log(response)
      //commit('TEST', products)
    },
}