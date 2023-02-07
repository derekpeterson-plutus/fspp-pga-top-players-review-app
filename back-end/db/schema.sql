-- SETUP A BLUE PRINT FOR DATABASE
DROP DATABASE IF EXISTS pga_players;

-- CREATING THE DATABASE
CREATE DATABASE pga_players; 

-- CONNECTING TO THE DATABASE
\c pga_players; 


-- CREATING THE PLAYERS TABLE
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    rank_this_week INT DEFAULT 0,
    rank_last_week INT DEFAULT 0,
    country TEXT NOT NULL,
    events INT DEFAULT 0,
    avg_points DECIMAL NOT NULL,
    total_points DECIMAL NOT NULL,
    money_earned TEXT NOT NULL,
    image TEXT NOT NULL
);

-- psql -U postgres -f db/schema.sql