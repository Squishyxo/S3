const app = Vue.createApp({
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        increment(value) {
            return this.counter = this.counter + value;
        },
        decrement(value) {
            return this.counter = this.counter - value;
        }
    },
    // This watch function resets the counter when getting to 37
    // watch: {
    //     result() {
    //             const that = this;
    //             setTimeout(function() {
    //                 that.counter = 0;
    //             }, 5000)
    //     }
    // },
    computed: {
        result() {
            if (this.counter < 37) {
                return 'you need more';
            } else if (this.counter === 37) {
                return this.counter;
            } else {
                return 'too much';
            }
        }
    }
});
app.mount('#assignment');