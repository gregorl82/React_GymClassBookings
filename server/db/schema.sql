DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS instructors;
DROP TABLE IF EXISTS members;

CREATE TABLE members(
    id SERIAL PRIMARY KEY,
    given_name VARCHAR,
    family_name VARCHAR,
    membership_level VARCHAR
);

CREATE TABLE instructors(
    id SERIAL PRIMARY KEY,
    given_name VARCHAR,
    family_name VARCHAR
)

CREATE TABLE classes(
    id SERIAL PRIMARY KEY,
    capacity INT,
    activity VARCHAR,
    instructor_id INT REFERENCES instructors(id)
);

CREATE TABLE bookings(
    id SERIAL PRIMARY KEY,
    member_id INT REFERENCES members(id),
    class_id INT REFERENCES classes(id)
);