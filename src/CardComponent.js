
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
  },
  align:{
      textAlign:'center'
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Test(props) {
  const classes = useStyles();
 

  return (
     
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}  align= 'center' color="textSecondary" gutterBottom>
        <a href={props.job.url}  >{props.job.title}</a>
        </Typography>
        
      </CardContent>
    </Card>
  );
}
