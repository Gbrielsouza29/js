// função criar motorista
function criaMotorista(nome,idade, carteira) {
    let moto = {};
    moto.idade = idade;
    moto.carteira = carteira;
    moto.nome = nome;
    return moto;
// retornar valor
    function retornaCarta(){
        return moto.carteira + moto.nome
    }
};
// atribuição objeto motorista
let moto1= criaMotorista('gabriel',17, true);
let podeDirigir = moto1.idade >= 18 && moto1.carteira;
// estrutura de repetição
if(podeDirigir === true){
    console.log(moto1.nome,'pode dirigir');
    } else{
        console.log('O', moto1.nome, 'não pode dirigir ainda');
        }