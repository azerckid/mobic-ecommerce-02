const express = require('express');
const ip = require('ip');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const router = require('./routers/product');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1', router);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${ip.address()} port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});