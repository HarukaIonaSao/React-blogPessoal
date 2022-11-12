import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import "./App.css";
import CadastroPostagem from "./components/postagens/cadastropostagem/CadastroPostagem";
import CadastroTema from "./components/temas/cadastrotema/CadastroTema";
import DeletarPostagem from "./components/postagens/deletarpostagem/DeletarPostagem";
import DeletarTema from "./components/temas/deletartema/DeletarTema";
import ListaTema from "./components/temas/listatema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import { Provider } from "react-redux";
import store from "./store/Store";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import VLibras from "vlibras-react";

function App() {
  return ( 
    <Provider store={store}>  
      <VLibras />  
      <ToastContainer />
      <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/tema" element={<ListaTema />} />
          <Route path="/postagem" element={<ListaPostagem />} />
          <Route path="/formularioPostagem" element={<CadastroPostagem />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPostagem />}/>
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
        </Routes>
      </div>
      <Footer />
    </Router>    
    </Provider>   
    
  );
}

export default App;
