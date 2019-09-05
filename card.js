class Card { 

    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
        this.lifted = false;
        
        //Set card's numeric value
        switch(value) {                         
            case 'Jack':
                this.num_value = 11;
                break;
            case 'Queen':
                this.num_value = 12;
                break;
            case 'King':
                this.num_value = 13;
                break;
            case 'Ace':
                this.num_value = 14;
                break;
            default:
                this.num_value = value;
        }

        //Set card's points
        switch(value) {
            case 0.5:
                this.points = -25;
                break;
            case 5:
                this.points = 5;
                break;
            case 10:
                this.points = 10;
                break;
            case 'King':
                this.points = 10;
                break;
            case 15:
                this.points = 25;
                break;
            default:
                this.points = 0;            
        }



        
    }

    getSuit() {
        return this.suit;
    }
    
    getValue() {
        return this.value;
    }

    getNumValue(){
        return this.num_value;
    }

    isLifted() {
        return this.lifted;
    }

    toggleLifted(){
        this.lifted = !this.lifted;
    }
}