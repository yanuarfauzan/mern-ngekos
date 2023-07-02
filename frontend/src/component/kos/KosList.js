import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const KosList = () => {

    const [kos, setKos] = useState([]);

    useEffect(() => {
        getKos();
    }, []);

    const getKos = async () => {
        const response = await axios.get("http://localhost:5000/kos");
        setKos(response.data);
        console.log(response.data);
    }

    const deleteKos = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/kos/${id}`);
            getKos();
        } catch (error) {
            console.log(error.response.data);
        }
    }


    return (
        <div>
            <div className='container-fluid'>
                <Link className="btn btn-success  ms-5 mt-5" to={'/addKos'}>Tambah Kos</Link>
                <div className='row mt-3 me-4 ms-4'>
                    <div className='col'>
                        <div className='card'>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>Alamat</th>
                                        <th>No_telp</th>
                                        <th>Pemilik</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kos.map((k, index) => (
                                        <tr key={k._id}>
                                            <td>{index + 1}</td>
                                            <td>{k.nama}</td>
                                            <td>{k.alamat}</td>
                                            <td>{k.no_telp}</td>

                                            {k.pemilik_id.map((pmlk, index) => (
                                                <td>{pmlk.nama}</td>
                                            ))}
                                            <td>
                                                <Link className="btn btn-info me-2 text-light" to={`/kamar/${k._id}`}>detail</Link>
                                                <Link to={`/editKos/${k._id}`} className="btn btn-warning text-light">edit</Link>
                                                <button className="btn btn-danger text-light ms-2" onClick={() => deleteKos(k._id)}>hapus</button>
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

export default KosList;
