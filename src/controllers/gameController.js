const gameModel = require('../models/gameModel');

const getAllGames = async (req, res) => {
  try {
    const { name, age_rating, num_players, duration, genre1, genre2 } = req.query;

    const games = await gameModel.getAllGames({
      name,
      age_rating: age_rating ? parseInt(age_rating) : null,
      num_players: num_players ? parseInt(num_players) : null,
      duration: duration ? parseInt(duration) : null,
      genre1,
      genre2,
    });

    // 👉 se não encontrar nada, devolve lista vazia com 200
    return res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar jogos" });
  }
};

const getGameById = async (req, res) => {
    try {
        const game = await gameModel.getGameById(req.params.id);
        if (!game) {
            return res.status(404).json({message: "Jogo não encontrado" });
    }
        res.json(game);
    } catch (error) {
        res.status(404).json({ error: 'Erro ao buscar jogo' });
    }
};

const createGame = async (req, res) => {
    try {
        const { image_url, name, description, rating, genre1, genre2, age_rating, duration, num_players, developer, mechanics, rules } = req.body;
        const newGame = await gameModel.createGame(image_url, name, description, rating, genre1, genre2, age_rating, duration, num_players, developer, mechanics, rules);
        res.status(201).json(newGame);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') { 
            return res.status(400).json({ error: 'Jogo com esse nome já existe' });
        }
        res.status(400).json({ error: 'Erro ao criar jogo' });
    }
};

const updateGame = async (req, res) => {
    try {
        const { image_url, name, description, rating, genre1, genre2, age_rating, duration, num_players, developer, mechanics, rules } = req.body;
        const updatedGame = await gameModel.updateGame(req.params.id, image_url, name, description, rating, genre1, genre2, age_rating, duration, num_players, developer, mechanics, rules);
        if (!updatedGame) {
            return res.status(404).json({message: 'Jogo não encontrado' });
        }
        res.json(updatedGame);
    } catch (error) {
        res.status(404).json({message: 'Erro ao atualizar jogo' });
    }
};

const deleteGame = async (req, res) => {
    try{
        const message = await gameModel.deleteGame(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(404).json({message: 'Erro ao deletar jogo'});
    }
};

module.exports = {
    getAllGames,
    getGameById,
    createGame,
    updateGame,
    deleteGame
};