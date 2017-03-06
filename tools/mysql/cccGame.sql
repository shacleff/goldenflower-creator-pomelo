/*
Navicat MySQL Data Transfer

Source Server         : 192.168.1.3
Source Server Version : 50631
Source Host           : 192.168.1.3:3306
Source Database       : cccGame

Target Server Type    : MYSQL
Target Server Version : 50631
File Encoding         : 65001

Date: 2017-03-06 19:01:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_accounts`
-- ----------------------------
DROP TABLE IF EXISTS `t_accounts`;
CREATE TABLE `t_accounts` (
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_accounts
-- ----------------------------

-- ----------------------------
-- Table structure for `t_users`
-- ----------------------------
DROP TABLE IF EXISTS `t_users`;
CREATE TABLE `t_users` (
  `userid` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `account` varchar(64) NOT NULL DEFAULT '' COMMENT '账号',
  `name` varchar(32) DEFAULT NULL COMMENT '用户昵称',
  `sex` int(1) DEFAULT NULL,
  `headimg` varchar(256) DEFAULT NULL,
  `lv` smallint(6) DEFAULT '1' COMMENT '用户等级',
  `exp` int(11) DEFAULT '0' COMMENT '用户经验',
  `coins` int(11) DEFAULT '0' COMMENT '用户金币',
  `gems` int(11) DEFAULT '0' COMMENT '用户宝石',
  PRIMARY KEY (`userid`),
  UNIQUE KEY `account` (`account`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_users
-- ----------------------------
