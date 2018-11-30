console.log("tabs: Running...");

var oncollection = true;

//////////// Get items
var btncollection = document.getElementById("btn-collection");
var btnwishlist = document.getElementById("btn-wishlist");
var collection = document.getElementById("content-collection");
var wishlist = document.getElementById("content-wishlist");

//////////// Hide Content
wishlist.classList.add("hide-tab");
btncollection.classList.add("checked-tab");

//////////// Attach Listeners
btncollection.addEventListener("click", tabtocollection);
btnwishlist.addEventListener("click", tabtowishlist);




//////////////////////////// METHODS ////////////////////////////
function tabtocollection(){
    if(!oncollection){
        collection.classList.remove("hide-tab");
        wishlist.classList.add("hide-tab");
        oncollection = true;
        btncollection.classList.add("checked-tab");
        btnwishlist.classList.remove("checked-tab");
    }
}

function tabtowishlist(){
    if(oncollection){
        collection.classList.add("hide-tab");
        wishlist.classList.remove("hide-tab");
        oncollection = false;
        btncollection.classList.remove("checked-tab");
        btnwishlist.classList.add("checked-tab");
    }
}