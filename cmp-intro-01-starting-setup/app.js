const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'Kang',
          name: 'Kang HJ',
          phone: '1234-1235-1234',
          email: 'test@test.com',
        },
        {
          id: 'Hwang',
          name: 'Hwang JW',
          phone: '66-235-1324',
          email: 'study@test.com',
        },
      ],
    };
  },
});

// 컴포넌트 이름은 대시 기호를 포함한 식별자를 사용
app.component('friend-contact', {
  template: `
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">
      {{detailsAreVisible?'Hide':'Show'}} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
    `,

  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'Kang',
        name: 'Kang HJ',
        phone: '1234-1235-1234',
        email: 'test@test.com',
      },
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
