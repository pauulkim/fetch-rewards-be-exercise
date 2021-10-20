import express from "express";

import transactionRoutes from "./routes/transaction.js";

// initialize the app and set a port
const app = express();
const PORT = 5000;

// middleware 
app.use(express.json()); 

// homepage route
app.get("/", (req, res) => {
  console.log("!TEST!")
  // res.send("Hello World!");
});

// api routes
app.use("/transaction", transactionRoutes);

// start the app
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));