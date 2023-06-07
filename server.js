const express =require( "express");// library for create server
const dotenv =require ("dotenv"); // library for read .env files
const bodyParser =require( "body-parser");// library for req.body
const cors =require("cors");// library for prevent google cross script attack
const ejs =require('ejs')


dotenv.config()
console.log(process.env.port)


const dbConnect =require("./configs/db");//import the database connection function
//intiate the express server function
const app =express(); //express framework for server intialization

const productRoutes = require('./routes/productRoutes');
const ItemsRouter= require('./routes/itemsRoutes')//items routes
//enable to read .env files

//enable to read the request.body data
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
// Set the view engine to EJS
app.set('view engine', 'ejs');


// Serve static files from the "public" directory
app.use(express.static('public'));
//intiate Database connection
dbConnect()
//redirect to login page
app.get('/',(req, res)=>{
    res.send('welcome')
})
//route the user request and response urls
app.use('/items', ItemsRouter);//items route

app.use('/products', productRoutes);


//start the server on port 80
app.listen(4000)

