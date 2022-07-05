import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { updateAddress } from '../reduxComponents/address/addressSlice';
import { useSelector, useDispatch } from 'react-redux';

function AddressForm() {

  const address = useSelector(state => state.address.value)
  const dispatch = useDispatch()    
  // console.log(address)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(updateAddress({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      address1: data.get('address1'),
      address2: data.get('address2'),
      city: data.get('city'),
      state: data.get('state'),
      zip: data.get('zip'),
      country: data.get('country'),
    }))
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
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid component="form" onSubmit={handleSubmit} container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={address.firstName}
            onChange={(e)=>{
              dispatch(updateAddress({
                firstName: e.target.value,
                lastName: address.lastName,
                address1: address.address1,
                address2: address.address2,
                city: address.city,
                state: address.state,
                zip: address.zip,
                country: address.country,
              }))
            }
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={address.lastName}
            onChange={(e)=>{
              dispatch(updateAddress({
                firstName: address.firstName,
                lastName: e.target.value,
                address1: address.address1,
                address2: address.address2,
                city: address.city,
                state: address.state,
                zip: address.zip,
                country: address.country,
              }))
            }
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={address.address1}
            onChange={(e)=>{
              dispatch(updateAddress({
                firstName: address.firstName,
                lastName: address.lastName,
                address1: e.target.value,
                address2: address.address2,
                city: address.city,
                state: address.state,
                zip: address.zip,
                country: address.country,
              }))
            }
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
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
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={address.city}
            onChange={(e)=>{
              dispatch(updateAddress({
                firstName: address.firstName,
                lastName: address.lastName,
                address1: address.address1,
                address2: address.address2,
                city: e.target.value,
                state: address.state,
                zip: address.zip,
                country: address.country,
              }))
            }
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={address.state}
            onChange={(e)=>{
              dispatch(updateAddress({
                firstName: address.firstName,
                lastName: address.lastName,
                address1: address.address1,
                address2: address.address2,
                city: address.city,
                state: e.target.value,
                zip: address.zip,
                country: address.country,
              }))
            }
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={address.zip}
            onChange={(e)=>{
              dispatch(updateAddress({
                firstName: address.firstName,
                lastName: address.lastName,
                address1: address.address1,
                address2: address.address2,
                city: address.city,
                state: address.state,
                zip: e.target.value,
                country: address.country,
              }))
            }
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={address.country}
            onChange={(e)=>{
              dispatch(updateAddress({
                firstName: address.firstName,
                lastName: address.lastName,
                address1: address.address1,
                address2: address.address2,
                city: address.city,
                state: address.state,
                zip: address.zip,
                country: e.target.value,
              }))
            }
            }
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
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

export default AddressForm;
