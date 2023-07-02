import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditPemilik = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");

    const updatePemilik = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/pemilik/${id}`, {
                nama,
                email,
                alamat
            });
            navigate("/pemilik");
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getPemilikById = async () => {
            const response = await axios.get(`http://localhost:5000/pemilik/${id}`);
            setNama(response.data.nama);
            setEmail(response.data.email);
            setAlamat(response.data.alamat);
        }

        getPemilikById();
    }, [id]);


    return (
        <div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col'>
                        <div>
                            <h1>Form Edit Pemilik</h1>
                            <form onSubmit={updatePemilik} >
                                <div className="mb-3">
                                    <label htmlFor="nama" className="form-label">Nama</label>
                                    <input type="text" className="form-control" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="alamat">Alamat</label>
                                    <input type="text" className="form-control" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-primary">Simpan</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FormEditPemilik
