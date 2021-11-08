// fizzbuzz
// avalia se a entrada de dados atende a duas ou uma condição apresentada e imrprimi ovalor natela
// ex numeros divisiveis por 3 e 5
let numero =FizzBuzz(20);
console.log(numero);
function FizzBuzz(entrada){
    if (typeof entrada !=='number')
    return 'não é um número'; 
      if((entrada % 3 == 0 ) && (entrada % 5 == 0 ))
    return 'FizzBuzz';
    if (entrada % 3 == 0)
    return 'Fizz';
    if (entrada % 5 == 0)
    return 'Buzz';
    return entrada;
}