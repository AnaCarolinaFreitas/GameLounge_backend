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