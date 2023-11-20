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
    },
    getAll: async (req, res) => {
        try {
            const cars = await CarModel.find();

            res.json(cars);
        } catch (error) {
            console.log(error)
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const car = await CarModel.findById(id);
            if(!car){
                res.status(404).json({msg: "Carro não encontrado." })
                return;
            }
            res.json(car);
        } catch (error) {
            console.log(error)
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id
            const car = await CarModel.findById(id)
            if(!car){
                res.status(404).json({msg: "Carro não encontrado." })
                return;
            }
            const deletedCar = await CarModel.findByIdAndDelete(id)
            res.status(200).json({deletedCar, msg: "Carro excluido com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    },
    update: async(req, res) => {
        try {
            
            const id = req.params.id

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

            const updatedCar = await CarModel.findByIdAndUpdate(id, car)

            if(!updatedCar){
                res.status(404).json({msg: "Carro não encontrado." })
                return;
            }

            res.status(200).json({car, msg: "Carro atualizado com sucesso!"})

        } catch (error) {
            console.log(error)
        }
    }
};

module.exports = carController;