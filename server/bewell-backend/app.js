require('dotenv').config();
const connectDB = require('./db');
connectDB();

const express = require('express');
const cors = require('cors');
const app = express();

const bcrypt = require('bcryptjs');

console.log(process.env.mogo);


app.use(cors());
app.use(express.json()); // for parsing application/json

//routes defined here
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

