import Kamar from '../models/Kamar.js';
import Kos from '../models/Kos.js';


export const getKamar = async (req, res) => {
    try {
        const kamar = await Kamar.find();
        res.json(kamar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getKamarById = async (req, res) => {
    try {
        const kamar = await Kamar.findById(req.params.id);
        res.json(kamar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getKamarByKos = async (req, res) => {
    try {
        const kos = await Kos.findById(req.params.kosId).populate('kamar_id');
        res.json(kos.kamar_id);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const saveKamar = async (req, res) => {
    const kos = await Kos.findById(req.params.kosId);
    const kamar = new Kamar(req.body);
    try {
        const savedKamar = await kamar.save();
        kos.kamar_id.push(savedKamar._id);
        await kos.save();
        res.status(201).json(savedKamar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const updateKamar = async (req, res) => {
    try {
        const kos = await Kos.findById(req.params.kosId);
        const kamar = await Kamar.findById(req.params.id);
        const updatedKamar = await Kamar.updateOne({ _id: req.params.id }, { $set: req.body });
        kos.kamar = updatedKamar;
        res.status(200).json(updatedKamar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteKamar = async (req, res) => {
    try {
        const kos = await Kos.findById(req.params.kosId);
        const deletedKamar = await Kamar.deleteOne({ _id: req.params.id });
        kos.kamar_id.pull(deletedKamar._id);
        res.status(200).json(deletedKamar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}