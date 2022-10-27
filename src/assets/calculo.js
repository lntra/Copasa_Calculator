//pegar num de input .ts
var num = 6;
var aux = 0;
var preco = 0;
var categorias = [5,10,15,20,40];
var agua = [3.886,6.023,8.222,10.458,12.759]
var esgoto = [2.876,4.457,6.084,7.739,9.441]

//custo fixo
preco += 17.61;
preco += 13.03;

//for para pegar todos os alcances de gastos
for(var categoriaAux = 0; num > categorias[categoriaAux];categoriaAux++){
    aux += categorias[categoriaAux]
    preco += (5 * agua[categoriaAux]) + (5 * esgoto[categoriaAux])
}

//lidando com números caso sobre para um dos alcances
if(num < categorias[categoriaAux]){
    if((num - aux) > 0){
        var ultimaOpearacao = num - aux 
        preco += (ultimaOpearacao * agua[categoriaAux]) + ((ultimaOpearacao * esgoto[categoriaAux]))
    }    
}

console.log(preco);