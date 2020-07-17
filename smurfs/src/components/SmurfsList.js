import React, { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

import Smurf from "../components/Smurf";

const SmurfsList = () => {
  const { smurfData, isFetching } = useContext(FormContext);

  return (
    <div className='smurf-list'>
      {isFetching ? (
        <h1>Loading</h1>
      ) : (
        <>
          {smurfData.map((smurf) => {
            return <Smurf smurf={smurf} />;
          })}
        </>
      )}
    </div>
  );
};

export default SmurfsList;
