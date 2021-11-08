// for in interação a objetos 
const pessoa ={
    nome: 'Gabriel',
    idade: 25
};
// key-value busca um valor dentro de um objeto
for(let chave in pessoa){
  //  console.log(chave); // mostra todos as chaves do objeto
    console.log(chave,pessoa['idade']);
}
//-----------------------------------------------------------------------------------------------------
//---------------------------------------exemplo-------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
const cores = ['azul', 'vermelho', 'verde', 'amarelo','azul'];

for(let indice in cores){
   // console.log(indice) acessa somente o numero de referencia do indice do vetor;
  
  // indice e propriedade 
   console.log(indice,cores[indice]); 
}

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------for off-----------------------------------------------------
//-----------------------------------------------------------------------------------------------------

