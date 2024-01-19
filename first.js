
let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user_score")
const compScorepara = document.querySelector("#comp_score")

const msg = document.querySelector("#msg");

const genCompChoice = () => {
   const options = ["rock", "paper", "scissors"];
   const randIdx = Math.floor(Math.random() *3);
   return options [randIdx]
};

const drowGame = () => {
  console.log("game was drow, ");
  msg.innerText = "game was drow, play again ";
  msg.style.backgroundColor = "#081b31";
  
}

const showWinner = (userWin) => {
  if (userWin){
   userscore++;
   userScorePara.innerText = userscore;
    msg.innerText = "You Win"
    msg.style.backgroundColor = "Green";
  } else{
    compscore++;
    compScorepara.innerText = compscore;
    msg.innerText = "You Loss"
    msg.style.backgroundColor = "red";
  }
  
}
   
const playgame = (userchoice)=>{
      console.log("user choice = ", userchoice);

      // genrate computer choice 
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userchoice === genCompChoice){
      drowGame();
    } else {
      let userWin = true;
       if(userchoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
       } else if (userchoice === "paper"){
        userWin = compChoice === "scroosrs" ? false : true
       }else {
        userWin = compChoice === "rock" ? false : true;
       }

       showWinner (userWin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id");
      playgame(userchoice);
    });
});