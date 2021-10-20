# Fetch Rewards Coding Exercise
- `npm install` install dependencies (from package.json)
  - if you run into an error, delete the package-lock.json file and run `npm install` again
- `npm run dev` to start the dev server
  - uses nodemon which allows you to listen to changes
  - allows you to access `http://localhost:5000/`
- `npm run start` to run the actual server
- `curl http://localhost:5000/transactions/ ; echo` to get list of all transactions
- `curl -X POST -H "Content-Type: application/json" -d '{ "payer": "DANNON", "points": 1000, "timestamp": "2020-11-02T14:00:00Z" }' http://localhost:5000/transactions/ ; echo`
  - to add a transaction to the transactions table