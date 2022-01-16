// Requiring all requires stuff
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const Connection = require('./db/conn');
const cors = require('cors');
const router = require('./Routes/route');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');



// Setting up middle wares
dotEnv.config();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));



// Setting up Routes
app.use('/', router)



// Making Connection
Connection(process.env.MONGODB_URI);



// Listening to port
app.listen(port, () => {
    console.log(`Server is running sucessfully on port number ${port}`);
})