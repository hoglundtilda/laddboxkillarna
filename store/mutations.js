export default {
  responseHandler(state, response) {
    console.log(response)

    // if(response === 'refresh') {
    //   state.statusMessage = {}
    // }

    if (response.status !== 200)
      state.statusMessage = { success: false, message: response.error }

    if (response.status === 200)
      state.statusMessage = { success: true, message: response.message }
  },

}
