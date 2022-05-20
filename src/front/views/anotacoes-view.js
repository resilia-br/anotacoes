class AnotacoesView {
    renderizaAnotacao(anotacoes) { // nao é pra pegar a classe toda
        $('#notes').html(`${$('#notes').html()}<div><h6>${anotacoes.titulo}</h6><p>${anotacoes.notas}</p></div>`) 
    }
}