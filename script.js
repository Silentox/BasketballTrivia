//global var
let indexOfArrayCounter=-1;
let correctScore=0;
let incorrectScore=0;
let seconds=10;
let timerInterval=null;


let BasketballQuestion = [
     
    {
    question: "What player scored the most points in one game?",
    choices: ["Lebron James", "Stephen Curry", "Kobe Bryant", "Wilt Chamberlain" ],
    validAnswer: 3
    }, 
    
{
    question:"What player has the most career assists?",
    choices: ["Chris Paul", "John Stockton", "Pistol Pete", "Stephen Curry"],
    validAnswer: 1
    
    }, 

    {
    question:"Who won the most career NBA championships as a player?",
    choices: ["Tim Duncan", "Wilt Chamberlain", "Bill Russell", "Michael Jordan"],
    validAnswer: 2
    
    }, 

    {
    question:"Most coaching titles?",
    choices: ["Popovich", "Phil Jackson", "Steve kerr", "Brad Stevens"],
    validAnswer: 1
    
    },

    {
    question:"Which of these players has never had a season in which they averaged at least 30 PPG on at least 55 FG%?",
    choices: ["Kareem Abdul-Jabbar", "Adrian Dantley", "Karl Malone", "Michael Jordan"],
    validAnswer: 3
        
    },

    {
    question:"Which of these players has the most All-NBA 1st team selections?",
    choices: ["Charles Barkley", "John Stockton", "Bill Russell", "Dolph Schayes"],
    validAnswer: 3
            
    },

    {
    question:"Which of these players reached 25000 points the fastest?",
    choices: ["Wilt Chamberlain", "Lebron James", "Michael Jordan", "Kareem Abdul-Jabbar"],
    validAnswer: 0
                
    },

    {
    question:"Who was the NBA championship trophy named after before Larry O'Brien?",
    choices: ["Bill Russell", "Walter A. Brown", "John Kundla", "James Naismith"],
    validAnswer: 1
                    
    },

    {
    question:"Who was the NBA's leading scorer in the 1950's?",
    choices: ["Bob Pettit", "George Mikan", "Dolph Schayes", "Bob Cousy"],
    validAnswer: 2
                        
    },
    {
    question:"What team has the longest championship drought?",
    choices: ["Kings", "Hawks", "Bulls", "Knicks"],
    validAnswer: 0
                            
    },
    {
    question:"Which of these players never led the NBA in scoring? (by average)",
    choices: ["Oscar Robertson", "Rick Barry", "Dave Bing", "Elvin Hayes"],
    validAnswer: 0
                                
    },
];




function appendContent(){

    

    if (indexOfArrayCounter===BasketballQuestion.length)
    {

        cleanUp();
        clearInterval(timerInterval);
        $("#reloadDiv").show();
        $("#reloadDiv").text("Try Again").click(function(){
            location.reload();
        })
        return;

    }
//question append
    $("#questionDiv").html(BasketballQuestion[indexOfArrayCounter].question);
    
//answer append
BasketballQuestion[indexOfArrayCounter].choices.forEach(function(choice, index){
        var choicesButton=$('<button>');
        choicesButton.text(choice);
        choicesButton.attr('class', "button"+index);
        let choicesDiv=$('<div>');
        choicesDiv.append(choicesButton);
        $('#optionDiv').append(choicesDiv);
        })


}



$("#optionDiv").on('click', function(event){
    
    if (event.target.className==="button"+BasketballQuestion[indexOfArrayCounter].validAnswer)
    {
        correctScore++;
        nextQuestion();

    }
    else if(event.target.className!="button"+BasketballQuestion[indexOfArrayCounter].validAnswer)
    {
    incorrectScore++;
       nextQuestion();
    }

    console.log(event.target.className);

})
timer=function(){

timerInterval=setInterval(function(){

    //times up
 if (seconds===0)
{
    incorrectScore++;
    nextQuestion();

}
else{

    seconds--;
    $("#timer").html("Time remaining: " + "00:" + seconds + " secs");
    
}
}, 1000);


}



function cleanUp()
{
    $('div[id]').each(function(item) {
        $(this).html('');
    })
    
    $('.correctDiv').text('Correct: ' + correctScore);
    $('.incorrectDiv').text('Incorrect: ' + incorrectScore);

}

function nextQuestion()
{

  
    seconds = 10;
    $('#timer').html("");
    cleanUp();
    clearInterval(timerInterval);
    timer();
    indexOfArrayCounter++;
    appendContent();


    // setTimeout(function() {
    //     cleanUp();
    //     appendContent();
    // }, 1000)

}


nextQuestion();


// function displayCorrect(){
//     setTimeout(function(){
//         findUl.textContent="";
//         let displayCorrectAnswer=document.createElement("li");
//         displayCorrectAnswer.textContent=answers[indexOfArrayCounter][correctanswer[indexOfArrayCounter]];
//         findUl.appendChild(displayCorrectAnswer);
//       },3000)
//     }

//    check if array is finished
 
