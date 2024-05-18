const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      userInput2: '',
    };
  },
  methods: {
    showAlert() {
      alert('Show Alert!');
    },
    saveInput(event) {
      this.userInput = event.target.value;
    },
    saveInput2() {
      this.userInput2 = this.userInput;
    },
  },
});

app.mount('#assignment');
