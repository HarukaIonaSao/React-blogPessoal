import { Grid, Box, Typography, Button, TextField } from "@material-ui/core";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CadastroUsuario.css";
import { cadastroUsuario } from "../../services/Service";
import User from "../../models/User";

function CadastroUsuario() {
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    foto: "",
    usuario: "",
    senha: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    foto: "",
    usuario: "",
    senha: "",
  });

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login");
    }
  }, [navigate, userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmarSenha == user.senha) {
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
      alert("Usuário cadastrado com sucesso");
    } else {
      alert("Dados não correspondem! Verifique usuario e senha");
    }
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} className="imagem2"></Grid>
        <Grid item xs={6} alignItems="center">
          <Box paddingX={10}>
            <form onSubmit={onSubmit}>
              <Typography className="texto2">Cadastrar</Typography>
              <TextField
                value={user.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                label="Nome Completo"
                name="nome"
                fullWidth
                margin="normal"
              />
              <TextField
                value={user.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                label="Usuário (e-mail)"
                name="usuario"
                fullWidth
                margin="normal"
              />
              <TextField
                value={user.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                label="Foto"
                name="foto"
                fullWidth
                margin="normal"
              />
              <TextField
                value={user.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                label="Senha"
                name="senha"
                type="password"
                fullWidth
                margin="normal"
              />
              <TextField
                value={confirmarSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  confirmarSenhaHandle(e)
                }
                label="Confirmar senha"
                name="confirmarSenha"
                type="password"
                fullWidth
                margin="normal"
              />
              <Link to="/login" className="text-decoration">
                <Button
                  variant="contained"
                  color="secondary"
                  className="btnCancelar"
                >
                  Cancelar
                </Button>
              </Link>
              <Link to="/login" className="text-decoration">
                <Button
                  variant="contained"
                  type="submit"
                  className="btnCadastrar"
                >
                  Cadastrar
                </Button>
              </Link>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default CadastroUsuario;
