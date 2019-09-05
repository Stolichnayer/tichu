var hand_of_player;

function toggleCardLift(scene_id) {

    //get element
    card_elem = document.getElementById(scene_id);

    //remove the word "card" from card_id 
    var array_pos = scene_id.replace('scene','');

    current_card = hand_of_player[0][array_pos - 1];
    

    // CSS animation
    if(!current_card.isLifted()) {
        // lift card        
        //card_elem.style.webkitAnimation = "floatBubble 0.4s normal ease-out";
        
        //card_elem.style.transform = "none";
        card_elem.classList.remove("slide-top-reverse");
        card_elem.classList.add("slide-top");
        
        //card_elem.classList.remove("test");
        //card_elem.style.animationFillMode = "forward";
        //card_elem.style.bottom = "80px";
    }
    else {
        // return card        
        //card_elem.style.webkitAnimation = "floatBubble 0.4s reverse ease-out";
        //card_elem.style.animation = "floatBubble 0.4s reverse ease-out";
        //card_elem.style.transform = "none";
        card_elem.classList.remove("slide-top");
        card_elem.classList.add("slide-top-reverse");
        //card_elem.style.bottom = "10.5px";  
        
    }

    console.log(card_elem);

    

    // Toggle lift of card
    hand_of_player[0][array_pos - 1].toggleLifted();

    toggleCardBrightness();
    
}

function toggleCardBrightness() {

    hand_of_player_elem = document.getElementsByClassName("scene");

    var flag = false;
    var not_lifted_pos = [];
    var lifted_pos = [];

    for(let i in hand_of_player[0]) {
        if(hand_of_player[0][i] == null)
            continue;
        if(hand_of_player[0][i].isLifted()) {
            flag = true;
            lifted_pos.push(i);
        }
        else 
            not_lifted_pos.push(i);
            
    }

    // If none of the cards are lifted, restore brightness to 100%.
    if(!flag) {       
        for(let i = 0; i < 14; i++){
            hand_of_player_elem[i].style.filter = "brightness(100%)";
        }            
        return;
    }
    
    // Darken non-lifted cards
    for(let i in not_lifted_pos) {   //console.log(not_lifted_pos.length);  
        hand_of_player_elem[13 - not_lifted_pos[i]].style.filter = "brightness(60%)"        
    }

    // Brighten lifted cards
    for(let i in lifted_pos) {   //console.log(not_lifted_pos.length);  
        hand_of_player_elem[13 - lifted_pos[i]].style.filter = "brightness(100%)"        
    }

    
}

function initialize() {

    const deck = new Deck();
    console.log("The new deck was created and shuffled successfully.")

    hand_of_player = deck.share();

    console.log("Cards were shared successfully.");

    depictCards(hand_of_player);
    
    for(let i = 1; i <= 14; i++){
        //toggleCardLift("scene" + i);
        //toggleCardLift("scene" + i);
    }

    //document.getElementsByClassName("frame")[0].style.transform = "scale(0.8)";

    flipCards();
}

function depictCards(hand_of_player) {

    var back_cards = document.getElementsByClassName("card__face--back");

    console.log(back_cards);

    for(let i = 1; i <= 14; i++) {

        suit = hand_of_player[0][i - 1].getSuit();
        value = hand_of_player[0][i - 1].getValue();

        path = "images/deck/" + suit + "/" + value + ".png";
        
        css_url = "url(" + path + ")";

        back_cards[14 - i].style.content = css_url;
        
    }
    
}

function flipCards() {
    var card = document.getElementsByClassName("card");

    for(let i = 0; i < 14; i++){
        card[i].classList.add("is-flipped");
    }

    var scenes = document.getElementsByClassName("scene");
    
    setTimeout(function() {
        for(let i = 0; i < 14; i++) {
            scenes[i].style.zIndex = -i;
        }

        }, 200);

}

var shared_trick = [];

function playCards() {

    hand_of_player_elem = document.getElementsByClassName("scene");

    var play_pos = [];


    if(checkHandCombination()) {
        // play cards
        for(let i in hand_of_player[0]) {
            if(hand_of_player[0][i] == null)
                continue;
            if(hand_of_player[0][i].isLifted()) {
                hand_of_player_elem[13 - i].style.display = "none";
                hand_of_player[0][i].toggleLifted();
                toggleCardBrightness();
                play_pos.push(i);
                
            }
        }

        for(let i in play_pos) {
            hand_of_player[0][play_pos[i]] = null;
        }
    }
    else {       
        showWrongCombinationAlert();

    }



    
}

function moveCards() {

    for(let i in hand_of_player[0]) {

    }
}

function checkHandCombination() {

    var counter = 0;
    var position = [];
    for(let i in hand_of_player[0]) {
        console.log(hand_of_player[0]);
        if(hand_of_player[0][i] == null)
            continue;
            
        if(hand_of_player[0][i].isLifted()) {
            counter++;
            position.push(i);
        }
            
        
    }

    console.log(counter);
    switch(counter) {
        case 0:
            return true;
        case 1:
            //Single Card
            return true;
        case 2:
            //Two of a kind
            if(hand_of_player[0][position[0]].getValue() == hand_of_player[0][position[1]].getValue())
                return true; 
            if(hand_of_player[0][position[0]].getSuit() == "Phoenix") {
                if(    hand_of_player[0][position[1]].getSuit() != "Dog"
                    && hand_of_player[0][position[1]].getSuit() != "Dragon"
                    && hand_of_player[0][position[1]].getSuit() != "Mahjong") 
                        return true;                    
                else 
                    return false;
            }

            if(hand_of_player[0][position[1]].getSuit() == "Phoenix") {
                if(    hand_of_player[0][position[0]].getSuit() != "Dog"
                    && hand_of_player[0][position[0]].getSuit() != "Dragon"
                    && hand_of_player[0][position[0]].getSuit() != "Mahjong") 
                        return true;                    
                else 
                   return false;                
            }

   
            break;

        case 3:
            //Three of a kind
            if(hand_of_player[0][position[0]].getValue() == hand_of_player[0][position[1]].getValue()
              && hand_of_player[0][position[0]].getValue() == hand_of_player[0][position[2]].getValue())
                return true;

            //Three of a kind with Phoenix
            if(hand_of_player[0][position[0]].getSuit() == 'Phoenix'){
                if(hand_of_player[0][position[1]].getValue() == hand_of_player[0][position[2]].getValue())
                    return true;
            }
            if(hand_of_player[0][position[1]].getSuit() == 'Phoenix'){
                if(hand_of_player[0][position[0]].getValue() == hand_of_player[0][position[2]].getValue())
                    return true;
            }
            if(hand_of_player[0][position[2]].getSuit() == 'Phoenix'){
                if(hand_of_player[0][position[0]].getValue() == hand_of_player[0][position[1]].getValue())
                    return true;
            }
            
            break;
        case 4:
            var val0 = hand_of_player[0][position[0]].getValue();
            var val1 = hand_of_player[0][position[1]].getValue();
            var val2 = hand_of_player[0][position[2]].getValue();
            var val3 = hand_of_player[0][position[3]].getValue();
            
            //Bomb
            if(val0 == val1 && val0 == val2 && val0 == val3) {                
                return true;
            }
            //Pair
            if(val0 == val1 && val2 == val3 && (val0 - val2 == 1)) 
                return true;            
            break;
     

        default:
            return false;
    }
 
    
    
}

function showWrongCombinationAlert() {
    var alert = document.getElementById("alert");
    

    if(alert.style.display == "none") {
        setTimeout(function(){ alert.style.display = "none"; }, 3000);
        alert.style.display = "block";
    }
        

    
}