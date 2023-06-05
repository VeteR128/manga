import React, { useState } from "react";
import * as ReactDOMClient from "react-dom/client";

import Addcard from "./components/addCard";
import FormSubmit from "./components/formSubmit";
import Header from "./components/header";

import "./pages/index.css";
const App = () => {
  const [arr, setArr] = useState("");
  const showResult = (arr) => {
    setArr(arr);
  };
  return (
    <div className="page">
      <Header />
      <FormSubmit animeList={showResult} />
      <Addcard arr={arr} />
    </div>
  );
};
const app = ReactDOMClient.createRoot(document.getElementById("App"));
app.render(<App />);
