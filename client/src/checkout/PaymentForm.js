import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { updatePayment, updateKey } from '../reduxComponents/payment/paymentSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

function PaymentForm() {

  const payment = useSelector(state => state.payment.value)
  const dispatch = useDispatch()   
  const { register, handleSubmit, formState: {errors} } =useForm()
  // console.log(payment)

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log(event.currentTarget)
  //   const data = new FormData(event.currentTarget);
  //   dispatch(updatePayment({
  //     cardName: data.get('cardName'),
  //     expDate: data.get('expDate'),
  //     cardNumber: data.get('cardNumber'),
  //     cvv: data.get('cvv'),
  //   }))

    // const handleChange = () => {
    //   // console.log("handleChange")
    //   // event.preventDefault();
    //   // const data = new FormData(event.currentTarget);
    //   // // console.log(event.currentTarget)
    //   dispatch(updatePayment({
    //     cardName: data.get('cardName'),
    //     expDate: data.get('expDate'),
    //     cardNumber: data.get('cardNumber'),
    //     cvv: data.get('cvv'),
    //   }))
    // }

  // }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid  component="form" onSubmit={handleSubmit((data)=>{console.log(data)})} container spacing={3}>
        <Grid  item xs={12} md={6}>
        <InputLabel htmlFor="component-simple">Name on the card</InputLabel>
          <Input
            required
            id="cardName"
            {...register("cardName", {minLength: {value:2,message:"Minumum 2"}})}
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
          {errors.cardName?.message}
        </Grid>
        <Grid item xs={12} md={6}>
        <InputLabel htmlFor="component-simple">Card number</InputLabel>
          <Input
            required
            id="cardNumber"
            type='number'
            {...register("cardNumber", {maxLength: {value:16,message:"16 digits"},minLength: {value:16,message:"16 digits"}})}
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
          {errors.cardNumber?.message}
        </Grid>
        <Grid item xs={12} md={6}>
        <InputLabel htmlFor="component-simple">Expiration Date</InputLabel>
          <Input
            required
            id="expDate"
            type='date'
            {...register("expDate")}
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
          {errors.cvv?.expDate}
        </Grid>
        <Grid item xs={12} md={6}>
        <InputLabel htmlFor="component-simple">CVV</InputLabel>
          <Input
            required
            id="cvv"
            type='number'
            {...register("cvv", {maxLength: {value:3,message:"3 digits"},minLength: {value:3,message:"3 digits"}})}
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
            {errors.cvv?.message}
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
