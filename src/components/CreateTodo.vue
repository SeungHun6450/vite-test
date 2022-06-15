<template>
  <input
    :value="title"
    @input="title = $event.target.value" />
  <button @click="createTodo">
    CREATE
  </button>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    createTodo() {
      if (!this.title.trim()) return

      this.$store.dispatch('createTodo', this.title)
    }
  }
}
</script>
