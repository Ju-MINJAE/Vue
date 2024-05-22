const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      tasks: [],
      showList: true,
    };
  },
  methods: {
    addTask() {
      if (this.enteredTask.trim() !== '') {
        this.tasks.push(this.enteredTask);
        this.enteredTask = '';
      }
    },
    toggleList() {
      this.showList = !this.showList;
    },
  },
});

app.mount('#assignment');
