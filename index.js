// var noOfDrums = document.querySelectorAll(".drum").length;
// alert(noOfDrums);
// //to create sound by click
// for(var i=0; i<noOfDrums; i++){
// document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//    var musicButton = this.innerHTML;
//    makeSoundByKeyboard(musicButton);
//    buttonAnimation(musicButton);
// });
// }
//
//
// //to make sound by keyboard
// document.addEventListener("keypress", function(eve){
//   makeSoundByKeyboard(eve.key);
//   buttonAnimation(eve.key);
// }
// );
//
//
// function makeSoundByKeyboard (key){
//
//   switch (key) {
//     case "w":
//             var music1 =  new Audio("sounds/tom-1.mp3");
//             music1.play();
//      break;
//      case "a":
//            var music2 = new Audio("sounds/tom-2.mp3");
//            music2.play();
//      break;
//      case "s":
//            var music3 = new Audio("sounds/tom-3.mp3");
//            music3.play();
//      break;
//      case "d":
//            var music4= new Audio("sounds/tom-4.mp3");
//            music4.play();
//      break;
//      case "j":
//           var music5 = new Audio("sounds/crash.mp3");
//           music5.play();
//     break;
//     case "k":
//           var music6 = new Audio("sounds/kick-bass.mp3");
//           music6.play();
//
//     break;
//     case "l":
//           var music7= new Audio("sounds/snare.mp3");
//           music7.play();
//
//     break;
//
//     default:
//    console.log(musicButton);
//   }
//
// }
//
// function buttonAnimation(currentKey){
//   var activeButton = document.querySelector("."+currentKey);
//    activeButton.classList.add("pressed");
//
//   setTimeout(function(){
//     activeButton.classList.remove("pressed");
//   }, 100);
// }


// document.getElementsByTagName("button")[0].addEventListener("click", clicked);
//
// function clicked (){
//   const music = new Audio("sounds/tom-1.mp3");
//   music.play();
//   document.getElementsByTagName("button")[0].classList.add("pressed");
//   setTimeout(function(){
//     document.getElementsByTagName("button")[0].classList.remove("pressed");
//   }, 100);
// }
// function displayDate() {
//   document.querySelector("button").innerHTML = Date();
// }


var noOfDrums= document.getElementsByTagName("button").length;

for(var i=0; i<noOfDrums; i++){
  document.getElementsByTagName("button")[i].addEventListener("click", function(){
    var pressedButton = this.innerHTML;
    makeASound(pressedButton);
    clikedButtonAnimation(pressedButton);


  });
}

document.addEventListener("keypress", function(event){
  makeASound(event.key);
  clikedButtonAnimation(event.key);
});


function clikedButtonAnimation(pressedBtn){
  document.querySelector("."+pressedBtn).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("."+pressedBtn).classList.remove("pressed");
  }, 100);
}


function makeASound(key){
  if(key==="w"){
    var music = new Audio("sounds/tom-1.mp3");
    music.play();
  }
  else if(key==="a") {
    var music= new Audio("sounds/tom-2.mp3");
    music.play();
  }
else if(key==="s") {
  var music =  new Audio("sounds/tom-3.mp3");
   music.play();
}
else if (key==="d") {
  var music = new Audio("sounds/tom-4.mp3");
  music.play();
}
else if (key=== "j") {
  var music = new Audio("sounds/crash.mp3");
  music.play();
}
else if (key==="k") {
  var music= new Audio("sounds/kick-bass.mp3");
  music.play();
}
else  {
  var music=new Audio("sounds/snare.mp3");
  music.play();

}
}
