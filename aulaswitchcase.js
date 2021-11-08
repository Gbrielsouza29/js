let a = 'vermelho';
let b = 'azul';
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

let permissao;
permissao = 'gerente';
switch (permissao) {
    case 'comun':
        console.log('usuario comun');
        break;
    case 'gerente':
        console.log('usuario gerente');
        break;
    case 'diretor':
        console.log('usuario diretor');
        break;
    default:
        console.log('Usúario não encontrado');
}
