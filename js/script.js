var disciplinasSelecionadas = [];

function selecionarDisciplina(id, materia){
    disciplinasSelecionadas.push({
        id: id,
        materia: materia
    });
    console.log("Id da materia:",id,"Materia:",materia)
}

function irParaCadastro() {
    window.location.href = "cadastro.html";
}