import {Queue} from './Queue'
import leia= require('readline-sync')

const fila: Queue<string> =new Queue<string>()
let opcao:number , nome: string


do {console.log('#################################')
    nome=leia.question('ESCREVA SEU NOME\n');
    console.log(' 1 - ADICIONAR NA FILA')
    console.log(' 2 - MOSTRAR NA FILA')
    console.log(' 3 - REMOVER DA FILA')
    console.log(' 0 - SAIR')
    console.log('#################################')
    opcao= leia.questionInt('QUAL A SUA OPCAO\n');

    switch(opcao){

    

            case 1:console.log('Adicionando:'+fila.enqueue(nome));

            break

            case 2:console.log('Quantidade de pessoas na fila:'+fila.printQueue());

            break

            case 3:console.log('Chamando agora:'+fila.dequeue());
            break

            case 0:console.log("OBRIGADA POR USAR NOSSO SISTEMA");

            break

            default: console.log("")
 
    }

}

while(opcao!==0)

