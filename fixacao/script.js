// Resolva o Exercício de Fixação!

function verificaMaiorIdade(nome, anoDeNascimento , anoAtual){
    
const idade =  anoAtual - anoDeNascimento

const ehMaior = idade >= 18





    const frase = `${nome} eh maior de idade? true/false ${ehMaior}`

    return frase

}

const pessoa1 = verificaMaiorIdade('felipe',1991,2023)
console.log(pessoa1)

const pessoa2 = verificaMaiorIdade('iago',1993,2023)
console.log(pessoa2)