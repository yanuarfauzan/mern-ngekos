import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const PenyewaList = () => {

    const [penyewa, setPenyewa] = useState([]);

    useEffect(() => {
        getPenyewa();
    }, []);

    const getPenyewa = async () => {
        try {
            const response = await axios.get("http://localhost:5000/penyewa");
            setPenyewa(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deletePenyewa = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/penyewa/${id}`);
            getPenyewa();
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <div className="container-fluid">
                <Link className="btn btn-success  ms-5 mt-5" to={'/addPenyewa'}>Tambah Penyewa</Link>
                <div className="row mt-3 me-4 ms-4">
                    <div className="col">
                        <div className="card">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nik</th>
                                        <th>Nama</th>
                                        <th>Email</th>
                                        <th>Alamat</th>
                                        <th>No telpon</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {penyewa.map((p, index) => (
                                        <tr key={p._id}>
                                            <td>{index + 1}</td>
                                            <td>{p.nik}</td>
                                            <td>{p.nama}</td>
                                            <td>{p.email}</td>
                                            <td>{p.alamat}</td>
                                            <td>{p.no_telp}</td>
                                            <td>
                                                <Link to={`/editPenyewa/${p._id}`} className="btn btn-warning text-light">edit</Link>
                                                <button className="btn btn-danger text-light ms-2" onClick={() => deletePenyewa(p._id)}>hapus</button>
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

export default PenyewaList
