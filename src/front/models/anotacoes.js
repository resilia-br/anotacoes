class Anotacoes {
    constructor(titulo, notas) {
        try {
            if (typeof this.titulo == String || typeof this.notas == String) {
                return titulo;
                return notas;
            } else if (typeof this.titulo !== String || typeof this.notas !== String) {
                throw new Error('Criação de notas - dados inválidos');
            }
        } catch (erro) {
            console.log(erro);
        }
    }
}

let bloquinho = new Anotacoes(1, 1);

