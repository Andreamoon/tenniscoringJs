console.clear();


this.player1 = {
    player: "player1",
    points: 0,
};
this.player2 = {
    player: "player2",
    points: 0,
};

this.deuce = false;
this.winner = null;

let tennisScoring = (player) => {

    switch (player) {
        /**=======================
         *      PLAYER1
         *========================*/
        case "player1":
            if (this.player1.points === 0) {
                this.player1.points = 15;
            } else if (this.player1.points === 15) {
                this.player1.points = 30;
            } else if (this.player1.points === 30) {
                this.player1.points = 40;
            } else if (this.player1.points === 40) {
                this.player1.points = 41
                    // console.log(this.player1.points)
            } else if (this.player1.points === 41) {
                this.player1.points = 42
                    // console.log(this.player1.points)
            }
            break;
            /**=======================
             *        PLAYER2
             *========================*/
        case "player2":
            if (this.player2.points === 0) {
                this.player2.points = 15;
            } else if (this.player2.points === 15) {
                this.player2.points = 30;
            } else if (this.player2.points === 30) {
                this.player2.points = 40;
            } else if (this.player2.points === 40) {
                this.player2.points = 41
            } else if (this.player2.points === 41) {
                this.player2.points = 42
                    // console.log(this.player1.points)
            }
            break;
    }

    /**CASO SEMPLICE */
    if (this.player2.points == 41 && this.player1.points != 40) {
        this.winner = this.player2.player
    } else if (this.player1.points == 41 && this.player2.points != 40) {
        this.winner = this.player1.player

    }
    /**CASO DI DEUCE */
    if (this.player2.points === 40 && this.player1.points === 40) {
        this.deuce = true
    }

    if (this.deuce && this.player1.points === 42) {
        this.winner = this.player1.player
    } else if (this.deuce && this.player2.points === 42) {
        this.winner = this.player2.player
    }

    let obj = {
        player1: this.player1.points >= 40 ? 40 : this.player1.points,
        player2: this.player2.points >= 40 ? 40 : this.player2.points,
        deuce: this.deuce,
        winner: this.winner
    };

    console.log(obj);
}

/**CASO SEMPLICE */

tennisScoring('player1') // => { player1: 15, player2: 0, deuce:false, winner: null }
tennisScoring('player2') //=> { player1: 15, player2: 15 deuce:false, winner: null }
tennisScoring('player2') //=> { player1: 15, player2: 30 deuce:false, winner: null }
tennisScoring('player2') //=> { player1: 15, player2: 40 deuce:false, winner: null }
tennisScoring('player2') //=> { player1: 15, player2: 40 deuce:false, winner: 'player2'}

/** END CASO SEMPLICE */

/**CASO DI DEUCE 

tennisScoring("player1"); //=> { player1: 15, player2: 0, deuce:false, winner: null }
tennisScoring("player2"); //=> { player1: 15, player2: 15 deuce:false, winner: null }
tennisScoring("player2"); //=> { player1: 15, player2: 30 deuce:false, winner: null }
tennisScoring("player2"); //=> { player1: 15, player2: 40 deuce:false, winner: null }
tennisScoring("player1"); //=> { player1: 30, player2: 40 deuce:false, winner: null }
tennisScoring("player1"); //=> { player1: 40, player2: 40 deuce:true, winner: null  }
tennisScoring("player1"); //=> { player1: 40, player2: 40 deuce:true, winner: null  }
tennisScoring("player1"); //=> { player1: 40, player2: 40, deuce: true, winner: 'player1'}

/** END CASO DI DEUCE */