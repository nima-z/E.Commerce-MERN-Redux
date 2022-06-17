// const express = require("express");
// const router = express.Router();
// const dbConnection = require("../Helper/db-connection");
// const data = require("../dataForDb");

// router.post("/insert", async (req, res) => {
//   const { key } = req.body;
//   if (key === "doIt") {
//     const client = await dbConnection();
//     const db = client.db();

//     try {
//       const saved = await db.collection("products").insertMany(data);
//       client.close();
//       res.status(200).json({ message: "Done", list: saved });
//     } catch (err) {
//       res.status(500).json({ message: "something went wrong", err });
//     }
//   }
// });

// module.exports = router;
