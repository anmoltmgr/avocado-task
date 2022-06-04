import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdateForm from "./routes/UpdateForm";
import Form from "./routes/Form";
// import FormComponent from "./Components/FormComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="form" element={<Form />} />
        <Route path="home" element={<Home />} />
        <Route path="update" element={<UpdateForm />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
