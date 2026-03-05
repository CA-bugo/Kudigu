const express = require('express');
const cors = require('cors');
require('dotenv').config();


const db = require('./config/db');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const moment = require('moment');
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} - ${moment().format()}`);
    next();
};

app.use(logger);
app.use('/api', routes);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


module.exports = app;