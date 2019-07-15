import React, { useState } from "react";
import axios from "axios";
const Hello = () => {
  const [xyi, setXyi] = useState("SUCK");
  const foo = async () => {
    const data = await axios.get("http://localhost:8000/api/hello", {
      headers: {
        Authorization: `Token ${window.sessionStorage.getItem("userToken")}`
      }
    });
    setXyi(data.data.message);
  };

  return (
    <div>
      {xyi}
      <div>
        <button onClick={foo}>xyi</button>
      </div>
    </div>
  );
};
export default Hello;
