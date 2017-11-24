<template lang="html">
  <div class="log-col item item-1">
    <h2> Log Task </h2>
    <div class="">
      <input v-model="task"
      @change="addNewTask"
      type="text"
      name="task"
      placeholder="add task">
    </div>

    <ul v-if="loggedTask" class="logged-task">
      <li v-for="item in loggedTask"> {{ item }} </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      task : '',
      loggedTask : []
    }
  },
  computed : {
    // ...mapState(['loggedTask'])
  },
  methods : {
      // ...mapActions(['addNewTask'])
      addNewTask(){
        this.loggedTask.push(this.task)
        this.task = ''
      }
  }
}
</script>

<style lang="css">
</style>
