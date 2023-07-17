import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const drawerWidth = 240;
    const [title,settitle]=useState()
    const [price,setprice]=useState(0)
    const navigate=useNavigate()

    return (
        <Box  component="form"
        sx={{ width: {sm:`calc(100% - ${drawerWidth}px)`}, ml: {xs: 0, sm: `${drawerWidth}px` }} } position="static" 
        className='text-center m-auto py-4'       
        autoComplete="off">

              <TextField
              onChange={(e)=>{
                settitle(e.target.value)
              }}
          required
          id="outlined-required"
          label=""
          defaultValue="category "
        />
        <br />

         <FormControl Width sx={{ m: 1 }} variant="standard"   onChange={(e)=>{
                setprice(Number(e.target.value))
              }}  >
          <InputLabel htmlFor="standard-adornment-amount"  type='number'  >salary</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>


        <Button variant="contained" onClick={()=>{
            fetch(`http://localhost:3000/mydata`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                    body:JSON.stringify({price,title})
            }).then(()=>{
              navigate('/')
            })
        }}
        >Contained</Button>


        </Box>
    );
}

export default Create;
