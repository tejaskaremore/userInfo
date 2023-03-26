
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function UserCards(props) {
  const {userData} = props;


  const allCards = userData.map( (user) => {
    return (
      <Card sx={{ maxWidth: 345 }} key={user.code}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
    )
  })

  const allCardsDiv = <div>
    {allCards}

  </div>
console.log('allCardsDiv',allCardsDiv)
  return (
    
    <div>
      {userData.length > 0 ? <div>{allCardsDiv}</div> : <>No data in User Data</>}
    </div>
  );
}