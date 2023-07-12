function salvarCadastro(){
    var nome = document.getElementById('nome').value;
    var dataNas = document.getElementById('dataNas').value;
    var endereco = document.getElementById('endereco').value;
    var telefone = document.getElementById('tel').value;
    var email = document.getElementById('email').value;

    var disciplinasSelecionadas = [];

    var aluno = {
        nome: nome,
        dataNas: dataNas,
        endereco: endereco,
        telefone: telefone,
        email: email,
        disciplinas: disciplinasSelecionadas
};

var alunoJSON = JSON.stringify(aluno);

console.log(alunoJSON);

window.location.href = "confirmacao.html";
}