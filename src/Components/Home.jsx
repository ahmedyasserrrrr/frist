import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';


const Home = () => {
  const[mydata,setmydata]=useState([])
let totalprice = 0;
  useEffect(()=>{
    fetch('    http://localhost:3000/mydata')
    .then((response)=> response.json())
    .then((data)=>setmydata(data))
  })
    const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
            const drawerWidth =240;
    return (
        <Box  sx={{ width:{sm:`calc(100% - ${drawerWidth}px)`}, ml: {sm:`${drawerWidth}px`} }}>

            

       {
        mydata.map((item)=>{
          totalprice += item.price
          return(     
          <Card sx={{ maxWidth: 345  }} className='text-center m-auto py-4 mt-4 w-100 '   >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="Close"  onClick={()=>{
                fetch(`  http://localhost:3000/mydata/${item.id}`,{ method:"DELETE"})
              }}  >
                < CloseIcon/>
              </IconButton>
            }
          
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={require('../image/images.jpg')}
            alt="Paella dish"
          />
          <h2>{item.price}</h2>
          <h2>{item.title}</h2>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
             
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                aside for 10 minutes.
              </Typography>
              
             
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>)
        })
       }
  <br />  
  <div>
              <h1 classname="text-center m-auto" >total: {totalprice}   </h1>
            </div>
        </Box>
    );
}

export default Home;
