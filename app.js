
let icon = document.getElementById("icon");
let down = document.getElementById("down");
let sum =document.getElementById("sum")
let sum1 =document.getElementById("sum1")
let count = 0;
let isshow = false;
function change(){
    isshow = !isshow;
    if(isshow){
        icon.classList.add("ali")
        sum.innerText = count + 1;
    }else{
        icon.classList.remove("ali")
        sum.innerText = count + 0;
        down.classList.add("faizi")
        sum1.innerText = count + 1;
    }
    
}