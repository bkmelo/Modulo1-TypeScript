//Escreva um programa para criar uma Collection Array do tipo number,  inicializada com 10 valores inteiros.
//O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array, exiba na tela a posição deste número na Collection.
//Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado.

import leia = require ("readline-sync");  

const lista: Array <number> = new Array <number>(1,2,3,4,5,6,7,8,9,10);
let Nprocurado
let posicao 
let resposta: string


resposta= leia.question("Voce quer procurar mais uma posicao do seu numero? sim ou nao\n")

        while (resposta === "sim") 
 
{

Nprocurado = leia.questionInt("Digite o numero que quer procurar\n")

posicao = lista.indexOf(Nprocurado)


if (posicao != -1)
    
    {console.log("Seu numero foi encontrado na posicao"+posicao)}

else {console.log("Seu numero nao foi encontrado")};

resposta= leia.question("Voce quer procurar mais uma posicao do seu número? sim ou nao\n")

} 
