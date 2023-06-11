import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// router
import pemilikRoute from "./routes/pemilikRoute.js";
import penyewaRoute from "./routes/penyewaRoute.js";


const app = express();

// koneksi database
mongoose.connect('mongodb+srv://yanfaisn:rahasiabanget@pengelolaankos.jbj2zdi.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// function handler ketika peristiwa tertentu
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

// middleware
app.use(cors());
app.use(express.json());

// route
app.use(pemilikRoute);
app.use(penyewaRoute);

const port = 5000;
// listen port
app.listen(port, () => console.log(`Server up and running in ${port}`));
