const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
// env constants 
const port = process.env.PORT || 5000;
// this will be worl to find .env file in root folder 
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
// here i get the key from .env
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// app settings
app.use(bodyParser.json()) // convert req body into json 
app.use(bodyParser.urlencoded({ extended: true })) // url - escape the symbol and spaces
app.use(cors()) // cross-origin to check the web-server origin

if (process.env.NODE_ENV === 'production') {
    // middlewar to serve the build-static file into client
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}
app.listen(port, error => {
    if (error) throw error
    console.log(`Server runnig on port ${port}`)
})

app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        current: 'usd'
    }

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr })
        } else {
            res.status(200).send({ success: stripeRes })
        }
    })

})