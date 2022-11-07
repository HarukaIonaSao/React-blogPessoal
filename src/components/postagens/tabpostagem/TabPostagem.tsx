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
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
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
            Sobre-nós
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="textPrimary"
            align="justify"
          >
            Red leicester mozzarella melted cheese. Say cheese st. agur blue
            cheese cottage cheese airedale cheddar dolcelatte cheese on toast
            port-salut. Smelly cheese babybel fromage paneer airedale parmesan
            blue castello monterey jack. Camembert de normandie halloumi paneer
            goat cheese slices cheese and wine cheesecake fromage. Port-salut
            manchego paneer queso.
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
