import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link as Breadlink } from "@material-ui/core";
import { Link } from "react-router-dom";

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

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className="navbar ">
      <Breadlink color="inherit">Blog Pessoal</Breadlink>
      <Breadlink color="inherit">Home</Breadlink>
      <Breadlink color="inherit">Postagens</Breadlink>
      <Breadlink color="inherit">Temas</Breadlink>
      <Breadlink color="inherit">Cadastrar tema</Breadlink>
      <Breadlink color="inherit">
        <Link to="/login" className="text-decoration">
          Sair
        </Link>
      </Breadlink>
    </Breadcrumbs>
  );
}
