
console.log("Running...")
var fav = document.getElementById("favorite");
var bought = document.getElementById("buyalbum");
var play = document.getElementById("playbutt");

console.log("Fav =" + fav);
fav.addEventListener("click", changefav);
bought.addEventListener("click", changebuy);
play.addEventListener("click", changeplay);

var filled = false;
var yougotit = false;
var itsplayingalright = false;

function changefav(){
    console.log("Clicked!");
    if(!filled){
        fav.src = "img/favorite-fill.png";
        filled = true;
    }else{
        fav.src = "img/favorite-border.png";
        filled = false;
    }
}

function changeplay(){
    if(!itsplayingalright){
        play.src = "img/pause.png";
        itsplayingalright = true;
    }else{
        play.src = "img/play-arrow.png";
        itsplayingalright = false;
    }
}


function changebuy(){
    if(!yougotit){
        bought.textContent = "You Own This";
        yougotit = true;

        fav.src = "img/favorite-fill.png";
        filled = true;
    }

}