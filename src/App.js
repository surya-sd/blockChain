import { useState } from 'react';
import './App.css';
import { AddMessage } from './Components/AddMessage';
import { ViewMessage } from './Components/ViewMessage';



function App() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <div className="App">
      <button style={{marginTop:"20px",marginRight:"5px"}} onClick={() =>setOpenModal(true)}>Add Message</button>
      <button onClick={() =>setOpenModal(false)} style={{marginTop:"20px",marginRight:"5px"}}>View Message</button>
      {openModal ? <AddMessage/> : <ViewMessage/>}
    </div>
  );
}

export default App;
