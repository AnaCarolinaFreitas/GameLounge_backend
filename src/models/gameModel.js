const pool = require('../config/database');

// Function to get all games from the database
const getAllGames = async () => {
    const result = await pool.query('SELECT * FROM games');
    return result.rows;
}

// Function to get a game by its ID
const getGameById = async (id) => {
    const result =await pool.query('SELECT * FROM games WHERE id = $1', [id]);
    return result.rows[0];
};

// Function to create a new game
const createGame = async (image_url, name, description, rating, genre, age_rating, duration, num_players, developer) => {
    const result = await pool.query(
        'INSERT INTO games (image_url, name, description, rating, genre, age_rating, duration, num_players, developer) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [image_url, name, description, rating, genre, age_rating, duration, num_players, developer]
    );
    return result.rows[0];
};

// Function to update an existing game
const updateGame = async (id, image_url, name, description, rating, genre, age_rating, duration, num_players, developer) => {
    const result =await pool.query(
        'UPDATE games SET image_url = $1, name = $2, description = $3, rating = $4, genre = $5, age_rating = $6, duration = $7, num_players = $8, developer = $9 WHERE id = $10 RETURNING *',
        [image_url, name, description, rating, genre, age_rating, duration, num_players, developer, id]
    );
    return result.rows[0];
};

//Function to delete a game by its ID
const deleteGame = async (id) => {
    const result = await pool.query('DELETE FROM games WHERE id =$1 RETURNING *', [id]);

    if (result.rowCount === 0) {
        return {error: 'Game not found'};
    }
    return {message: 'Game deleted successfully'};
    };

    module.exports = {
        getAllGames,
        getGameById,
        createGame,
        updateGame,
        deleteGame
    };