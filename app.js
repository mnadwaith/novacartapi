let express = require('express');
let app = express();
let Mongo = require('mongodb')
let port = 9110;
let cors = require('cors');

let swaggerUi = require('swagger-ui-express')
let swaggerDocument = require('./swagger.json')
let package = require('./package.json')

swaggerDocument.info.version = package.version

app.use('/api-doc',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
app.use(cors())

let { dbConnect, getData } = require('./controller/dbController');


app.get('/', (req, res) => {
    res.send("This is the root");
});

app.get('/banner', async (req, res) => {
    let query = {};
    let collection = "banner";
    let output = await getData(collection, query);
    res.send(output);
});

app.get('/catagories', async (req, res) => {
    let query = {};
    let collection = "catagories";
    let output = await getData(collection, query);
    res.send(output);
});

app.get('/items', async (req, res) => {
    let query = {};
    let collection = "items";
    let lcost = Number(req.query.lcost)
    let hcost = Number(req.query.hcost)
    if (lcost && hcost) {
        query = {
            $and: [{ price: { $gt: lcost, $lt: hcost } }]
        }
    }
    let output = await getData(collection, query);
    res.send(output);
});



app.get('/electronics', async (req, res) => {
    let query = {};
    let collection = "electronics";
    let lcost = Number(req.query.lcost)
    let hcost = Number(req.query.hcost)
    if (lcost && hcost) {
        query = {
            $and: [{ price: { $gt: lcost, $lt: hcost } }]
        }
    }
    let output = await getData(collection, query);
    res.send(output);
});

app.get('/fashion', async (req, res) => {
    let query = {};
    let collection = "fashion";
    let lcost = Number(req.query.lcost)
    let hcost = Number(req.query.hcost)
    if (lcost && hcost) {
        query = {
            $and: [{ price: { $gt: lcost, $lt: hcost } }]
        }
    }
    let output = await getData(collection, query);
    res.send(output);
});

app.get('/home_kitchen', async (req, res) => {
    let query = {};
    let collection = "home_kitchen";
    let lcost = Number(req.query.lcost)
    let hcost = Number(req.query.hcost)
    if (lcost && hcost) {
        query = {
            $and: [{ price: { $gt: lcost, $lt: hcost } }]
        }
    }
    let output = await getData(collection, query);
    res.send(output);
});

app.get('/sports_outdoor', async (req, res) => {
    let query = {};
    let collection = "sports_outdoor";
    let lcost = Number(req.query.lcost)
    let hcost = Number(req.query.hcost)
    if (lcost && hcost) {
        query = {
            $and: [{ price: { $gt: lcost, $lt: hcost } }]
        }
    }
    let output = await getData(collection, query);
    res.send(output);
});

app.get('/toys_games', async (req, res) => {
    let query = {};
    let collection = "toys_games";
    let lcost = Number(req.query.lcost)
    let hcost = Number(req.query.hcost)
    if (lcost && hcost) {
        query = {
            $and: [{ price: { $gt: lcost, $lt: hcost } }]
        }
    }
    let output = await getData(collection, query);
    res.send(output);
});

app.get('/beauty_personal_care', async (req, res) => {
    let query = {};
    let collection = "beauty_presonal_care";
    let lcost = Number(req.query.lcost)
    let hcost = Number(req.query.hcost)
    if (lcost && hcost) {
        query = {
            $and: [{ price: { $gt: lcost, $lt: hcost } }]
        }
    }
    let output = await getData(collection, query);
    res.send(output);
});


app.listen(port, (err) => {
    dbConnect();
    if (err) throw err;
    console.log(`Server is running on port ${port}`);
});