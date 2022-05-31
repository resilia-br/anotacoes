class Anotacoes {
    constructor(titulo, notas) {
        try {
            if (typeof titulo === 'string' && typeof notas == 'string') {
                this.titulo = titulo;
                this.notas = notas;
            } else {
                throw new Error('Criação de notas - dados inválidos');
            }
        } catch (erro) {
            console.error(erro);
            alert(erro);
        }
        console.log(`${this.titulo}: ${this.notas}`)
    }
}
