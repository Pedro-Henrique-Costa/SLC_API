const mongoose = require("mongoose")

async function main() {
    try {
        await mongoose.connect(
            "mongodb+srv://pedrocosta:AdMANxwQVVGE4k0F@cluster0.41eislf.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Conectado ao banco.")
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = main;