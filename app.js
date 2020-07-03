const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

require('./database').getInstance().setModels();
const { PORT } = require('./config');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(router);
app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log(`${PORT} is working...`);
});
