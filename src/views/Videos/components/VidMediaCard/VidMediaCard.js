import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function VidMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image= "/images/Video1.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Enfermeras "Muere bacteria muere"
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Enfermeras del Hospital Regional de Alta Especialidad de Oaxaca (HRAEO) Promoviendo la Técnica correcta del lavado de manos para el personal médico.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
      <Link
          component="a"
          href="https://www.youtube.com/watch?v=G-rurKG3fJw"
          target="_blank"
        >
          Ver
        </Link>
        </Button>
        <Button size="small" color="primary">
          Editar
        </Button>
        <Button size="small" color="primary">
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
}
