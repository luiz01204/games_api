const express = require("express");
const { getAllGames, getGameById, createGame, updateGame, deleteGame } = require("../controllers/gamesController");

const router = express.Router();

router.get("/games", getAllGames);
router.get("/game/:id", getGameById);
router.post("/games", createGame);
router.put("/games/:id", updateGame);
router.delete("/games/:id", deleteGame)


module.exports = router;