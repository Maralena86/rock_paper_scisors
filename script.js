let computerWin =0;
let playerWin =0;
let playerSelection = "";
let computerRandom = ["paper", "rock", "scissors"];
let computerTxtChoice =document.querySelector("#computerChoice");
let playerTxtChoice = document.querySelector("#playerChoice");
let container = document.querySelector("#container")
let result = document.querySelector("#result");
let winner = document.querySelector("#winner");



/*---------------------------Computer Selection----------------------------------------- */
function computerPlay(){
	let random = Math.floor(Math.random()*computerRandom.length);
	return computerRandom[random];
}
let computerSelection = computerPlay();

/*------------------------------Player Selection----------------------------------------- */

let userButtons = document.querySelectorAll(".btn");

	userButtons.forEach(button => {
		button.addEventListener('click', function(){
			if(playerWin<5 && computerWin <5){	
				playerSelection = button.id;				
		 		playRound(playerSelection, computerSelection)
		 		if(playerWin===5 ||computerWin===5)
		 		final();
			}
		});		
	});

/*------------------------------------------Play----------------------------------------- */

function playRound(playerSelection, computerSelection){	
	computerSelection=computerPlay();
	playerTxtChoice .innerText = "Your choice: "+playerSelection;
	computerTxtChoice.innerText ="Computer Choice: " + computerSelection; 
	if(computerSelection ===playerSelection ){
		result.innerText ="NO ONE WINS"+"\nComputer score :" + computerWin+ "\nPlayer score: " +playerWin;;
	
	}
	else if((computerSelection==="rock"&& playerSelection==="scissors") || 
		(computerSelection === "paper" && playerSelection === "rock")||
		(computerSelection === "scissors" && playerSelection === "paper"))
	{
		 computerWin++;
		result.innerText ="COMPUTER WINS"+"\nComputer score :" + computerWin+ "\nPlayer score: " +playerWin;		
	}
	else {
		playerWin++;
		result.innerText ="YOU WIN" +"\nComputer score :" + computerWin+ "\nPlayer score: " +playerWin;
	
	}	
}


function final(){
	if(computerWin > playerWin){
		winner.innerText ="Sorry. Computer wins!" + "\nComputer score: " + computerWin+ "\nPlayer score: " +playerWin;
		btnEvent();		
	}
	else if(playerWin > computerWin){
		winner.innerText ="Congratulations! You win!"+"\nComputer score: " + computerWin+ "\nPlayer score: " +playerWin ;
		btnEvent();		
	}
}
function rePlay(){
	playerWin =0;
	computerWin =0;
	result.innerText="Welcome again! Make your choice";
	winner.innerText="";
	playerTxtChoice.innerText ="";
	computerTxtChoice.innerText=""; 	
}

/*------------------------------Replay choice buttons----------------------------------*/

let btnYes = document.createElement("button");
let btnNo = document.createElement("button");
function btnEvent(){		
	result.innerText ="Do you want to replay?\n";	
		result.appendChild(btnYes);
		result.appendChild(btnNo);
		btnNo.innerText="NO";
		btnYes.innerText="YES";	
		btnNo.addEventListener('click', function(){
			result.innerText= "Thank you for play. See you soon"
			
			container.innerText="Good bye!"
			container.sty
		})	
		btnYes.addEventListener('click', function(){
			rePlay()
		})
}


