import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from "react";
// import { tooltipClasses } from '@mui/material';
import { update } from './reduxComponents/me/meSlice'


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



function OrderCard( { order }) {

  // const cart = useSelector((state) => state.cart.value)
  const bikes = useSelector((state) => state.bikes.value)
  // const me = useSelector((state) => state.me.value)
  const [display,setDisplay] = useState([])
  const [total,setTotal] = useState(0)
  const dispatch = useDispatch()
  // console.log(display)
  const [expanded, setExpanded] = React.useState(false);

  useEffect(()=>{
    if(!!order.cart&&!!bikes[0]){
      // console.log(me.orders[0].cart)
      // console.log("me.orders.cart")
      // console.log(me.orders[0].cart)
      let array = []
      let sum = 0
  
      for(const key in order.cart){
        // array.push(<p>Bike id:{key}, quantity:{cart[key]} Bike:{bikes[key].model}</p>)
        array.push(key)
        sum = sum + (bikes[key].price*order.cart[key])
      }
      // console.log("array")
      // console.log(array)
      // console.log(sum)
      setTotal(sum)
      setDisplay(array)

  }
  },[bikes])


  // useEffect(()=>{
  //   if(me.orders){
  //     // console.log(me.orders[0].cart)
  //     // console.log("me.orders.cart")
  //     // console.log(me.orders[0].cart)
  //     let array = []
  //     let sum = 0
  
  //     for(const key in me.orders[0].cart){
  //       // array.push(<p>Bike id:{key}, quantity:{cart[key]} Bike:{bikes[key].model}</p>)
  //       array.push(key)
  //       sum = sum + (bikes[key].price*me.orders[0].cart[key])
  //     }
  //     // console.log("array")
  //     console.log(array)
  //     // console.log(sum)
  //     setTotal(sum)
  //     setDisplay(array)

  // }

  // },[])

  const deleteOrder = (e)=>{
    // console.log(me)
    // console.log("dldete order")
    // console.log(e.target.id)
    // console.log(bikes[e.target.id])
    fetch(`/orders/${e.target.id}`, {
   method: "DELETE",
 }).then((r) => {
   if (r.ok) {
     r.json().then(data => dispatch(update(data)));
    //  dispatch(deleteFromCart(e.target.id));
    // r.json().then(data => dispatch(updateCart(data)));
    // console.log(cart)
   } else {
     r.json().then(data => console.log(data));
   }
 });;
}


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
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
        title={"Order ID:"+order.id}
        subheader={"Order total: $"+total.toLocaleString("en-US")}
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="img link"
        alt="img link, maybe cut?"
      /> */}
      <CardContent>
        <Typography variant="body2" >
        {display.map(bike=>{return(
          <Button key={bike} color="primary"   href={bikes[bike].url}>{order.cart[bike]+"x: "+bikes[bike].model}</Button>
        )})} 
        </Typography>
        
        <Button color="primary" variant="outlined" onClick={handleExpandClick}> {expanded?'hide':'Shipping info'}</Button>
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
          <Typography paragraph>{order.address+", "+ order.city+", "+ order.state+", "+ order.zip}</Typography>
          <Typography paragraph>{order.created_at.slice(0,10)}</Typography>
          <Button id={order.id} variant="contained" color="error" onClick={deleteOrder}>Cancel Order</Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default OrderCard;
