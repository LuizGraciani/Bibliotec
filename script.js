const livro1 = {
    sintese: "Aqui vai a síntese do livro 1.",
    resumo: "Um breve resumo do livro 1.",
    avaliacao: "10/10",
    genero: "Gênero do livro 1"
};

const genero1 = {
    descricao: "Descrição do Gênero 1 e informações adicionais."
};


document.getElementById("sinteseLivro1").textContent = livro1.sintese;
document.getElementById("resumoLivro1").textContent = livro1.resumo;
document.getElementById("avaliacaoLivro1").textContent = livro1.avaliacao;
document.getElementById("generoLivro1").textContent = livro1.genero;

document.getElementById("sinteseLivro2").textContent = livro2.sintese;
document.getElementById("resumoLivro2").textContent = livro2.resumo;
document.getElementById("avaliacaoLivro2").textContent = livro2.avaliacao;
document.getElementById("generoLivro2").textContent = livro2.genero;

document.getElementById("genero1").textContent = genero1.descricao;
document.getElementById("genero2").textContent = genero2.descricao;
document.getElementById("genero3").textContent = genero3.descricao;
