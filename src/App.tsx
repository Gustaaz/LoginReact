import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import RecoverPassword from "./pages/recoverPassword";
import Register from "./pages/register";



function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/registrar" element={<Register/>}/>
        <Route path="/recuperarSenha" element={<RecoverPassword/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
