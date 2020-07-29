import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { Facebook as FacebookIcon, Google as GoogleIcon } from 'icons';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import axios from 'axios';
import { login } from '../../actions/authAction'
import { compose } from 'redux'
import { connect } from 'react-redux'

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'es requerido' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'es requerido' },
    length: {
      maximum: 128
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/imgLogin.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  socialButtons: {
    marginTop: theme.spacing(3)
  },
  socialIcon: {
    marginRight: theme.spacing(1)
  },
  sugestion: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  }
}));

const SignIn = props => {
  const { history } = props;

  const { isAuthenticated } = props
  if (isAuthenticated) {
    this.props.history.push("/dashboard");
  }

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  const [login, setLogin] = useState(false);

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleBack = () => {
    history.goBack();
  };

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };
  const vakidateLoginToken = (response) =>{
    if (response.accessToken) {
      setLogin(true);
      history.push('/dashboard');
    } else {
      setLogin(false);
    }
    // TODO: Update when you define the login strategy 
    sessionStorage.setItem('login', true);
  }

  const handleFBSignIn = (response) => {
    console.log("handleFBSignIn")
    vakidateLoginToken(response)
  };
  const handleGoogleSignIn = (response) => {
    console.log("handleGoogleSignIn")
    vakidateLoginToken(response)
  }

  const handleSignIn = event => {

    // TODO use config for base_url
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
      sessionStorage.setItem('login', true);
  
      /*
    e.preventDefault()
    const email = formState.values.email
    const password = formState.values.password
    const user = { email, password }
    props.login(user)
    */
    
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.quoteContainer}
          item
          lg={5}
        >
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography
                className={classes.quoteText}
                variant="h1"
              >
                Auxiliar, cuidar y servir.
              </Typography>
              <div className={classes.person}>
                <Typography
                  className={classes.name}
                  variant="body1"
                >
                  Red Mexicana de Enfermeras y Cuidadores
                </Typography>
                <Typography
                  className={classes.bio}
                  variant="body2"
                >
                  Al servicio del México
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          className={classes.content}
          item
          lg={7}
          xs={12}
        >
          <div className={classes.content}>
            <div className={classes.contentHeader}>
              <IconButton onClick={handleBack}>
                <ArrowBackIcon />
              </IconButton>
            </div>
            <div className={classes.contentBody}>
              <form
                className={classes.form}
                onSubmit={handleSignIn}
              >
                <Typography
                  className={classes.title}
                  variant="h2"
                >
                  Iniciar sesión
                </Typography>
                <Typography
                  color="textSecondary"
                  gutterBottom
                >
                  Inicia sesión con las redes sociales
                </Typography>
                <Grid
                  className={classes.socialButtons}
                  container
                  spacing={2}
                >
                  <Grid item>

                    <FacebookLogin
                      appId="634725127251755"
                      fields="name,email,picture"
                      callback={(response) => handleFBSignIn(response)}
                      render={renderProps => (
                        <button onClick={renderProps.onClick}>Login with FB</button>
                      )}
                    />
                  </Grid>
                  <Grid item>

                    <GoogleLogin
                      clientId="372312419152-efijfijpro0pihcmc6dkhurb2hierrh9.apps.googleusercontent.com"
                      buttonText="Login with Google"
                      onSuccess={(response) => handleGoogleSignIn(response)}
                      onFailure={(response) => handleGoogleSignIn(response)}
                      cookiePolicy={'single_host_origin'}
                    />
                  </Grid>
                </Grid>
                <Typography
                  align="center"
                  className={classes.sugestion}
                  color="textSecondary"
                  variant="body1"
                >
                  Inicie sesión con su dirección de correo electrónico
                </Typography>
                <TextField
                  className={classes.textField}
                  error={hasError('email')}
                  fullWidth
                  helperText={
                    hasError('email') ? formState.errors.email[0] : null
                  }
                  label="Correo electrónico"
                  name="email"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.email || ''}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError('Contraseña')}
                  fullWidth
                  helperText={
                    hasError('password') ? formState.errors.password[0] : null
                  }
                  label="Contraseña"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  value={formState.values.password || ''}
                  variant="outlined"
                />
                <Button
                  className={classes.signInButton}
                  color="primary"
                  disabled={!formState.isValid}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Iniciar ahora
                </Button>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  ¿No tienes una cuenta?{' '}
                  <Link
                    component={RouterLink}
                    to="/sign-up"
                    variant="h6"
                  >
                    Regístrate
                  </Link>
                </Typography>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>


    </div>
  );
};

SignIn.propTypes = {
  history: PropTypes.object
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default compose(
  withRouter,
  connect(mapStateToProps, { login })
)(SignIn);
