let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
    console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const showWinner=(winner) =>{
    msg.innerText=`Congratulations ,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disaableboxs();
};
const checkWinner=()=>{
    for( let pattern of winPatterns){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1 != "" && p2!="" && p3!=""){
            if(p1===p2&&p2===p3){
                console.log("winner",p1);
                
                showWinner(p1);
            }
        }
    }
};

const disaableboxs=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);