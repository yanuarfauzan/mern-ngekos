import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PemilikList from "./component/pemilik/PemilikList.js";
import FormAddPemilik from "./component/pemilik/FormAddPemilik.js";
import FormEditPemilik from "./component/pemilik/FormEditPemilik.js";
import KosList from "./component/kos/KosList.js";
import FormAddKos from "./component/kos/FormAddKos.js";
import Navbar from "./component/layouts/Navbar.js";
import FormEditKos from "./component/kos/FormEditKos.js";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
