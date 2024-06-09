const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require ('cors');
//this path is used for connected file

const path = require('path');
// this process is used for connected database in config to from app.js file
const connectDatababe = require('./config/connecetDatabase')
const { env } = require('process');

//this  dotenv is used for attaced config file with help of path (field) __dirname used for path the the file 

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') })


//testeing API route with thunderclient then order.js and product.js two file we konduvara pooram in app.js
connectDatababe();

//j.son method usrd for meddelwear used for res ulls method yesduthu body ulla json format la send pannum
app.use(express.json())
//cors is middelware 
app.use(cors())
const products = require("./routes/product");
const orders = require("./routes/order");





//then this two file is we used prefex prefex! used url

app.use('/api/v1/', products);
app.use('/api/v1/', orders)



// this process is used for move config file to take the port and node-env

app.listen(process.env.PORT, () => {
    console.log(`server is lististing to port ${process.env.PORT} in production`)
})
