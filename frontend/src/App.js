import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PemilikList from "./component/pemilik/PemilikList.js";
import FormAddPemilik from "./component/pemilik/FormAddPemilik.js";
import FormEditPemilik from "./component/pemilik/FormEditPemilik.js";
import KosList from "./component/kos/KosList.js";
import FormAddKos from "./component/kos/FormAddKos.js";
import Navbar from "./component/layouts/Navbar.js";
import FormEditKos from "./component/kos/FormEditKos.js";
import KamarList from "./component/kamar/KamarList.js";
import FromAddKamar from "./component/kamar/FromAddKamar.js";
import FormEditKamar from "./component/kamar/FormEditKamar.js";
import PenyewaList from "./component/penyewa/PenyewaList.js";
import FormAddPenyewa from "./component/penyewa/FormAddPenyewa.js";
import FormEditPenyewa from "./component/penyewa/FormEditPenyewa.js";
import KontrakList from "./component/kontrak/KontrakList.js";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          {/* PEMILIK */}
          <Route path="/pemilik" element={<PemilikList />} />
          <Route path="/addPemilik" element={<FormAddPemilik />} />
          <Route path="/editPemilik/:id" element={<FormEditPemilik />} />
          {/* KOS */}
          <Route path="/kos" element={<KosList />} />
          <Route path="/addKos" element={<FormAddKos />} />
          <Route path="/editKos/:id" element={<FormEditKos />} />
          {/* KAMAR */}
          <Route path="/kamar/:kosId" element={<KamarList />} />
          <Route path="/addKamar/:kosId" element={<FromAddKamar />} />
          <Route path="/editKamar/:kosId/:id" element={<FormEditKamar />} />
          {/* PENYEWA */}
          <Route path="/penyewa" element={<PenyewaList />} />
          <Route path="/addPenyewa" element={<FormAddPenyewa />} />
          <Route path="/editPenyewa/:id" element={<FormEditPenyewa />} />
          {/* KONTRAK */}
          <Route path="/kontrak" element={<KontrakList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
