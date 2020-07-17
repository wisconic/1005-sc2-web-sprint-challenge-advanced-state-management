import React, { useState, useEffect } from "react";
import { FormContext } from "../contexts/FormContext";
import axios from "axios";
import "./App.css";

import Header from "../components/Header";
import FriendForm from "./FriendForm";
import SmurfsList from "./SmurfsList";

const BASE_URL = "http://localhost:3333/smurfs";

function App() {
  const [smurfData, setSmurfData] = useState([]);

  const getSmurfs = () => {
    axios
      .get(BASE_URL)
      .then((res) => {
        setSmurfData(res.data);
      })
      .catch((err) => {
        alert("error fetching! please reload the page");
      });
  };

  const postSmurf = (smurf) => {
    axios
      .post(BASE_URL, smurf)
      .then((res) => {
        setSmurfData([...smurfData, res.data]);
      })
      .catch((err) => {
        alert("error adding! please try again");
      });
  };

  useEffect(() => {
    getSmurfs();
  }, [smurfData]);

  return (
    <div className='App'>
      <FormContext.Provider value={{ smurfData, postSmurf, getSmurfs }}>
        <Header />
        <FriendForm />
        <SmurfsList />
      </FormContext.Provider>
    </div>
  );
}

export default App;
