import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { UsersToolbar, UsersTable, EditUsers } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  var apiBaseUrl = 'https://proyectoredmexicana.herokuapp.com/api/auth/login';
    event.preventDefault();
    axios.post(apiBaseUrl, {
      email: formState.values.email,
      password: formState.values.password
    })
      .then(function (response) { 
        console.log(response)
        history.push('/dashboard');
      });


  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
      <Grid
          item
          lg={11}
          md={12}
          xl={9}
          xs={12}
        >
          <UsersTable users={users} />
        </Grid>
        
        <Grid
          item
          lg={7}
          md={9}
          xl={9}
          xs={9}
        >
          <EditUsers />
        </Grid>
      </div>
    </div>
  );
};

export default UserList;
