import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Divider, Drawer,  Typography, useTheme } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import Create from '@mui/icons-material/Create';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';


const Homee = ({ setMode,setNone,None,setType,Type }  ) => {
  const drawerWidth = 240;
  const theme = useTheme()
  const navigate = useNavigate()
  return (
    <div>
      <AppBar sx={{ width: {sm:`calc(100% - ${drawerWidth}px)`}, ml: {xs: 0, sm: `${drawerWidth}px` }} } position="static">
        <Toolbar>  
          <IconButton  
            size="large"
            edge="start"
            color="white"
            aria-label="Menu"
            sx={{ mr: 2 , display:{ sm: 'none'  }}}
            onClick={()=>{
              setType('Temporary')
              setNone('block')
            }}
          >
     
              <MenuIcon  color='white'  />
          </IconButton>
          <Link href="#" className='text-white  text-decoration-none ' > My Expenses </Link>
          <div className='ms-auto  d-flex ' >
            <Typography variant='h6' className='mt-1  p-2 ' > ahmedyasser </Typography>
            <Avatar alt="Travis Howard" className='mt-2' src={require('../image/IMG_1547.JPG')} /> </div>
        </Toolbar>
      
      </AppBar >

      <Drawer
        sx={{
          display:{xs : None , sm: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant={Type}   
        anchor="left"
        open={true}
        onClose={()=>{
          setType('Temporary')
          setNone('none')
        }}
      >
        <Divider />
        <Divider />

        <List>
          <ListItem disablePadding   className='text-center m-auto justify-content-center  '>
            <IconButton sx={{ ml: 1 }} color='info' onClick={() => { setMode(theme.palette.mode === "light" ? "dark" : "light") }}  >
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              <Divider />
            </IconButton>
          </ListItem>

          <Divider />


          <ListItem disablePadding>
            <ListItemButton onClick={() => { navigate('/') }} >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton  onClick={() => { navigate('Create') }}  >
              <ListItemIcon>
                <Create />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>

        </List>


      </Drawer>

    </div>




  );
}

export default Homee;
