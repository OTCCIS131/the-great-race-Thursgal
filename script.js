var vue = new Vue({
    el: "#app",
    data: {
        racing: false
    },
    methods: {
        startRace() {
            this.racing = true;
            
        }
    },
    computed: {
        buttonImage() {
            return this.racing ? "moveFlask.png" : "startFlask.png";
        }
    }
})