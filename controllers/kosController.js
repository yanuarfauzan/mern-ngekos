import Kos from "../models/Kos.js";
import Pemilik from "../models/Pemilik.js";

export const getKos = async (req, res) => {
    try {
        const kos = await Kos.find().populate('pemilik_id');
        res.json(kos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getKosById = async (req, res) => {
    try {
        const kos = await Kos.findById(req.params.id).populate('pemilik_id');
        res.json(kos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const saveKos = async (req, res) => {
    const { nama, alamat, no_telp, pemilik_id } = req.body;
    try {
        const pemilik = await Pemilik.findById(pemilik_id);
        if (!pemilik) {
            return res.status(404).json({ error: 'Pemilik not found' });
        }

        const kos = new Kos({
            nama,
            alamat,
            no_telp,
            pemilik_id: pemilik._id
        });

        const savedKos = await kos.save();
        res.status(201).json(savedKos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const updateKos = async (req, res) => {
    const { id } = req.params;
    const { nama, alamat, no_telp, pemilik_id } = req.body;
    try {
        const pemilik = await Pemilik.findById(pemilik_id);

        if (!pemilik) {
            return res.status(404).json({ error: 'Pemilik not found' });
        }

        const updatedKos = await Kos.findByIdAndUpdate(id, {
            nama,
            alamat,
            no_telp,
            pemilik_id: pemilik._id
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

        const pemilik_id = kos.pemilik_id;

        await kos.deleteOne({ _id: id });

        const pemilik = await Pemilik.findById(pemilik_id);
        if (pemilik) {
            kos.pemilik.pull(id);
            await pemilik.save();
        };
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}