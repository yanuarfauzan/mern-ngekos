import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const KamarList = () => {
    const { kosId } = useParams();

    const [kamar, setKamar] = useState([]);

    useEffect(() => {
        getKamar();
    }, []);

    const getKamar = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/kamarByKos/${kosId}`);
            setKamar(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteKamar = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/kamar/${kosId}/${id}`);
            getKamar();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className='container-fluid'>
                <Link className="btn btn-success  ms-5 mt-5" to={`/addKamar/${kosId}`}>Tambah Kamar</Link>
                <div className='row mt-3 me-4 ms-4'>
                    <div className='col'>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama kamar</th>
                                    <th>Fasilitas</th>
                                    <th>Harga</th>
                                    <th>Status</th>
                                    <th>Kamar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {kamar.map((kmr, index) => (
                                    <tr key={kmr._id}>
                                        <td>{index + 1}</td>
                                        <td>{kmr.nama_kamar}</td>
                                        <td>{kmr.fasilitas}</td>
                                        <td>{kmr.harga}</td>
                                        <td>{kmr.status}</td>
                                        <th>
                                            <Link to={`/editKamar/${kosId}/${kmr._id}`} className="btn btn-warning text-light">edit</Link>
                                            <button className="btn btn-danger text-light ms-2" onClick={(e) => deleteKamar(kmr._id)}>hapus</button>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KamarList
