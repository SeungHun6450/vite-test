import { createApp } from 'vue'
import App from './App.vue'
// import hun from './plugins/hun'
// index.js는 생략이 가능하다.
import store from './store'

createApp(App)
  // .use(hun)
  .use(store)
  .mount('#app')
