export default {
  responseHandler(state, response) {

    if(response === 'refresh') state.statusMessage = {}

    if (response.status !== 200)
      state.statusMessage = { success: false, message: response.data }

    if (response.status === 200)
      state.statusMessage = { success: true, message: response.data }
  },

}
