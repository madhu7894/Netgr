import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from "material-ui-search-bar";
import HomeIcon from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  net: {
   marginLeft:"12%"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  icon: {
      marginLeft:"10%"
  },
  title: {
    flexGrow: 0,
    marginLeft:"22%"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography className={classes.net}>
              Netgram
          </Typography>
          <SearchBar
            className={classes.title}
          />
    
         <IconButton className={classes.icon}>
             <HomeIcon />
         </IconButton>

         <IconButton>
             <TelegramIcon />
         </IconButton>

         <IconButton>
             <ExploreIcon />
         </IconButton>

         <IconButton>
             <FavoriteBorderIcon />
         </IconButton>

         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

        </Toolbar>
      </AppBar>
    </div>
  );
}
