CREATE TABLE users (
	user_id serial PRIMARY KEY,
	first_name varchar(256),
	last_name varchar(256),
	hashed_password varchar(256) NOT NULL
);

CREATE TABLE uploads (
	upload_id serial PRIMARY KEY,
	user_id INT NOT NULL,
	file_location varchar(256),
	FOREIGN KEY (user_id)
		REFERENCES users (user_id)
);