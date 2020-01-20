const socket = io();


socket.on('play_cards', (data)=> {
    //console.log(data)
    // Make played cards invisible

    var played_cards = document.getElementsByClassName("played_cards");
    
    for(let i = 0; i < played_cards.length; i++){        
        played_cards[i].style.display = "none";
        //played_cards[i].classList.add("fade-out");
    }


    
    let frame = document.getElementsByClassName("frame");
    
    let outDiv = document.createElement("DIV");
    let inDiv = document.createElement("DIV");
    
    
    outDiv.className = "played_cards";

    let width_value = 45 + 45 * (data.length);
    

    inDiv.style = "display: none;";

    let left_value;
    for(let i = 0; i < data.length; i++){
        //let left = 302.5 + (45 * i);
        left_value = -45 * i;
        let imgCard = document.createElement("IMG");
        imgCard.src = "images/deck/" + data[i].suit + "/" + data[i].value  +  ".png";
        

        inDiv.appendChild(imgCard);  
        imgCard.style = "display: inline-block; border-radius: 9px; border-style: solid; border-width: 1px; width: 88px; height: 139px; position: relative; left: " + left_value + "px;";

        
    }

    outDiv.appendChild(inDiv);
    frame[0].appendChild(outDiv);
    
    setTimeout(()=> {   
        outDiv.style = "width: 100%; height: 139px; position: absolute; top: 305px;";
        inDiv.style = "display: flex; width: " + width_value + "px; height: 139px; margin: auto";
    }, 0);


});