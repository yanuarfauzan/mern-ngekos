import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditKos = () => {

    const { id } = useParams();

    const [nama, setNama] = useState("");
    const [alamat, setAlamat] = useState("");
    const [noTelp, setNoTelp] = useState("");
    const [pemilik_id, setPemilik_id] = useState("");
    const [kamar_id, setKamar_id] = useState("");

    useEffect(() => {
        getKosById();
    }, []);

    const getKosById = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/kos/${id}`);
            setNama(response.data.nama);
            setAlamat(response.data.alamat);
            setNoTelp(response.data.no_telp);
        } catch (error) {
            console.log(error``)
        }
    }

    return (
        <div>
            <div className='container mb-5'>
                <div className='row mt-5'>
                    <div className='col'>
                        <div>
                            <h1>Form Edit Kos</h1>
                            <form>
                                <div>

                                    <div class="mb-3">
                                        <label for="nama" class="form-label">Nama</label>
                                        <input type="text" class="form-control" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label" for="alamat">Alamat</label>
                                        <input type="text" class="form-control" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="no_telp" class="form-label">No Telepon</label>
                                        <input type="text" class="form-control" id="no_telp" value={noTelp} onChange={(e) => setNoTelp(e.target.value)} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="pemilik" class="form-label">Pemilik</label>
                                    <select className="form-select" id="pemilik">
                                        <option>pilih pemilik</option>
                                        {/* {pemilik.map((p, index) => (
                                            <option key={p._id} value={p._id}>{p.nama}</option>
                                        ))} */}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="kamar" class="form-label">Kamar</label>
                                    <select className="form-select" id="kamar">
                                        <option>pilih kamar</option>
                                        {/* {kamar.map((k, index) => (
                                            <option key={k._id} value={k._id}>{k.nama_kamar}</option>
                                        ))} */}
                                    </select>
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

export default FormEditKos
