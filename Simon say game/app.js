let gameseq=[];
let userseq=[];

let btns=["red","yellow","purple","green"];
let started="false";
let level=0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started=="false"){
        console.log("game started");
        started="true";

        levelup();
    }
});



function levelup(){
    level++;
    h2.innerText=`Level ${level}`;
    btnflash();
    let randIdx=Math.floor(Math.random()*3)+1;
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randbtn);
    btnflash(randbtn);
}
function btnflash(btn){
    btn.classList.add(flash);
    setTimeout(function(){
        btn.classList.remove(flash);
    },1000);
}