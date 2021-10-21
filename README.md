# Fetch Rewards Coding Exercise - Backend Software Engineering
## Objective
Create a web service that accepts HTTP requests and sends responses based on certain conditions. 

## Background
The aim of this coding exercise is to track transactions and how points are spent. Each transaction record contains: payer (`string`), points (`integer`), and a timestamp (`date`). 

When points are spent, there are two rules:
- we want the oldest points to be spent first (oldest based on the transaction timestamp, not the order they’re received)
- we don't want a payer's points to go negative

To meet these conditions there will be routes that: 
- add transactions for a specific payer and date
- spend points using the rules above and return a list of { "payer": <string>, "points": <integer> } for each call
- return all payer point balances

## Prerequisites
- JavaScript
- Packages: Node.js, Express.js

## Installation
When in the project root directory, run:
```
npm install 
npm run start
```

## REST API
The API endpoints are described below.

### Adding a transaction
#### Request
`POST /transactions/`
```
curl -X POST -H "Content-Type: application/json" -d '{ "payer": "DANNON", "points": 1000, "timestamp": "2020-11-02T14:00:00Z" }' http://localhost:5000/transactions/ ; echo
```

#### Response
```
{
  "payer":"DANNON",
  "points":1000,
  "timestamp":"2020-11-02T14:00:00Z"
}
```

### Spending points
#### Request
`POST /transactions/spend`
```
curl -X POST -H "Content-Type: application/json" -d '{ "points": 5000 }' http://localhost:5000/transactions/spend ; echo
```

#### Response
```
[
  { "payer": "DANNON", "points": -100 },
  { "payer": "UNILEVER", "points": -200 },
  { "payer": "MILLER COORS", "points": -4,700 }
]
```

### Getting balances for each payer
#### Request
`GET /transactions/`
```
curl http://localhost:5000/transactions/ ; echo
```

#### Response
```
{
  "DANNON": 1000,
  "UNILEVER": 0,
  "MILLER COORS": 5300
}

```