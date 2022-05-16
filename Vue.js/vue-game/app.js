const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            round: 0,
            winner: null,
            logMessages: []
        };
    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <=0){
                //draw
                return this.winner = 'Draw';
            }
            else if(value <= 0){
                //player lost
                return this.winner = 'Monster';
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <=0){
                //draw
                return this.winner = 'Draw';
            }
            else if(value <= 0){
                //monster lost
                return this.winner = 'Player';
            }
        }
        
    },
    computed: {
        monsterBarStyles(){
            if(this.monsterHealth < 0){
                return {width: '0%'}
            }
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles(){
            if(this.playerHealth < 0){
                return {width: '0%'}
            }
            return {width: this.playerHealth + '%'}
        },
        mayUseSpecialAttack(){
            return this.round % 3 !== 0;
        }
    },
    methods:{
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.round = 0;
            this.logMessages = [];
        },
        attackMonster(){
            const attackValue = randomNumber(5, 12)
            this.monsterHealth -= attackValue;
            this.addLogMessages('Player', 'Attack', attackValue);
            this.attackPlayer();
            this.round++
        },
        attackPlayer(){
            const attackValue = randomNumber(8, 15)
            this.playerHealth -= attackValue;
            this.addLogMessages('Monster', 'Attack', attackValue);
        },
        specialMonster(){
            const attackValue = randomNumber(10, 25)
            this.monsterHealth -= attackValue;
            this.addLogMessages('Player', 'Special Attack', attackValue);
            this.attackPlayer();
            this.round++
        },
        healPlayer(){
            this.round++    
            const amountOfHeal = randomNumber(8, 20) + 8;
            if(this.playerHealth + amountOfHeal > 100){
                this.playerHealth = 100;
            }else{
            this.playerHealth += amountOfHeal;
            }
            this.addLogMessages('Player', 'Heal', amountOfHeal);
            this.attackPlayer();
        },
        surrender(){
            this.winner = 'Monster';
        },
        addLogMessages(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    }
});
app.mount('#game');