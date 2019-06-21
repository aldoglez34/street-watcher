
DROP DATABASE IF EXISTS thirdeye_db;

CREATE DATABASE thirdeye_db;

CREATE TABLE thirdeye_db.reports (
  id INT NOT NULL AUTO_INCREMENT,
  plate VARCHAR(100) NULL,
  owner VARCHAR(100) NULL,
  description VARCHAR(100) NULL,
  value INT NULL,
  PRIMARY KEY (id),
  createdAt VARCHAR(100) NULL,
  updatedAt VARCHAR(100) NULL
);