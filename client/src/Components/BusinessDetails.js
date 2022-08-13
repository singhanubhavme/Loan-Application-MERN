import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const BusinessDetails = ({ setBusinessForm, setActiveStep }) => {
  const [businessName, setBusinessName] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [err, setErr] = useState(false);

  const handleNext = () => {
    if (businessName.match(/^[a-z A-Z 0-9-]+$/) && gstNumber.trim().length === 15 && businessPhone.match(/^[0-9+ ]+$/) && businessPhone.length > 7 && businessEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && businessAddress.match(/^[a-zA-Z0-9\s,.'-/]{3,}$/)) {
      setBusinessForm({ businessName, gstNumber, businessPhone, businessEmail, businessAddress });
      setActiveStep(2);
    }
    else {
      setErr(true);
    }
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Business Details
      </Typography>
      {err &&
        <Alert severity="error" sx={{ marginBottom: '1em' }}>
          Please Check all the form entries before clicking next!
        </Alert>
      }
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="businessName"
            label="Business Name"
            fullWidth
            variant="standard"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            helperText={(businessName === "") ? "This field cannot be empty" : ""}
            error={(businessName === "") ? false : businessName.match(/^[a-z A-Z 0-9-]+$/) ? false : true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="gstNumber"
            label="GST Number"
            fullWidth
            variant="standard"
            value={gstNumber}
            onChange={(e) => setGstNumber(e.target.value)}
            helperText={(gstNumber === "") ? "This field cannot be empty" : "Please Enter 15 digit GST Number"}
            error={(gstNumber === "") ? false : gstNumber.trim().length === 15 ? false : true}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="businessPhone"
            label="Phone Number"
            fullWidth
            variant="standard"
            value={businessPhone}
            onChange={(e) => setBusinessPhone(e.target.value)}
            helperText={(businessPhone === "") ? "This field cannot be empty" : ""}
            error={(businessPhone === "") ? false : businessPhone.match(/^[0-9+ ]+$/) && businessPhone.length > 7 ? false : true}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="businessEmail"
            label="Business Email"
            fullWidth
            variant="standard"
            value={businessEmail}
            onChange={(e) => setBusinessEmail(e.target.value)}
            helperText={(businessEmail === "") ? "This field cannot be empty" : ""}
            error={(businessEmail === "") ? false : businessEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? false : true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            variant="standard"
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
            helperText={(businessAddress === "") ? "This field cannot be empty" : ""}
            error={(businessAddress === "") ? false : businessAddress.match(/^[a-zA-Z0-9\s,.'-/]{3,}$/) ? false : true}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={() => setActiveStep(0)} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{ mt: 3, ml: 1 }}
        >
          Next
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default BusinessDetails;