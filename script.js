let a = document.getElementById('no');
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let height = windowHeight - 50;
let width = windowWidth - 50;

// Verifica se a largura da tela é menor que a altura, o que sugere um dispositivo móvel
if (windowWidth < windowHeight) {
    height = windowHeight * 0.5; // Reduz a altura máxima para 50% da altura da tela
    width = windowWidth * 0.5; // Reduz a largura máxima para 50% da largura da tela
}

a.addEventListener('mouseover', function (){
    a.style.position = "absolute";
    a.style.top = Math.random() * height + "px";
    a.style.left = Math.random() * width + "px";
});
