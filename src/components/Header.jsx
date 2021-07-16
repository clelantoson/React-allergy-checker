import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      width: '100px',
      height: '100px',
      
    },
    
  });
  const Header = (prop) => {
    const classes = useStyles();
    return ( 
        <>
            <h1>Allergy Checker</h1>
            <a href="/"><img className={classes.root} src={prop.imgSrc} alt="Logo de allergy checker" /></a>
        </>
    );
}

 
export default Header;