<template>
  {{ hun }}
  <button @click="increase">
    Increase
  </button>
</template>

<script>
export default {
  computed: {
    hun() {
      // 플러그인 객체
      return this.$store.state.count
    }
  },
  methods: {
    increase() {
      // this.hun += 1
      // 1. mutation에 있는 increase를 호출
      // this.$store.commit('increase')

      // 2. actions에 있는 increase를 호출
      this.$store.dispatch('increase')
      
    }
  }



  // 1. plugin
  // data() {
  //   return {
  //     hun: ''
  //   }
  // },
  // created() {
  //   console.log(this.$hun())
  // }
}
</script>
