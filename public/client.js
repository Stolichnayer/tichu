const socket = io();


socket.on('play_cards', (data)=> {
    //console.log(data)
    // Make played cards invisible

    var played_cards = document.getElementsByClassName("played_cards");
    
    for(let i = 0; i < played_cards.length; i++){        
        played_cards[i].style.display = "none";
        //played_cards[i].classList.add("fade-out");
    }
    
    let inDiv = document.getElementsByClassName("inDiv");    
    inDiv[0].innerHTML = "";
;
    //outDiv.className = "played_cards";

    
    //inDiv.style = "display: none;";

    let left_value;
    let save_cards = [];
    for(let i = 0; i < data.length; i++){
        //let left = 302.5 + (45 * i);
        left_value = (-45 * i);
        left_value += (22.5 * (data.length -1));
        let imgCard = document.createElement("IMG");
        save_cards.push(imgCard);
        imgCard.src = "images/deck/" + data[i].suit + "/" + data[i].value  +  ".png";
          
       // imgCard.style = "display: inline-block; border-radius: 9px; border-style: solid; border-width: 1px; width: 88px; height: 139px; position: relative; left: " + left_value + "px;";
        imgCard.classList.add("imgCard");
        imgCard.style.left = left_value + "px";
        imgCard.style.width = "88px";
        inDiv[0].appendChild(imgCard);
        
    }



    setTimeout(()=> {   
        for(let i = 0; i < save_cards.length; i++){
            //save_cards[i].style.left += ;
        }
        
    }, 1000); 


});