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
import { updateCart } from '../reduxComponents/cart/cartSlice';
import { useForm } from "react-hook-form";
import { decrement, increment } from "../reduxComponents/counter/counterSlice";
import { updateErrors } from '../reduxComponents/errors/errorSlice';

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
  const step = useSelector((state) => state.counter.value)
  const stepper = useSelector((state) => state.step.value)
  const problems = useSelector((state) => state.error.value)
  const dispatch = useDispatch() 
  let hash = {}
  hash = {cart:{...cart},...address, ...payment,user_id:me.id}
  // console.log(hash)
  // console.log(address.zip?.length)
  // console.log(address.zip?.length==5)
  // console.log(problems)
  // console.log(!!problems)
  
  const [activeStep, setActiveStep] = React.useState(0);
  // console.log(!!problems.errors)

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    dispatch(increment())
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    dispatch(decrement())
  };
  // activeStep === steps.length?console.log('worked'):null

  // useEffect(()=>{
  //   dispatch(updateErrors([]))
  // },[])
  
  useEffect(() => {
    if (step === steps.length){
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
            dispatch(updateCart({}))
          }
        }));
      } else {
        r.json().then(data => updateErrors(data.errors));
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
          <Stepper activeStep={step} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {step === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Check your profile page for more information.
                </Typography>
                {/* <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                </Typography> */}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {step !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  {step==0&&stepper==1||step==1&&stepper==2||step==2?<Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {step === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                  :
                  null
                  // <Button
                  //   type="submit"
                  //   fullWidth
                  //   color="warning"
                  //   variant="contained"
                  //   sx={{ mt: 3, mb: 2 }}
                  // >
                  //   Verify Details to Proceed
                  // </Button>
                  }
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