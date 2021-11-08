

js_num = parseInt(prompt('informe o número :'));

 document.write('estamos no mês de ' + js_mes)
document.write('<p>js_num <b><</b> 50 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta => ');((js_num < 50) ? document.write('<b>SIM</b>') : document.write('<b>NÃO</b>'));
document.write('<p>(js_num <b>-</b> 20) <b>==</b> 0 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta => ');((js_num - 20 == 0) ? document.write('<b>SIM</b>+ js_num') : document.write('<b>NÃO</b>'));

/*
var js_mes ;
js_mes= 1;
while(js_mes <5){
  document.write('<p>o ano não acabou');
  js_mes +=1;
}
/*
var contador =1;
continuar=true;
while(js_mes ==true){
  document.write('<p>vamos repitir');
  contador +=1;
  continuar = window.confirm('Deseja continuar?');
  /*
var js_mes ;
for(js_mes=1; js_mes<=12;js_mes+=2){
  document.write('<p>o ano não acabou');
}
/*