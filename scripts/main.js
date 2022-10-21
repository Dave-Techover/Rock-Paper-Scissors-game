const comp                =   $("#comp"),
      player              =   $("#player"),
      you                 =   $("#you"),
      computer            =   $("#computer"),
      playerScoreDisplay  =   $("#player-score"),
      compScoreDisplay    =   $("#comp-score"), 
	  result              =   $("#result");

var playerScore = 0,
	compScore   = 0,
	playerWin   =  "Congratulations, You Won !!!",
	compWin     =  "Computer Wins, better luck next time!!!";

const compPick = () => {
	var num = Math.floor(Math.random() * 3);
 
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
	}else if(compScore === 10){
		result.html(compWin);
		playerScore = 0;
		compScore   = 0;
	}
}

const showResult = () => {

	$(".pick").on("click", function(){
		compPick();

		var playerAnswer =  $(this).html(),
		    compAnswer   =  comp.html(),
		    win          =  "Nice one :) !!",
		    tie          =  "It's a TIE :|",
		    loss         =  "Ohh, try again :( !!";

		player.html(playerAnswer);

		if(playerAnswer === compAnswer){
			result.html(tie);
			result.css("color", "#e9e9e9");
			you.css("color", "white");
			you.css("fontSize", "20px");
			computer.css("color", "white");
			computer.css("fontSize", "20px");
			playerScoreDisplay.html(playerScore);
			compScoreDisplay.html(compScore);

		}else if(playerAnswer === "Rock"     &&  compAnswer === "Paper"){
			result.html(loss);
			result.css("color", "red");
			you.css("color", "white");
			you.css("fontSize", "20px");
			computer.css("color", "#3bed0f");
			computer.css("fontSize", "30px");
			compScore += 1;
			playerScoreDisplay.html(playerScore);
			compScoreDisplay.html(compScore);

		}else if(playerAnswer === "Rock"     &&  compAnswer === "Scissors"){
			result.html(win);
			result.css("color", "#3bed0f");
			you.css("color", "#3bed0f");
			you.css("fontSize", "30px");
			computer.css("color", "white");
			computer.css("fontSize", "20px");
			playerScore += 1;
			playerScoreDisplay.html(playerScore);
			compScoreDisplay.html(compScore);

		}else if(playerAnswer === "Paper"    &&  compAnswer === "Scissors"){
			result.html(loss);
			result.css("color", "red");
			you.css("color", "white");
			you.css("fontSize", "20px");
			computer.css("color", "#3bed0f");
			computer.css("fontSize", "30px");
			compScore += 1;
			playerScoreDisplay.html(playerScore);
			compScoreDisplay.html(compScore);

		}else if(playerAnswer === "Paper"    &&  compAnswer === "Rock"){
			result.html(win);
			result.css("color", "#3bed0f");
			you.css("color", "#3bed0f");
			you.css("fontSize", "30px");
			computer.css("color", "white");
			computer.css("fontSize", "20px");
			playerScore += 1;
			playerScoreDisplay.html(playerScore);
			compScoreDisplay.html(compScore);

		}else if(playerAnswer === "Scissors" &&  compAnswer === "Rock"){
			result.html(loss);
			result.css("color", "red");
			you.css("color", "white");
			you.css("fontSize", "20px");
			computer.css("color", "#3bed0f");
			computer.css("fontSize", "30px");
			compScore += 1;
			playerScoreDisplay.html(playerScore);
			compScoreDisplay.html(compScore);

		}else if(playerAnswer === "Scissors" &&  compAnswer === "Paper"){
			result.html(win);
			result.css("color", "#3bed0f");
			you.css("color", "#3bed0f");
			you.css("fontSize", "30px");
			computer.css("color", "white");
			computer.css("fontSize", "20px");
			playerScore += 1;
			playerScoreDisplay.html(playerScore);
			compScoreDisplay.html(compScore);
		}

		winner();
	});
}

showResult();