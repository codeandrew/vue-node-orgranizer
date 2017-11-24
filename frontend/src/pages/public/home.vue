<template lang="html">
  <main class="home">
    <div class="wrapper">
      <h1>Project Organizer</h1>
      <div class="input-logs">
        <form @submit="onSubmit" method="post">
          <input type="email" v-model="user.email" name="email" value="" placeholder="Email">
          <input type="password" v-model="user.password" name="password" value="" placeholder="Password">
          <input type="submit" value="login">
        </form>
      </div>
    </div>

  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods :{
    ...mapActions(['login', 'verifyAuthentication']),
    onSubmit(evt){
      evt.preventDefault()
      this.login(this.user)
      // this.$router.push('project')
    }
  }
}

</script>

<style lang="css">
</style>
