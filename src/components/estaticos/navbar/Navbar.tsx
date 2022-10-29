import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
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

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        Blog Pessoal
      </Link>
      <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        Home      
      </Link>    
      <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        Postagens      
      </Link>  
      <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        Temas     
      </Link>  
      <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        Cadastrar tema      
      </Link> 
      <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        Logout     
      </Link> 
    </Breadcrumbs>
  );
}

