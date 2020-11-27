-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2020 at 04:38 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carrent`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(10) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `age` int(3) NOT NULL,
  `contactno` int(12) NOT NULL,
  `email` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `age`, `contactno`, `email`) VALUES
(1, 'pranto', 'pra123', 0, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `carlist`
--

CREATE TABLE `carlist` (
  `id` int(10) NOT NULL,
  `carname` varchar(20) NOT NULL,
  `catagories` varchar(20) NOT NULL,
  `price` int(10) NOT NULL,
  `description` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carlist`
--

INSERT INTO `carlist` (`id`, `carname`, `catagories`, `price`, `description`) VALUES
(1, 'Xcorola', 'toyota', 2000000, 'It is very fast and good for middle rang'),
(2, 'bmwx1', 'bmw', 10000000, 'It is a great car'),
(5, 'Zcorola', 'Toyota', 2000000, 'for middium range it is good'),
(6, 'Ycorola', 'Toyota', 500000, 'For mid range it is good car'),
(7, 'bmwx2', 'bmw', 11000000, 'Its a great car for bmw user');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `contactno` int(12) NOT NULL,
  `password` varchar(10) NOT NULL,
  `email` varchar(20) NOT NULL,
  `age` int(3) NOT NULL,
  `mname` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `name`, `username`, `contactno`, `password`, `email`, `age`, `mname`) VALUES
(1, 'sagar', 'sagar12', 1789657895, 'sa123', 'sagar@gmail.com', 25, ''),
(2, 'dipto', 'dipto12', 1789654895, 'di123', 'dipto@gmail.com', 15, ''),
(3, 'lopa', 'lopa123', 1792502189, 'lo123', 'lopa@gmail.com', 21, ''),
(4, 'sadat', 'sadat123', 1785478596, 'sa123', 'sadat@gmail.com', 22, ''),
(5, 'nafis', 'nafis123', 198745635, 'na123', 'nafis@gmail.com', 20, ''),
(6, 'abir', 'abir123', 1789654785, 'ab123', 'abir@gmail.com', 22, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carlist`
--
ALTER TABLE `carlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `carlist`
--
ALTER TABLE `carlist`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
