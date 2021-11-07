export default {
  responseHandler(state, response) {

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


      
  },

  refreshStatusMessage(state) {
    state.statusMessage = {}
  },
}
