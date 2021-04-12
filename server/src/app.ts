export {}
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose= require("mongoose")

const config = require("./utils/config");
import { adminRouter } from './routes/adminRouter';
import { bookingRouter } from './routes/bookingRouter';
import {venueRouter} from './routes/venueRouter'

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded())

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
  })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error:any) => {
    console.log("error connection to MongoDB:", error.message);
  });

app.use("/api/venue", venueRouter );
app.use("/api/booking",bookingRouter );
app.use("/api/admin", adminRouter);





module.exports = app;