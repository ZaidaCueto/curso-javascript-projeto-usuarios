window.addEventListener('focus', event =>{
  console.log("focus");
})
document.addEventListener('click', event =>{
  console.log("click");
})

let agora =new  Date;
console.log(agora.toLocaleDateString("pt-BR"));

let carros= ["palio 87" ,"vemelho", new Date(), 10, 15]
carros.forEach(function(value, index){
  console.log(index, value);
})
