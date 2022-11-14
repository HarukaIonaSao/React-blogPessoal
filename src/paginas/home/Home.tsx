import React, { useEffect } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import "./Home.css";
import { Box } from "@mui/material";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";
import { useNavigate } from "react-router";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import { useSelector } from "react-redux";
import { TokenState } from "./../../store/tokens/TokensReducer";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
import VLibras from "vlibras-react";

function Home() {

  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado!!",{
        position:"top-right",
        autoClose: 3500,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: false,
        theme:"colored",
        progress: undefined
      });

      navigate("/login");
    }
  }, [token]);
 
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="box"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Olá 👋🏿
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              Sinta-se livre para se expressar!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>

            <Link to="./postagens" className="text-decoration">
            <Button variant="outlined" className="button">
              Ver Postagens
            </Button>
            </Link>            
          </Box>
        </Grid>

        <Grid item sm={8}>
          <img
            src="https://i.imgur.com/AQQtRbJ.gif"
            alt=""
            width="150px"
            height="150px"
          />
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
      <VLibras/>
    </>
  );
}

export default Home;
