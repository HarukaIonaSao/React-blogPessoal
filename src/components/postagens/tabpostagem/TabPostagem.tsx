import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import ListaPostagem from "../listapostagem/ListaPostagem";
import "./TabPostagem.css";
import { Box } from "@mui/material";

function TabPostagem() {
  // setValue muda automaticamente o valor. se mudar de 1 para 2, não precisa fazer na mão
  const [value, setValue] = useState("1");
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" className="tabPostagem" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h5"
            align="center"
            className="titulo"
          >
            Sobre mim
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="textPrimary"
            align="justify"
          >
            <h2 className="tabPostagem">
              <a href="https://www.linkedin.com/in/roberta-ribeiro-b5521a4b/" target= ' blank' className="tabPostagem" >🎮 Roberta Ribeiro 🎮</a> </h2>
              <p className="tabPostagem">
                Desenvolvedora Fullstack Java
              </p>
              <p className="tabPostagem">
                Curiosa desde criança, sempre fui atrás de saber o que há por trás das coisas. Conhecimento nunca é demais. 
              </p> 
              <p className="tabPostagem">
                Amo  jogos 8bits, animes e doces. 
              </p>
              <p className="tabPostagem">
                Outra paixão é a Língua de sinais (Libras) 🤘🏿, que me motiva a pensar cada vez mais em acessibilidade.
              </p>
              <p className="tabPostagem">
                Essa é uma demonstração sobre meus hobbies e habilidades. Vá até minhas redes e tenha acesso ao conteúdo completo 😉
              </p>   
      
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
