
const {findAllGames,createGame,findGameById,updateGame,deleteGame,checkEmptyFields,checkIfUsersAreSafe,checkIfCategoriesAvaliable,checkIsGameExists,checkIsVoteRequest} = require('../middlewares/games');
const {sendAllGames,sendGameCreated,sendGameDeleted,sendGameUpdated,sendGameById} = require('../controllers/games');
const { checkAuth } = require("../middlewares/auth.js");

const gamesRouter = require('express').Router();

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);

gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
 

);

gamesRouter.delete(
    "/games/:id",
    checkAuth, 
    deleteGame,
    sendGameDeleted
  );

module.exports = gamesRouter;