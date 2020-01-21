const socket = io();


socket.on('play_cards', (data)=> {

    // remove other player played cards
    //var otherPlayerCards = document.getElementsByClassName("otherPlayerCard");
    
    //for(let i = 0; i < otherPlayerCards.length; i++){        
        //otherPlayerCards[i].remove();
       // played_cards[i].classList.add("fade-out");
    //}
    

    // Remove other player cards currently in the middle of board
    let inDiv = document.getElementsByClassName("inDiv");    
    inDiv[0].innerHTML = "";

    let left_value;
    let save_cards = [];
    for(let i = 0; i < data.length; i++){
        left_value = (-45 * i);
        left_value += (22.5 * (data.length -1));
        let imgCard = document.createElement("IMG");
        save_cards.push(imgCard);
        imgCard.src = "images/deck/" + data[i].suit + "/" + data[i].value  +  ".png";
          
        imgCard.classList.add("otherPlayerCard");
        imgCard.style.left = left_value + "px";
        imgCard.style.width = "88px";
        inDiv[0].appendChild(imgCard);
        
    }



    setTimeout(()=> {  
        
    }, 1000); 


});