const lights = document.querySelectorAll(".light");
const body = document.body;
let active = 0;
setInterval(()=>{
changeColor();
},1000);


function changeColor(){

  if(active > 0){
