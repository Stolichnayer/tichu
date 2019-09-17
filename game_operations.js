function toggleCardLift(scene_id) {

    console.log("toggle");


    //get element
    card_elem = document.getElementById(scene_id);

    //remove the word "card" from card_id 
    var array_pos = scene_id.replace('scene', '');

    current_card = hand_of_player[0][array_pos - 1];


    // CSS animation
    if (!current_card.isLifted()) {
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

    //console.log(card_elem);



    // Toggle lift of card
    hand_of_player[0][array_pos - 1].toggleLifted();

    toggleCardBrightness();

}

function toggleCardBrightness() {

    hand_of_player_elem = document.getElementsByClassName("scene");

    var flag = false;
    var not_lifted_pos = [];
    var lifted_pos = [];

    for (let i in hand_of_player[0]) {
        if (hand_of_player[0][i] == null)
            continue;
        if (hand_of_player[0][i].isLifted()) {
            flag = true;
            lifted_pos.push(i);
        }
        else
            not_lifted_pos.push(i);

    }

    // If none of the cards are lifted, restore brightness to 100%.
    if (!flag) {
        for (let i = 0; i < 14; i++) {
            hand_of_player_elem[i].style.filter = "brightness(100%)";
        }
        return;
    }

    // Darken non-lifted cards
    for (let i in not_lifted_pos) {   //console.log(not_lifted_pos.length);  
        hand_of_player_elem[13 - not_lifted_pos[i]].style.filter = "brightness(60%)"
    }

    // Brighten lifted cards
    for (let i in lifted_pos) {   //console.log(not_lifted_pos.length);  
        hand_of_player_elem[13 - lifted_pos[i]].style.filter = "brightness(100%)"
    }


}

function initialize() {

    const deck = new Deck();
    console.log("The new deck was created and shuffled successfully.")

    hand_of_player = deck.share();

    console.log("Cards were shared successfully.");

    depictCards(hand_of_player);

    for (let i = 1; i <= 14; i++) {
        //toggleCardLift("scene" + i);
        //toggleCardLift("scene" + i);
    }

    //document.getElementsByClassName("frame")[0].style.transform = "scale(0.8)";

    flipCards();
}

function depictCards(hand_of_player) {

    var back_cards = document.getElementsByClassName("card__face--back");

    console.log(back_cards);

    for (let i = 1; i <= 14; i++) {

        suit = hand_of_player[0][i - 1].getSuit();
        value = hand_of_player[0][i - 1].getValue();

        path = "images/deck/" + suit + "/" + value + ".png";

        css_url = "url(" + path + ")";

        back_cards[14 - i].style.content = css_url;

    }

}

function flipCards() {
    var card = document.getElementsByClassName("card");

    for (let i = 0; i < 14; i++) {
        card[i].classList.add("is-flipped");
    }

    var scenes = document.getElementsByClassName("scene");

    setTimeout(function () {
        for (let i = 0; i < 14; i++) {
            scenes[i].style.zIndex = -i;
        }

    }, 200);

}

function playCards() {

    hand_of_player_elem = document.getElementsByClassName("scene");

    var play_pos = [];


    if (checkHandCombination()) {
        // play cards
        for (let i in hand_of_player[0]) {
            if (hand_of_player[0][i] == null)
                continue;
            if (hand_of_player[0][i].isLifted()) {
                hand_of_player_elem[13 - i].style.display = "none";
                hand_of_player[0][i].toggleLifted();
                toggleCardBrightness();
                play_pos.push(i);

            }
        }

        for (let i in play_pos) {
            hand_of_player[0][play_pos[i]] = null;
        }
    }
    else {
        showWrongCombinationAlert();

    }




}

function moveCards() {

    for (let i in hand_of_player[0]) {

    }
}

function checkHandCombination() {

    var counter = 0;
    var position = [];
    for (let i in hand_of_player[0]) {
        //console.log(hand_of_player[0]);
        if (hand_of_player[0][i] == null)
            continue;

        if (hand_of_player[0][i].isLifted()) {
            counter++;
            position.push(i);
        }
    }

    switch (counter) {
        case 0:
            return true;
        case 1:
            //Single Card
            return true;
        case 2:
            //Pair
            if (isPair(position))
                return true;
            return false;
        case 3:
            //Triple
            if (isTriple(position))
                return true;
            return false;
        case 4:
            //Double Pair
            if (isBomb(position))
                return true;

            if (isDoublePair(position))
                return true;

            return false;
        case 5:
            //Straight Bomb
            if (isStraightBomb(position))
                return true;

            //Straight
            if (isStraight(position))
                return true;

            //Full House
            if (isFullHouse(position))
                return true;

            return false;

        default:
            //Straight Bomb
            if (isStraightBomb(position))
                return true;

            //Straight
            if (isStraight(position))
                return true;

            //Run of pairs
            if (isRunOfPairs(position))
                return true;

    }




}

function showWrongCombinationAlert() {
    var alert = document.getElementById("alert");


    if (alert.style.display == "none") {
        setTimeout(function () { alert.style.display = "none"; }, 3000);
        alert.style.display = "block";
    }
}

