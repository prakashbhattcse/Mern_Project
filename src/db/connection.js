const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/mern_website", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('connection succesfull');
}).catch(() => {
    console.log('error')
})