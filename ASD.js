class ASD{
    #pe
    #list
    constructor(pe, list){
        this.#pe = pe;
        this.#list = list
        console.log(this.#list)
        const listText = this.#listOsszeallit(this.#list)
        this.#listMegjelenit(this.#pe, listText);
        
    }

    #listOsszeallit(szamList){
        let text = `<select name='listName' id='listName'>`
        console.log(szamList)
        for (let index = 0; index < szamList.length; index++) {
            console.log(index)
            text += `<option value="list${szamList[index]}">${szamList[index]}</option>`
        }
        console.log("ASD")
        text += "</select>"
        return text
    }

    #listMegjelenit(pe, text){
        pe.append(text)
    }
}

export default ASD