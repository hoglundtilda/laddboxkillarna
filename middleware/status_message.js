export default function ({ store }) {
  console.log(store.state.statusMessage)

  store.state.statusMessage = {}
}
