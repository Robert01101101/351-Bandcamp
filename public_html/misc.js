
console.log("Running...")
var fav = document.getElementById("favorite");
console.log("Fav =" + fav);
fav.addEventListener("click", changefav);

var filled = false;

function changefav(){
    console.log("Clicked!");
    if(!filled){
        fav.src = "img/favorite-fill.png";
        filled = true
    }else{
        fav.src = "img/favorite-border.png";
        filled = false;
    }
}