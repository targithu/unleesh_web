// Challenge 1:Your Age in Days
function ageInDays(){
var birthYear=prompt("What Year were you born.. Good Friend?");
var ageInDays=(2022-birthYear)*365;
var h1=document.createElement('h1');
var textAnswer=document.createTextNode('You are '+ageInDays+' days old!');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();
}
//Challenge 2:CAT GEN
function generateCat(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);}
function removes(){
    document.getElementById('flex-cat').lastChild.remove();
}
//Challenge3:Rock,Paper,Scissor
// function rpsGame(yourChoice){
//     console.log(yourChoice);
//     var humanChoice,botChoice;
//     humanChoice=yourChoice.id;
//     botChoice=numberToChoice(randToRpsInt());
//     console.log('Computer choice',botChoice);
//     results=decideWinner(humanChoice,botChoice);
//     console.log(results);
//     // message=finalMessage(results);
//     // rpsFrontend(yourChoice,id,botChoice,message);
// }
// function randToRpsInt(){
//     return Math.floor(Math.random()*3);
// }
// function numberToChoice(number){
//     return ['snake','water','gun'][number];
// }
// function decideWinner(yourChoice,computerChoice) {
//     var rpsDatabase ={
//         'snake':{'gun':1,'snake':0.5,'water':0},
//         'water':{'snake':1,'water':0.5,'gun':0},
//         'gun':{'water':1,'gun':0.5,'snake':0}
//  } ;
//     var yourScore=rpsDatabase[yourChoice][computerChoice];
//     var computerScore=rpsDatabase[computerChoice][yourChoice];

//     return [yourScore,computerScore];
// }
// //Challenge 4:Change the color of all buttons
// // var all_buttons=document.getElementsByTagName('button');
// // console.log(all_buttons)
// // var copyAllButtons=[];
// // for(let i=0;i<all_buttons.length;i++){
// //    copyAllButtons.pop(all_buttons[i]);
// // }

// // function butonColorChange(buttonThingy){
// //     console.log(buttonThingy.value)
// // }
// let fruits=['banana','apple','orange','pineapples']
// console.log(fruits.pop(),fruits);