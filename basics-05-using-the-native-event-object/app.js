const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: '',
    };
  },
  // 감시자(watch)
  // 데이터를 감시, 데이터가 변경 될 때, 정의된 함수를 실행
  // 비동기식이나 시간이 많이 소요되는 작업에 유용
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    //   name(value) {
    //     if (value === '') this.fullname = '';
    //     else this.fullname = value + ' ' + this.lastNmae;
    //   },
    //   lastName(value) {
    //     if (value === '') this.fullname = '';
    //     else this.fullname = this.name + ' ' + value;
    //   },
  },

  // 연산(computed) 프로퍼티
  // 가독성과 재사용성을 향상, 데이터의 변화를 감지하고 자동으로 연산
  computed: {
    fullname() {
      console.log('Run again...');
      if (this.name === '' || this.lastName === '') return '';
      return this.name + ' ' + this.lastName;
    },
  },

  methods: {
    outputFullname() {
      console.log('Run again...');
      if (this.name === '') return '';
      return this.name + ' ' + 'Ju';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    },
  },
});

app.mount('#events');

// Methods - 템플릿에서 데이터를 바인딩할 때
// Computed - 다른 데이터를 기반으로 하는 데이터를 가져올 떄
// Watch - 바뀌는 데이터를 토대로 데이터가 아닌 내부에서 업데이트하는 작업이 있을 때
