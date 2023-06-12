import mongoose from "mongoose";

const KamarSchema = mongoose.Schema({
    nama_kamar: {
        type: String,
        required: true
    },
    fasilitas: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const Kamar = mongoose.model('Kamar', KamarSchema);

export default Kamar;