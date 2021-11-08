// calculo salario de um funcionario
var horaTrab; // quantidade de horas trabalhadas
var valorHora; // valor pago por Hora
var descINSS = 0; // percentual de desconto do INSS
var totalDesc; // valor total recolhido pelo INSS
var salarioLiq; // salario liquido
var salarioBrut; // salario Bruto
// Entrada de dados 
horaTrab = parseFloat(window.prompt('informe a quantidade de horas trabalhadas:'));
valorHora = parseFloat(window.prompt('informe o valor pago por hora trabalhada:'));
salarioBrut = horaTrab*valorHora;
document.write('O salario Bruto é: ' + '' + salarioBrut)
// processamento aliquota de desconto do inss na estrutura de repetição
if (salarioBrut <= 1100.00) {
	descINSS = 0.075 
}else if (salarioBrut > 1100 && salarioBrut<= 2203.48){
	descINSS = 0.09
 }else if(salarioBrut > 2203.48 && salarioBrut<= 3305.22 ){
	descINSS = 0.12
 }else if(salarioBrut > 3305.22 && salarioBrut <= 6433.57){
 descINSS = 0.14}
 // obs: achar um jeito mais simples de fazer isso no futuro proximo talves um switch-case
 
 // processamento valor total do desconto do inss
 totalDesc =  descINSS * salarioBrut
 
 // saida de dados valor total do desconto
 document.write('<p>O valor a ser recolhido pelo fundo de garantia é:' + totalDesc);
 
 // processamento valor salario liquido
 salarioLiq= salarioBrut - totalDesc;
 
 // saida de dados
 document.write('<p>O salario liquido é de:' + salarioLiq);
