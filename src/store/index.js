import { createStore } from 'vuex'
import axios from 'axios'

const END_POINT = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos'
const headers = {
  'Content-Type': 'application/json',
  apikey: 'FcKdtJs202204',
  username: 'KDT2_ByeonSeungHun'
}

export default createStore({
   state() {
    return {
      todos: []
    }
  },
  mutations: {
    setTodos(state, payload) {
      state.todos = payload
    }
  },
  actions: {
    async readTodos({ commit }) {
      const res = await axios({
        url: END_POINT,
        method: 'GET',
        headers
      })
      console.log(res)
      commit('setTodos', res.data)
    },
    async createTodo(context, title) {
      await axios({
        url: END_POINT,
        method: 'POST',
        headers,
        data: {
          title
        }
      })
    }
  }








  // state() { // data
  //   return {
  //     count: 0
  //   }
  // },
  // getters: {  // computed
  //   double(state) {
  //     return state.count * 2
  //   }
  // },
  // mutations: {
  //   // mutations은 수정 권한을 준다.
  //   increase(state) {
  //     state.count += 1
  //   }
  // },
  // actions: {  // 메소드
  //   // increase(context) {
  //     // const { state, getters, commit, dispatch } = context
  //     // const { commit } = context
  //   increase({commit}) {
  //     commit('increase')
  //   }
  // }
})
