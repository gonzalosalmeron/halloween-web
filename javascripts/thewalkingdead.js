function mostrar(id){
    document.getElementById(id).style.visibility="visible";
}
function ocultar(identificador){
    document.getElementById(identificador).style.visibility="hidden";
}
function sonar(sonido) {
    document.getElementById(sonido).play();
}
function parar(sonido) {
    document.getElementById(identificador).pause();
}