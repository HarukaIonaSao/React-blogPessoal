import React, { useEffect } from 'react';
import { Typography, Grid, Button } from "@material-ui/core";
import "./Home.css";
import { Box } from "@mui/material";
import ModalPostagem from '../../components/postagens/modalpostagem/ModalPostagem';
import { useNavigate } from 'react-router';
import useLocalStorage from 'react-use-localstorage';

import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";

function Home() {

  let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])

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
              Seja bem vind@!
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
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
          </Box>
          </Grid>
          
        <Grid item xs={6}>
          <img
            src="https://i.imgur.com/5lM4os7.png"
            alt=""
            width="300px"
            height="300px"
          />
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
