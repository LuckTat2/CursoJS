function carregar(){
var msg = document.getElementById("msg");
var img = document.getElementById("imagem");
var agora = new Date();
var hora = agora.getHours();
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12 ){
    // Bom dia!
    img.src = "dia.png"
    document.body.style.background = "#fddec2"
} else if (hora >= 12 && hora <= 18){
    // Boa tarde!
    img.src = "tarde.png"
    document.body.style.background = "#f49a50"
} else {
    // Boa noite!
    img.src = "noite.png"
    document.body.style.background = "#56879c"
}
}