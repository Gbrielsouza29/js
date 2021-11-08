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
descINSS = parseFloat(window.prompt('informe o percentual de desconto do INSS 05 a 15:'));
// Processamento
salarioBrut = valorHora * horaTrab;
totalDesc = (descINSS/100) * salarioBrut;
salarioLiq = salarioBrut - totalDesc;
// saida de dados
if (horaTrab > 180){
document.write('Quantidade maxima de horas trabalhadas expedida');
} if (horaTrab < 135){
document.write('Quantidade minima de horas trabalhadas invalida');
}if (valorHora > 50){
document.write('valor maximo pago por hora trabalhada expedido');
}if (valorHora < 25){
document.write('valor minimo pago por hora trabalhada invalido');
}if (descINSS > 15){
document.write('percentual maximo de desconto expedido');
}if (valorHora < 25){
document.write('percentual minimo de desconto invalido');
}
// saida de dados
document.write('<p>===============================================================');
document.write('<p>O salario bruto é:' + salarioBrut);
document.write('<p>O valor a ser recolhido pelo fundo de garantia é:' + totalDesc);
document.write('<p>O salario liquido é:' + salarioLiq);

// saida com aninhamento

if(salarioLiq > 10500){
document.write('<p>O salario está muito alto');
} else{
		if(salarioLiq >= 6000){
			document.write('<p>O salario está satisfátorio');
		}
    	else{
			if(salarioLiq > 3000){
				document.write('<p>O salario moderado');
			}
		}
    }		
