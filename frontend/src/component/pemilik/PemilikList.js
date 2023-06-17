import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const PemilikList = () => {
  const [pemilik, setPemilik] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getPemilik();
  }, [])

  const getPemilik = async () => {
    const response = await axios.get("http://localhost:5000/pemilik");
    setPemilik(response.data);
  }

  const deletePemilik = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/pemilik/${id}`);
      navigate("/kos")
    } catch (err) {
      console.log(err.response.data);
    }
  }


  return (
    <div>

      <div className="container-fluid">
        <Link className="btn btn-success  ms-5 mt-5" to={'/addPemilik'}>Tambah Pemilik</Link>
        <div className="row mt-3 me-4 ms-4">
          <div className="col">
            <div className="card">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Alamat</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {pemilik.map((p, index) => (
                    <tr key={p._id}>
                      <td>{index + 1}</td>
                      <td>{p.nama}</td>
                      <td>{p.email}</td>
                      <td>{p.alamat}</td>
                      <td>
                        <Link to={`/editPemilik/${p._id}`} className="btn btn-warning text-light">edit</Link>
                        <button className="btn btn-danger text-light ms-2" onClick={() => deletePemilik(p._id)}>hapus</button>
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

export default PemilikList;
