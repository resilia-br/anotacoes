class AnotacoesController {
    constructor() {
        this.anotacoesBd = [];
    }
    addAnotacao() {
        const titulo = $('#titulo').val();
        const descricaoTarefa = $('#descricaoTarefa').val();
        const anotacao = new Anotacoes(titulo, descricaoTarefa);
        console.log(anotacao);
        this.anotacoesBd.push(anotacao);
        console.log(this.anotacoesBd);
    }
}
