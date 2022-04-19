const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    incrementByOne(){
      return this.counter++;
    },
    decrementByOne(){
      return this.counter--;
    },
    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');
