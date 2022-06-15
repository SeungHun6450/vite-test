export default {
  install(app) {
    app.config.globalProperties.$hun = (msg = 'Hun') => {
      return `Hello ${msg}~~`
    }
  }
}
