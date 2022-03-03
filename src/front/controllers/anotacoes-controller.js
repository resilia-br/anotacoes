class AnotacoesController {
  constructor() {
    this.anotacoes = [];
  }

  addAnotacao() {
    let titulo = $('#titulo').val();
    let notas = $('#descricaoTarefa').val();
    let note = new Anotacoes(titulo, notas);
    this.anotacoes.push(note);
  }
}

let anotacaoClasses = new AnotacoesController();
let anotacaoView = new AnotacoesView();

$('#submit').click(function (event) {
  event.preventDefault();
  anotacaoClasses.addAnotacao();
  anotacaoView.renderizaAnotacao(anotacaoClasses.anotacoes);
});
