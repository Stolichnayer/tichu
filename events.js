var mouseDown = 0;
var now_lifting = false;

document.onmousedown = function() {
    //console.log("mousedown");
    mouseDown = 1;
}
document.onmouseup = function() {
    //console.log("mouseup");
    mouseDown = 0;
}


document.getElementById("scene1").onmouseover = function() {
    if(mouseDown == 0)
        return;
    if(now_lifting && hand_of_player[0][1 - 1].isLifted())
        return;
    if(!now_lifting && !hand_of_player[0][1 - 1].isLifted())
        return; 
    toggleCardLift("scene1");
}

document.getElementById("scene2").onmouseover = function() {
    if(mouseDown == 0)
        return;
    if(now_lifting && hand_of_player[0][2 - 1].isLifted())
        return;
    if(!now_lifting && !hand_of_player[0][2 - 1].isLifted())
        return; 
    toggleCardLift("scene2");
}

document.getElementById("scene3").onmouseover = function() {
    if(mouseDown == 0)
        return;
    if(now_lifting && hand_of_player[0][3 - 1].isLifted())
        return;
    if(!now_lifting && !hand_of_player[0][3 - 1].isLifted())
        return; 
    toggleCardLift("scene3");
}

document.getElementById("scene4").onmouseover = function() {
    if(mouseDown == 0)
        return;
    if(now_lifting && hand_of_player[0][4 - 1].isLifted())
        return;
    if(!now_lifting && !hand_of_player[0][4 - 1].isLifted())
        return; 
    toggleCardLift("scene4");
}

document.getElementById("scene5").onmouseover = function() {
    if(mouseDown == 0)
        return;
    if(now_lifting && hand_of_player[0][5 - 1].isLifted())
        return;
    if(!now_lifting && !hand_of_player[0][5 - 1].isLifted())
        return; 
    toggleCardLift("scene5");
}

document.getElementById("scene6").onmouseover = function() {
    if(mouseDown == 0)
        return;
    if(now_lifting && hand_of_player[0][6 - 1].isLifted())
        return;
    if(!now_lifting && !hand_of_player[0][6 - 1].isLifted())
        return; 
    toggleCardLift("scene6");
}

document.getElementById("scene7").onmouseover = function() {
    if(mouseDown == 0)
        return;
    if(now_lifting && hand_of_player[0][7 - 1].isLifted())
        return;
    if(!now_lifting && !hand_of_player[0][7 - 1].isLifted())
        return; 
    toggleCardLift("scene7");
}

document.getElementById("scene8").onmouseover = function() {
    if(mouseDown == 0)
        return;
    if(now_lifting && hand_of_player[0][8 - 1].isLifted())
        return;
    if(!now_lifting && !hand_of_player[0][8 - 1].isLifted())
        return; 
    toggleCardLift("scene8");
}

document.getElementById("scene9").onmouseover = function() {
    if(mouseDown == 0)
        return;
    if(now_lifting && hand_of_player[0][9 - 1].isLifted())
        return;
    if(!now_lifting && !hand_of_player[0][9 - 1].isLifted())
        return;
    toggleCardLift("scene9");
}

document.getElementById("scene10").onmouseover = function() {
    if(mouseDown == 0)
        return;
    if(now_lifting && hand_of_player[0][10 - 1].isLifted())
        return;
    if(!now_lifting && !hand_of_player[0][10 - 1].isLifted())
        return;        
    toggleCardLift("scene10");
}

document.getElementById("scene11").onmouseover = function() {

    if(mouseDown == 0)
        return;
    if(now_lifting && hand_of_player[0][11 - 1].isLifted())
        return;
    if(!now_lifting && !hand_of_player[0][11 - 1].isLifted())
        return;    
    toggleCardLift("scene11");
}

document.getElementById("scene12").onmouseover = function() {

    if(mouseDown == 0)
        return;
    if(now_lifting && hand_of_player[0][12 - 1].isLifted())
        return;
    if(!now_lifting && !hand_of_player[0][12 - 1].isLifted())
        return;
    toggleCardLift("scene12");
}

document.getElementById("scene13").onmouseover = function() {

    if(mouseDown == 0)
        return;
    if(now_lifting && hand_of_player[0][13 - 1].isLifted())
        return;
    if(!now_lifting && !hand_of_player[0][13 - 1].isLifted())
        return;
    toggleCardLift("scene13");
}

document.getElementById("scene14").onmouseover = function() {
    if(mouseDown == 0)
        return;
    if(now_lifting && hand_of_player[0][14 - 1].isLifted())
        return;
    if(!now_lifting && !hand_of_player[0][14 - 1].isLifted())
        return;
    toggleCardLift("scene14");
}










document.getElementById("scene1").onmousedown = function() {
    if(!hand_of_player[0][1 - 1].isLifted())
        now_lifting = true;
    else
        now_lifting = false;
    toggleCardLift("scene1");
}

document.getElementById("scene2").onmousedown = function() {
    if(!hand_of_player[0][2 - 1].isLifted())
        now_lifting = true;
    else
        now_lifting = false;
    toggleCardLift("scene2");
}

document.getElementById("scene3").onmousedown = function() {
    if(!hand_of_player[0][3 - 1].isLifted())
        now_lifting = true;
    else
        now_lifting = false;
    toggleCardLift("scene3");
}

document.getElementById("scene4").onmousedown = function() {
    if(!hand_of_player[0][4 - 1].isLifted())
        now_lifting = true;
    else
        now_lifting = false;
    toggleCardLift("scene4");
}

document.getElementById("scene5").onmousedown = function() {
    if(!hand_of_player[0][5 - 1].isLifted())
        now_lifting = true;
    else
        now_lifting = false;
    toggleCardLift("scene5");
}

document.getElementById("scene6").onmousedown = function() {
    if(!hand_of_player[0][6 - 1].isLifted())
        now_lifting = true;
    else
        now_lifting = false;
    toggleCardLift("scene6");
}

document.getElementById("scene7").onmousedown = function() {
    if(!hand_of_player[0][7 - 1].isLifted())
        now_lifting = true;
    else
        now_lifting = false;
    toggleCardLift("scene7");
}

document.getElementById("scene8").onmousedown = function() {
    if(!hand_of_player[0][8 - 1].isLifted())
        now_lifting = true;
    else
        now_lifting = false;
    toggleCardLift("scene8");
}

document.getElementById("scene9").onmousedown = function() {
    if(!hand_of_player[0][9 - 1].isLifted())
        now_lifting = true;
    else
        now_lifting = false;
    toggleCardLift("scene9");
}

document.getElementById("scene10").onmousedown = function() {
    if(!hand_of_player[0][10 - 1].isLifted())
        now_lifting = true;
    else
        now_lifting = false;
    toggleCardLift("scene10");
}

document.getElementById("scene11").onmousedown = function() {
    if(!hand_of_player[0][11 - 1].isLifted())
        now_lifting = true;
    else
        now_lifting = false;
    toggleCardLift("scene11");
}

document.getElementById("scene12").onmousedown = function() {
    if(!hand_of_player[0][12 - 1].isLifted())
        now_lifting = true;
    else
        now_lifting = false;
    toggleCardLift("scene12");
}

document.getElementById("scene13").onmousedown = function() {
    if(!hand_of_player[0][13 - 1].isLifted())
        now_lifting = true;
    else
        now_lifting = false;
    
    toggleCardLift("scene13");
}

document.getElementById("scene14").onmousedown = function() {

    if(!hand_of_player[0][14 - 1].isLifted())
        now_lifting = true;
    else
        now_lifting = false;

    toggleCardLift("scene14");
}
