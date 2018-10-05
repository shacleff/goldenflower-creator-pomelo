/*
Navicat MySQL Data Transfer

Source Server         : centos2.7
Source Server Version : 50631
Source Host           : 192.168.2.7:3306
Source Database       : cccGame

Target Server Type    : MYSQL
Target Server Version : 50631
File Encoding         : 65001

Date: 2017-03-09 23:00:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `accounts`
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts` (
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of accounts
-- ----------------------------
INSERT INTO `accounts` VALUES ('14888965741', '14888965741');
INSERT INTO `accounts` VALUES ('14888967041', '6287bf1742d0a1f0253ec39ce38b92f9');
INSERT INTO `accounts` VALUES ('14888967192', '2f664dd315f86aafefac4320e2ec8bea');
INSERT INTO `accounts` VALUES ('14888967343', '0d20e2747089860b76f11d53a84a6c89');
INSERT INTO `accounts` VALUES ('14888967464', 'f08c7265e2e4b05ac0374339b7e7418e');
INSERT INTO `accounts` VALUES ('14888968115', '9e531e56a653f31491ccdc1415aee8b4');
INSERT INTO `accounts` VALUES ('14888968836', 'feac83c966764b0f7cca41a6cd6acc6f');
INSERT INTO `accounts` VALUES ('14888969187', '84d5b3e3018d944a423e2f35fc2c92c9');
INSERT INTO `accounts` VALUES ('14888970308', '1d30f102b0474e9231e9e1a4ed61fba3');
INSERT INTO `accounts` VALUES ('14888972709', '9a2cd77b0dfb4cfda6767ab81400fbfe');
INSERT INTO `accounts` VALUES ('148889734010', '87433f3c479397128f3a8e9c2b8a430a');
INSERT INTO `accounts` VALUES ('148889735411', '2d67e7780e56ee4bf5f9a53fb8ce823d');
INSERT INTO `accounts` VALUES ('148889746412', '94704962a20de05c4af2ec8bb5cd3823');
INSERT INTO `accounts` VALUES ('148889748313', '0ca9dbeb7ad321487407742c8e7b4c00');
INSERT INTO `accounts` VALUES ('14888975991', 'b50c0fd30b9dd6e58e2c8620f429c93d');
INSERT INTO `accounts` VALUES ('14888976052', '5086554c81c7352c390e933f64d4eba7');
INSERT INTO `accounts` VALUES ('14888976223', 'd5d1e0ed2ea99ec271db56a099bb7698');
INSERT INTO `accounts` VALUES ('14888976524', '6cc601c2a830674c53794999466e695e');
INSERT INTO `accounts` VALUES ('14888976991', 'e7fcbf158465e0b964e6f639bf0f9189');
INSERT INTO `accounts` VALUES ('14888977372', '946cbec3ec8e2d7f4278bb7c875b5f30');
INSERT INTO `accounts` VALUES ('14888978083', '59da9f185fb3b5f6585c84354e429043');
INSERT INTO `accounts` VALUES ('14888978124', '91a372a4210907bf9508bd445a24ce03');
INSERT INTO `accounts` VALUES ('14888978435', '9fefbb977e6f34a48ee1db6e435a2e44');
INSERT INTO `accounts` VALUES ('14888978821', '67c8db241f995f41e4e593f53206ead7');
INSERT INTO `accounts` VALUES ('14888981821', '4a6c62e07a0071e8fe8dd115674a4572');
INSERT INTO `accounts` VALUES ('14888982511', '95e0f035f3057accee1d791d736a5323');
INSERT INTO `accounts` VALUES ('14888983191', 'd6e003cb473d3cab8056ed8a157adb5b');
INSERT INTO `accounts` VALUES ('14888983571', '1e7eef5b89971f79087d0ff5a3719e54');
INSERT INTO `accounts` VALUES ('14888984361', '7d360b2f45d2a1724c57982846de83d5');
INSERT INTO `accounts` VALUES ('14888984472', '090b114dc376e831e212f1d3cfe83ed1');
INSERT INTO `accounts` VALUES ('14888985643', '9a9a00d224d6231bf06cd5ab4038834b');
INSERT INTO `accounts` VALUES ('14888991511', '96ba99bd79a4316361fede317df859cc');
INSERT INTO `accounts` VALUES ('14888991712', 'c5ae7bfc611e83b407049ffbb7649b49');
INSERT INTO `accounts` VALUES ('14888995611', 'ac3a56a14a721a0fe49b41f66714cf2f');
INSERT INTO `accounts` VALUES ('14888998901', 'c6431abc6603c3ae2b5d353a204de90e');
INSERT INTO `accounts` VALUES ('14889000721', '2196e132b1ade6528898ac6b111395ae');
INSERT INTO `accounts` VALUES ('14889000832', '934d8ccbdb0b33e8382ca61d61d095cd');
INSERT INTO `accounts` VALUES ('14889001013', 'f070a1b2df067c5afd4e72cfff5cdfb1');
INSERT INTO `accounts` VALUES ('14889820511', '73a0bdb8ec7e9997d9857ac089cc01fc');
INSERT INTO `accounts` VALUES ('14889821761', '7140daf64a3f03eb1a6a0e6147e880e3');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('9', '14888983191', 'asd', '1', null, '1', '0', '0', '0');
INSERT INTO `users` VALUES ('10', '14888983571', 'asd', '1', null, '1', '0', '0', '0');
INSERT INTO `users` VALUES ('11', '14888984361', 'asd', '1', null, '1', '0', '0', '0');
INSERT INTO `users` VALUES ('12', '14888984472', 'asd', '1', null, '1', '0', '0', '0');
INSERT INTO `users` VALUES ('13', '14888985643', 'asd', '1', null, '1', '0', '0', '0');
INSERT INTO `users` VALUES ('14', '14888991712', 'asd', '1', null, '1', '0', '0', '0');
INSERT INTO `users` VALUES ('15', '14888995611', 'asd', '1', null, '1', '0', '0', '0');
INSERT INTO `users` VALUES ('16', '14888998901', 'asd', '1', null, '1', '0', '0', '0');
INSERT INTO `users` VALUES ('17', '14889001013', 'asd', '1', null, '1', '0', '0', '0');
INSERT INTO `users` VALUES ('18', '14889820511', 'asd', '1', null, '1', '0', '0', '0');
INSERT INTO `users` VALUES ('19', '14889821761', 'asd', '1', null, '1', '0', '0', '0');
