class AnotacoesController {
    constructor() {
        this.anotacoesBancoDados = [];
    }
    addAnotacao() {
        const titulo = $('#titulo').val();
        const descricaoTarefa = $('#descricaoTarefa').val();
        const anotacao = new Anotacoes(titulo, descricaoTarefa);
        console.log(anotacao);
        this.anotacoesBancoDados.push(anotacao);
        console.log(this.anotacoesBancoDados);
    }
}
const aController = new AnotacoesController()

$('#submit').click((e) => {
    e.preventDefault();
    aController.addAnotacao();
});