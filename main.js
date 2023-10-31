const app = Vue.createApp({
    data() {
        return {
            display: "",
        };
    },
    methods: {
        appendToDisplay(value) {
            this.display += value;
        },
        calculate() {
            try {
                this.display = eval(this.display);
            } catch (error) {
                this.display = 'Error';
            }
        },
        clearDisplay() {
            this.display = '';
        },
    },
});

app.mount('#app');


