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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1048 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dt_h2`
--

LOCK TABLES `dt_h2` WRITE;
/*!40000 ALTER TABLE `dt_h2` DISABLE KEYS */;
INSERT INTO `dt_h2` VALUES (31,'标签属性','HTML'),(32,'属性','CSS'),(33,'奇怪的知识增加了','CSS'),(34,'CSS框架','CSS'),(35,'奇怪的知识增加了','HTML'),(36,'修饰符','npm'),(37,'奇怪的知识增加了','webpack'),(38,'vue-cli','Vue'),(39,'钩子函数','Vue'),(40,'相关库','Vue'),(41,'指令','Vue'),(42,'学习资料网址','CSS'),(43,'度量单位','CSS'),(44,'原生方法','JavaScript'),(45,'相关依赖','npm'),(46,'比较优秀的书籍','其他'),(47,'常用指令','npm'),(48,'英语单词','其他'),(50,'正则表达式','其他'),(52,'奇怪的知识增加了','其他'),(53,'原生属性','JavaScript'),(55,'DOM,BOM属性','JavaScript'),(1006,'DOM,BOM方法','JQuery'),(1007,'一些不错的网站资源','其他'),(1008,'Vue实例选项','Vue'),(1009,'奇怪的知识增加了','Vue'),(1010,'修饰符','Vue'),(1011,'Vue实例的方法','Vue'),(1012,'对象Object','JavaScript'),(1013,'面试须预备知识','其他'),(1014,'计算机名词','其他'),(1015,'数组Array','JavaScript'),(1016,'奇怪的知识增加了','JavaScript'),(1017,'选择器','CSS'),(1018,'字体收集','CSS'),(1019,'语义化元素','HTML5'),(1022,'好用的软件','其他'),(1023,'奇怪的知识增加了','HTML5'),(1024,'h5标签元素','HTML5'),(1026,'h5标签属性','HTML5'),(1028,'h5表单类型','HTML5'),(1029,'h5对象及Api','HTML5'),(1030,'表单类型','HTML'),(1032,'多媒体属性和方法','HTML5'),(1034,'多媒体标签元素事件','HTML5'),(1035,'rgb收集','CSS'),(1036,'常用npm库','Node.js'),(1037,'VSCode常用插件','其他'),(1038,'VsCode常用快捷键','其他'),(1039,'canvas方法和属性','HTML5'),(1040,'DOM,BOM方法','JavaScript'),(1041,'svg矢量图标签','HTML5'),(1043,'算法名词','其他'),(1044,'元素拖拽相关','HTML5'),(1046,'报错原因整理','npm'),(1047,'构造函数','JavaScript');
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

-- Dump completed on 2020-06-21 15:50:47
