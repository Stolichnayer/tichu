//2
function isPair(position) {

    if (hand_of_player[0][position[0]].getValue() == hand_of_player[0][position[1]].getValue())
        return true;
    if (hand_of_player[0][position[0]].getSuit() == "Phoenix") {
        if (hand_of_player[0][position[1]].getSuit() != "Dog"
            && hand_of_player[0][position[1]].getSuit() != "Dragon"
            && hand_of_player[0][position[1]].getSuit() != "Mahjong")
            return true;
        else
            return false;
    }

    if (hand_of_player[0][position[1]].getSuit() == "Phoenix") {
        if (hand_of_player[0][position[0]].getSuit() != "Dog"
            && hand_of_player[0][position[0]].getSuit() != "Dragon"
            && hand_of_player[0][position[0]].getSuit() != "Mahjong")
            return true;
        else
            return false;
    }
}
//3
function isTriple(position) {

    //Triple
    if (hand_of_player[0][position[0]].getValue() == hand_of_player[0][position[1]].getValue()
        && hand_of_player[0][position[0]].getValue() == hand_of_player[0][position[2]].getValue())
        return true;

    //Triple with Phoenix
    if (hand_of_player[0][position[0]].getSuit() == 'Phoenix') {
        if (hand_of_player[0][position[1]].getValue() == hand_of_player[0][position[2]].getValue())
            return true;
    }
    if (hand_of_player[0][position[1]].getSuit() == 'Phoenix') {
        if (hand_of_player[0][position[0]].getValue() == hand_of_player[0][position[2]].getValue())
            return true;
    }
    if (hand_of_player[0][position[2]].getSuit() == 'Phoenix') {
        if (hand_of_player[0][position[0]].getValue() == hand_of_player[0][position[1]].getValue())
            return true;
    }
}
//4
function isBomb(position) {

    var val0 = hand_of_player[0][position[0]].getNumValue();
    var val1 = hand_of_player[0][position[1]].getNumValue();
    var val2 = hand_of_player[0][position[2]].getNumValue();
    var val3 = hand_of_player[0][position[3]].getNumValue();

    if (val0 == val1 && val0 == val2 && val0 == val3)
        return true;
    return false;
}

function isDoublePair(position) {

    var val0 = hand_of_player[0][position[0]].getNumValue();
    var val1 = hand_of_player[0][position[1]].getNumValue();
    var val2 = hand_of_player[0][position[2]].getNumValue();
    var val3 = hand_of_player[0][position[3]].getNumValue();

    //There is Phoenix               
    if (val3 == 0.5) {
        //Phoenix can't replace Mahjong
        if (val2 == 1)
            return false;
        if (((val0 == val1) && (val1 - val2) == 1) || ((val1 == val2) && (val0 - val1) == 1))
            return true;
        return false;
    }
    //There is not Phoenix
    else {
        if (val0 == val1 && val2 == val3 && (val1 - val2 == 1))
            return true;
        return false;
    }

}
//5
function isFullHouse(position) {

    var val0 = hand_of_player[0][position[0]].getNumValue();
    var val1 = hand_of_player[0][position[1]].getNumValue();
    var val2 = hand_of_player[0][position[2]].getNumValue();
    var val3 = hand_of_player[0][position[3]].getNumValue();
    var val4 = hand_of_player[0][position[4]].getNumValue();
    
    
    //There is no Phoenix
    if (val4 != 0.5) {
        //XXX-YY
        if (val0 == val1 && val0 == val2 && val3 == val4)
            return true;
        //YY-XXX
        if (val0 == val1 && val2 == val3 && val2 == val4)
            return true;
    }
    //There is Phoenix
    else {
        //XXXX-P Case of Bomb with Phoenix (!)
        if(val0 == val1 && val0 == val2 && val0 == val3)
            return false;
        //XX-YY-P , YY-XX-P
        if (val0 == val1 && val2 == val3)
            return true;
        //XXX-Y-P
        // if Y = Mahjong, false
        if (val3 == 1)
            return false;
        if (val0 == val1 && val0 == val2)
            return true;
        //X-YYY-P
        if (val1 == val2 && val1 == val3)
            return true;
    }

    return false;
}
// >= 5
function isStraight(position) {

    //If there is Dragon, false
    if (hand_of_player[0][position[0]].getSuit() == "Dragon")
        return false;
    //If there is Dog, false
    if (hand_of_player[0][position[position.length - 1]].getSuit() == "Dog")
        return false;

    //There is Phoenix
    if (hand_of_player[0][position[position.length - 1]].getSuit() == "Phoenix") {
        let counter = 0;
        for (let i = 0; i < position.length - 2; i++) {
            diff = hand_of_player[0][position[i]].getNumValue() - hand_of_player[0][position[i + 1]].getNumValue();
            if (diff > 2 || diff == 0)
                return false;
            if (diff == 2)
                counter++;
        }
        console.log(counter);
        if (counter < 2)
            return true;
        return false;
    }
    //There is not Phoenix
    else {
        let flag = false;
        for (let i = 0; i < position.length - 1; i++) {
            if (hand_of_player[0][position[i]].getNumValue() - hand_of_player[0][position[i + 1]].getNumValue() != 1)
                flag = true;
        }
        console.log(flag);
        return !flag;
    }
}

function isStraightBomb(position) {
    if (!isStraight(position))
        return false;

    var first_suit = hand_of_player[0][position[0]].getSuit();
    for (let i = 1; i < position.length; i++) {
        if (first_suit != hand_of_player[0][position[i]].getSuit())
            return false;
    }
    console.log("Straight Bomb");
    return true;
}

function isRunOfPairs(position) {
    //if number of lifted cards is not even
    if (position.length % 2 != 0)
        return false;    
    //If there is Dragon, false
    if (hand_of_player[0][position[0]].getSuit() == "Dragon")
        return false;
    //If there is Dog, false
    if (hand_of_player[0][position[position.length - 1]].getSuit() == "Dog")
        return false;
    //If there is Majong, false
    if (hand_of_player[0][position[position.length - 1]].getSuit() == "Mahjong")
        return false;
    if (hand_of_player[0][position[position.length - 2]].getSuit() == "Mahjong")
        return false;
    if (hand_of_player[0][position[position.length - 3]].getSuit() == "Mahjong")
        return false;


    //There is Phoenix
    if (hand_of_player[0][position[position.length - 1]].getSuit() == "Phoenix") {
        
    }
    //There is not Phoenix
    else {
        var left_card = [];
        var right_card = [];

        for(let i in position){
            if(i % 2 == 0)
                left_card.push(hand_of_player[0][position[i]].getNumValue());
            else
                right_card.push(hand_of_player[0][position[i]].getNumValue());
        }

        for(let i in left_card){
            if(left_card[i] != right_card[i])
                return false;
        }

        for(let i = 0; i < left_card.length - 1; i++){
            if(left_card[i] - left_card[i + 1] != 1)
                return false;

        }
        return true;

    }
    
}
