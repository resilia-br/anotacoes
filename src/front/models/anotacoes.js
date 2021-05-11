class Anotacoes {
    constructor( titulos, notas ){

        if (typeof titulos == 'string'){
            this._titulos = titulos
            this._notas = notas
        } else {
            throw new Error("Error")
        }
     

    }

}

const papelaria = new Anotacoes('lápis', 'caneta', 'caderno')
console.log(papelaria)