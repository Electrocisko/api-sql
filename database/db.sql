CREATE TABLE prueba (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO users (name, email) VALUES ('Jhon Mircha','jhon@gmail.com');
INSERT INTO users (name, email) VALUES ('Fave Brubeck','davebrubeck@gmail.com');
INSERT INTO users (name, email) VALUES ('David Camerron','davecamerron@gmail.com');

SELECT * FROM users;