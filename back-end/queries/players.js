const db = require('../db/dbConfig');

//GET ALL PLAYERS
const getAllPlayers = async () => {
  try {
    const allPlayers = await db.any('SELECT * FROM players');
    return allPlayers;
  } catch (error) {
    return error.message;
  }
};

//GET ONE PLAYER
const getOnePlayer = async (id) => {
  try {
    const onePlayer = await db.one('SELECT * FROM players WHERE id = $1', id);
    return onePlayer;
  } catch (error) {
    return error.message;
  }
};

//CREATE A NEW PLAYER
const createNewPlayer = async (player) => {
  console.log(player)
  try {
    const newPlayer = await db.one(
      'INSERT INTO players (name, rank_this_week, rank_last_week, country, events, avg_points, total_points, money_earned, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [
        player.name,
        player.rank_this_week,
        player.rank_last_week,
        player.country,
        player.events,
        player.avg_points,
        player.total_points,
        player.money_earned,
        player.image,
      ]
    );
    return newPlayer;
  } catch (error) {
    return error.message;
  }
};

//UPDATE A PLAYER BY ID
const updatePlayer = async (id, player) => {
  try {
    const updatedPlayer = await db.one(
      'UPDATE players SET name=$1, rank_this_week=$2, rank_last_week=$3, country=$4, events=$5, avg_points=$6, total_points=$7, money_earned=$8, image=$9 WHERE id=$10 RETURNING *',
      [
        player.name,
        player.rank_this_week,
        player.rank_last_week,
        player.country,
        player.events,
        player.avg_points,
        player.total_points,
        player.money_earned,
        player.image,
        id,
      ]
    );
    return updatedPlayer;
  } catch (error) {
    return error.message;
  }
};

//DELETE A PLAYER BY ID
const deletePlayer = async (id) => {
  try {
    const deletedPlayer = await db.one(
      'DELETE FROM players WHERE id = $1 RETURNING *',
      id
    );
    return deletedPlayer;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllPlayers,
  getOnePlayer,
  createNewPlayer,
  updatePlayer,
  deletePlayer,
};
