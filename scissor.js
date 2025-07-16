let userScore=0;
let computerScore=0;


function play(u){
    let array=["rock", "paper", "scissor"];
    let num=(Math.floor(Math.random()*3));
    let c=array[num];
    let text="";
    let colo="";

    if(u==c){
        text="IT'S A DRAW";
        colo="orange"
    }else if((u=="rock" && c=="scissor") || (u=="paper" && c=="rock") || (u=="scissor" && c=="paper")){
        userScore++;
        text="YOU WON";
        colo="green"
    }else{
        computerScore++;
        text="YOU LOST"
        colo="red"
    }

    let res=document.getElementById("results");
    let aa=document.querySelector("#me");
    let bb=document.querySelector("#comp");
    res.textContent=text;
    aa.textContent=`You : ${userScore}`;
    bb.textContent=`Computer: ${computerScore}`;
    res.style.backgroundColor=colo;
}