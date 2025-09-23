const pool = require('../config/database');

// Function to get all games from the database
const getAllGames = async ({ name, age_rating, num_players, duration, genre1, genre2 }) => {
  const query = `
    SELECT *
    FROM games
    WHERE ($1::text IS NULL OR name ILIKE $1)
      AND ($2::int IS NULL OR age_rating = $2)
      AND ($3::int IS NULL OR num_players = $3)
      AND ($4::int IS NULL OR duration = $4)
      AND ($5::text IS NULL OR genre1 = $5 OR genre2 = $5)
      AND ($6::text IS NULL OR genre1 = $6 OR genre2 = $6)
  `;

  const values = [
    name ? `%${name}%` : null,
    age_rating || null,
    num_players || null,
    duration || null,
    genre1 || null,
    genre2 || null,
  ];

  const result = await pool.query(query, values);
  return result.rows;
};

// Function to get a game by its ID
const getGameById = async (id) => {
    const result =await pool.query('SELECT * FROM games WHERE id = $1', [id]);
    return result.rows[0];
};

// Function to create a new game
const createGame = async (image_url, name, description, rating, genre1, genre2, age_rating, duration, num_players, developer, mechanics, rules) => {
    const result = await pool.query(
        'INSERT INTO games (image_url, name, description, rating, genre1, genre2, age_rating, duration, num_players, developer, mechanics, rules) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
        [image_url, name, description, rating, genre1, genre2, age_rating, duration, num_players, developer, mechanics, rules]
    );
    return result.rows[0];
};

// Function to update an existing game
const updateGame = async (id, image_url, name, description, rating, genre1, genre2, age_rating, duration, num_players, developer, mechanics, rules) => {
    const result =await pool.query(
        'UPDATE games SET image_url = $1, name = $2, description = $3, rating = $4, genre1 = $5, genre2 = $6, age_rating = $7, duration = $8, num_players = $9, developer = $10, mechanics = $11, rules = $12 WHERE id = $13 RETURNING *',
        [image_url, name, description, rating, genre1, genre2, age_rating, duration, num_players, developer, mechanics, rules, id]
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