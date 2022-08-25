//DEPENDENCIES
const express = require('express');
const players = express.Router();

const {
  getAllPlayers,
  getOnePlayer,
  createNewPlayer,
  updatePlayer,
  deletePlayer,
} = require('../queries/players');

//SHOW ALL PLAYERS
players.get('/', async (req, res) => {
  const allPlayers = await getAllPlayers();
  if (allPlayers) {
    res.status(200).json({ success: true, payload: allPlayers });
  } else {
    res
      .status(404)
      .json({ success: false, payload: 'Error! No players found!' });
  }
});

//SHOW ONE PLAYER
players.get('/:id', async (req, res) => {
  const { id } = req.params;
  const onePlayer = await getOnePlayer(id);
  if (onePlayer.id) {
    res.status(200).json({ success: true, payload: onePlayer });
  } else {
    res.status(404).json({
      success: false,
      payload: `A player with id ${id} can not be found!`,
    });
  }
});

//ADD ONE PLAYER
players.post('/', async (req, res) => {
  const newPlayer = req.body;
  const createdPlayer = await createNewPlayer(newPlayer);

  if (createdPlayer) {
    res.status(200).json({ success: true, payload: createdPlayer });
  } else {
    res
      .status(404)
      .json({ success: false, payload: `A new player can not be added!` });
  }
});

//DELETE A PLAYER
players.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedPlayer = await deletePlayer(id);

  if (deletedPlayer.id) {
    res.status(200).json({ success: true, payload: deletedPlayer });
  } else {
    res.status(404).json({
      success: false,
      payload: `A player with id ${id} can not be deleted!`,
    });
  }
});

module.exports = players;
