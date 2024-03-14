import mongoose from "mongoose";

const Restaurantes = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


export default mongoose.model("Restaurantes", Restaurantes);