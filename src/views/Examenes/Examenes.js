import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';


import  ExamToolbar  from './components/Barra Examen/ExamToolbar';
import Pregunta from './components/Nuevo Examen/NuevoExamen';
import Examen from './components/Examen/Examen';
import Examen1 from './components/Examen1/Examen1';
import Examen2 from './components/Examen2/Examen2';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3)
    },
    content: {
      marginTop: theme.spacing(2)
    }
  }));

const Examenes = () => {
    const classes = useStyles();

    return(
      <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={12}
          md={8}
          xl={9}
          xs={12}
        >
          <ExamToolbar />
        </Grid>
        <Grid
          item
          lg={4}
          md={8}
          xl={4}
          xs={10}
        >
          <Examen />
        </Grid>
        <Grid
          item
          lg={4}
          md={8}
          xl={4}
          xs={10}
        >
          <Examen1 />
        </Grid>
        <Grid
          item
          lg={4}
          md={8}
          xl={4}
          xs={10}
        >
          <Examen2 />
        </Grid>
        <Grid
          item
          lg={10}
          md={8}
          xl={9}
          xs={10}
        >
          <Pregunta />
        </Grid>

        
      </Grid>
    </div>
    );
};
export default Examenes;