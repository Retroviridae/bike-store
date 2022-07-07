import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import cartSlice, { updateCart} from '../reduxComponents/cart/cartSlice';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

function Checkout() {
  const cart = useSelector((state) => state.cart.value)
  const bikes = useSelector(state => state.bikes.value)
  const address = useSelector(state => state.address.value)
  const payment = useSelector(state => state.payment.value)
  const me = useSelector((state) => state.me.value)
  const dispatch = useDispatch() 
  let hash = {}
  hash = {cart:{...cart},...address, ...payment,user_id:me.id}
  // console.log("hash"+hash)

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  // activeStep === steps.length?console.log('worked'):null
  
  useEffect(() => {
    if (activeStep === steps.length){
      // console.log(address)
      // console.log(payment)
      // console.log(cart)
      // console.log(me.id)
    fetch("/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hash),
    }).then((r) => {
      // setIsLoading(false);
      if (r.ok) {
        r.json().then(fetch("/cart", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            r.json().then(data => dispatch(updateCart(data)))
          }
        }));
      } else {
        r.json().then(data => console.log(data));
      }
    })
  };

  }, [activeStep]);

  return (
    // <ThemeProvider theme={theme}>
    <div>
      {/* <CssBaseline /> */}
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        {/* <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Vulpes
          </Typography>
        </Toolbar> */}
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is "INSERT TRANSACTION ID HERE". Check your profile page for information.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        {/* <Copyright /> */}
      </Container>
      </div>
    // </ThemeProvider>
  );
}

export default Checkout;