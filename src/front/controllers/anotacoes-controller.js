class AnotacoesController {
    constructor() {
        this.anotacoesBancoDados = [];
    }
    addAnotacao() {
        const titulo = $('#titulo').val();
        const descricaoTarefa = $('#descricaoTarefa').val();
        const anotacao = new Anotacoes(titulo, descricaoTarefa); // cria a anotação
        this.anotacoesBancoDados.push(anotacao);
        const anotacaoView = new AnotacoesView();
        anotacaoView.renderizaAnotacao(anotacao); // põe na tela
    }
}
const aController = new AnotacoesController()

$('#submit').click((e) => {
    e.preventDefault();
    aController.addAnotacao();
});