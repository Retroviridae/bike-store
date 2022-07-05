import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from "react";


const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

function Review() {

  const cart = useSelector((state) => state.cart.value)
  const bikes = useSelector(state => state.bikes.value)
  const address = useSelector(state => state.address.value)
  const payment = useSelector(state => state.payment.value)
  const dispatch = useDispatch()   
  const [display,setDisplay]= useState([])
  const [total,setTotal]= useState(0)
  // console.log(address)
  // console.log(payment)

  // console.log(cart) 
  // console.log(bikes) 

  useEffect(()=>{
    // console.log(cart)
    let array = []
    let sum = 0

    for(const key in cart){
      // array.push(<p>Bike id:{key}, quantity:{cart[key]} Bike:{bikes[key].model}</p>)
      array.push(key)
      sum = sum + (bikes[key].price*cart[key])
    }
    // console.log(array)
    // console.log(display)
    setTotal(sum)
    setDisplay(array)
  },[cart])
  // console.log(display)



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {display.map((bikeID) => (
          <ListItem key={bikes[bikeID].model} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={bikes[bikeID].model} secondary={"$"+bikes[bikeID].price.toLocaleString("en-US")+"x"+cart[bikeID]} />
            <Typography variant="body2">{"$"+(bikes[bikeID].price*cart[bikeID]).toLocaleString("en-US")}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {"$"+total.toLocaleString("en-US")}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{address.firstName+" "+address.lastName}</Typography>
          <Typography gutterBottom>{address.address1+", "+address.state+", "+address.country+", "+address.zip}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
          <React.Fragment key="name">
                <Grid item xs={6}>
                  <Typography gutterBottom>Card Holder:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.cardName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Card Number:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.cardNumber}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Expiration Date:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.expDate}</Typography>
                </Grid>
            </React.Fragment>
            
            {/* {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))} */}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Review;
