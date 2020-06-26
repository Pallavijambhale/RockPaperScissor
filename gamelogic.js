$(document).ready(function(){

    var paper = $('#paper');
    var scissor = $('#scissor');
    var rock = $("#rock");
    var choices = [paper, rock, scissor];
    var userchoice = "";
    var compchoice = "";
    var score = 0;



    $('.choose').click(function(event){

        userchoice = $(this).attr('id');

        console.log("User choice="+userchoice);

        $('.choice-picker').addClass('cls-hide');
        $('.step-2').removeClass('cls-hide');
        $('#userchoice').addClass(userchoice);
    
        computerChoice();
        $('#compchoice').addClass(compchoice);

        console.log("House Choice="+compchoice);

        Comparechoices();

    });


    function computerChoice(){

         compchoice = choices[Math.floor(Math.random()*choices.length)];
         compchoice = compchoice.attr('id'); 
         return compchoice;

    }


    function Comparechoices(){

        if(userchoice==compchoice){
            console.log("Draw");
            $('#result').html("Draw");
        }

        else if((userchoice=='paper' && compchoice=='rock') || (userchoice=='scissor'&& compchoice=='paper') || (userchoice=='rock'&& compchoice=='scissor')) {
            console.log("You win");
            score++;
            $('#score').html(score);
            $('#result').html("You Win");

        }

        else{
            console.log("You lose");
            score--;
            $('#score').html(score);
            $('#result').html("You Lose");
        }
    }

    function calculateScore(){
        
        
    }


    function playagain(){
        $('.step-2').addClass('cls-hide');
        $('.choice-picker').removeClass('cls-hide');
    }

    $('.play-again').click(function(){
        playagain();
    });


});