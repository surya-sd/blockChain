import React, { useState } from "react";
var CryptoJS = require("crypto-js");

export const ViewMessage = () => {
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const handleDecryption = () => {
    if (localStorage.getItem("message") !== null) {
      var decrypted = CryptoJS.AES.decrypt(localStorage.getItem("message"), key);
      setMessage(decrypted.toString(CryptoJS.enc.Utf8));
    }
  };
  return (
    <div>
      <input type="text" value={key} style={{margin:"20px 5px"}} onChange={(e) => setKey(e.target.value)} placeholder="Enter your Secret key" />
      <button onClick={handleDecryption} style={{margin:"20px 5px"}}>Decrypt</button>
      {<h2>{message}</h2>}
    </div>
  );
};
