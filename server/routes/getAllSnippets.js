const express = require("express");
const router = express.Router();
const pool = require("./../db");

router.get("/getAllSnippets", async (req, res) => {
  const data = await pool.query("select * from snippets");

  res.json(data.rows);
});

module.exports = router;
