import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    minWidth: 375,
    float:"right",
    marginRight:"40%",
    marginTop:"10%",
    border:"1px solid grey"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  flex:{
      display:"flex",
      flexDirection:"column",
      width:"75%",
      marginLeft:"12%",
      fontSize:"7px"
  },
  btn:{
      marginBottom:"5%",
      marginTop:"5%",
      
  },

  h1:{
      marginLeft:"30%"
  },

  btn1:{
      fontSize:"13px",
      marginBottom:"5%",
      marginLeft:"22%"

  },

  btn2:{
    fontSize:"12px",
    color:"blue"
}

});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <h1 className={classes.h1}><i>Netgram</i></h1>
      <Grid className={classes.flex}>
      <TextField
          
          id="outlined-margin-dense"
          label="UserName"
          type="text"
          className={classes.textField}
          
          margin="dense"
          variant="outlined"
        />

<TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="dense"
          variant="outlined" 
        />

<Button variant="contained" color="primary" className={classes.btn}>
  Sign In
</Button> 


</Grid>

<Typography className={classes.btn1}>
Don't have an account?
<Button className={classes.btn2}>SignUp</Button>
</Typography>
      
    </Card>
  );
}
