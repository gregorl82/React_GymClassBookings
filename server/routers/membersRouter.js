const express = require("express");
const pool = require("../db/db");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allMembers = await pool.query("SELECT * FROM members");
    res.status(200).json(allMembers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const member = await pool.query("SELECT * FROM members WHERE id = $1", [
      id,
    ]);
    res.status(200).json(member.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { given_name, family_name, membership_level } = req.body;
    const newMember = await pool.query(
      "INSERT INTO members (given_name, family_name, membership_level) VALUES ($1, $2, $3) RETURNING *",
      [given_name, family_name, membership_level]
    );
    res.status(200).json(newMember.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { given_name, family_name, membership_level } = req.body;
    const updateMember = await pool.query(
      "UPDATE members SET (given_name, family_name, membership_level) = ($1, $2, $3) WHERE id = $4",
      [given_name, family_name, membership_level, id]
    );
    res.status(200).json("Member was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMember = await pool.query("DELETE FROM members WHERE id = $1", [
      id,
    ]);
    res.status(200).json("Member was deleted!");
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
