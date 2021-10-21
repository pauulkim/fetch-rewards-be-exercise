import express from "express";

const router = express.Router();

// "table" for all transactions
const transactions = [];

// add a transaction
router.post("/", (req, res) => {
  transactions.push(req.body)
  res.json(req.body);
});

// get balance
router.get("/", (req, res) => {
  const formatted = {};

  // go through each of the transactions and get the totals for each payer
  for (let transaction of transactions) {
    if (formatted[transaction.payer]) formatted[transaction.payer] += transaction.points
    else formatted[transaction.payer] = transaction.points
  }

  res.json(formatted);
});


// spending points
router.post("/spend", (req, res) => {
  let points = req.body.points;
  const spend = {};

  // order transactions from oldest to newest
  transactions.sort( (a, b) =>  new Date(a.timestamp) - new Date(b.timestamp) );

  for (let t of transactions) {
    if (points >= t.points) {
      if (spend[t.payer]) spend[t.payer].points -= t.points
      else spend[t.payer] = { "payer": t.payer, "points": - t.points };
      points -= t.points;

      t.points = 0;
    } else {
      spend[t.payer] = { "payer": t.payer, "points": - points };
      points = 0;

      t.points -= points;
      break;
    }
  }

  res.json(Object.values(spend));
});

export default router;