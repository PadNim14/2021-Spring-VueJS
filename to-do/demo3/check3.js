// const range = new Vue({
//     el: '#range',
//     data: {
//         message: 'Set a range here',
//         num: '',
//     },
//     // methods: {
//     //     set_range: function(num){
//     //         this.num =  num;
//     //     }
//     // }
// })
const app = new Vue({
    el: '#app',
    data: {
        message: "Welcome to my RNG!",
        range_mess: 'Set a range here',
        rng: '',
        num: '',
        toggle: true,
    },
    methods: {
        // set_range: function(num) {
        //     this.num = num;
        // },
        set_toggle: function() {
            // this.toggle = !this.toggle;
            this.rng = parseInt(Math.random() * this.num) + 1;
        },
    },
    computed: {
        // otherToggle: function() {
        //     return this.rng;
        // }
    }
});
