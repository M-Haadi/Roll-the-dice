const start_btn = document.querySelector(".start-btn");
const reset_btn = document.querySelector(".reset-btn");
const light_status = document.querySelector(".light-status");
const light = document.querySelector(".light");
const dice = document.querySelector(".dice");
const dice_result = document.querySelector(".dice-result");
const dice_result_bot = document.querySelector(".dice-result-bot");
const track_p1 = document.querySelectorAll(".track-p1");
const track_p2 = document.querySelectorAll(".track-p2");
const img_p1 = document.querySelectorAll(".img-p1");
const img_p2 = document.querySelectorAll(".img-p2");
const who_won=document.querySelector('.who-won');


start_btn.addEventListener("click", () => {

  let rand_no = 1.5; // second delay for light turning
     
start_btn.disabled=true;
  let light_turning=setInterval(() => {
    if (light_status.innerHTML == "Green Light!") {
      light_status.innerHTML = "Red Light!";
      light.style.backgroundColor = "rgb(245, 53, 27)";
      light.style.boxShadow = "0px 0px 30px rgb(249, 104, 71)";
    } else {
      light_status.innerHTML = "Green Light!";
      light.style.backgroundColor = "rgb(69, 247, 69)";
      light.style.boxShadow = "0px 0px 30px rgb(38, 255, 38)";

         
    
    }
  }, rand_no * 1000);



  //for adding index to previous index so that our player move forward not backward based on index generated
  let prev_no = 0;
  dice.addEventListener("click", () => {

    if(light_status.innerHTML=="Green Light!")
    {   
       
    let rand_no2 = Math.round(Math.random() * 2);
    dice_result.innerHTML=`You got = ${rand_no2}`;
    img_p1.forEach((img) => {
      img.src = "";

    });
    track_p1.forEach(track=>{
        track_p1[prev_no].style.backgroundColor="";
    })
    prev_no += rand_no2;   //adding index to previous so that player moves forward from previous location
    img_p1[prev_no].src = "../pics/pikachu.png";
    track_p1[prev_no].style.backgroundColor="rgb(249, 104, 71)";
    }

    else{
        who_won.innerHTML="You Lost! The bot won the game.";
        dice.disabled=true;
        clearInterval(light_turning);
    }

    if(prev_no>=20){
        who_won.innerHTML="You Won! Reset to play again.";
        clearInterval(light_turning);
        clearInterval(interval_bot);
    }
 
  
  });





  let rand_no_for_bot = Math.round(Math.random() * 2);
  let prev_no_for_bot = 0;
  dice_result_bot.innerHTML=`You got = ${rand_no_for_bot}`;
  img_p2.forEach((img) => {
    img.src = "";
  });
  prev_no_for_bot += rand_no_for_bot;
  img_p2[prev_no_for_bot].src = "../pics/viking.png";

  let interval_bot=setInterval(()=>{
   if(light_status.innerHTML=="Green Light!")
   {
    if(prev_no_for_bot>=20){   //20 are the boxes number or track finishing point
        dice.disabled=true;
        who_won.innerHTML="The bot Won! better luck next time!"
        clearInterval(interval_bot);
        clearInterval(light_turning);
     }
     else if(prev_no>=20){
        who_won.innerHTML="You won! BOT LOST"
        clearInterval(interval_bot);
        clearInterval(light_turning);
     }
  rand_no_for_bot = Math.round(Math.random() * 2);
  dice_result_bot.innerHTML=`You got = ${rand_no_for_bot}`;
  prev_no_for_bot += rand_no_for_bot;
  img_p2.forEach((img) => {
    img.src = "";
  });
  img_p2[prev_no_for_bot].src = "../pics/viking.png";
   }
},400)

});

reset_btn.addEventListener('click',()=>{
    window.location.reload();
})