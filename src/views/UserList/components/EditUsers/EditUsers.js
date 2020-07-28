import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SaveIcon from '@material-ui/icons/Save';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Avatar,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    marginRight: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
}));

const EditUsers = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    Nombre: '',
    ApellidoPat: '',
    ApellidoMat: '',
    Calle: '',
    No_Ext: '',
    No_Int: '',
    Postal: '',
    Colonia: '',
    Municipio: '',
    Ciudad: '',
    Pais: '',
    Correo: '',
    TipoEnfermero: '',
    avatar: "",
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const states = [
    {
      value: 'cuidador',
      label: 'Cuidador'
    },
    {
      value: 'enfermero',
      label: 'Enfermero'
    },
    {
      value: 'especialista',
      label: 'Especialista'
    },
  ];

  const Estatus = [
    {
      value: 'activo',
      label: 'Activo'
    },
    {
      value: 'inactivo',
      label: 'Inactivo'
    },

  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
        
          title="Editar Perfil"
          subheader="Verifica que los datos sean correctos"
        />
        <Divider />
        <CardContent>
        <Avatar
            className={classes.avatar}
            src={EditUsers.avatar}
          />
          
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Por favor coloque solo el nombre"
                label="Nombres"
                margin="dense"
                name="firstName"
                onChange={handleChange}
                required
                value={values.Nombre}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Apellido Paterno"
                margin="dense"
                name="ApellidoPat"
                onChange={handleChange}
                required
                value={values.ApellidoPat}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Apellido Materno"
                margin="dense"
                name="ApellidoMat"
                onChange={handleChange}
                required
                value={values.ApellidoMat}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <TextField
                fullWidth
                label="Calle"
                margin="dense"
                name="Calle"
                onChange={handleChange}
                required
                value={values.Calle}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={2}
              xs={12}
            >
              <TextField
                fullWidth
                label="No_Ext"
                margin="dense"
                name="No_Ext"
                onChange={handleChange}
                required
                value={values.No_Ext}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={2}
              xs={12}
            >
              <TextField
                fullWidth
                label="No_Int"
                margin="dense"
                name="No_Int"
                onChange={handleChange}
                required
                value={values.No_Int}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={2}
              xs={12}
            >
              <TextField
                fullWidth
                label="C.P."
                margin="dense"
                name="Postal"
                onChange={handleChange}
                required
                value={values.Postal}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <TextField
                fullWidth
                label="Colonia"
                margin="dense"
                name="Colonia"
                onChange={handleChange}
                required
                value={values.Colonia}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Delegacion ó Municipio"
                margin="dense"
                name="Municipio"
                onChange={handleChange}
                required
                value={values.Municipio}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Ciudad"
                margin="dense"
                name="Ciudad"
                onChange={handleChange}
                required
                value={values.Ciudad}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="País"
                margin="dense"
                name="Pais"
                onChange={handleChange}
                required
                value={values.Pais}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Correo Electronico"
                margin="dense"
                name="Correo"
                onChange={handleChange}
                required
                value={values.Correo}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Telefono de Casa"
                margin="dense"
                name="Telefono"
                onChange={handleChange}
                required
                value={values.Telefono}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Celular"
                margin="dense"
                name="Celular"
                onChange={handleChange}
                required
                value={values.Celular}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Tipo de personal"
                margin="dense"
                name="TipoEnfermero"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.states}
                variant="outlined"
              >
                {states.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Cedula"
                margin="dense"
                name="Cedula"
                onChange={handleChange}

                value={values.Cedula}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <TextField
                fullWidth
                label="Estatus"
                margin="dense"
                name="Estatus"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.Estatus}
                variant="outlined"
              >
                {Estatus.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleClickOpen}>
            Guardar
      </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Aviso importe"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <h4>¿Está seguro de modificar la información del usuario?<br />
                 -Todo cambio será permanente.</h4>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancelar
          </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Aceptar
          </Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </form>
    </Card>
  );
};

EditUsers.propTypes = {
  className: PropTypes.string
};

export default EditUsers;
