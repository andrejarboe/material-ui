import React, { Component } from 'react';
import {AppBar, Toolbar, Typography} from 'material-ui';

class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          <Button color="inherit">Login</Button> */}
          <Typography variant="headline" color="inherit">
            Jarboe Studios
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;