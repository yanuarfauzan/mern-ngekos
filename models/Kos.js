import mongoose from "mongoose";

const KosSchema = mongoose.Schema({
    nama: {
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
    },
    pemilik_id: {
        type: Array,
        default: [],
        required: true
    },
});


const Kos = mongoose.model('Kos', KosSchema);

export default Kos;