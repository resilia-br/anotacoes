class Anotacoes{
    constructor(titulo, notas){
        try {
            if(typeof titulo === "string" && typeof notas === "string"){
                this.titulo=titulo
                this.notas = notas
            }else{
                throw new Error("Criação de notas - Dados inválidos")
            }
        } catch (error) {
            console.error(error)
        }
    }
}