import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link as Breadlink } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TokenState } from './../../../store/tokens/TokensReducer';
import { addToken } from "../../../store/tokens/Actions";
import './Navbar.css';
import { useSelector } from "react-redux";
import {toast} from 'react-toastify';

function Navbar() {

  const dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  function logout() {
    dispatch(addToken(''));
    toast.success('Usuário deslogado com sucesso',{
      position:"top-right",
      autoClose: 3500,
      hideProgressBar: false,
      pauseOnHover: false,
      draggable: false,
      theme:"colored",
      progress: undefined
    })
    navigate('/login')
  }

  var navbarComponent;

  if (token != "") {
    navbarComponent = 
    <div >
      <Breadcrumbs aria-label="breadcrumb" className="navBar" >

        <Link to="/home" className="text-decoration" color="black">
          <Breadlink color="primary" >Home</Breadlink>
        </Link>

        <Link to="/postagem" className="text-decoration" color="black">
          <Breadlink color="primary" >Postagens</Breadlink>
        </Link>

        <Link to="/tema" className="text-decoration" color="black">
          <Breadlink color="primary" >Temas</Breadlink>
        </Link>

        <Link to="/formularioTema" className="text-decoration" color="black">
          <Breadlink color="primary" >Cadastrar tema</Breadlink>
        </Link>

        <Breadlink className="text-decoration" onClick={logout}>
          Sair
        </Breadlink> 

      </Breadcrumbs>
    </div>
  }

  return (
    <>
    {navbarComponent}
    </>    
  );
}

export default Navbar;