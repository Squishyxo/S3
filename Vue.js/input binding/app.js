const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            isVisible: true,
            urColor: ''
        };
    },
    methods: {
        toggle() {
            this.isVisible = !this.isVisible;
        }
    },
    computed: {
        textClasses() {
            return {
                style1: this.userInput === 'style1',
                style2: this.userInput === 'style2',
                visible: this.isVisible,
                hidden: !this.isVisible,
            }
        },
        chosenColor() {
            return {
                backgroundColor: this.urColor
            }
        }
    }
});
app.mount('#assignment');