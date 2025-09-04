CREATE DATABASE gamelounge;

\c gamelounge;

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    image_url TEXT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    rating INT,
    genre VARCHAR(50),
    age_rating INT,
    duration INT,
    num_players INT,
    developer VARCHAR(100)
);

INSERT INTO games (image_url, name, description, rating, genre, age_rating, duration, num_players, developer) VALUES
('https://example.com/images/game1.jpg', 'Adventure Quest', 'An epic adventure game.', 5, 'Adventure', 12, 10, 1, 'Epic Games Studio'),
('https://example.com/images/game2.jpg', 'Puzzle Mania', 'A challenging puzzle game.', 4, 'Puzzle', 8, 5, 1, 'Puzzle Masters Inc.'),
('https://example.com/images/game3.jpg', 'Racing Thunder', 'High-speed racing action.', 5, 'Racing', 10, 15, 4, 'Speedster Games'),
('https://example.com/images/game4.jpg', 'Mystery Island', 'Solve mysteries on a deserted island.', 4, 'Mystery', 12, 20, 2, 'Mystery Makers'),
('https://example.com/images/game5.jpg', 'Fantasy World', 'Explore a magical fantasy world.', 5, 'Fantasy', 10, 30, 1, 'Fantasy Studios');