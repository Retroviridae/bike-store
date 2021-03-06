import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
// import bikesSlice, { createBike,deleteBike,updateBike } from '../reduxComponents/bikes/bikesSlice'
// import { addToCart } from '../reduxComponents/cart/cartSlice';

// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector, useDispatch } from 'react-redux'
import { updateCart } from '../reduxComponents/cart/cartSlice';

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

function BikeCard( {index} ) {
  // const cart = useSelector((state) => state.cart.value)
  const bikes = useSelector((state) => state.bikes.value)
  const dispatch = useDispatch()
  // const dispatch = useDispatch()
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToCart = (e) => {
    // console.log(cart)
    // console.log(e.target.id)
    // console.log(bikes[e.target.id])
    fetch("/add", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bikes[e.target.id]),
    }).then((r) => {
      if (r.ok) {
        r.json().then(data => dispatch(updateCart(data)));
        // dispatch(addToCart(bikes[e.target.id]));
        // r.json().then(data => console.log(data));
      } else {
        r.json().then(data => console.log(data));
      }
    });;
  };

//   const removeFromCart = (e)=>{
//     // console.log(e.target.id)
//     // console.log(bikes[e.target.id])
//     fetch("/remove", {
//    method: "PATCH",
//    headers: {
//      "Content-Type": "application/json",
//    },
//    body: JSON.stringify(bikes[e.target.id]),
//  }).then((r) => {
//    if (r.ok) {
//      r.json().then(data => console.log(data));
//     //  dispatch(deleteFromCart(e.target.id));
//      // r.json().then(data => console.log(data));
//    } else {
//      r.json().then(data => console.log(data));
//    }
//  });;
// }
  

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     S
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={bikes[index].model}
        subheader={bikes[index].maker}
      />
      <CardMedia
        component="img"
        height="194"
        image={bikes[index].img}
        alt={bikes[index].model}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {"$"+bikes[index].price.toLocaleString("en-US")}
        </Typography>
        <Button onClick={handleExpandClick}> {expanded?'Hide':'Show more'}</Button>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* <FavoriteIcon /> */}
        </IconButton>
        <IconButton aria-label="share">
          {/* <ShareIcon /> */}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Button href={bikes[index].url}>Click Here for more info about the {bikes[index].model}</Button>
          {/* <Typography paragraph></Typography> */}
          {/* <Link id={index} onClick={addToCart}>Add to cart</Link>
          <Link id={index} onClick={removeFromCart}>Remove from cart</Link> */}
          <Typography></Typography>
          <Button id={index} onClick={addToCart} size="small" variant="outlined" color="success" >
        Add to cart
        </Button>
        {/* <Button id={index} onClick={removeFromCart} size="small" variant="outlined" color="warning" >
        -
        </Button> */}
          {/* <p>{index}</p> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default BikeCard;
