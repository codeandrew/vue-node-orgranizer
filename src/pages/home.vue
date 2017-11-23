<template lang="html">
  <main class="home">
    <div class="wrapper">
      <h1>Project Organizer</h1>
      <div class="input-logs">
        <form @submit="onSubmit" method="post">
          <input type="text" name="username" value="" placeholder="username">
          <input type="password" name="password" value="" placeholder="password">
          <input type="submit" value="login">
        </form>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  methods :{
    onSubmit(evt){
      evt.preventDefault()
      this.$router.push('project')
    }
  }
}

</script>

<style lang="css">
</style>
