-- StormCoders ProMan v.2.0

DROP TABLE IF EXISTS boards_proman;
CREATE TABLE boards_proman (
    id SERIAL PRIMARY KEY,
    title text,
    state text
);


DROP TABLE IF EXISTS cards_proman;
CREATE TABLE cards_proman (
    id SERIAL PRIMARY KEY,
    board_id INT REFERENCES boards_proman (id) ON DELETE CASCADE,
    title text,
    status text
);