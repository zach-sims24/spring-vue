<template>
  <div>
    <h1>Howdy y'all!!!</h1>
    <div v-if="users != null">
      <p v-for="user in users">{{ user.first_name }}</p>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ExamplePage",
  computed: {
    ...mapState({
      users: (state) => state.user.users,
    }),
  },
  async created() {
    await this.$store.dispatch('user/retrieveUsers');
  }
}
</script>

<style scoped>

</style>