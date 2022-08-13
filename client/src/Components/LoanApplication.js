import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonalDetails from './PersonalDetails';
import BusinessDetails from './BusinessDetails';
import LoanApplicationDetails from './LoanApplicationDetails';
import Navbar from './Navbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import axios from 'axios';

const steps = ['Personal', 'Business', 'Loan Details'];

const theme = createTheme();

const LoanApplication = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [personalForm, setPersonalForm] = useState({});
  const [businessForm, setBusinessForm] = useState({});
  const [applicationForm, setApplicationForm] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (submit) {
      axios.post("http://localhost:3001/api/loanApplication", {
        data: [personalForm, businessForm, applicationForm]
      })
        .then((data) => {
          console.log("Database Updated", data.status);
          setSubmit(false);
          setSubmitted(true);
        })
        .catch((err) => {
          console.log("Something went wrong with backend !!\n ", err)
          setError(true);
        })
    }
  });


  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PersonalDetails
            setPersonalForm={setPersonalForm}
            setActiveStep={setActiveStep}
          />
        )
      case 1:
        return (
          <BusinessDetails
            setBusinessForm={setBusinessForm}
            setActiveStep={setActiveStep}
          />
        )
      case 2:
        return (
          <LoanApplicationDetails
            setApplicationForm={setApplicationForm}
            setActiveStep={setActiveStep}
            setSubmit={setSubmit}
          />
        )
      default:
        console.log("Form Submission Initiated");
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Loan Application
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>

            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}

          </Stepper>
          {
            error && 
            <Alert severity="error" sx={{ marginBottom: '1em' }}>
              Cannot Submit the form, please try again later!!
            </Alert>
          }
          {!submitted &&
             getStepContent(activeStep) 
          }
          {
            submitted &&
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              Form Submitted <strong> Successfully!!</strong>
          </Alert>
          }
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default LoanApplication;