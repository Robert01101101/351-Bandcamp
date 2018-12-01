console.log("Running...");

/* 
clicks on 'fav' -> changefav() -> toggle 'filled'   |   2 per tile, only main feed
clicks on 'play' -> changeplay() -> toggle 'itsplayingalright'   |   1 per tile, main feed and new and notable
clicks on 'bought' -> changebuy() -> toggle 'yougotit' (is mapped to download button for now)(should this be a pop-up?)   |   2 per tile, only main feed
*/

var NOTPLAYING = -1;
var curPlaying = NOTPLAYING;

//////////// Get items
//Slicing arrays solution found from bottens' answer here: https://stackoverflow.com/questions/24639493/gather-divs-and-perform-css-on-them-htmlcollection-vs-array
//further help from: https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
var fav = document.getElementsByClassName("favorite");
var play = document.getElementsByClassName("play-arrow");
var bought = document.getElementsByClassName("download");
var feedtile = document.getElementsByClassName("feed-tile");


//////////// Slice Items into Arrays
fav = Array.prototype.slice.call(fav);
play = Array.prototype.slice.call(play);
bought = Array.prototype.slice.call(bought);
feedtile = Array.prototype.slice.call(feedtile);


//////////// Create Boolean Arrays
var filled = [];
fav.forEach( function(element){
    filled.push(true);
});
var itsplayingalright = [];
play.forEach( function(element){
    itsplayingalright.push(false);
});
var yougotit = [];
bought.forEach( function(element){
    yougotit.push(false);
});


//////////// Debug: Print lengths
console.log("fav.length=" + fav.length);console.log("filled.length=" + filled.length);console.log("-----");
console.log("play.length=" + play.length);console.log("feedtile.length" + feedtile.length);
console.log("itsplayingalright.length=" + itsplayingalright.length);console.log("-----");
console.log("bought.length=" + bought.length);console.log("yougotit.length=" + yougotit.length);console.log("-----");


//////////// Attach Listeners
//Event Listeners with Parameters: https://www.w3schools.com/jsref/met_document_addeventlistener.asp
fav.forEach( function(element){
    element.addEventListener("click", function() {
        changefav(element);
    });   
});
play.forEach( function(element){
    element.addEventListener("click", function() {
        changeplay(element);
    });  
});
bought.forEach( function(element){
    element.addEventListener("click", function() {
        changebuy(element);
    });  
});


//////////////////////////// METHODS ////////////////////////////
function changefav(theObject){
    var idx = fav.indexOf(theObject)
    if((idx%2) == 0){
        var idxb = idx+1;
    } else {
        var idxb = idx-1;
    }
    if(!filled[idx]){
        fav[idx].src = "img/favorite-fill.png";
        filled[idx] = true;
        fav[idxb].src = "img/favorite-fill.png";
        filled[idxb] = true;
    }else{
        fav[idx].src = "img/favorite-border.png";
        filled[idx] = false;
        fav[idxb].src = "img/favorite-border.png";
        filled[idxb] = false;
    }
    console.log("changefav: index=" + idx + "/" + idxb + "   |   filled=" + filled[idx]);
}


function changeplay(theObject){
    var idx = play.indexOf(theObject)
    if(!itsplayingalright[idx]){
        //disable currently playing to avoid duplicates
        if (curPlaying != NOTPLAYING){
            changeplay(play[curPlaying]);
        }
        play[idx].src = "img/pause.png";
        itsplayingalright[idx] = true;
        curPlaying = idx;
        //switch on playing theme of tile
        feedtile[idx].classList.add("js-playing");
    }else{
        play[idx].src = "img/play-arrow.png";
        itsplayingalright[idx] = false;
        curPlaying = NOTPLAYING;
        feedtile[idx].classList.remove("js-playing");
    }
    console.log("changeplay: index=" + idx + "   |   itsplayingalright=" + itsplayingalright[idx]);
}


function changebuy(theObject){
    var idx = bought.indexOf(theObject)
    if((idx%2) == 0){
        var idxb = idx+1;
    } else {
        var idxb = idx-1;
    }
    if(!yougotit[idx]){
        bought[idx].textContent = "Download";
        yougotit[idx] = true;
        bought[idxb].textContent = "Download";
        yougotit[idxb] = true;
    }
    console.log("changebuy: index=" + idx + "   |   yougotit=" + yougotit[idx]);
}
