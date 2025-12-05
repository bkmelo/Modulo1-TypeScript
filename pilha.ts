import {Stack} from './Stack'
import leia from 'readline-sync'

const acervo: Stack<string> =new Stack<string>()
let opcao:number 


do {console.log('#################################')
    console.log(' 1 - ADICIONAR LIVRO NA BIBLIOTECA')
    console.log(' 2 - MOSTRAR LISTRA DE LIVROS')
    console.log(' 3 - REMOVER UM LIVRO DA BIBLIOTECA')
    console.log(' 0 - SAIR')
    console.log('#################################')
    opcao= leia.questionInt('O QUE VOCÊ GOSTARIA DE FAZER NA BIBLIOTECA HOJE\n');



    switch(opcao){

       

            case 1:const nome = leia.question('INSIRA O TÍTULO DO LIVRO\n')
                    acervo.push(nome);
                   console.log('Adicionando' +nome+''); 
            break

            case 2:console.log('Quantidade de livros da Biblioteca:');
                   acervo.printStack();
            break

            case 3:acervo.pop();
               console.log ('Retirando agora');
            break

            case 0:console.log("OBRIGADA POR NOS VISITAR");
            break

            default: console.log("OPCAO INVALIDA")
 
    }

    if (acervo.isEmpty()){
       console.log('A lista esta vazia')};
}

while(opcao!==0)
