import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

const PersonalDetails = ({ setPersonalForm, setActiveStep }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [err, setErr] = useState(false);
  const handleNext = () => {
    if (firstName.match(/^[a-zA-Z]+$/) && lastName.match(/^[a-zA-Z]+$/) && age.match(/^[0-9]+$/) && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && address.match(/^[a-zA-Z0-9\s,.'-/]{3,}$/)) {
      setPersonalForm({ firstName, lastName, age, phone, email, address });
      setActiveStep(1);
    }
    else {
      setErr(true);
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      {err &&
        <Alert severity="error" sx={{ marginBottom: '1em' }}>
          Please Check all the form entries before clicking next!
        </Alert>
      }
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            variant="standard"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            helperText={(firstName === "") ? "This field cannot be empty" : ""}
            error={(firstName === "") ? false : firstName.match(/^[a-zA-Z]+$/) ? false : true}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            variant="standard"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            helperText={(lastName === "") ? "This field cannot be empty" : ""}
            error={(lastName === "") ? false : lastName.match(/^[a-zA-Z]+$/) ? false : true}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="age"
            name="age"
            label="Age"
            fullWidth
            variant="standard"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            helperText={(age === "") ? "This field cannot be empty" : ""}
            error={(age === "") ? false : age.match(/^[0-9]+$/) ? false : true}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            variant="standard"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            helperText={(phone === "") ? "This field cannot be empty" : ""}
            error={(phone === "") ? false : phone.match(/^[0-9+ ]+$/) && phone.length > 7 ? false : true}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={(email === "") ? "This field cannot be empty" : ""}
            error={(email === "") ? false : email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? false : true}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Home Address"
            fullWidth
            variant="standard"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            helperText={(address === "") ? "This field cannot be empty" : ""}
            error={(address === "") ? false : address.match(/^[a-zA-Z0-9\s,.'-/]{3,}$/) ? false : true}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </React.Fragment>
  );
}


export default PersonalDetails;