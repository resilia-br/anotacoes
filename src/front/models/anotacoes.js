class Anotacoes{
    constructor(titulo, notas){
        if(typeof titulo != 'string' && typeof notas != 'string'){
            throw new Error ('Criação de notas, dados inválidos')
        }else{
            this.titulo = titulo;
            this.notas = notas; 
        }
    }
}
$('.btn').on('click',function(event){
    event.preventDefault()
    const recebeAnotacoes = new Anotacoes($('#titulo').val(),$('#descricaoTarefa').val())
    console.log($('#titulo').val())
    console.log($('#descricaoTarefa').val())
    console.log(recebeAnotacoes.titulo, recebeAnotacoes.notas)
})