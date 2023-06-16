import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const FormAddPemilik = () => {

    const navigate = useNavigate();

    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");

    const savePemilik = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/pemilik',
                {
                    nama,
                    email,
                    alamat
                }
            );
            navigate('/pemilik');
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>

            <div className='container'>
                <div className='row mt-5'>
                    <div className='col'>
                        <div>
                            <h1>Form Tambah Pemilik</h1>
                            <form onSubmit={savePemilik} >
                                <div class="mb-3">
                                    <label for="nama" class="form-label">Nama</label>
                                    <input type="text" class="form-control" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="alamat">Alamat</label>
                                    <input type="text" class="form-control" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                                </div>
                                <button type="submit" class="btn btn-primary">Simpan</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FormAddPemilik
