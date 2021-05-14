const express =require('express')

const colour=require('colors')

const logger =require("morgan") ;

const dotenv =require("dotenv");
const cors =require ("cors");
const connectDB =require ("./config/db.js");

var app = express();

dotenv.config();

//Connect to DB
connectDB();

// view engine setup

// app.engine(".hbs", exphbs({ defaultLayout: "layout", extname: ".hbs" }));
// app.set("view engine", ".hbs");


app.use(logger("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());



//Import Routes


app.use("/api/users", require('./routes/userRoutes'));
app.use("/api/post", require('./routes/postRoutes'));




app.get("/", (req, res) => {
    res.send("API is running....");
});

const PORT = process.env.PORT || 5001;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
);
