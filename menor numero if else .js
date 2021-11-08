var n1;
var n2;
var n3;
n1=parseInt(window.prompt('informe o primeiro número'))
n2=parseInt(window.prompt('digite o segundo número'))
if(n1<n2){
  n3=n1;
  n1=n2;
  n2=n3;
}
  document.write('<p><b> os números na ordem decrescente são' + n1 + "e"  + n2);
  // menor de dois numeros com declaração ternaria
numero1 = parseInt(prompt('digite o primeiro número'));