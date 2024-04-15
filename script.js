let a = document.getElementById('no');
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let height = windowHeight - 50;
let width = windowWidth - 50;

if (windowWidth < windowHeight) {
    height = windowHeight * 0.8;
    width = windowWidth * 0.8;
}

a.addEventListener('mouseover', function (){
    a.style.position = "absolute";
    a.style.top = Math.random() * height + "px";
    a.style.left = Math.random() * width + "px";
});
