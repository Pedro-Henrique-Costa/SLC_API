const mongoose = require("mongoose")

const { Schema } = mongoose;

const { userSchema } = require("./user");
const { Double } = require("mongodb");

const carSchema = new Schema({
    locador: {
        type: [userSchema],
    },
    pontoDeRetirada: {
        type: String,
        required: true
    },
    statusCar: {
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
    reservista: {
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