class Anotacoes{

    constructor(titulo, notas){

        try{
            if(typeof titulo === 'string' && typeof notas === 'string'){
                this.titulo = titulo;
                this.notas = notas;
    
            }else {
                throw new Error('criacao de notas- dados invalidos')
            }

        } catch(erro){
            console.error(erro);
        }  

    }

}