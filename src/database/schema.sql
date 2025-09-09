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
    developer VARCHAR(100),
    comment1 TEXT,
    comment2 TEXT
);

INSERT INTO games (image_url, name, description, rating, genre, age_rating, duration, num_players, developer, comment1, comment2) VALUES
('dobble.png', 'Dobble', 'Um jogo de cartas rápido e divertido onde os jogadores devem encontrar o símbolo em comum entre duas cartas antes dos outros.', 5, 'Cartas, Observação', 6, 15, 8, 'Asmodee', 'Viciante! Ótimo para jogar com amigos e família.', 'Simples de aprender e perfeito para todas as idades.'),
('uno.png', 'UNO', 'Clássico jogo de cartas em que o objetivo é ser o primeiro a se livrar de todas as cartas, usando combinações de cores e números.', 5, 'Cartas, Estratégia', 7, 30, 10, 'Mattel', 'Diversão garantida para qualquer idade', 'Um clássico! Cuidado pra não perder as amizades no caminho'),
('tgcqp.png', 'Taco Gato Cabra Queijo Pizza', 'Jogo de cartas rápido e caótico onde os jogadores precisam falar as palavras certas e bater na carta correta no momento certo.', 4, 'Cartas, Festa', 7, 15, 8, 'Blue Orange Games', 'Rende muitas risadas e confusões!', 'Perfeito para o grupo de amigos'),
('dixit.png', 'Dixit', 'Um jogo criativo e visual onde os jogadores usam pistas e imaginação para adivinhar cartas ilustradas.', 5, 'Tabuleiro, Criatividade', 8, 40, 6, 'Libellud', 'As ilustrações são lindas', 'Perfeito para quem gosta de usar a criatividade'),
('trio.png', 'Trio', 'Um jogo de cartas estratégico em que o objetivo é formar trios de números, usando memória e dedução para vencer os adversários.', 4, 'Cartas, Estratégia', 7, 20, 6, 'Repos Production', 'Fácil de aprender e muito competitivo!', 'Ideal para quem gosta de desafios rápidos.'),
('jenga.png', 'Jenga', 'Um jogo de habilidade e equilíbrio onde os jogadores retiram blocos de madeira de uma torre e os reposicionam no topo sem derrubá-la.', 5, 'Habilidade, Clássico', 6, 15, 8, 'Hasbro', 'Tensão e diversão a cada jogada!', 'Um clássico indispensável para qualquer reunião.');

