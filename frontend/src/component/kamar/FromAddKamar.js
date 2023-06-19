import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FromAddKamar = () => {

    const { kosId } = useParams();
    const navigate = useNavigate();

    const [nama_kamar, setNama_kamar] = useState("");
    const [fasilitas, setFasilitas] = useState("");
    const [harga, setHarga] = useState("");
    const [statusKamar, setStatusKamar] = useState("");

    const saveKamar = async (e) => {
        try {
            e.preventDefault();
            await axios.post(`http://localhost:5000/kamar/${kosId}`, {
                nama_kamar,
                fasilitas,
                harga,
                status: statusKamar
            });
            navigate(`/kamar/${kosId}`);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <div className='container mb-5'>
                <div className='row mt-5'>
                    <div className='col'>
                        <div>
                            <h1>Form Tambah Kamar</h1>
                            <form onSubmit={saveKamar}>
                                <div class="mb-3">
                                    <label for="nama_kamar" class="form-label">Nama kamar</label>
                                    <input type="text" class="form-control" id="nama_kamar" value={nama_kamar} onChange={(e) => setNama_kamar(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="fasilitas">Fasilitas</label>
                                    <input type="text" class="form-control" id="fasilitas" value={fasilitas} onChange={(e) => setFasilitas(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="harga" class="form-label">Harga</label>
                                    <input type="text" class="form-control" id="harga" value={harga} onChange={(e) => setHarga(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="status" class="form-label">Status</label>
                                    <input type="text" class="form-control" id="status" value={statusKamar} onChange={(e) => setStatusKamar(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-primary">Simpan</button>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}

export default FromAddKamar
