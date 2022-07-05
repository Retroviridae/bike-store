import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { updatePayment, updateKey } from '../reduxComponents/payment/paymentSlice';
import { useSelector, useDispatch } from 'react-redux';

function PaymentForm() {

  const payment = useSelector(state => state.payment.value)
  const dispatch = useDispatch()   
  // console.log(payment)

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.currentTarget)
    const data = new FormData(event.currentTarget);
    dispatch(updatePayment({
      cardName: data.get('cardName'),
      expDate: data.get('expDate'),
      cardNumber: data.get('cardNumber'),
      cvv: data.get('cvv'),
    }))

    const handleChange = () => {
      // console.log("handleChange")
      // event.preventDefault();
      // const data = new FormData(event.currentTarget);
      // // console.log(event.currentTarget)
      dispatch(updatePayment({
        cardName: data.get('cardName'),
        expDate: data.get('expDate'),
        cardNumber: data.get('cardNumber'),
        cvv: data.get('cvv'),
      }))
    }

  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid  component="form" onSubmit={handleSubmit} container spacing={3}>
        <Grid  item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            name='cardName'
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={payment.cardName}
            onChange={(e)=>{
              dispatch(updatePayment({
                cardName: e.target.value,
                expDate: payment.expDate,
                cardNumber: payment.cardNumber,
                cvv: payment.cvv,
              }))
            }
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={payment.cardNumber}
            onChange={(e)=>{
              dispatch(updatePayment({
                cardName: payment.cardName,
                expDate: payment.expDate,
                cardNumber: e.target.value,
                cvv: payment.cvv,
              }))
            }
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            name="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={payment.expDate}
            onChange={(e)=>{
              dispatch(updatePayment({
                cardName: payment.cardName,
                expDate: e.target.value,
                cardNumber: payment.cardNumber,
                cvv: payment.cvv,
              }))
            }
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={payment.cvv}
            onChange={(e)=>{
              dispatch(updatePayment({
                cardName: payment.cardName,
                expDate: payment.expDate,
                cardNumber: payment.cardNumber,
                cvv: e.target.value,
              }))
            }
            }
            
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
        <button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
        </button>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;
