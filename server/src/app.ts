export {}
const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");

import {venueRouter} from './routes/venueRouter'



// mongoose
//   .connect(config.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     logger.info("connected to MongoDB");
//   })
//   .catch((error) => {
//     logger.error("error connection to MongoDB:", error.message);
//   });

app.use("/api/venue", venueRouter );
// app.use("/api/booking", );
// app.use("/api/admin",);

app.use(cors());
app.use(express.json());



module.exports = app;