import express from "express";

import transactionsRoutes from "./routes/transactions.js";

// initialize the app and set a port
const app = express();
const PORT = 5000;

// middleware 
app.use(express.json()); 

// homepage route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// api routes
app.use("/transactions", transactionsRoutes);

// start the app
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));