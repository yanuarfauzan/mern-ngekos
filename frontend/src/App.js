import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PemilikList from "./component/pemilik/PemilikList.js";
import FormAddPemilik from "./component/pemilik/FormAddPemilik.js";
import FormEditPemilik from "./component/pemilik/FormEditPemilik.js";
import Navbar from "./component/layouts/Navbar.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/pemilik" element={<PemilikList />} />
          <Route path="/addPemilik" element={<FormAddPemilik />} />
          <Route path="/editPemilik/:id" element={<FormEditPemilik />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
