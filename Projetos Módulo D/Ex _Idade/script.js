function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.getElementById("res");
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert("[ERRO] Verifique os dados e tente novamente.");
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var gen = "";
        var img = document.createElement("img");
        img.setAttribute("id","foto");
        if (fsex[0].checked){
            gen = "Homem";
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute("src","menino.png");
            } else if (idade < 21){
                //Jovem
                img.setAttribute("src","hjovem.png");
            } else if (idade < 50){
                //Adulto
                img.setAttribute("src","hadulto.png");
            } else {
                //Idoso
                img.setAttribute("src","hidoso.png");
            }
        } else if (fsex[1].checked){
            gen = "Mulher";
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute("src","menina.png");
            } else if (idade < 21){
                //Jovem
                img.setAttribute("src","mjovem.png");
            } else if (idade < 50){
                //Adulto
                img.setAttribute("src","madulta.png");
            } else {
                //Idoso
                img.setAttribute("src","midosa.png");
            }
        }
        res.style.textAlign = "center"; //Alinhamento por JS.
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`;
        res.appendChild(img)
    }
}