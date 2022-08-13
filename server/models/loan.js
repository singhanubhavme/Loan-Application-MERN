const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: String,
    phoneNumber: String,
    emailAddress: String,
    homeAddress: String,

    businessName: String,
    gstNumber: String,
    businessPhoneNumber: String,
    businessEmail: String,
    businessAddress: String,
    
    loanAmount: String,
    interestRate: String,
    loanTenure: String,
    loanType: String
});

module.exports = mongoose.model("Loan", loanSchema);