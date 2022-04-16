const stripe = require("stripe")(process.env.STRIPE_KEY);

async function payment(req, res) {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (err, data) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(data);
      }
    }
  );
}

module.exports = { payment };
