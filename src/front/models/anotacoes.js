class Anotacoes {
    constructor (titulos, notas) {
      try {
        if (typeof titulos === 'string' && typeof notas === 'string') {
          this.titulos = titulos;
          this.notas = notas;
        } else {
          throw new Error ("Criação de notas - Dados inválidos")
        }
      } catch (erro) {
        alert(erro)
      };
  
      
    }
}