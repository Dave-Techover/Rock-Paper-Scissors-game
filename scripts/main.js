const comp                =   $("#comp"),
      player              =   $("#player"),
      you                 =   $("#you"),
      computer            =   $("#computer"),
      playerScoreDisplay  =   $("#player-score"),
      compScoreDisplay    =   $("#comp-score"), 
	  result              =   $("#result"),
	  pickBtn             =   $(".pick"),
	  restartBtn          =   $("#restart"),
	  playAgainBtn        =   $("#play-again");

let playerScore = 0,
    compScore   = 0,
    playerWin   = "Congratulations, You Won !!!",
    compWin     = "Computer Wins, better luck next time!!!";

playerScoreDisplay.html(playerScore);
compScoreDisplay.html(compScore);

const compPick = () => {
	let num = Math.floor(Math.random() * 3);
 
	if(num === 0){
		comp.html("Rock");
	}else if(num === 1){
		comp.html("Paper");
	}else if(num === 2){
		comp.html("Scissors");
	}
}

const winner = () => {
	if (playerScore === 10){
		result.html(playerWin);
		playerScore = 0;
		compScore   = 0;
		pickBtn.hide();
		restartBtn.hide()
		playAgainBtn.show();
	}else if(compScore === 10){
		result.html(compWin);
		playerScore = 0;
		compScore   = 0;
		pickBtn.hide();
		restartBtn.hide();
		playAgainBtn.show();
	}
}

const restart = () => {
	playerScore = 0;
	compScore   = 0;
	playerScoreDisplay.html(playerScore);
	compScoreDisplay.html(compScore);
	result.html("");
	player.html("");
	comp.html("");
	you.css("color", "#000");
	computer.css("color", "#000");
	playerScoreDisplay.css("color", "#000");
	compScoreDisplay.css("color", "#000");	
}

const playAgain = () => {
	restart();
	pickBtn.show();
	restartBtn.show();
	playAgainBtn.hide();
}

const showResult = () => {

	pickBtn.on("click", function(){
		compPick();

		let playerAnswer =  $(this).html(),
		    compAnswer   =  comp.html(),
		    win          =  "Nice one :) !!",
		    tie          =  "It's a TIE :|",
		    loss         =  "Ohh, try again :( !!";

		player.html(playerAnswer);

		if(playerAnswer === compAnswer){
			result.html(tie);
			result.css("color", "gray");
			you.css("color", "#000");
			computer.css("color", "#000");
			playerScoreDisplay.html(playerScore);
			compScoreDisplay.html(compScore);
			playerScoreDisplay.css("color", "#000");
			compScoreDisplay.css("color", "#000");

		}else if(playerAnswer === "Rock"     &&  compAnswer === "Paper"){
			result.html(loss);
			result.css("color", "#e91616");
			you.css("color", "#000");
			computer.css("color", "#3bed0f");
			compScore += 1;
			playerScoreDisplay.html(playerScore);
			compScoreDisplay.html(compScore);
			playerScoreDisplay.css("color", "#000");
			compScoreDisplay.css("color", "#3bed0f");

		}else if(playerAnswer === "Rock"     &&  compAnswer === "Scissors"){
			result.html(win);
			result.css("color", "#3bed0f");
			you.css("color", "#3bed0f");
			computer.css("color", "#000");
			playerScore += 1;
			playerScoreDisplay.html(playerScore);
			compScoreDisplay.html(compScore);
			playerScoreDisplay.css("color", "#3bed0f");
			compScoreDisplay.css("color", "#000");

		}else if(playerAnswer === "Paper"    &&  compAnswer === "Scissors"){
			result.html(loss);
			result.css("color", "#e91616");
			you.css("color", "#000");
			computer.css("color", "#3bed0f");
			compScore += 1;
			playerScoreDisplay.html(playerScore);
			compScoreDisplay.html(compScore);
			playerScoreDisplay.css("color", "#000");
			compScoreDisplay.css("color", "#3bed0f");

		}else if(playerAnswer === "Paper"    &&  compAnswer === "Rock"){
			result.html(win);
			result.css("color", "#3bed0f")
			you.css("color", "#3bed0f");
			computer.css("color", "#000");
			playerScore += 1;
			playerScoreDisplay.html(playerScore);
			compScoreDisplay.html(compScore);
			playerScoreDisplay.css("color", "#3bed0f");
			compScoreDisplay.css("color", "#000");

		}else if(playerAnswer === "Scissors" &&  compAnswer === "Rock"){
			result.html(loss);
			result.css("color", "#e91616");
			you.css("color", "#000");
			computer.css("color", "#3bed0f");
			compScore += 1;
			playerScoreDisplay.html(playerScore);
			compScoreDisplay.html(compScore);
			playerScoreDisplay.css("color", "#000");
			compScoreDisplay.css("color", "#3bed0f");

		}else if(playerAnswer === "Scissors" &&  compAnswer === "Paper"){
			result.html(win);
			result.css("color", "#3bed0f");
			you.css("color", "#3bed0f");
			computer.css("color", "#000");
			playerScore += 1;
			playerScoreDisplay.html(playerScore);
			compScoreDisplay.html(compScore);
			playerScoreDisplay.css("color", "#3bed0f");
			compScoreDisplay.css("color", "#000");
		}

		winner();
	});
}

restartBtn.on("click", function() {
	restart();
});

playAgainBtn.on("click", function() {
	playAgain();
});

showResult();


// TO TOGGLE BETWEEN TWO FUNCTIONS USING A BUTTON

// <button id="buttonId">Click me!!!</button>

//Set click to "false" initially. No function perfomed yet
var click = false;

document.getElementById("buttonId").addEventListener("click", function() {
	if ( clicked === false) {
	 	console.log("The button has now been clicked, perform the first function");
	 	// insert function here

	 	// set click from "false" to "true" to indicate that the first function has been performed.
		click = true

		//When, the button is clicked again, the other function will be performed.
	}else{
		console.log("The button has been clicked again, perform the other function");
		// insert other function here

		// set click back to "false" after the other function has been performed
		click = false

		//Now, when the button is clicked again,  the first function will be performed.
	}
});