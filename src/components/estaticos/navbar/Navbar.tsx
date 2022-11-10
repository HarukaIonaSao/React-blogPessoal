import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link as Breadlink } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: "flex",
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  })
);

export default function Navbar() {
  const classes = useStyles();
  const [token,setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  function logout(){
    setToken('')
    alert('Usuário deslogado!');
    navigate('/login')
  }

  return (
    <Breadcrumbs aria-label="breadcrumb" >
     
      <Link to="/home" className="text-decoration" color="white">
      <Breadlink color="inherit" >Home</Breadlink>
      </Link>

      <Link to="/postagem" className="text-decoration" color="white">
      <Breadlink color="inherit" >Postagens</Breadlink>
      </Link>

      <Link to="/tema" className="text-decoration" color="white">
      <Breadlink color="inherit" >Temas</Breadlink>
      </Link>

      <Link to ="/formularioTema" className="text-decoration" color="white">
      <Breadlink color="inherit" >Cadastrar tema</Breadlink>
      </Link>

      <Breadlink color="inherit"  className="text-decoration" onClick={logout}>          
      Sair
      </Breadlink>

    </Breadcrumbs>
  );
}
