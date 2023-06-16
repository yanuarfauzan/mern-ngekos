import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PemilikList from "./component/PemilikList.js";
import FormAddPemilik from "./component/FormAddPemilik.js";
import FormEditPemilik from "./component/FormEditPemilik.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
