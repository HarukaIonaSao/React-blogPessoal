import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link as Breadlink} from '@material-ui/core';
import {Link} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  }),
);

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className='navbar'>
      <Breadlink color="inherit"  className={classes.link}>
        Blog Pessoal
      </Breadlink>
      <Breadlink color="inherit"  className={classes.link}>
        Home
      </Breadlink>
      <Breadlink color="inherit"  className={classes.link}>
        Postagens
      </Breadlink>
      <Breadlink color="inherit"  className={classes.link}>
        Temas
      </Breadlink>
      <Breadlink color="inherit"  className={classes.link}>
        Cadastrar tema
      </Breadlink> 
      <Breadlink  color="inherit"  className={classes.link}>
        <Link to='/login' >Logout</Link>
      </Breadlink> 
    </Breadcrumbs>
  );
}