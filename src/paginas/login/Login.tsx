import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";

function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    foto: "",
    usuario: "",
    senha: "",
    token: "",
  });

  // o ...(spread operator) espalha todos os atributos do userlogin para dentro so setUserLogin
  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token != "") {
      navigate("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken);

      alert("Usuário logado com sucesso!");
    } catch (error) {
      alert("Erro ao logar! Verifique usuário e senha. ");
    }
  }

  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Box padding={20}>
            <form onSubmit={onSubmit} className="form">
              <Typography>Entrar</Typography>
              <TextField
                value={userLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                label="Usuário (e-mail)"
                name="usuario"
                fullWidth
                margin="normal"
              />
              <TextField
                value={userLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                label="Senha"
                name="senha"
                type="password"
                fullWidth
                margin="normal"
              />
              <Button variant="contained" type="submit" className="btnEntrar">
                Entrar
              </Button>
            </form>

            <Typography>
              Ainda não tem uma conta?
              <Link to="/cadastrousuario">Cadastre-se</Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} className="bgLogin"></Grid>
      </Grid>
    </>
  );
}

export default Login;
