-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: study-helper
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dt_h2`
--

DROP TABLE IF EXISTS `dt_h2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dt_h2` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `parents` varchar(20) NOT NULL,
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dt_h2`
--

LOCK TABLES `dt_h2` WRITE;
/*!40000 ALTER TABLE `dt_h2` DISABLE KEYS */;
INSERT INTO `dt_h2` VALUES (31,'标签属性','HTML',3),(32,'属性','CSS',0),(33,'奇怪的知识增加了','CSS',0),(34,'CSS框架','CSS',0),(35,'奇怪的知识增加了','HTML',2),(36,'修饰符','npm',0),(37,'奇怪的知识增加了','webpack',0),(38,'vue-cli','Vue',0),(39,'钩子函数','Vue',0),(40,'相关库','Vue',0),(41,'指令','Vue',0),(43,'度量单位','CSS',0),(44,'原生方法','JavaScript',0),(45,'相关依赖','npm',0),(46,'比较优秀的书籍','其他',1),(47,'常用指令','npm',0),(48,'英语单词','其他',2),(50,'正则表达式','其他',2),(52,'奇怪的知识增加了','其他',2),(53,'原生属性','JavaScript',0),(55,'BOM属性','JavaScript',0),(56,'BOM方法','JavaScript',0),(57,'DOM属性','JavaScript',0),(58,'DOM方法','JavaScript',0),(1007,'一些不错的网站资源','其他',2),(1008,'Vue实例选项','Vue',0),(1009,'奇怪的知识增加了','Vue',0),(1010,'修饰符','Vue',0),(1011,'Vue实例的方法','Vue',0),(1013,'面试须预备知识','其他',0),(1014,'计算机名词','其他',0),(1016,'奇怪的知识增加了','JavaScript',0),(1017,'选择器','CSS',0),(1018,'字体收集','CSS',0),(1019,'语义化元素','HTML5',0),(1022,'好用的软件','其他',0),(1023,'奇怪的知识增加了','HTML5',0),(1024,'h5标签元素','HTML5',0),(1026,'h5标签属性','HTML5',0),(1028,'h5表单类型','HTML5',0),(1029,'h5对象及Api','HTML5',0),(1030,'表单类型','HTML',2),(1032,'多媒体属性和方法','HTML5',0),(1034,'多媒体标签元素事件','HTML5',0),(1035,'rgb收集','CSS',0),(1036,'常用npm库','Node.js',0),(1037,'VSCode常用插件','其他',0),(1038,'VSCode常用快捷键','其他',0),(1039,'canvas方法和属性','HTML5',0),(1040,'包装DOM,BOM方法','JQuery',0),(1041,'svg矢量图标签','HTML5',0),(1043,'算法名词','其他',0),(1044,'元素拖拽相关','HTML5',0),(1046,'报错原因整理','npm',0),(1050,'git常用指令','其他',0),(1051,'http状态码','其他',3),(1054,'常见算法','JavaScript',0),(1056,'兼容相关','JavaScript',0),(1058,'报错记录','Vue',0),(1068,'监听事件','JavaScript',0),(1073,'设计模式','JavaScript',0),(1081,'常用转义符号','HTML',0),(1082,'元素监听事件','JavaScript',0),(1084,'ES6相关知识','JavaScript',0),(1093,'好用的谷歌插件','其他',0),(1095,'块级标签','HTML',0),(1096,'内联标签','HTML',0),(1097,'浏览器内核','HTML',0),(1100,'语法','MarkDown',0);
/*!40000 ALTER TABLE `dt_h2` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-24 16:44:33
