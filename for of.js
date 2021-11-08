const cores = ['azul', 'vermelho', 'verde', 'amarelo', 'azul'];

for (let indice in cores) {
    // console.log(indice) acessa somente o numero de referencia do indice do vetor;

    // indice e propriedade 
   // console.log(indice, cores[indice]);
}
// for off
for(let cor of cores){
    console.log(cor);
}