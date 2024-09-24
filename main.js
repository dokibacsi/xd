import ASD from "./ASD.js"
import listaFeltolt from "./listFeltolt.js"
$(()=>{
    const pe = $("#AAE")
    new ASD(pe, new listaFeltolt().getList())
})