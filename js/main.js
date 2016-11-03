$(document).ready (function() {
    var selection;
    var random;
    var computer;
    var i=0;
    var j=0;

    function computerChoice(){
      random = Math.floor(Math.random()*3)
      if(random == 0) computer = "scissors";
      else if (random == 1) computer = "paper";
      else if (random == 2) computer = "rock";
    };



    $('#scissors').click( function(){
      computerChoice();
      selection = "scissors";
      var result = compare();
      winner(result);
      $('#computer').html(computer);
      $('#choice').html(selection);
    });


    $('#paper').click( function(){
      computerChoice();
      selection = "paper";
      var result = compare();
      winner(result);
      $('#computer').html(computer);
      $('#choice').html(selection);
    });


    $('#rock').click( function(){
      computerChoice();
      selection = "rock";
      var result = compare();
      winner(result);
      $('#computer').html(computer);
      $('#choice').html(selection);
    });

    function compare(){
        if( selection == computer) result = "Tie";
        else if((selection == "rock" && computer == "scissors") ||
                (selection == "paper" && computer == "rock") ||
                (selection == "scissors" && computer == "paper")
              ) {
                  result = "User Wins";
                  i += 1;
                  $('#won').html(i);
                }
        else{
          result = "Computer Wins";
          j += 1;
          $('#win').html(j);
        }

        return result;
    }

    function winner(result){
       $('#result').html("RESULT " + result);
    }

    $('#reset').click( function(){
      selection = "";
      random = "";
      computer = "";
      i=0;
      j=0;
      $('#result').html("");
      $('#win').html("0");
      $('#won').html("0");
      $('#computer').html("");
      $('#choice').html("");
    });

});
