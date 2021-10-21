# Fetch Rewards Coding Exercise
- `npm install` install dependencies (from package.json)
  - if you run into an error, delete the package-lock.json file and run `npm install` again
- `npm run dev` to start the dev server
  - uses nodemon which allows you to listen to changes
  - allows you to access `http://localhost:5000/`
- `npm run start` to run the actual server


- `curl -X POST -H "Content-Type: application/json" -d '{ "payer": "DANNON", "points": 1000, "timestamp": "2020-11-02T14:00:00Z" }' http://localhost:5000/transactions/ ; echo`
  - to add a transaction to the transactions table
- `curl http://localhost:5000/transactions/ ; echo` to get balances






curl -X POST -H "Content-Type: application/json" -d '{ "payer": "DANNON", "points": 1000, "timestamp": "2020-11-02T14:00:00Z" }' http://localhost:5000/transactions/ ; echo
curl -X POST -H "Content-Type: application/json" -d '{ "payer": "UNILEVER", "points": 200, "timestamp": "2020-10-31T11:00:00Z" }' http://localhost:5000/transactions/ ; echo
curl -X POST -H "Content-Type: application/json" -d '{ "payer": "DANNON", "points": -200, "timestamp": "2020-10-31T15:00:00Z" }' http://localhost:5000/transactions/ ; echo
curl -X POST -H "Content-Type: application/json" -d '{ "payer": "MILLER COORS", "points": 10000, "timestamp": "2020-11-01T14:00:00Z" }' http://localhost:5000/transactions/ ; echo
curl -X POST -H "Content-Type: application/json" -d '{ "payer": "DANNON", "points": 300, "timestamp": "2020-10-31T10:00:00Z" }' http://localhost:5000/transactions/ ; echo