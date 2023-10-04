
// O Array permite criar uma varíavel composta com dados diferentes e incluir funções.
// console.log(typeof pessoa)

let pessoa = {nome:'José',
sexo:'M',
peso:84.5,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}
pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg.`)