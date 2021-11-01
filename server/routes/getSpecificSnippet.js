const express = require("express");
const router = express.Router();
const pool = require("./../db");

router.get("/getSpecificSnippet", async (req, res) => {
  let id = parseInt(req.query.id);
  const data = await pool.query("select * from snippets where id=$1", [id]);

  res.json(data.rows);
});

module.exports = router;
