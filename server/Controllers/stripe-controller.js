const stripe = require("stripe").Stripe(process.env.STRIPE_KEY);
// const stripe = Stripes(process.env.STRIPE_KEY);

async function payment(req, res) {
  const { tokenId, amount } = req.body;

  stripe.charges.create(
    {
      source: tokenId,
      amount: amount,
      currency: "usd",
    },
    (err, data) => {
      if (err) {
        res.status(500).json({ message: "could not proceed", err });
      } else {
        res.status(200).json(data);
      }
    }
  );
}

module.exports = { payment };
