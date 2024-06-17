<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="changesSaved">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },

  beforeRouteEnter(to, from, next) {
    console.log('UserList Cmp beforeRouterEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UserList cmp beforeRouteLeave');
    console.log(to, from);

    if (this.changesSaved) next();
    else {
      const userWantsToLeave = confirm(
        'Are you sure? You got unsaved changes!'
      );
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log('unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
