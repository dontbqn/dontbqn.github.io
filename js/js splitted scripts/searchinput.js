//still no search..


function NoSearch(){
    sinput = document.getElementById("searchbar");
    sinput.addEventListener("change", (event)=> {
        ShowMowCow();
    });
}
function ShowMowCow() {
    document.getElementById("cow").classList.remove("visually-hidden");
    cowbtn = document.getElementById("byecow");
    cowbtn.addEventListener("click", (event)=> {
        ByeCow();
    });
}
function ByeCow(){
    document.getElementById("cow").innerHTML = "";
}
