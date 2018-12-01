console.log("edit-user: Running...");

var editing = false;

//////////// Get items
var origname = document.getElementById("orig-name");
var origbio = document.getElementById("orig-bio");
var editname = document.getElementById("edit-name");
var editbio = document.getElementById("edit-bio");
var btnedit = document.getElementById("edit-btn");

//////////// Attach Listeners
btnedit.addEventListener("click", edituser);


//////////////////////////// METHODS ////////////////////////////
function edituser(){
    if(!editing){
        btnedit.textContent = "Save";
        editing = true;
        editname.value = origname.textContent;
        editbio.value = origbio.textContent;
        origname.classList.add("hidden");
        origbio.classList.add("hidden");
        editname.classList.remove("hidden");
        editbio.classList.remove("hidden");
    } else {
    	btnedit.textContent = "Edit";
    	editing = false;
    	if (editname.value != "") origname.textContent = editname.value;
    	if (editbio.value != "") origbio.textContent = editbio.value;
    	origname.classList.remove("hidden");
        origbio.classList.remove("hidden");
        editname.classList.add("hidden");
        editbio.classList.add("hidden");
    }
}
