
verificavelocidade(80);
function verificavelocidade(velocidade) {
    const  limite =70;
    if (velocidade <= limite) {
        console.log('dentro da velocidade permitida');
        }else if (velocidade > limite){  velocidade = velocidade - limite;
                 console.log('você ultrapassou o limite em', velocidade, 'KM');
                 const multa = Math.floor(velocidade / 5);
                if(multa>=10){
                console.log('Você levou', multa, 'pontos a sua carteira será suspensa'); 
                             }else if(multa > 0){
                             console.log('você vai levar ', multa, 'pontos na carteira');
                            }
            }
    }       
       



