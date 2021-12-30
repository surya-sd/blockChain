import './App.css';
import { ethers } from "ethers";
import React from "react"


function App() {

  const [address, setAddress] = React.useState("");
  const [ balance, setBalance ] = React.useState("");
  const [query, setQuery] = React.useState("");

  const handleWalletBalance = async ()=> {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    let balance = await provider.getBalance(query)
    setBalance("Your Balance : "+ethers.utils.formatEther(balance));
  }

  const handleConnectWallet = async ()=> {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    setAddress("Your Address : "+await signer.getAddress());
  }


  return (
    <div className="App">
      <header className="App-header">
       <input type="text" placeholder="enter your address" style={{padding:"10px"}} value={query} onChange={(e)=>setQuery(e.target.value)}/>
       <p>{balance}</p>
       <button style={{margin:"10px"}} onClick={handleWalletBalance}>Get Balance</button>
       <button style={{margin:"10px"}} onClick={handleConnectWallet}>Connect Wallet</button>
        <p>{address}</p>
      </header>
    </div>
  );
}

export default App;
