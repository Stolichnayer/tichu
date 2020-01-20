class Deck {    
    constructor() {
        //Deck Array
        this.deck = [];
        this.reset();  
        this.shuffle(); 
    }

    reset() {
        //Creating 52 simple cards and push them into array
        const suits = ['Stars', 'Jade', 'Swords', 'Pagodas'];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
        
        for(let suit in suits) {
            for(let value in values) {
                //Card object
                let card = new Card(suits[suit], values[value]);
                
                this.deck.push(card);
                
            }
        }
        //Creating the 4 special cards and push them into array
        this.deck.push(new Card('Dog', 0));
        this.deck.push(new Card('Phoenix', 0.5));
        this.deck.push(new Card('Mahjong', 1));
        this.deck.push(new Card('Dragon', 15));

    }

    shuffle() {
        //Fisher-Yates algorithm for a non-biased shuffle
        const deck = this.deck;
        let m = deck.length, i;
      
        while (m) {
          i = Math.floor(Math.random() * m--);
      
          [deck[m], deck[i]] = [deck[i], deck[m]];
        }
      
        return this;
      }

    deal() {
        return this.deck.pop();
      }

    share() {
        var hand_of_player = [];
        //Deck / 4
        hand_of_player[0] = this.deck.slice(0, 14);
        hand_of_player[1] = this.deck.slice(14, 28);
        hand_of_player[2] = this.deck.slice(28, 42);
        hand_of_player[3] = this.deck.slice(42, 56);

        //Sort hand
        hand_of_player[0].sort((a, b) => (a.num_value < b.num_value) ? 1 : -1);

        return hand_of_player;
    }
}