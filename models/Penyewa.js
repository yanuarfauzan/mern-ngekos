import mongoose from "mongoose";

const PenyewaSchema = mongoose.Schema({
    nik: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    no_telp: {
        type: Number,
        required: true
    }
});

const Penyewa = mongoose.model('Penyewa', PenyewaShema);

export default Penyewa;