export {}
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose= require("mongoose")

const config = require("./utils/config");
import {venueRouter} from './routes/venueRouter'



mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error:any) => {
    console.log("error connection to MongoDB:", error.message);
  });

app.use("/api/venue", venueRouter );
// app.use("/api/booking", );
// app.use("/api/admin",);

app.use(cors());
app.use(express.json());



module.exports = app;