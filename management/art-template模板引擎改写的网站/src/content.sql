/*
Navicat MySQL Data Transfer

Source Server         : container
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : content

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2021-05-13 14:42:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'H211045N', 'Riley Sport男士便帽', '2850');

-- ----------------------------
-- Table structure for hermes
-- ----------------------------
DROP TABLE IF EXISTS `hermes`;
CREATE TABLE `hermes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `account` int(255) DEFAULT NULL,
  `password` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hermes
-- ----------------------------
INSERT INTO `hermes` VALUES ('25', '1550358743', '1550358743', '333333');
INSERT INTO `hermes` VALUES ('22', '424234', '34325235', '555555');
INSERT INTO `hermes` VALUES ('24', '我的四', '2147483647', '222222');
INSERT INTO `hermes` VALUES ('26', '444444', '444444', '444444');
INSERT INTO `hermes` VALUES ('27', '777777', '777777', '777777');
INSERT INTO `hermes` VALUES ('28', '77777', '777777', '777777');
INSERT INTO `hermes` VALUES ('29', '666666', '333444', '555555');
INSERT INTO `hermes` VALUES ('32', 'sdsdsd', '99119911', '99119911');
INSERT INTO `hermes` VALUES ('31', 'echo', '0', '444444');

-- ----------------------------
-- Table structure for scenics
-- ----------------------------
DROP TABLE IF EXISTS `scenics`;
CREATE TABLE `scenics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `describe` varchar(255) DEFAULT NULL,
  `imgPath` varchar(255) DEFAULT NULL,
  `price` bigint(20) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `sum` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of scenics
-- ----------------------------
INSERT INTO `scenics` VALUES ('1', 'Riley Sporta男士便帽', 'https://assets.hermes.cn/is/image/hermesproduct/211045N%201V_front_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '2850', 'H211045N', '1');
INSERT INTO `scenics` VALUES ('2', 'Aller-Retour Clan Equestre围巾', 'https://assets.hermes.cn/is/image/hermesproduct/733767T%2005_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '3150', 'H211046N', null);
INSERT INTO `scenics` VALUES ('3', 'Riley男士便帽', 'https://assets.hermes.cn/is/image/hermesproduct/211042N%20NT_front_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '3150', null, null);
INSERT INTO `scenics` VALUES ('4', '“骏马之舞”90厘米方巾', 'https://assets.hermes.cn/is/image/hermesproduct/353576T%2001_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '5100', null, null);
INSERT INTO `scenics` VALUES ('5', '“金钱结”100厘米方巾', 'https://assets.hermes.cn/is/image/hermesproduct/103402TC09_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '3700', null, null);
INSERT INTO `scenics` VALUES ('6', 'Funk男士帽子', 'https://assets.hermes.cn/is/image/hermesproduct/211041N%20MI_front_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '4700', null, null);
INSERT INTO `scenics` VALUES ('7', '“骏马之舞”90厘米方巾', 'https://assets.hermes.cn/is/image/hermesproduct/353576T%2002_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '5100', null, null);
INSERT INTO `scenics` VALUES ('8', '“佐阿夫与龙骑兵混搭”围巾', 'https://assets.hermes.cn/is/image/hermesproduct/393555T%2006_folded_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '5550', null, null);
INSERT INTO `scenics` VALUES ('9', 'Riley Sporta男士便帽', 'https://assets.hermes.cn/is/image/hermesproduct/211045N%201V_front_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '2850', null, null);
INSERT INTO `scenics` VALUES ('10', 'Aller-Retour Clan Equestre围巾', 'https://assets.hermes.cn/is/image/hermesproduct/733767T%2005_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '5850', null, null);
INSERT INTO `scenics` VALUES ('12', 'Riley Sporta男士便帽', 'https://assets.hermes.cn/is/image/hermesproduct/211045N%201V_front_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '2850', null, null);
INSERT INTO `scenics` VALUES ('13', 'Aller-Retour Clan Equestre围巾', 'https://assets.hermes.cn/is/image/hermesproduct/733767T%2005_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '3150', null, null);
INSERT INTO `scenics` VALUES ('14', 'Riley男士便帽', 'https://assets.hermes.cn/is/image/hermesproduct/211042N%20NT_front_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '3150', null, null);
INSERT INTO `scenics` VALUES ('15', '“骏马之舞”90厘米方巾', 'https://assets.hermes.cn/is/image/hermesproduct/353576T%2001_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '5100', null, null);
INSERT INTO `scenics` VALUES ('16', '“金钱结”100厘米方巾', 'https://assets.hermes.cn/is/image/hermesproduct/103402TC09_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '3700', null, null);
INSERT INTO `scenics` VALUES ('17', 'Funk男士帽子', 'https://assets.hermes.cn/is/image/hermesproduct/211041N%20MI_front_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '4700', null, null);
INSERT INTO `scenics` VALUES ('18', '“骏马之舞”90厘米方巾', 'https://assets.hermes.cn/is/image/hermesproduct/353576T%2002_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '5100', null, null);
INSERT INTO `scenics` VALUES ('19', '“佐阿夫与龙骑兵混搭”围巾', 'https://assets.hermes.cn/is/image/hermesproduct/393555T%2006_folded_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '5550', null, null);
INSERT INTO `scenics` VALUES ('20', 'Riley Sporta男士便帽', 'https://assets.hermes.cn/is/image/hermesproduct/211045N%201V_front_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '2850', null, null);
INSERT INTO `scenics` VALUES ('21', 'Aller-Retour Clan Equestre围巾', 'https://assets.hermes.cn/is/image/hermesproduct/733767T%2005_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '5850', null, null);
INSERT INTO `scenics` VALUES ('22', 'Riley Sporta男士便帽', 'https://assets.hermes.cn/is/image/hermesproduct/211045N%201V_front_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '2850', null, null);
INSERT INTO `scenics` VALUES ('23', 'Aller-Retour Clan Equestre围巾', 'https://assets.hermes.cn/is/image/hermesproduct/733767T%2005_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '3150', null, null);
INSERT INTO `scenics` VALUES ('24', 'Riley男士便帽', 'https://assets.hermes.cn/is/image/hermesproduct/211042N%20NT_front_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '3150', null, null);
INSERT INTO `scenics` VALUES ('25', '“骏马之舞”90厘米方巾', 'https://assets.hermes.cn/is/image/hermesproduct/353576T%2001_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '5100', null, null);
INSERT INTO `scenics` VALUES ('26', '“金钱结”100厘米方巾', 'https://assets.hermes.cn/is/image/hermesproduct/103402TC09_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '3700', null, null);
INSERT INTO `scenics` VALUES ('27', 'Funk男士帽子', 'https://assets.hermes.cn/is/image/hermesproduct/211041N%20MI_front_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '4700', null, null);
INSERT INTO `scenics` VALUES ('28', '“骏马之舞”90厘米方巾', 'https://assets.hermes.cn/is/image/hermesproduct/353576T%2002_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '5100', null, null);
INSERT INTO `scenics` VALUES ('29', '“佐阿夫与龙骑兵混搭”围巾', 'https://assets.hermes.cn/is/image/hermesproduct/393555T%2006_folded_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '5550', null, null);
INSERT INTO `scenics` VALUES ('30', 'Riley Sporta男士便帽', 'https://assets.hermes.cn/is/image/hermesproduct/211045N%201V_front_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '2850', null, null);
INSERT INTO `scenics` VALUES ('31', 'Aller-Retour Clan Equestre围巾', 'https://assets.hermes.cn/is/image/hermesproduct/733767T%2005_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '5850', null, null);
INSERT INTO `scenics` VALUES ('32', 'Riley Sporta男士便帽', 'https://assets.hermes.cn/is/image/hermesproduct/211045N%201V_front_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '2850', null, null);
INSERT INTO `scenics` VALUES ('33', 'Aller-Retour Clan Equestre围巾', 'https://assets.hermes.cn/is/image/hermesproduct/733767T%2005_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '3150', null, null);
INSERT INTO `scenics` VALUES ('34', 'Riley男士便帽', 'https://assets.hermes.cn/is/image/hermesproduct/211042N%20NT_front_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '3150', null, null);
INSERT INTO `scenics` VALUES ('35', '“骏马之舞”90厘米方巾', 'https://assets.hermes.cn/is/image/hermesproduct/353576T%2001_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '5100', null, null);
INSERT INTO `scenics` VALUES ('36', '“金钱结”100厘米方巾', 'https://assets.hermes.cn/is/image/hermesproduct/103402TC09_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '3700', null, null);
INSERT INTO `scenics` VALUES ('37', 'Funk男士帽子', 'https://assets.hermes.cn/is/image/hermesproduct/211041N%20MI_front_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '4700', null, null);
INSERT INTO `scenics` VALUES ('38', '“骏马之舞”90厘米方巾', 'https://assets.hermes.cn/is/image/hermesproduct/353576T%2002_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '5100', null, null);
INSERT INTO `scenics` VALUES ('39', '“佐阿夫与龙骑兵混搭”围巾', 'https://assets.hermes.cn/is/image/hermesproduct/393555T%2006_folded_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '5550', null, null);
INSERT INTO `scenics` VALUES ('40', 'Riley Sporta男士便帽', 'https://assets.hermes.cn/is/image/hermesproduct/211045N%201V_front_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '2850', null, null);
INSERT INTO `scenics` VALUES ('41', 'Aller-Retour Clan Equestre围巾', 'https://assets.hermes.cn/is/image/hermesproduct/733767T%2005_flat_1?a=a&size=3000,3000&extend=300,300,300,300&align=0,1&$product_item_grid_b$=&wid=300&hei=300', '5850', null, null);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('5', '111', '111');
INSERT INTO `user` VALUES ('18', 'a123456777', 'A123456789');
INSERT INTO `user` VALUES ('19', 'a11223344', 'A11223344');
INSERT INTO `user` VALUES ('20', 'a999888', 'A999888');
