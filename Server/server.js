const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')

const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
dotenv.config();

require("./Database/connection")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//------
const UserRoute = require("./Routers/user")
const authRoute = require("./Routers/auth")
const postsRoute = require("./Routers/posts")

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use(UserRoute)
app.use(authRoute)
app.use(postsRoute)

app.listen(PORT,()=>{
    console.log(`Server is running on : http://localhost:${PORT}`);
})