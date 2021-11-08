// variaveis
var alturaChico = 1.50;
var alturaJuca = 1.10;
var contador = 0; 
// laço
while(alturaChico > alturaJuca){
    alturaChico = alturaChico +=  0.02; // taxa de crescimento 2 centimetros por ano
    alturaJuca = alturaJuca + 0.03;  // taxa de crescimento 3 centimetros por ano
    contador = contador + 1; 
}
// saida de dados
console.log('serão necessários', contador, 'anos para Juca ser maior que chico');

var something =  prompt('digite algo');

var nome1 = window.prompt('digite seu nome:');
var nome2 = window.prompt('digite seu nome:');
var nome3 = window.prompt('digite seu nome:');
document.write(nome1);
document.write(nome2);
document.write(nome3);