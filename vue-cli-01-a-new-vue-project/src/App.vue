<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: 'Kang',
          name: 'Kane HJ',
          phone: '010-1234-1234',
          email: 'vue@study.com',
        },
        {
          id: 'Hwang',
          name: 'Hwang JW',
          phone: '010-5666-6666',
          email: 'u@study.com',
        },
      ],
    };
  },
};
</script>
