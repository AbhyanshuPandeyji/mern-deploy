const express = require('express')
const mongoose = require('mongoose')
const app = express();
const cors = require('cors');
require("dotenv").config();

// use the next js instead of the create react app or the vue js or other to use the instead of create react app its been deprecated / discontinued due to performance issue


// middle ware
const corsOptions = {
    // origin : "http://localhost:3000" // or your frontend URI -(reactjs) - this will be your frontend url without hosting
    origin : "https://mern-deploy-frontend-ox2a.onrender.com" // this will be your frontend url with hosting on site

}

app.use(express.json());
app.use(cors(corsOptions));

// connect to mongodb
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    const PORT = process.env.PORT || 8000
    app.listen(PORT , ()=> {
        console.log(`Server running on port ${PORT}`);
    })
}).catch(err=>{
    console.log(err);
});

// route 
app.get("/" , (req,res)=>{
    res.status(201).json({message: "Connected To Backend!"})
});