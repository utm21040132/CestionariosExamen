import {Schema,model } from "mongoose"

const Esquema = new Schema({
    Pregunta_1:{
        type:String
    },
    Pregunta_2:{
        type:String
    },
    Pregunta_3:{
        type:String
    },
    Pregunta_4:{
        type:String
    }
})
export const Modelo = new model("Cuestionario", Esquema)