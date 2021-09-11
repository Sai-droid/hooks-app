import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LockIcon from '@material-ui/icons/Lock';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import CloudTwoToneIcon from '@material-ui/icons/CloudTwoTone';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom"


export default function HomePage() {
    const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const taablepage = () => {
    history.push("/tablepage");
  };

  return (
    <div >
      <Button    style={{color:"white" }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
         
        <MenuItem onClick={handleClose}> <HomeTwoToneIcon/>About</MenuItem>
        <MenuItem onClick={handleClose}><CloudTwoToneIcon />CustomerPage</MenuItem>
        <MenuItem onClick={handleClose}><LockIcon/>Logout</MenuItem>
        <MenuItem   onClick={handleClose} onMouseOver ={taablepage}><LockIcon/>TablePage</MenuItem>

      </Menu>
    </div>
  );
}
