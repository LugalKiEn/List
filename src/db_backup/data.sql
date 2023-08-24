-- Adminer 4.8.1 MySQL 5.7.39 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `list`;
CREATE DATABASE `list` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `list`;

DROP TABLE IF EXISTS `data`;
CREATE TABLE `data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `data` (`id`, `value`) VALUES
(1,	'[{\"id\":1692861079414,\"title\":\"1\",\"description\":\"1\",\"completion\":false,\"subtasks\":[{\"id\":1692861336673,\"parentId\":1692861079414,\"title\":\"4\",\"description\":\"4\",\"completion\":false,\"subtasks\":[],\"level\":2},{\"id\":1692861340883,\"parentId\":1692861079414,\"title\":\"5\",\"description\":\"5\",\"completion\":false,\"subtasks\":[],\"level\":2}]},{\"id\":1692861327963,\"title\":\"2\",\"description\":\"2\",\"completion\":false,\"subtasks\":[{\"id\":1692861332071,\"parentId\":1692861327963,\"title\":\"3\",\"description\":\"3\",\"completion\":false,\"subtasks\":[],\"level\":2}]}]');

-- 2023-08-24 07:16:41
