import mongoose from "mongoose";

const PemilikSchema = mongoose.Schema({
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
});

const Pemilik = mongoose.model('Pemilik', PemilikSchema);

export default Pemilik;