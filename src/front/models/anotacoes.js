class Anotacoes {
  constructor(titulo, notas) {
    try {
      if (typeof titulo == 'string' && typeof notas == 'string') {
        this.titulo = titulo;
        this.notas = notas;
      } else {
        throw new Error('Criação de notas - dados inválidos');
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

let test = new Anotacoes(123, 'asdfb');
test.getInfo();
