import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FormAddPenyewa = () => {

    const navigate = useNavigate();

    const [nik, setNik] = useState("");
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");
    const [no_telp, setNo_telp] = useState("");

    const savePenyewa = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/penyewa", {
                nik,
                nama,
                email,
                alamat,
                no_telp
            });
            navigate("/penyewa");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='row mt-5 mb-3'>
                    <div className='col'>
                        <div>
                            <h1>Form Tambah Penyewa</h1>
                            <form onSubmit={savePenyewa} >
                                <div class="mb-3">
                                    <label for="id" class="form-label">Nik</label>
                                    <input type="text" class="form-control" id="nik" value={nik} onChange={(e) => setNik(e.target.value)} />
                                </div>
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
                                <div class="mb-3">
                                    <label class="form-label" for="no_telp">No telpon</label>
                                    <input type="text" class="form-control" id="no_telp" value={no_telp} onChange={(e) => setNo_telp(e.target.value)} />
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

export default FormAddPenyewa
