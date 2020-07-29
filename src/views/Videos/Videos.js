import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {

    VidMediaCard,
    VidMediaCard1,
    VidMediaCard2,

    
} from './components';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(4)
    }
  }));

const Videos = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
          <Grid
            container
            spacing={4}
          >
    
            <Grid
              item
              lg={4}
              sm={6}
              xl={3}
              xs={12}
            >
              <VidMediaCard />
            </Grid>  
            <Grid
              item
              lg={4}
              sm={6}
              xl={3}
              xs={12}
            >
              <VidMediaCard1 />
            </Grid>  
            <Grid
              item
              lg={4}
              sm={6}
              xl={3}
              xs={12}
            >
              <VidMediaCard2 />
            </Grid> 
          </Grid>
        </div>
      );
    };
export default Videos;