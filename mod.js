let music=new Audio("music.mp3");
let audioTurn=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn="X";
let isgameover=false

const changeturn=()=>{
    if(turn=="X")return "O";
    else return "X"
}
const checkwin=()=>{
   let boxtext = document.getElementsByClassName('text');
   let win=[
    [0,1,2,0,5,5],
    [3,4,5,0,5,15],
    [6,7,8,0,5,25],
    [0,3,6,90,15,5],
    [1,4,7,90,15,-5],
    [2,5,8,90,15,-15],
    [0,4,8,45,14,7],
    [2,4,6,-45,-7,14],
]
win.forEach(e=>{
    if( boxtext[e[0]].innerText !== "" &&
    boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
    boxtext[e[1]].innerText === boxtext[e[2]].innerText){
        isgameover=true;
        gameover.play();
        console.log("working proproof")
        document.getElementsByClassName('turn')[0].innerHTML=  boxtext[e[0]].innerText+` won`;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        document.querySelector('.line').style.transform=`rotate(${e[3]}deg) translate(${e[4]}vw,${e[5]}vw)`;
        document.querySelector('.line').style.width = "20vw";

    }
})


}









let boxes=document.querySelectorAll(".box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.text');
    element.addEventListener('click',()=>{
        if(boxtext.innerText==""){    
            boxtext.innerText=turn;
            turn= changeturn();
            audioTurn.play();
            checkwin();
            if (!isgameover){
                document.getElementsByClassName('turn')[0].innerHTML="Turn is of "+turn;
            } 
            
        }
       
    })
})

let reset=document.getElementsByClassName('btn')[0];
reset.addEventListener('click',()=>{
    let boxes=document.querySelectorAll('.box');
    Array.from(boxes).forEach(element=>{
        let boxtext=element.querySelector('.text');
       boxtext.innerText="";
       gameover.play();
       document.querySelector('.line').style.width="0vw";
    });
});








