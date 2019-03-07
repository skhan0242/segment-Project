import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    menuItem:{
        display: 'inline-block',
        fontSize: '0.7rem',
        height: "auto",
        borderRight: '1px solid #ccc',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 5,
        paddingRight: 5
    },
    menuList:{
        float:'right',
        display: 'flex',
        paddingLeft:24,
        paddingRight:24,
        paddingTop:10,
        paddingBottom:10
    },
    title:{
        display:'inline-flex',
        paddingLeft:24,
        paddingRight:24,
        paddingTop:10,
        paddingBottom:10
    }
  };
  

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: true,
            anchorEl: null,
          };
        }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                           SEGMENTATION
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>

                <Typography component="h5" variant="display5" gutterBottom className={classes.title}>
                    Cosmetics Segmentation
                </Typography>

                <MenuList className={classes.menuList}>
                    <MenuItem className={classes.menuItem}>
                        <Typography variant="inherit">Walgreens</Typography> 
                    </MenuItem>

                    <MenuItem className={classes.menuItem}>
                        <Typography variant="inherit">Beauty</Typography> 
                    </MenuItem>

                    <MenuItem className={classes.menuItem}>
                        <Typography variant="inherit">Cosmetics</Typography> 
                    </MenuItem>

                    <MenuItem className={classes.menuItem}>
                        <Typography variant="inherit">Dimensions</Typography>
                    </MenuItem>

                </MenuList>
            </div>
        );
    }
}

export default withStyles(styles)(Header);
