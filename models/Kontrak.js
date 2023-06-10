import mongoose from "mongoose";

const KontrakSchema = mongoose.Schema({
    kode: {
        type: String,
        required: true
    },
    tgl_mulai: {
        type: Date,
        required: true
    },
    tgl_selesai: {
        type: Date,
        required: true
    },
    tgl_bayar: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    metode_bayar: {
        type: String,
        required: true
    },
    kamar_id: {
        type: Array,
        default: [],
        required: true
    },
    penyewa_id: {
        type: Array,
        default: [],
        required: true
    },
});

const Kontrak = mongoose.model('Kontrak', KontrakSchema);

export default Kontrak;