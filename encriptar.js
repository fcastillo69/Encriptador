function encriptar() {
    var texto = document.getElementById("input-text").value.toLowerCase();
    var textEncript = texto.replace(/e/gm,"enter");
    var textEncript = textEncript.replace(/i/mg,"imes");
    var textEncript = textEncript.replace(/a/mg,"ai");
    var textEncript = textEncript.replace(/o/mg,"ober");
    var textEncript = textEncript.replace(/u/mg,"ufat");

    document.getElementById("out-text").innerHTML = textEncript;
} 

function desencriptar() {
    var texto = document.getElementById("input-text").value.toLowerCase();
    var textEncript = texto.replace(/enter/gm,"e");
    var textEncript = textEncript.replace(/imes/mg,"i");
    var textEncript = textEncript.replace(/ai/mg,"a");
    var textEncript = textEncript.replace(/ober/mg,"o");
    var textEncript = textEncript.replace(/ufat/mg,"u");

    document.getElementById("out-text").innerHTML = textEncript;
}

function prueba() {
    alert("funciona")
}
