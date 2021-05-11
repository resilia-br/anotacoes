class Anotacoes{
    constructor(titulo, notas){
        this.titulo = titulo;
        this.notas = notas;
    }
    verifica(){
        if(typeof this.titulo != 'string'){
            throw new Error ('Criação de notas, dados inválidos')
        }
    }
}