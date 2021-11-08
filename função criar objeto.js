
function criaPessoa(id,nome, sobrenome,CPF, altura, telefone,) {
    let pessoa = {};
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;
    pessoa.CPF = parseInt(CPF);
    pessoa.altura = parseFloat(altura);
    pessoa.telefone = telefone;
    

    function nomeCompleto() {
        return pessoa.nome + pessoa.sobrenome + pessoa.altura + pessoa.telefone + pessoa.CPF;
    }
    pessoa.nomeCompleto = nomeCompleto;
    return pessoa

let pessoaA = criaPessoa('Gabriel','Souza', 45155924839, 1.70, '988841377');
let pessoaB = criaPessoa('Pedro', 'Souza', 25588423812, 1.75, '988841377');
pessoaA.nomeCompleto();

  

}
