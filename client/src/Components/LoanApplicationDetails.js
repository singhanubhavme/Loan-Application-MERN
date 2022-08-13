import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const LoanApplicationDetails = ({ setApplicationForm, setActiveStep, setSubmit }) => {
  const loanTypeOptions = [
    {
      value: 'P',
      label: 'Personal Loan'
    }, {
      value: 'R',
      label: 'Real Estate'
    }, {
      value: 'H',
      label: 'Home Loan'
    }, {
      value: 'O',
      label: 'Others'
    }
  ];

  const [loanType, setLoanType] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = () => {
    if (
      loanAmount.match(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/) &&
      interestRate.match(/^[+]?([0-9]+\.?[0-9]*|\.[0-9]+)$/) &&
      loanTenure.match(/^[0-9]+$/) &&
      loanType !== ""
    ) {
      setApplicationForm({ loanType, loanAmount, interestRate, loanTenure });
      setActiveStep(3);
      setSubmit(true);
    } else {
      setErr(true);
    }
  }

  return (
    <React.Fragment>

      <Typography variant="h6" gutterBottom>
        Loan Details
      </Typography>

      {err &&
        <Alert severity="error" sx={{ marginBottom: '1em' }}>
          Please Check all the form entries before Submitting!
        </Alert>
      }

      <Grid container spacing={3}>

        <Grid item xs={12}>
          <TextField
            required
            id="loanAmount"
            label="Loan Amount"
            fullWidth
            variant="standard"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            helperText={(loanAmount === "") ? "This field cannot be empty" : ""}
            error={(loanAmount === "") ?
              false : loanAmount.match(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/) ?
                false : true
            }
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="interestRate"
            label="Interest Rate you are willing to Pay"
            fullWidth
            variant="standard"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            helperText={(interestRate === "") ? "This field cannot be empty" : ""}
            error={(interestRate === "") ?
              false : interestRate.match(/^[+]?([0-9]+\.?[0-9]*|\.[0-9]+)$/) ?
                false : true
            }
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="loanTenure"
            label="Loan Tenure (in months)"
            fullWidth
            variant="standard"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            helperText={(loanTenure === "") ? "This field cannot be empty" : ""}
            error={(loanTenure === "") ?
              false : loanTenure.match(/^[0-9]+$/) ?
                false : true
            }
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="select-loan-type"
            select
            label="Select"
            variant="standard"
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
            helperText={(loanType === "") ? "Please Select Loan Type" : ""}
          >
            {loanTypeOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}

          </TextField>
        </Grid>

      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={() => setActiveStep(1)} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ mt: 3, ml: 1 }}
        >
          Submit
        </Button>
      </Box>
      
    </React.Fragment>
  );
}

export default LoanApplicationDetails;