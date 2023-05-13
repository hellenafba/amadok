var pessoas = [
  { nome: 'helena', idade: 23 },
  { nome: 'joão', idade: 12 },
  { nome: 'bela', idade: 15 },
];

function retornaMenores(pessoas) {
  var pessoasMenorIdade = []
  for (pessoa of pessoas) {
    if (pessoa.idade < 18){
      pessoasMenorIdade.push(pessoa)
    }
  }

  return pessoasMenorIdade
}

var menorIdade = retornaMenores(pessoas)

console.log(menorIdade)