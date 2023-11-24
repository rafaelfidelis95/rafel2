//camelCase - Escrevemos uma declaração sem espaço começando com mínusculo e colocando as palavras em maísculo e mínusculo.
//Ex: saudarUsuário
//ctrl/shift L= corrigir
//alt shift e a setinha para direção desejada= multiplica o texto
//alt setinha para cima ou para baixo= mover o texto


function saudarUsuário(nome){
    console.log('Olá,' + nome);
};    

saudarUsuário("Rafael");

function somar(n1,n2){
    return n1 + n2;
}    

console.log('A soma dos dois números é '+ somar(5,10));

function subtração(n1,n2){
    return n1 - n2;
}    

console.log('A subtração dos dois números é '+ subtração(10,10));

function divisao(n1,n2){
    return n1 / n2;
}    

console.log('A divisão dos dois números é '+ divisao(10,5));

function multiplicacao(n1,n2){
    return n1 * n2;
}    

console.log('A multiplicação dos dois números é '+ multiplicacao(10,10));



function corDoSemaforo(cor){
    if(cor === "verde"){
        return "verde-siga";
    }else if(cor === "amarelo"){
        return "atenção";
    }else if(cor === "vermelho"){
        return "pare";
    }else{
        return "cor inválida";
    };
}
console.log("Cor do Semáforo", corDoSemaforo("verde"));

//array - lista
//adicionando um itém na lista. Usamos push();
//adicionando um itém na lista ao início. Usamos unshifit();
//removendo um itém na lista usamos pop();
//removendo um itém na lista no início usamos shift();
//descobrindo qual a posição de um itém no índice; indexOF();
//contando os itens da lista = lenght; 
//verificar se um item contém um determinado elemento = includes;

function verificarAcesso(id){
    const idsAutorizados = [100,101,102,103,104,105];
    if(idsAutorizados.includes(id)){
        console.log("Acesso autorizado!");
    }else{
        console.log("Acesso negado!");
    }
}

verificarAcesso(id);





