import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { grey, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    marginTop:"8%",
    marginLeft:"20%",
    

   
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  gr:{
    display:"flex",
    flexDirection:"row"
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    marginLeft:"3%",
    marginTop:"3%"
  },

  typo:{
      marginLeft:"2%",
      marginTop:"4%",
      fontSize:"15px"
  },

  floats:{
      marginLeft:"60%",
      marginTop:"1%"
  },

  comment:{
      float:"left",
      
     
      
  },

  comment1:{
    fontSize:"15px",
    marginLeft:"1%"
},

comment2:{
    display:"flex",
    flexDirection:"column",
    
    
    
    
},

comment3:{
    float:"right",
    padding: 0,
    
    marginLeft:"100%"
    
    
},

comment4:{
    
    fontSize:"11px",
    
    
    
},

input:{
    width:"90%",
    border:"transparent"
}






}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <Grid className={classes.gr} lg={12}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar}/>
      <Typography className={classes.typo}>
          madhu@2807
      </Typography>
      <IconButton className={classes.floats} >
          <MoreHorizIcon />
      </IconButton>
      </Grid>
      <CardMedia
        className={classes.media}
        image="/static/images/cards/H.jpg"
        title="Paella dish"
      />
      
      


<AppBar position="static">
  <Toolbar>
  <IconButton >
             <FavoriteBorderIcon />
         </IconButton>
         <IconButton>
             <TelegramIcon />
         </IconButton>
         <IconButton>
             <ChatBubbleOutlineOutlinedIcon />
         </IconButton>

         <IconButton className={classes.comment1} >
             <BookmarkBorderIcon />
         </IconButton>
      
  </Toolbar>
</AppBar>


<AppBar position="static" className={classes.comment2}>
  <Toolbar  >
   <Grid className={classes.comment2}>
   <span className={classes.comment1}>
      1 like
    </span>

    <span className={classes.comment4}>
      AUG 27
    </span>
   </Grid>
    

  </Toolbar>
</AppBar>


<AppBar position="static" >
  <Toolbar  >
  <TextField
          
          id="outlined-margin-dense"
          defaultValue="Default Value"
          className={classes.textField}
          
          margin="dense"
          variant="outlined"
          className={classes.input} 
        /> 

<Button variant="contained" color="primary" href="#contained-buttons">
  Post
</Button>
  </Toolbar>
</AppBar>
    </Card>
  );
}
