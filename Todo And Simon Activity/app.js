
// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let inp=document.querySelector("input");

// // button addEventListener which listen on add tasks
// btn.addEventListener("click",function(){
//     let item=document.createElement("li");
//     item.innerText=inp.value;
//     let delBtn=document.createElement("button");
//     delBtn.innerText="Delete";
//     delBtn.classList.add("delete");
//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value="";
// });


// ul.addEventListener("click",function(event){
//    if(event.target.nodeName=="BUTTON"){
//     let listItem=event.target.parentElement;
//     listItem.remove();
//     console.log(deleted);
//    }
// });

// // let delBtns=document.querySelectorAll(".delete");
// // for(delBtn of delBtns){
// //     delBtn.addEventListener("click",function(){
// //         this.parentElement.remove();
// //     });
// // }


//Simon Play game in Js

let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started =false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is Started.");
        started=true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq=[];
level++;
h2.innerText=`level ${level}`;

let randIdx=Math.floor(Math.random()*3);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);
// console.log(randIdx);
// console.log(randColor);
// console.log(randBtn);
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(randBtn);
};
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> </br> Press any key to start.`;
        document.querySelector("body").style.backgroundcolor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundcolor="white";
        },150)
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

