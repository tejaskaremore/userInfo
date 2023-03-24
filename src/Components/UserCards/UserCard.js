
import * as React from 'react';
import {Card,CardActions,CardContent,CardMedia,Button ,Typography  } from '@mui/material';
import Stack from '@mui/material/Stack';
const UserCard=(props)=>{
const {userData} = props;
  const allCards = userData.map( (user) => {
    return (
      <Card sx={{ maxWidth: 345 }}  key = {user.code}> 
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
 {user.name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>
    )
  })

  return (
    <div>
      {userData.length > 0 ?{allCards}:<>No User data</>}
    </div>
  );
  };
export default UserCard;
