import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { updateAddress } from '../reduxComponents/address/addressSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { updateErrors } from '../reduxComponents/errors/errorSlice';
import { decrement, increment } from "../reduxComponents/counter/counterSlice";
import Button from '@mui/material/Button';


function AddressForm() {

  const address = useSelector(state => state.address.value)
  const dispatch = useDispatch()    
  const { register, handleSubmit, formState: {errors} } =useForm()
  const problems = useSelector((state) => state.error.value)
  const step = useSelector((state) => state.counter.value)
  // console.log(errors)
  // console.log(step)
  const handleNext = () => {
    // setActiveStep(activeStep + 1);
    dispatch(increment())
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   dispatch(updateAddress({
  //     firstName: data.get('firstName'),
  //     lastName: data.get('lastName'),
  //     address1: data.get('address1'),
  //     address2: data.get('address2'),
  //     city: data.get('city'),
  //     state: data.get('state'),
  //     zip: data.get('zip'),
  //     country: data.get('country'),
  //   }))
    // console.log({
    //   firstName: data.get('firstName'),
    //   lastName: data.get('lastName'),
    //   address1: data.get('address1'),
    //   address2: data.get('address2'),
    //   city: data.get('city'),
    //   state: data.get('state'),
    //   zip: data.get('zip'),
    //   country: data.get('country'),
    // })
  // }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid component="form" onSubmit={handleSubmit((data)=>{dispatch(updateAddress(data))})} container spacing={3}>
        <Grid item xs={12} sm={6}>
        <InputLabel htmlFor="component-simple">First Name</InputLabel>
          <Input
            required
            id="firstName"
           {...register("firstName", {minLength: {value:2,message:"Minumum 2"}})}
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            // value={address.firstName}
            // onChange={(e)=>{
            //   dispatch(updateAddress({
            //     firstName: e.target.value,
            //     lastName: address.lastName,
            //     address1: address.address1,
            //     city: address.city,
            //     state: address.state,
            //     zip: address.zip,
            //   }))
            // }
            // }
          />
          {<Typography size='small'  variant="subtitle1" >
        {errors.firstName?.message}
      </Typography>}
        </Grid>
        <Grid item xs={12} sm={6}>
        <InputLabel htmlFor="component-simple">Last Name</InputLabel>
          <Input
          required
            id="lastName"
            {...register("lastName", {minLength: {value:2,message:"Minumum 2"}})}
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            // value={address.lastName}
            // onChange={(e)=>{
            //   dispatch(updateAddress({
            //     firstName: address.firstName,
            //     lastName: e.target.value,
            //     address1: address.address1,
            //     city: address.city,
            //     state: address.state,
            //     zip: address.zip,
            //   }))
            // }
            // }
          />
          {<Typography size='small'  variant="subtitle1" >
        {errors.lastName?.message}
      </Typography>}
        </Grid>
        <Grid item xs={12}>
        <InputLabel htmlFor="component-simple">Address line 1</InputLabel>
          <Input
            required
            id="address1"
            {...register("address1", {minLength: {value:2,message:"Minumum 2"}})}
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            // value={address.address1}
            // onChange={(e)=>{
            //   dispatch(updateAddress({
            //     firstName: address.firstName,
            //     lastName: address.lastName,
            //     address1: e.target.value,
            //     city: address.city,
            //     state: address.state,
            //     zip: address.zip,
            //   }))
            // }
            // }
          />
          {<Typography size='small'  variant="subtitle1" >
        {errors.address1?.message}
      </Typography>}
        </Grid>
        {/* <Grid item xs={12}>
        <InputLabel htmlFor="component-simple">Address line 2</InputLabel>
          <Input
            id="address2"
            {...register("address2")}
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={address.address2}
            onChange={(e)=>{
              dispatch(updateAddress({
                firstName: address.firstName,
                lastName: address.lastName,
                address1: address.address1,
                address2: e.target.value,
                city: address.city,
                state: address.state,
                zip: address.zip,
                country: address.country,
              }))
            }
            }
          />
          {/* {errors.address1?.message} */}
        <Grid item xs={12} sm={6}>
        <InputLabel htmlFor="component-simple">City</InputLabel>
          <Input
          required
            id="city"
            {...register("city", {minLength: {value:2,message:"Minumum 2"}})}
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            // value={address.city}
            // onChange={(e)=>{
            //   dispatch(updateAddress({
            //     firstName: address.firstName,
            //     lastName: address.lastName,
            //     address1: address.address1,
            //     city: e.target.value,
            //     state: address.state,
            //     zip: address.zip,
            //   }))
            // }
            // }
          />
          {errors.city?.message}
        </Grid>
        <Grid item xs={12} sm={6}>
        <InputLabel htmlFor="component-simple">State/Province/Region</InputLabel>
          <Input
          required
            id="state"
            {...register("state", { maxLength: {value:2,message:"2 letters"},minLength: {value:2,message:"2 letters"} })}
            label="State/Province/Region"
            fullWidth
            variant="standard"
            // value={address.state}
            // onChange={(e)=>{
            //   dispatch(updateAddress({
            //     firstName: address.firstName,
            //     lastName: address.lastName,
            //     address1: address.address1,
            //     city: address.city,
            //     state: e.target.value,
            //     zip: address.zip,
            //   }))
            // }
            // }
          />
          {errors.state?.message}
        </Grid>
        <Grid item xs={12} sm={6}>
        <InputLabel htmlFor="component-simple">Zip / Postal code</InputLabel>
          <Input
          required
            id="zip"
            type='number'
            {...register("zip", { maxLength: {value:5,message:"Too Long"},minLength: {value:5,message:"Too Short"} })}
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            // value={address.zip}
            // onChange={(e)=>{
            //   dispatch(updateAddress({
            //     firstName: address.firstName,
            //     lastName: address.lastName,
            //     address1: address.address1,
            //     city: address.city,
            //     state: address.country,
            //     zip: e.target.value,
            //   }))}}
          />
         {<Typography size='small'  variant="subtitle1" >
        {errors.zip?.message}
      </Typography>}
        </Grid>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Validate Address
        </Button>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;
