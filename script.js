var vue = new Vue({
    el: "#app",
    data: {
        racing: false,
        winner: 0,
        p1Move : 0,
        p2Move : 0,
        interval: null,
        moving: true,
        awesomeDude: 0
    },
    methods: {
        startRace() {
            this.awesomeDude = 0;
            this.racing = true;
            this.moving = true;
            this.p1Move = 0;
            this.p2Move = 0;
            this.interval = setInterval(this.move, 200);
        } ,
        move() {
            this.checkWinner();
            if (this.moving) {
                this.p1Move += Math.floor(Math.random() * 10);
                this.p2Move += Math.floor(Math.random() * 10);
            }
        } ,
        checkWinner() {
            if (this.p1Move == this.p2Move) return;
            else if (this.p1Move >= 85 && this.p1Move > this.p2Move) {
                clearInterval(this.interval);
                this.player1Win();
                this.moving = false;
            }
            else if (this.p2Move >= 85 && this.p2Move > this.p1Move) {
                clearInterval(this.interval);
                this.player2Win();
                this.moving = false;
            }
        } ,
        player1Win() {
            this.awesomeDude = 1;
            this.racing = false;
            alert("Player 1 wins!");
        } ,
        player2Win() {
            this.awesomeDude = 2;
            this.racing = false;
            alert("Player 2 wins!");
        }
    },
    computed: {
        buttonImage() {
            return this.racing ? "moveFlask.png" : "startFlask.png";
        } ,
        winnerImage() {
            if (this.awesomeDude == 1)
                return "player1.png";
            else if (this.awesomeDude == 2)
                return "player2.png";
        },
        player1Position() {
            return {
                left: this.p1Move + "vw",
                height: "200px",
                width: "200px"
            }
        } ,
        player2Position() {
            return {
                left: this.p2Move + "vw",
                height: "200px",
                width: "200px"
            }
        }
    }
})