const characters = 
    ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
     "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
     ":",";","<",">",".","?","/"];

let firstEl = document.getElementById("first-el");
let secEl = document.getElementById("sec-el");

function generator() {
    firstEl.textContent = "";
    secEl.textContent = "";
    let randomOne = 0;
    let randomTwo = 0;
    for(let i = 0; i<16; i++){
        randomOne = Math.floor(Math.random() * characters.length);
        randomTwo = Math.floor(Math.random() * characters.length);
        firstEl.textContent += characters[randomOne];
        secEl.textContent += characters[randomTwo];
    }
}
var cpyConf = document.getElementById("cpy-txt");

function copyOne() {
    if(!(firstEl.textContent === "")){
        navigator.clipboard.writeText(firstEl.textContent);
        cpyConf.textContent = "First Password Copied !";
    }
}

function copyTwo() {
    if(!(secEl.textContent === "")){
        navigator.clipboard.writeText(secEl.textContent);
        cpyConf.textContent = "Second Password Copied !";
    }
}



