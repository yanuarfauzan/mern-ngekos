import Kos from "../models/Kos.js";
import Pemilik from "../models/Pemilik.js";
import Kamar from "../models/Kamar.js";

export const getKos = async (req, res) => {
    try {
        const kos = await Kos.find().populate('pemilik_id').populate('kamar_id');
        res.json(kos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getKosById = async (req, res) => {
    try {
        const kos = await Kos.findById(req.params.id).populate('pemilik_id').populate('kamar_id');
        res.json(kos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const saveKos = async (req, res) => {
    const { nama, alamat, no_telp, pemilik_id, kamar_id } = req.body;
    try {
        const pemilik = await Pemilik.findById(pemilik_id);
        const kamar = await Kamar.findById(kamar_id);
        if (!pemilik) {
            return res.status(404).json({ error: 'Pemilik not found' });
        }
        if (!kamar) {
            return res.status(404).json({ error: "Kamar not found" });
        }

        const kos = new Kos({
            nama,
            alamat,
            no_telp,
            pemilik_id: pemilik._id,
            kamar_id: kamar._id,
        });

        const savedKos = await kos.save();
        res.status(201).json(savedKos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const updateKos = async (req, res) => {
    const { id } = req.params;
    const { nama, alamat, no_telp, pemilik_id, kamar_id } = req.body;
    try {
        const pemilik = await Pemilik.findById(pemilik_id);
        const kamar = await Kamar.findById(kamar_id);
        if (!pemilik) {
            return res.status(404).json({ error: 'Pemilik not found' });
        }
        if (!kamar) {
            res.status(404).json({ error: "Kamar not found" })
        }

        const updatedKos = await Kos.findByIdAndUpdate(id, {
            nama,
            alamat,
            no_telp,
            pemilik_id: pemilik._id,
            kamar_id: kamar._id,
        }, { new: true });

        res.status(200).json(updatedKos);
        if (!updatedKos) {
            return res.status(500).json({ error: 'Failed to update kos' });
        }


    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteKos = async (req, res) => {
    try {
        const { id } = req.params;
        const kos = await Kos.findById(id);
        if (!kos) {
            return res.status(404).json({ error: 'Kos not found' });
        }
        const deletedKos = await kos.deleteOne({ _id: id });
        res.json(deletedKos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}