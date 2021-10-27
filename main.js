//Credits & info
// Elisa Sampaio -- 2021
console.log("Hello world!");

// VARIÁVEIS -------------------------------------------------------------------
let main = document.querySelector('main');
let loadDiv = document.querySelector('.onload');
let privacy = document.querySelector('.privacy');
var slider = document.querySelector('#myRange');
var slider1 = document.querySelector('#myRange1');
var slider2 = document.querySelector('#myRange2');
var slider3 = document.querySelector('#myRange3');
let intro = document.querySelector('.introText');
let introChange = document.querySelector('#deviceChange');
let number = document.querySelector('.number');
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
function transitionIntro() {
  loadDiv.style.opacity = 0;
}

function removerIntro() {
  loadDiv.remove();
  intro.remove();
}





// função para escrever o texto aleatoriamente no ecrâ
function write() {

  let newText = document.createElement('span');
  main.appendChild(newText);
  newText.innerHTML = "Transparency";
  newText.classList.add('tp');
  newText.style.left = x;
  newText.style.top = y;
  x = (Math.random() * window.innerWidth)+"px";
  y = (Math.random() * window.innerHeight)+"px";

  // adicionar com um size random
  let r = Math.floor(Math.random() * 30);
  newText.style.fontSize = r+"px";

  // adicionar com uma weight random
  let rW = Math.floor(Math.random() * 900);
  newText.style.fontWeight = rW;

  // adicionar com opacidade random
  var rO = Math.random();
  rO = rO.toFixed(1);
  newText.style.opacity = rO;



  // adicionar com Z-Index random
  // var rZi = Math.floor(Math.random() * 100);
  //
  // if ( rZi >= 10 && rZi >= 60) {
  //   newText.classList = ".tp2";
  // } else {
  // }
}

function numberAdd() {
  // adicionar número na secção das infos
  var item = document.querySelectorAll('.tp');
  for (var i = 0; i < item.length; i++) {
      number.innerHTML = i;
  }
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

// function pAnimation() {
//   privacy.style.fontWeight = 900;
// }
//
// privacy.addEventListener("mouseenter", pAnimation);

function number2Reset() {
  let no2 = document.querySelector(".number2");
  no2.style.display = "none";
  number.style.opacity = "0.7";
}

function number2() {
  let no2 = document.querySelector(".number2");
  no2.style.display = "inline-block";
  number.style.opacity = "1";

  setTimeout(number2Reset, 2500);
}



// iniciar o programa
function run() {
  transitionIntro();
  setTimeout(removerIntro, 350);
  setInterval(write, 50);
  setInterval(numberAdd, 50);
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

number.addEventListener("click", number2);
