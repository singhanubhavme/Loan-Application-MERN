const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors({ origin: "*" })); // to fix cross origin errors

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const loanRoutes = require("./routes/loan");

const PORT = process.env.PORT || 3001;
const dbURL = process.env.DB_URL || 'mongodb://localhost:27017/loan-application';

mongoose.connect(dbURL)
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log('Cannot connect to DB ', err))

app.use('/api', loanRoutes);


app.listen(PORT, () => console.log(`On Port ${PORT}!`));