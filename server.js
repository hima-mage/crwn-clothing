const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path');

// env constants 
const port = process.env.PORT || 5000
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
// app settings
app.use(bodyParser.json()) // convert req body into json 
app.use(bodyParser.urlencoded({ extended: true })) // url - escape the symbol and spaces
app.use(cors()) // cross-origin to check the web-server origin