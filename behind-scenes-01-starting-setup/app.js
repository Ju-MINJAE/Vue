const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },

  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },

  beforeCreate() {
    // 인스턴스가 생성되고 가장 처음으로 실행되는 life cycle
    // data와 methods 속성이 정의되지 않음
    console.log('beforeCreate()');
  },
  created() {
    // 이 단계에서 data 속성과 methods 속성이 정의
    // 화면 요소에 인스턴스가 부착되기 전이기 때문에 template 속성에 정의된 돔 요소에 접근하는 코드를 구현 할 수 없음.
    console.log('created()');
  },
  beforeMount() {
    // render() 함수가 호출되기 직전의 단계
    console.log('beforeMount()');
  },
  mounted() {
    // 화면 요소에 인스턴스가 부착되고 난 후 호출되는 단계
    // template 속성에 정의한 화면 요소에 접근 할 수 있음
    console.log('mounted()');
  },
  beforeUpdate() {
    // 인스턴스가 부착되고 난 후에 인스턴스 속성들이 화면에 치환. 치환된 값을 $watch 속성으로 데이터 관찰
    // 데이터들이 변경되면 가상 돔을 이용해 화면을 다시 그림. 이 때, 그리기 직전 호출되는 단계
    console.log('beforeUpdated()');
  },
  updated() {
    // 데이터가 변경되고 화면 요소를 제어하는 것을 구현하는 단계
    console.log('updated()');
  },
  beforeUnmount() {
    // template 태그가 실행된 후 실행, template과 렌더 함수들이 컴파일된 후에 첫 렌더링 일어나기 직전에 실행
    console.log('beforeUnmount()');
  },
  unmounted() {
    // template과 렌더링 된 돔에 접근할 수 있는 단계
    console.log('unmounted');
  },
});

app.mount('#app');
setTimeout(() => {
  app.unmount();
}, 300);

const app2 = Vue.createApp({
  template: `
  <p>{{ favoriteMeal }}</p>`,

  data() {
    return {
      favoriteMeal: 'Pizza',
    };
  },
});

app2.mount('#app2');
