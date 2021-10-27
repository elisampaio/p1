//Credits & info
// Elisa Sampaio -- 2021
console.log("Hello world!");

// VARIÁVEIS -------------------------------------------------------------------
let main = document.querySelector('main');
let privacy = document.querySelector('.privacy');
var slider = document.querySelector('#myRange');
var slider1 = document.querySelector('#myRange1');
var slider2 = document.querySelector('#myRange2');
var slider3 = document.querySelector('#myRange3');
let intro = document.querySelector('.introText');
let introChange = document.querySelector('#deviceChange');
let w = window.innerWidth;
let h = window.innerHeight;
let x;
let y;

// FUNÇÕES ---------------------------------------------------------------------

// executar quando a página tiver feito o load
function setup() {

  // alterar o termo consoante o dispositivo utilizado
  if ( w < 768) {
    introChange.innerHTML = "Tap for the fun to";
    introChange.style.position = "relative";
  } else if ( w > 768) {
    introChange.innerHTML = "Click for the fun to";
    introChange.style.position = "relative";
  } else {}
}

// remover texto inicial
function removerIntro() {

  let loadDiv = document.querySelector('.onload');
  loadDiv.remove();
  intro.remove();
}

// função para escrever o texto aleatoriamente no ecrâ
function write() {

  let newText = document.createElement('span');
  newText.classList.add('tp');
  main.appendChild(newText);
  newText.innerHTML = "Transparency";

  newText.style.left = x;
  newText.style.top = y;
  x = (Math.random() * window.innerWidth)+"px";
  y = (Math.random() * window.innerHeight)+"px";
}

// SLIDERS
// Solução encontrada/inspirada em:
// https://www.w3schools.com/howto/howto_js_rangeslider.asp
// https://www.geeksforgeeks.org/allow-users-to-change-font-size-of-a-webpage-using-javascript/

// alterar o tamanho da fonte
slider.oninput = function() {
  var item = document.querySelectorAll('.tp');
  var value = slider.value;
  for (var i = 0; i < item.length; i++) {
      item[i].style.fontSize = value+"px";
  }
}

// alterar o peso da fonte
slider1.oninput = function() {
  var item = document.querySelectorAll('.tp');
  var value = slider1.value;
  for (var i = 0; i < item.length; i++) {
      item[i].style.fontWeight = value;
  }
}

// alterar opacidade da fonte
slider2.oninput = function() {
  var item = document.querySelectorAll('.tp');
  var value = slider2.value;
  for (var i = 0; i < item.length; i++) {
      item[i].style.opacity = value/100;
  }
}

// alterar entre regular e itálico
slider3.oninput = function () {
  var item = document.querySelectorAll('.tp');
  var value = slider3.value;
  for (var i = 0; i < item.length; i++) {
    if (value == 0){
      item[i].style.fontFamily = 'Bitter';
    } if (value == 1) {
      item[i].style.fontFamily = 'Bitter italic';
    } else {
    }
  }
}

// criar um random walker (inspirado pelo Daniel Shiffman)

// function walker() {
//   var item = document.querySelectorAll('.tp');
//   // dá-me um número random
//   var random = Math.floor(Math.random() * 100);
//   var newX;
//   var newY;
//
//   for (var i = 0; i < item.length; i++) {
//     x = item[i].offsetLeft;
//     y = item[i].offsetTop;
//     item[i].style.left = newX;
//     item[i].style.top = newY;
//   }
//
//   // executa um movimento consoante o random
//   if (random >= 0 && random <= 25) {
//     newX = (x + 5)+"px";
//   } else if (random >= 26 && random <= 50) {
//     newX = (x - 5)+"px";
//   } else if (random >= 51 && random <= 75) {
//     newY = (y + 5)+"px";
//   } else if (random >= 76 && random <= 100) {
//     newY = (y - 5)+"px";
//   } else {
//     console.log("No number was matched");
//   // console.log(random);
//   }
// }

// iniciar o programa
function run() {
  removerIntro();
  setInterval(write, 50);
  // setInterval(walker, 70);
}


//   let creds = document.querySelector(".credits");
//
// function creditsOver() {
//
//   creds.innerHTML = "Created by Elisa Sampaio +";
// }
//
// function creditsReset() {
// creds.innerHTML = "+";
// }
// creds.addEventListener("mouseover", creditsOver);
// creds.addEventListener("mouseleave", creditsReset);


// EVENTOS ---------------------------------------------------------------------

// // quando a página carregar iniciar a função setup
document.addEventListener('DOMContentLoaded', setup);

//iniciar função quando clicar no ecrâ
window.addEventListener("click", run, { once: true});
