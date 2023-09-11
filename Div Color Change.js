var buttonEl = document.querySelector(".btn");
var divEl = document.querySelector(".mydiv");
// ARRAY
var colors = ["red","blue","green"];
var i=0;

buttonEl.onclick = function (){
    if (i>2) {
        i=0;
    }
    divEl.style.backgroundColor = colors[i];
    i++;
}