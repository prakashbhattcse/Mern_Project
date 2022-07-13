const { hasSubscribers } = require('diagnostics_channel');
const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs')
require('./db/connection');
const User = require("./models/usermessages")
const port = process.env.PORT || 3000;

const staticpath = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "./templates/views")
const partial_path = path.join(__dirname, "./templates/partials")


// middleware

app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));;
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticpath));
app.set('view engine', 'hbs');
app.set('views', template_path)
hbs.registerPartials(partial_path)


app.get('/', (req, res) => {
    res.render('index')
});

app.post('/contact', async (req, res) => {
    try {
        //to store user enterd data in the database
        const userData = new User(req.body);
         await userData.save();
        res.status(201).render('index');

    } catch(error) {
        res.status(500).send(error);
    }
});


app.listen(port, () => {
    console.log('server working')
});