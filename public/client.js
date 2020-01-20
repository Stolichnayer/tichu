const socket = io();


socket.on('play_cards', (data)=> {
    //console.log(data);
    let frame = document.getElementsByClassName("frame");
    

    for(let i = 0; i < data.length; i++){
        //let left = 302.5 + (45 * i);
        let div = document.createElement("DIV");
        let imgCard = document.createElement("IMG");
        divCard.src = "images/deck/" + data[i].suit + "/" + data[i].value  +  ".png";
        divCard.style = "border-radius: 9px; border-style: solid; border-width: 1px; width: 88px; height: 139px; position: absolute;" + 
        "left:" + left + "px;" + "margin:auto";
        frame[0].appendChild(imgCard);
    }

    
    
  
});