const express = require("express");
const { getAllGames, getGameById, createGame, updateGame, deleteGame } = require("../controllers/gamesController");
const auth = require("../middlewares/auth")

const router = express.Router();

router.get("/games",auth, getAllGames);
router.get("/game/:id",auth, getGameById);
router.post("/games", createGame);
router.put("/games/:id",auth, updateGame);
router.delete("/games/:id",auth, deleteGame)


module.exports = router;