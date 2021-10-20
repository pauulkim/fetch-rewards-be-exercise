import express from "express";

const router = express.Router();

// "table" for all transactions
const transactions = [];

// get all the transactions
router.get("/", (req, res) => {
  res.send(transactions)
});

router.post("/", (req, res) => {
  res.send(req.body);
})

export default router;

// curl -X POST -H "Content-Type: application/json" -d '{"userId": 5, "title": "Post Title", "body": "Post content."}' http://localhost:5000/transactions/