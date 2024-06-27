const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 9090;
const mySqlPool = require('./config/db');
const newsRoute = require('./routes/news');
const categoryRoute = require('./routes/category');
const bodyParser = require('body-parser');

//^ Middlewares 
app.use(cors());
app.use(bodyParser.json())
app.use('/api/v1/news', newsRoute);
app.use('/api/v1/category', categoryRoute);

//& DB Connection
mySqlPool.query('SELECT 1')
.then(() => {
    console.log('DB Connection Successfull');
    app.listen(PORT, () => {
        console.log(`Server is running ${PORT}`);
    });
})
.catch(error => console.log(error));