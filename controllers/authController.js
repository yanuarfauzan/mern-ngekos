import User from "../models/User.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
    const { nama, email, password } = req.body;
    try {
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            nama,
            email,
            password: passwordHash
        })

        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ message: "User does not exist" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "invalid credentials" });

        delete user.password;
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}