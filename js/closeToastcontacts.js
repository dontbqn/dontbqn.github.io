document.onscroll = function() {closeToast()};

function closeToast(){
    if (document.documentElement.scrollTop > 180){
        document.getElementById("toaster").style.visibility = "hidden";
    }
    else{
        document.getElementById("toaster").style.visibility = "visible";

    }
}
