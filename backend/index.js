const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('./db/Conn')
app.use(cors());
app.use(express.json());
app.use(require('./Router/auth'));
// app.use(require('./Router/empauth'));
const dotenv = require('dotenv');
dotenv.config();

const middleware = (req,res,next) => {
    console.log(`Hello Middleware`);
    next();
}

app.listen(3004, () => {
    console.log(`Server is running at 3004`);
    console.log(`http://localhost:3004`);
})