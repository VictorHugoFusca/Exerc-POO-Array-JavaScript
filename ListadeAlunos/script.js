const alunos = [];

function adicionarAluno() {
  const nome = document.getElementById('nome').value;
  const matricula = document.getElementById('matricula').value;
  const nota = parseFloat(document.getElementById('nota').value);

  const aluno = {
    nome: nome,
    matricula: matricula,
    nota: nota
  };

  alunos.push(aluno);
  console.log(`Aluno ${nome} adicionado com sucesso.`);
}

function calcularMedia() {
  let somaNotas = 0;
  for (const aluno of alunos) {
    somaNotas += aluno.nota;
  }

  const media = somaNotas / alunos.length;
  return media.toFixed(2);
}

function exibirResultado() {
  const media = calcularMedia();
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `Nome: ${alunos[0].nome}<br>Matrícula: ${alunos[0].matricula}<br>Média: ${media}`;
}

document.getElementById('adicionar').addEventListener('click', adicionarAluno);
document.getElementById('calcular-media').addEventListener('click', exibirResultado);
