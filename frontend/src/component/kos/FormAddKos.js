import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const FormAddKos = () => {
  const navigate = useNavigate();

  const [pemilik, setPemilik] = useState([]);
  const [kamar, setKamar] = useState([]);

  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noTelp, setNoTelp] = useState("");

  const [pemilik_id, setPemilik_id] = useState("");
  const [kamar_id, setKamar_id] = useState("");

  useEffect(() => {
    getPemilik();
    getKamar();
  }, [])

  const saveKos = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/kos", {
        nama,
        alamat,
        no_telp: noTelp,
        pemilik_id,
        kamar_id
      });
      navigate("/kos")
    } catch (error) {
      console.log(error)
    }

  }

  const getKamar = async () => {
    const response = await axios.get("http://localhost:5000/kamar");
    setKamar(response.data);
    console.log(response.data);
  }

  const getPemilik = async () => {
    const response = await axios.get("http://localhost:5000/pemilik");
    setPemilik(response.data);
    console.log(response.data);
  }
  return (
    <div>
      <div className='container mb-5'>
        <div className='row mt-5'>
          <div className='col'>
            <div>
              <h1>Form Tambah Kos</h1>
              <form onSubmit={saveKos}>
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
                <div className="mb-3">
                  <label for="pemilik" class="form-label">Pemilik</label>
                  <select className="form-select" id="pemilik" onChange={(e) => setPemilik_id(e.target.value)} >
                    <option>pilih pemilik</option>
                    {pemilik.map((p, index) => (
                      <option key={p._id} value={p._id}>{p.nama}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label for="kamar" class="form-label">Kamar</label>
                  <select className="form-select" id="kamar" onChange={(e) => setKamar_id(e.target.value)} >
                    <option>pilih kamar</option>
                    {kamar.map((k, index) => (
                      <option key={k._id} value={k._id}>{k.nama_kamar}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Simpan</button>
              </form>
            </div>
          </div>
        </div >
      </div >
    </div >
  )
}

export default FormAddKos
