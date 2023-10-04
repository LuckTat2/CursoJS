let valores = [8, 1, 7, 4, 3, 9]
valores.sort()
console.log(valores)

/* for (let pos=0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

for(let pos in valores){ //Essa forma do FOR funciona apenas para Arrays e Objetos
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
