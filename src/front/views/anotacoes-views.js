class AnotacoesView {
  renderizaAnotacao(note) {
    $('#notes').empty();
    note.map((item) => {
      $('#notes').append(`
      <div>
        <h6>${item.titulo}</h6>
        <p>${item.notas}</p>
      </div>
    `);
    });
  }
}
