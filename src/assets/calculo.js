//pegar num de input .ts
var num = 29;

// valor tabelas
var categorias = [0,5,10,15,20,40];
var agua = [1.82,3.886,6.023,8.222,10.458,12.759]
var esgoto = [1.35,2.876,4.457,6.084,7.739,9.441]

//custos
var precoFixoAgua = (17.61);
var precoFixoEsgoto = (13.03);
var precoAgua = 0;
var precoEsgoto = 0;
var precoAguaTemporario = 0;
var precoEsgotoTemporario = 0;

//Os temporários existem para mostrar o preço em certa categoria da tabela de forma isolada

//for para pegar todos os alcances de gastos
for(var categoriaAux = 1; num > categorias[categoriaAux];categoriaAux++){
    var dif = categorias[categoriaAux] - categorias[categoriaAux - 1];
    precoAguaTemporario = (dif * agua[categoriaAux - 1]);
    precoAgua += precoAguaTemporario;
    console.log("Na categoria " + categoriaAux + " o preço da água é: " + precoAguaTemporario);
    precoEsgotoTemporario = (dif * esgoto[categoriaAux - 1]);
    precoEsgoto += precoEsgotoTemporario
    console.log("Na categoria " + categoriaAux + " o preço do esgoto é: " + precoEsgotoTemporario);
}

//lidando com números caso sobre para um dos alcances
if (num <= categorias[categoriaAux]){
        var operacao = num - (categorias[categoriaAux - 1])
    if( operacao > 0){
        precoAguaTemporario = (operacao * agua[categoriaAux - 1]);
        precoAgua += precoAguaTemporario;
        console.log("Na categoria " + categoriaAux + " o preço da água é: " + precoAguaTemporario);
        precoEsgotoTemporario = (operacao * esgoto[categoriaAux - 1])
        precoEsgoto += precoEsgotoTemporario
        console.log("Na categoria " + categoriaAux + " o preço do esgoto é: " + precoEsgotoTemporario);
    }    
}
// lidando com números acima das categorias, ou seja 40+
else{
    var operacao = num - (categorias[5])
    precoAguaTemporario = (operacao * agua[5]);
    precoAgua += precoAguaTemporario;
    console.log("Na categoria acima de 40 " + " o preço da água é: " + precoAguaTemporario);
    precoEsgotoTemporario = (operacao * esgoto[5])
    precoEsgoto += precoEsgotoTemporario
    console.log("Na categoria acima de 40 " + " o preço do esgoto é: " + precoEsgotoTemporario);
}

precoAgua += precoFixoAgua;
precoEsgoto += precoFixoEsgoto;

var precoTotal = (precoEsgoto + precoAgua);


console.log("Para " + num + " metros cúbicos, o preço é: ")
console.log("Preco total Agua: " + (Math.round(precoAgua*Math.pow(10,2))/Math.pow(10,2)).toFixed(2));
console.log("Preco total Esgoto: " + (Math.round(precoEsgoto*Math.pow(10,2))/Math.pow(10,2)).toFixed(2));
console.log("Preco total: " + (Math.round(precoTotal*Math.pow(10,2))/Math.pow(10,2)).toFixed(2));