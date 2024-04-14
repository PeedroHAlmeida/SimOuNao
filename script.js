let a = document.getElementById('no');
let height = window.innerHeight - 50;
let width = window.innerHeight - 50;
        
a.addEventListener('mouseover', function (){
    a.style.position = "absolute";
    a.style.top = Math.random() * height + "px";
    a.style.left = Math.random() * width + "px";
})