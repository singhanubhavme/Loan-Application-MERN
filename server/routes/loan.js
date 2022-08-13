const express = require("express");
const router = express.Router();
const Loan = require("../models/loan");

router
    .post('/loanApplication', (req, res) => {
        const [personalForm, businessForm, applicationForm] = req.body.data;
        const { firstName, lastName, age, phone, email, address } = personalForm;
        const { businessName, gstNumber, businessPhone, businessEmail, businessAddress } = businessForm;
        const { loanType, loanAmount, interestRate, loanTenure } = applicationForm;
        Loan.create({
            firstName, lastName, age,
            phoneNumber: phone,
            emailAddress: email,
            homeAddress: address,
            businessName, businessEmail, gstNumber, businessAddress,
            businessPhoneNumber: businessPhone,
            interestRate, loanAmount, loanType, loanTenure
        }, (err, docs) => {
            if (!err && docs) {
                console.log("Database Updated Successfully\n", docs);
                res.sendStatus(201);
            } else {
                console.log("Something went wrong");
                res.sendStatus(503);
            }
        })
    })

module.exports = router;