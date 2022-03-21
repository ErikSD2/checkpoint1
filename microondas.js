//Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva
//conforme solicitado. Veja abaixo os requisitos do projeto:

//- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos 
//pré-definidos. 

     // 0 - Pipoca – 10 segundos (padrão);
     // 1 - Macarrão – 8 segundos (padrão);
     // 2 - Carne – 15 segundos (padrão);
     // 3 - Feijão – 12 segundos (padrão);
     // 4 - Brigadeiro – 8 segundos (padrão); 

//- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
// Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
//- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
//- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
//- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
//- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".


const temposPadrao = [10,8,15,12,8]
// opções 0 ao 4

      //0 - Pipoca
      //1 - Macarrão
      //2 - Carne
      //3 - Feijão
      //4 - Brigadeiro


function microondas (opcao, tempo){
    if (opcao >= 0 && opcao < temposPadrao.length){
        let tempoPadrao = temposPadrao [opcao];
        if (tempo >= tempoPadrao * 3){
            console.log("Kabumm");
        } else if (tempo >= tempoPadrao * 2){
            console.log("Sua comida queimou!");
        }else if (tempo < tempoPadrao){
            console.log("Tempo Insuficiente");
        }else{
            console.log("Prato pronto, bom apetite!!!");
        }

    }else{
        console.log("Prato inexistente");
    }

}

microondas (0,10);
microondas (1,16);
microondas (2,1);
microondas (3,50);
microondas (5,10);

