
export default {
    async contactEmail({ commit }, email) {
      console.log(email)
       await this.$axios
        .post(`${this.$axios.defaults.baseURL}/email/contact`, {email})
        .then((response) => {
          console.log(response)})
        .catch((error) => {
          console.log(error)
        })
    },

    async orderEmail({ commit }, ) {
      const order = {
        firstName: "Matilda",
        lastName: "Höglund",
        adress: "Lundbygatan 5",
        postNr: "418 76",
        ort: "Göteborg",
        email: "hoglund.matilda@gmail.com",
        phoneNr: "0707707864",
        information: "Ring helst på eftermiddagen, sover till 12. Ha de gött haj!",
        color: "Cloud White",
        consultation: true,
        charging_cable: false,
        contract_terms: true,
      }

      console.log(order)

       await this.$axios
        .post(`${this.$axios.defaults.baseURL}/email/order`, {order})
        .then((response) => {
          console.log(response)})
        .catch((error) => {
          console.log(error)
        })
      //console.log(response)
      //commit('TEST', products)
    },
}