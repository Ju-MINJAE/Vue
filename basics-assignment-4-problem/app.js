const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      inputClass: '',
      isParagraphVisible: true,
      bgColor: '',
    };
  },

  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        visible: this.isParagraphVisible,
        hidden: !this.isParagraphVisible,
      };
    },
  },

  methods: {
    toggleParagraph() {
      this.isParagraphVisible = !this.isParagraphVisible;
    },
  },
});

app.mount('#assignment');
