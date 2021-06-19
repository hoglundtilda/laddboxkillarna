export default {
  responseHandler(state, response) {
    console.log({mutation: response})

    if (response.status !== 200)
      state.statusMessage = {
        success: false,
        status: response.status,
        message: response.message,
      }

    if (response.status === 200)
      state.statusMessage = {
        success: true,
        status: response.status,
        message: response.message,
      }

      console.log(state.statusMessage)

      
  },

  refreshStatusMessage(state) {
    state.statusMessage = {}
  },
}
