import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditPenyewa = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nik, setNik] = useState("");
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");
    const [no_telp, setNo_telp] = useState("");

    const updatePenyewa = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/penyewa/${id}`, {
                nik,
                nama,
                email,
                alamat,
                no_telp
            });
            navigate('/penyewa');
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const getPenyewaById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/penyewa/${id}`);
                setNik(response.data.nik);
                setNama(response.data.nama);
                setEmail(response.data.email);
                setAlamat(response.data.alamat);
                setNo_telp(response.data.no_telp);
            } catch (error) {
                console.log(error);
            }
        }
        console.log(id);
        getPenyewaById();
    }, [])



    return (
        <div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col'>
                        <div>
                            <h1>Form Edit Penyewa</h1>
                            <form onSubmit={updatePenyewa} >
                                <div class="mb-3">
                                    <label for="nik" class="form-label">Nik</label>
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
                                    <label class="form-label" for="no_telp">No Telepon</label>
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

export default FormEditPenyewa
