//Calculate Scores
let [computer_score,user_score]=[0,0];

//Determine The Winner
let result_ref = document.getElementById("result");
let choices_object = {
  'rock' : {
    'rock' : 'draw',
    'scissors' : 'win',
    'paper' : 'lose'
},
  'scissors' : {
    'rock' : 'lose',
    'scissors' : 'draw',
    'paper' : 'win'
},
  'paper' : {
    'rock' : 'win',
    'scissors' : 'lose',
    'paper' : 'draw'
    }
}

//Generate Random Computer Moves
function checker(input){
    var choices = ["rock", "paper", "scissors"];
    var num = Math.floor(Math.random()*3);
    
    document.getElementById("computer_choice").innerHTML = ` Computer Chose <span> ${choices[num].toUpperCase()} </span>`;

//Get User Input
    document.getElementById("user_choice").innerHTML = ` You Chose <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "You Win!";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "You Lose!";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "Draw";
            break;
    }
document.getElementById("computer_score").
innerHTML = computer_score;
document.getElementById("user_score").
innerHTML = user_score;
} 



