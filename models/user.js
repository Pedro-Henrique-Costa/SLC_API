const mongoose = require("mongoose")

const { Schema } = mongoose;

const { carSchema } = require("./car")

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone,
    cpf,
    cnh,
    cep,
    adress,
    city,
    estate,
    picture,
    password: {
        type: String,
        required: true
    },
    locador: {
        type: Boolean,
        required: true
    },
    carrosAlugados: {
        type: [carSchema],
    },
    carrosParaLocacao: {
        type: [carSchema],
    }
   },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = {
    User,
    userSchema
};