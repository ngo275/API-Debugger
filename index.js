const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/rest/pending-actions", (req, res, next) => {
  const mock = {
    id: 1,
    pendingActions: [
      {
        id: "2EJ6VM3ylJkF5eZD9u",
        ipfsHash: "Qmb73LYeMNdSeJECoUfbEBCWUyHtZgsSDAb4rdgZCm99WL",
        emailStatus: "NOT_CONFIRMED",
        kycStatus: "NOT_CONFIRMED",
        phoneStatus: "CONFIRMED"
      }
    ]
  }
  res.json(mock);
});

app.post("/*", (req, res, next) => {
  console.log(req.body)
  res.json(req.body)
})
