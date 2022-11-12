import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Footer.css";
import { useSelector } from 'react-redux';
import { TokenState } from './../../../store/tokens/TokensReducer';

function Footer() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if (token != "") {
    footerComponent =
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid alignItems="center" item xs={12}>
        <Box className="box1">
          <Box
            paddingTop={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              className="textos"
            >
              Entre em contato comigo{" "}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <a href="https://github.com/HarukaIonaSao/" target="_blank">
              <img src="https://i.imgur.com/M40vRJN.gif" width="60" className="redes" />
            </a>
            <a
              href="https://www.linkedin.com/in/roberta-ribeiro-ela-she-b5521a4b/"
              target="_blank"
            >
              <img src="https://i.imgur.com/KqhVN8J.gif" width="60" className="redes" />
            </a>
          </Box>
        </Box>
        <Box className="box2">
          <Box paddingTop={1}>
            <Typography
              variant="subtitle2"
              align="center"
              gutterBottom
              style={{ color: "white" }}
            >
              © 2022 Copyright:
            </Typography>
          </Box >

          <Box >
            <a className="textos"
              target="_blank"
              href="https://www.linkedin.com/in/roberta-ribeiro-ela-she-b5521a4b/"
            >
              <Typography
                variant="subtitle2"
                gutterBottom
                className="textos"
                align="center"
              >
                Roberta Ribeiro
              </Typography>
            </a>
          </Box>
        </Box>
      </Grid>
    </Grid>
  }

  return (
    <>
    {footerComponent}
    </>
  );
}

export default Footer;
