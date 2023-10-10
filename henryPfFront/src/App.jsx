import React from 'react';
import './App.css'
import {Route, Routes, useLocation, useNavigate} from "react-router-dom"
import Inicio from './views/home/home.jsx'
import Landing from './views/landing/landing.jsx'
/* import Landing from './' */
// import Productos from './barra/Productos/Productos';
// import Nosotros from './barra/Nosotros/Nosotros';
// import MiCuenta from './barra/MiCuenta/MiCuenta';
import NavBar from './components/NavBar/NavBar';

function App() {
const {pathname} = useLocation();
  return (  
    <div>
      {/* {pathname !== "/" && <NavBar/>} */}
      <Routes>
        <Route path='/Inicio' element={<Inicio/>}/>
        {/* <Route path='/Detail/:id' element={<Detail/>}/>
        <Route path='/Productos' element={<Productos/>} />
        <Route path='/Nosotros' element={<Nosotros/>} />
        <Route path='/MiCuenta' element={<MiCuenta/>} /> */}
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </div>
  )
}
export default App;




// import { useState } from 'react';
// import { uploadFile } from './firebase/config'
// import {v4} from 'uuid'
// import React from 'react';
// function App() {
//   const [file, setFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await uploadFile(file);
// };

// return (
//   <form onSubmit={handleSubmit}>
//     <input 
//       type='file' 
//       name='' 
//       id='' 
//       onChange={ e => set(e.target.files[0])}
//     />
//       <button>Upload</button>             
//     </form>
//   );
// }