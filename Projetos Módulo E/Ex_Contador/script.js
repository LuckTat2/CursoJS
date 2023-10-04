function contar(){
    let ini = document.getElementById("txtn1");
    let fim = document.getElementById("txtn2");
    let passo = document.getElementById("txtp");
    let result = document.getElementById("result");

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        result.innerHTML = "Impossível contar!"
    } else {
        result.innerHTML = "Contando: <br>";
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p<=0){
            alert("Passo Inválido! Considerando PASSO 1")
            p = 1
        }
        if (i < f){
            for(let c=i;c<=f;c+=p){ //Crescente
                result.innerHTML += `${c} \u{1F449} `;
            }
        } else {
            for (let c=i;c>=f;c-=p){ //Decrescente
                result.innerHTML += `${c} \u{1F449} `;
            }
        }
        result.innerHTML += `\u{1F3C1}`;
    }
}