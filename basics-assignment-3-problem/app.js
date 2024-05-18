const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  computed: {
    resultMessage() {
      if (this.counter === 37) return 'You made 37!';
      else if (this.counter > 37) return 'Too much!';
      else return 'Not there yet!';
    },
  },

  watch: {
    counter(value) {
      if (value > 37) {
        setTimeout(() => {
          this.counter = 0;
        }, 5000);
      }
    },
  },

  methods: {
    add(num) {
      this.counter += num;
    },
  },
});

app.mount('#assignment');
