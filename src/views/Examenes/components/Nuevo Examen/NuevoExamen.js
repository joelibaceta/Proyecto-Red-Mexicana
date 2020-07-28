import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {}
  }));
  
  const NuevoExamen = props => {
    const { className, ...rest } = props;
  
    const classes = useStyles();
  
    const [values, setValues] = useState({
      NomExamen: '',
      Descripcion: '',
      Opciones: '',
     
   
    });
  
    const handleChange = event => {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    };
  
    const opciones = [
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
            title="Nuevo Examen"
            subheader="Datos para un nuevo examen"
          />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={1}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  helperText="Este es el nombre con el que se identificara el examen."
                  label="Nombre del Examen"
                  margin="dense"
                  name="NomExamen"
                  onChange={handleChange}
                  required
                  value={values.NomExamen}
                  variant="outlined"
                />
              </Grid>
              
              <Grid
                item
                md={10}
                xs={4}
              >
                <TextField
                  fullWidth
                  helperText="Espacio dedicado para la descripción del examen."
                  label="Descripcion"
                  margin="dense"
                  name="Descripcion"
                  onChange={handleChange}
                  required
                  value={values.Descripcion}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Para quien es dirigido?"
                  margin="dense"
                  name="Opciones"
                  onChange={handleChange}
                  required
                  select
                  // eslint-disable-next-line react/jsx-sort-props
                  SelectProps={{ native: false }}
                  value={values.opciones}
                  variant="outlined"
                >
                  {opciones.map(option => (
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
            <Button
              color="primary"
              variant="contained"
            >
              Guardar 
            </Button>
          </CardActions>
        </form>
      </Card>
    );
  };
  
  NuevoExamen.propTypes = {
    className: PropTypes.string
  };
  
  export default NuevoExamen;
  