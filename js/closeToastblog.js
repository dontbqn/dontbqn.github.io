document.onscroll = function() {closeToast2()};

function closeToast2(){
    if (document.documentElement.scrollTop > 2500){
        document.getElementById("toaster").style.visibility = "hidden";
    }
    else{
        document.getElementById("toaster").style.visibility = "visible";

    }
}

