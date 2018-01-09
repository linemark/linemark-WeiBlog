SET NAMES UTF8;
DROP DATABASE IF EXISTS weiblog;
CREATE DATABASE weiblog CHARSET=UTF8;
USE weiblog;
CREATE TABLE wb_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32),
  pwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  user_name VARCHAR(32),
  date_time BIGINT,
  face VARCHAR(128),
  gender INT DEFAULT 0
);
CREATE TABLE user_following(
  uid INT,
  following VARCHAR(10000),
  FOREIGN KEY(uid) REFERENCES wb_user(uid)
);
CREATE TABLE user_fans(
  uid INT,
  fans VARCHAR(10000),
  FOREIGN KEY(uid) REFERENCES wb_user(uid)
);
CREATE TABLE wb_blog(
  bid INT PRIMARY KEY AUTO_INCREMENT,
  blog VARCHAR(300) NOT NULL,
  supporter VARCHAR(10000),
  collector VARCHAR(10000),
  uid INT,
  FOREIGN KEY(uid) REFERENCES wb_user(uid)
);
CREATE TABLE wb_img(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(64) NOT NULL,
  support VARCHAR(10000),
  uid INT,
  bid INT,
  FOREIGN KEY(bid) REFERENCES wb_blog(bid),
  FOREIGN KEY(uid) REFERENCES wb_user(uid)
);
CREATE TABLE wb_reply(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  reply VARCHAR(300),
  reply_time BIGINT,
  bid INT,
  FOREIGN KEY(bid) REFERENCES wb_blog(bid)
);