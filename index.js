let randomNumber1= Math.floor(Math.random()*6) + 1;
let randomNumber2= Math.floor(Math.random()*6) + 1;
let image1=document.getElementsByClassName("img1")[0];
let image2=document.getElementsByClassName("img2")[0];
image1.src="./images/dice"+randomNumber1+".png";
image2.src="./images/dice"+randomNumber2+".png";
let heading=document.querySelector("h1");
if(randomNumber1>randomNumber2){
    heading.innerHTML="🏆 Player 1 Wins";
}
else if (randomNumber1<randomNumber2) {
    heading.innerHTML="Player 2 Wins 🏆";
    
} else {
    heading.innerHTML="Draw!";
    
}