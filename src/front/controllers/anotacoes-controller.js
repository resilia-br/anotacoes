class AnotacoesController {
    constructor() {
        this.array = [];
    }
    addAnotacao() {
        const titulo = $('#titulo').val();
        const descricaoTarefa = $('#descricaoTarefa').val();
        const anotacao = new Anotacoes(titulo, descricaoTarefa);
        console.log(anotacao);
        this.array.push(anotacao);
        console.log(this.array);
    }
}
