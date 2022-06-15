<template>
  <ul>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :title="todo.title" />
  </ul>
</template>

<script>
import TodoItem from '~/components/TodoItem.vue'

export default {
  components: {
    TodoItem
  },
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
  created() {
    this.readTodos()
  },
  methods: {
    readTodos() {
      this.$store.dispatch('readTodos')
    }
  }
}
</script>
