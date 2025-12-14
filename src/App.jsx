import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Landing } from "../component/landing";
import { Lacation } from "../component/lacation";
import { Language } from "../component/language";
import { Name } from "../component/name";
import { Layout } from "../component/outlet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">hello !</Link>|<Link to="/location">lacation</Link>|
        <Link to="/language">Language</Link>
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Name />}></Route>
            <Route path="/location" element={<Lacation />}></Route>
            <Route path="/language" element={<Language />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
