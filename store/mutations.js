export default {
  responseHandler(state, response) {
    console.log({mutation: response})

    if (response.success === false)
      state.statusMessage = {
        success: false,
        status: response.status,
        message: response.message,
      }

    if (response.success === true)
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
