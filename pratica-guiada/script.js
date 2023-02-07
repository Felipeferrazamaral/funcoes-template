// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

//PRATICA GUIADA 1
// DECLARACAO TRADICIONAL
function darOlaPessoa(nome){
    const frase = `Ola, ${nome}!`
    console.log(frase)
}

darOlaPessoa('felipe')
darOlaPessoa('joara')

// DECLARANDO A MESMA FUNCAO SO QUE NAO-NOMEADA
const darOlaPessoaExtra = function(nome){
    const frase = `Ola, ${nome}!`
    console.log(frase)

}

darOlaPessoaExtra('iago')
darOlaPessoaExtra('lucas')


// PRATICA GUIADA 2
function operarNumero(numero){
    // verifica se eh par
    const par = numero % 2 === 0
     // some o numero com 10
    const soma = numero + 10

    const multiplica = numero * numero
     // frase retornada
     const fraseRetornada = `O numero ${numero} e par? ${par}.
     Somado com 10, o resultado e ${soma}, multiplica por ele mesmo o
     resultado e ${multiplica} `

     return fraseRetornada
     

}

console.log(operarNumero(10))
console.log(operarNumero(12))

//PRATICA GUIADA 3

function verificarLoginESenha(login,senha){
    const loginArmazenado = 'felipe-amaral'
    const senhaArmazenada = '12345'
// VERIFICA SE LOGIN E IGUAL
// SE FOREM IGUAIS RESULTADO TRUE
const comparaLogin = login === loginArmazenado

// VERIFICA SE SENHAS SAO IGUAIS

const comparaSenha = senha === senhaArmazenada
//VERIFICA SE AMBOS SAO IGUAIS
const verificaInfo = comparaLogin && comparaSenha
// frase resultado

const fraseResultado = `As informacoes de login estao corretas? ${verificaInfo}`
 return fraseResultado

}

console.log(verificarLoginESenha ('felipe-amaral','12345'))