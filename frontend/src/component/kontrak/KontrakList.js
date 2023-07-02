import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const KontrakList = () => {
    const [kontrak, setKontrak] = useState([]);
    
    useEffect(() => {
        getKontrak();
    }, []);

    const getKontrak = async () => {
        try {
            const response = await axios.get("http://localhost:5000/kontrak");
            setKontrak(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteKontrak = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/kontrak/${id}`);
            getKontrak();
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <div className='container-fluid'>
                <Link className="btn btn-success  ms-5 mt-5" to={'/addKontrak'}>Tambah Kos</Link>
                <div className='row mt-3 me-4 ms-4'>
                    <div className='col'>
                        <div className='card'>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Kode Kontrak</th>
                                        <th>Taggal Mulai</th>
                                        <th>Tanggal Selesai</th>
                                        <th>Tanggal Bayar</th>
                                        <th>Status</th>
                                        <th>Metode Pembayaran</th>
                                        <th>Kamar</th>
                                        <th>Penyewa</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kontrak.map((k, index) => (
                                        <tr key={k._id}>
                                            <td>{index + 1}</td>
                                            <td>{k.kode}</td>
                                            <td>{k.tgl_mulai}</td>
                                            <td>{k.tgl_selesai}</td>
                                            <td>{k.tgl_bayar}</td>
                                            <td>{k.status}</td>
                                            <td>{k.metode_bayar}</td>
                                            {k.kamar_id.map((kmr, index) => (
                                                <td>{kmr.nama_kamar}</td>
                                            ))}
                                            {k.penyewa_id.map((p, index) => (
                                                <td>{p.nama}</td>
                                            ))}
                                            <td>
                                                <Link to={`/editKontrak/${k._id}`} className="btn btn-warning text-light">edit</Link>
                                                <button className="btn btn-danger text-light ms-2" onClick={() => deleteKontrak(k._id)}>hapus</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KontrakList
