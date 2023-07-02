import Kontrak from '../models/Kontrak.js';
import Kamar from '../models/Kamar.js';
import Penyewa from '../models/Penyewa.js';
import moment from 'moment';


export const getKontrak = async (req, res) => {
    try {
        const kontrak = await Kontrak.find().populate('kamar_id').populate('penyewa_id');
        res.json(kontrak);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getKontrakById = async (req, res) => {
    try {
        const kontrak = await Kontrak.findById(req.params.id).populate('kamar_id').populate('penyewa_id');
        res.json(kontrak);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const saveKontrak = async (req, res) => {
    const { kode, tgl_mulai, tgl_selesai, tgl_bayar, status, metode_bayar, kamar_id, penyewa_id } = req.body;
    try {
        const kamar = await Kamar.findById(kamar_id);
        const penyewa = await Penyewa.findById(penyewa_id);

        if (!kamar) {
            return res.status(404).json({ error: 'kamar not found' });
        }

        if (!penyewa) {
            return res.status(404).json({ error: 'penyewa not found' });
        }

        // format date

        const tglMulai = new Date(tgl_mulai);
        const formattedTglMulai = moment(tgl_mulai).format('DD/MM/YYYY');

        const kontrak = new Kontrak({
            kode,
            tgl_mulai: formattedTglMulai,
            tgl_selesai,
            tgl_bayar,
            status,
            metode_bayar,
            kamar_id: kamar._id,
            penyewa_id: penyewa._id
        })

        const savedKontrak = await kontrak.save();

        // Mengubah objek Kontrak sebelum dikirim sebagai respons JSON
        const responseKontrak = {
            ...savedKontrak._doc,
            tgl_mulai: formattedTglMulai // Menggunakan tanggal yang diformat
        };
        res.status(201).json(responseKontrak);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const updateKontrak = async (req, res) => {
    const { id } = req.params.id;
    const { kode, tgl_mulai, tgl_selesai, tgl_bayar, status, metode_bayar, kamar_id, penyewa_id } = req.body;
    try {
        const kamar = await Kamar.findById(kamar_id);
        const penyewa = await Penyewa.findById(penyewa_id);

        if (!kamar) {
            return res.status(404).json({ error: 'kamar not found' });
        }

        if (!penyewa) {
            return res.status(404).json({ error: 'penyewa not found' });
        }

        const updatedKontrak = Kontrak.findByIdAndUpdate(id, {
            kode,
            tgl_mulai,
            tgl_selesai,
            tgl_bayar,
            status,
            metode_bayar,
            kamar_id: kamar._id,
            penyewa: penyewa._id
        }, { new: true });

        res.status(200).json(updatedKontrak);
        if (!updatedKontrak) {
            return res.status(404).json({ error: "Failed to update kontrak" });
        }

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteKontrak = async (req, res) => {
    try {
        const { id } = req.params;
        const kontrak = await Kontrak.findById(id);
        if (!kontrak) {
            return res.status(404).json({ error: 'Kontrak not found' });
        }

        const deletedKontrak = await kontrak.deleteOne({ _id: id });
        res.json(deletedKontrak);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}