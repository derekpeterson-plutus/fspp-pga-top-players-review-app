-- CONNECTING TO THE DATABASE
\c devjngaf6e6ng2; 

DROP TABLE IF EXISTS players;

-- CREATING THE PLAYERS TABLE
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    rank_this_week INT DEFAULT 0,
    rank_last_week INT DEFAULT 0,
    country TEXT NOT NULL,
    events INT DEFAULT 0,
    avg_points DECIMAL,
    total_points DECIMAL,
    money_earned TEXT NOT NULL,
    image TEXT NOT NULL
);
