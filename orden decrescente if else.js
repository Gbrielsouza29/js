// variaveis
var n1;
var n2;
// entrada de dados
n1 = parseInt(window.prompt('informe o valor do primeiro número:'));
n2 = parseInt(window.prompt('informe o valor do segundo número:'));
// condicional

//saida de dados
if(n1<n2){
	document.write('a ordem decrescente é:' + n1 + ' e' + n2);
}else if (n2<n1){
	document.write(' a ordem decrescene é:' +n2 + ' e' + n1); 
}