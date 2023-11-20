const mongoose = require("mongoose")

const { Schema } = mongoose;

const { userSchema } = require("./user")

const carSchema = new Schema({
    locador: {
        type: [userSchema],
        required: true
    },
    pontoDeRetirada: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    placa: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    precoDiaria: {
        type: String,
        required: true
    },
    reservistalocador: {
        type: [userSchema],
    },
    // ano,
    // estadoConcervacao,
    // tempoDeUso,
    // quilometragem,
    // economia,
    // revisao,
    // precoHora,
    // observacao,
    // descricao,
    // limiteDeDias,
    // pontoDeEntrega,
    foto: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

module.exports = {
    Car,
    carSchema
};