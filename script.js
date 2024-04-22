let a = document.getElementById('no');
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

// Defina margens para evitar elementos fora da tela em dispositivos móveis
let heightMargin = 40; // Margem para a altura
let widthMargin = 40; // Margem para a largura

// Ajuste para celulares - menos espaço para elementos móveis
let height = windowHeight - heightMargin;
let width = windowWidth - widthMargin;

if (windowWidth < windowHeight) { // Se a tela é mais alta do que larga
    height = windowHeight * 0.7; // Ajuste para celular
    width = windowWidth * 0.7; // Ajuste para celular
}

a.addEventListener('mouseover', function (){
    a.style.position = "absolute"; // Define a posição absoluta
    a.style.top = Math.random() * height + "px"; // Posição aleatória dentro da margem de altura
    a.style.left = Math.random() * width + "px"; // Posição aleatória dentro da margem de largura
});
