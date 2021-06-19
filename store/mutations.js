export default {
  responseHandler(state, response) {
    console.log(response)
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

      
  },

  refreshStatusMessage(state) {
    state.statusMessage = {}
  },
}
