import React, { useState } from 'react'
import { decryptData, encryptData } from '../utils';
var CryptoJS = require("crypto-js");


export const AddMessage = () => {
    const [message, setMessage] = useState('');
    const [key, setKey] = useState('');


    const handleEncryption =() => {
        var encrypted = CryptoJS.AES.encrypt(message,key);
        let encryptedValue = encryptData(message); +
        console.log( encryptedValue,"Encrypted Data");
        console.log(decryptData(encryptedValue),"Decrypted Data");
        localStorage.setItem('message', encrypted);
    }
    return (
        <div>
            <input type="text" placeholder="Enter your message" style={{margin:"20px 5px"}} value={message} onChange={(e) => setMessage(e.target.value)}/>
            <input type="text" placeholder="Enter your Secret key" value={key} style={{margin:"20px 5px"}} onChange={(e) => setKey(e.target.value)}/>
            <button onClick={handleEncryption} style={{margin:"20px 5px"}}>Encrypt</button>
        </div>
    )
}
