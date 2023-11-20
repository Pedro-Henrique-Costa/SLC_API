const { Car: CarModel } = require("../models/car");

const carController = {
    
    create: async(req, res) => {
        try {
            
            const car = {
                locador: req.body.locador,
                reservista: req.body.reservista,
                pontoDeRetirada: req.body.pontoDeRetirada,
                statusCar: req.body.statusCar,
                placa: req.body.placa,
                modelo: req.body.modelo,
                precoDiaria: req.body.precoDiaria,
                foto: req.body.foto
            };

            const response = await CarModel.create(car);

            res.status(201).json({response, msg: "Carro criado com sucesso!"})

        } catch (error) {
            console.log(error)
        }
    }
};

module.exports = carController;