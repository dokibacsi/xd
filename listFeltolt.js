class listaFeltolt{
    constructor(){
        this.list = []
        this.#listaFeltoltes(this.list)
    }   

    #listaFeltoltes(list){
        for (let index = 0; index < 20; index++) {
            const number = Math.floor(Math.random() * (100 - 1) + 1)
            if(list[index] !== number){
                list.push(number);
            }
            
        }
    }

    getList(){
        return this.list
    }
}

export default listaFeltolt