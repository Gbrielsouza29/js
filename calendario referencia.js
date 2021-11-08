var js_mes

function verificames(){
js_mes = parseInt(prompt('informe o número o mês:'));
switch (js_mes) {
case 1  : js_mes = 'Janeiro'; break;
case 2  : js_mes = 'Fevereiro';break;
case 3  : js_mes = 'Marco'; break;
 case 4  : js_mes = 'Abril'; break;
 case 5  : js_mes = 'Maio'; break;
 case 6  : js_mes = 'Junho'; break;
 case 7  : js_mes = 'Julho'; break;
 case 8  : js_mes = 'Agosto'; break;
 case 9  : js_mes = 'Setembro'; break;
 case 10 : js_mes = 'Outubro'; break;
 case 11 : js_mes = 'Novembro'; break;
 case 12 : js_mes = 'Dezembro'; break;}/* Final da estrutura de Seleção Múltipla switch...case */
 document.write('estamos no mês de ' + js_mes)