import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/Actions";
import { toast } from "react-toastify";

function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
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
      dispatch(addToken(token));
      navigate("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken);

      toast.info("Usuário logado com sucesso!!", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch (error) {
      toast.error("Erro ao logar.Dados não conferem!!", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
  }

  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Box padding={20}>
            <form onSubmit={onSubmit} className="form">
              <Typography className="text-login">Entrar</Typography>
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

            <Typography className="text-login">
              Ainda não tem uma conta?
              <Link to="/cadastrousuario" className="text-login">
                Cadastre-se
              </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} className="bgLogin"></Grid>
      </Grid>
     
    </>
  );
}

export default Login;
