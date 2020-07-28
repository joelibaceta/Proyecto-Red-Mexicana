import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography, Link } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function Examen() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card className={classes.root}>
            <CardActionArea>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Acreditación Enfermera
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        La acreditación es un proceso voluntario mediante el cual una organización
                        es capaz de medir la calidad de servicios o productos, y el rendimiento de
                        los mismos frente a estándares reconocidos a nivel nacional o internacional
         </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <Link
                        component="a"
                        href=""
                        target="_blank"
                    >
                        Ver
        </Link>
                </Button>
                <Button size="small" color="primary">
                    Editar
        </Button>
                <Button size="small" color="primary" onClick={handleClickOpen}>
                    Eliminar
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
                <h4>¿Está seguro de eliminar el examen?<br />
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
        </Card>
    );
}
