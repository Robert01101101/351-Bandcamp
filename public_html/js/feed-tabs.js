console.log("tabs: Running...");

var ONCREATORS = 0;
var ONSUGGESTIONS = 1;
var ONFAN = 2;
var curTab = ONCREATORS;

//////////// Get items
var btncreators = document.getElementById("btn-creators");
var btnsuggestions = document.getElementById("btn-suggestions");
var btnfan = document.getElementById("btn-fan");

var creators = document.getElementById("content-creators");
var suggestions = document.getElementById("content-suggestions");
var fan = document.getElementById("content-fan");

//////////// Attach Listeners
btncreators.addEventListener("click", tabtocreators);
btnsuggestions.addEventListener("click", tabtosuggestions);
btnfan.addEventListener("click", tabtofan);


//////////////////////////// METHODS ////////////////////////////
function tabtocreators(){
    if(curTab != ONCREATORS){
        creators.classList.remove("hidden");
        suggestions.classList.add("hidden");
        fan.classList.add("hidden");
        curTab = ONCREATORS;
        btncreators.classList.add("tab-selected");
        btnsuggestions.classList.remove("tab-selected");
        btnfan.classList.remove("tab-selected");
    }
}

function tabtosuggestions(){
    if(curTab != ONSUGGESTIONS){
        creators.classList.add("hidden");
        suggestions.classList.remove("hidden");
        fan.classList.add("hidden");
        curTab = ONSUGGESTIONS;
        btncreators.classList.remove("tab-selected");
        btnsuggestions.classList.add("tab-selected");
        btnfan.classList.remove("tab-selected");
    }
}

function tabtofan(){
    if(curTab != ONFAN){
        creators.classList.add("hidden");
        suggestions.classList.add("hidden");
        fan.classList.remove("hidden");
        curTab = ONFAN;
        btncreators.classList.remove("tab-selected");
        btnsuggestions.classList.remove("tab-selected");
        btnfan.classList.add("tab-selected");
    }
}