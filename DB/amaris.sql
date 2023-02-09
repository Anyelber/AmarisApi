-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-02-2023 a las 07:25:11
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `amaris`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `slider_data`
--

CREATE TABLE `slider_data` (
  `id` int(11) NOT NULL,
  `agency_store_name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `slider_data`
--

INSERT INTO `slider_data` (`id`, `agency_store_name`, `description`, `image`, `created_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(6, 'Testing Agency', 'This is a slider test description', 'https://i.pinimg.com/474x/8b/57/a8/8b57a85616fcad535ecd85ee1b87b129.jpg', 1, '2023-02-08 23:53:40', '2023-02-08 23:53:40', '2023-02-09 01:11:10'),
(7, 'Testing Agency 2', 'This is a slider test description', 'https://i.pinimg.com/474x/8b/57/a8/8b57a85616fcad535ecd85ee1b87b129.jpg', 1, '2023-02-08 23:53:40', '2023-02-08 23:53:40', '2023-02-09 01:11:33'),
(8, 'test', 'test', 'https://i.pinimg.com/474x/8b/57/a8/8b57a85616fcad535ecd85ee1b87b129.jpg', 1, '2023-02-08 23:53:40', '2023-02-08 23:53:40', '2023-02-09 01:21:06'),
(9, 'Testing Agency', 'This is a slider test description', 'https://i.pinimg.com/474x/8b/57/a8/8b57a85616fcad535ecd85ee1b87b129.jpg', 1, '2023-02-08 23:53:40', '2023-02-08 23:53:40', NULL),
(10, 'Testing Agency', 'This is a slider test description', 'https://i.pinimg.com/474x/8b/57/a8/8b57a85616fcad535ecd85ee1b87b129.jpg', 1, '2023-02-08 23:53:40', '2023-02-08 23:53:40', NULL),
(11, 'Testing Agency', 'This is a slider test description', 'https://i.pinimg.com/474x/8b/57/a8/8b57a85616fcad535ecd85ee1b87b129.jpg', 1, '2023-02-08 23:53:41', '2023-02-08 23:53:41', NULL),
(12, 'Testing Agency', 'This is a slider test description', 'https://i.pinimg.com/474x/8b/57/a8/8b57a85616fcad535ecd85ee1b87b129.jpg', 1, '2023-02-08 23:53:41', '2023-02-08 23:53:41', NULL),
(13, 'Testing Agency', 'This is a slider test description', 'https://i.pinimg.com/474x/8b/57/a8/8b57a85616fcad535ecd85ee1b87b129.jpg', 1, '2023-02-08 23:53:41', '2023-02-08 23:53:41', NULL),
(14, 'Testing Agency', 'This is a slider test description', 'https://i.pinimg.com/474x/8b/57/a8/8b57a85616fcad535ecd85ee1b87b129.jpg', 1, '2023-02-08 23:53:41', '2023-02-08 23:53:41', NULL),
(15, 'Testing Agency', 'This is a slider test description', 'https://i.pinimg.com/474x/8b/57/a8/8b57a85616fcad535ecd85ee1b87b129.jpg', 1, '2023-02-08 23:53:41', '2023-02-08 23:53:41', NULL),
(16, 'Testing Agency', 'This is a slider test description', 'https://i.pinimg.com/474x/8b/57/a8/8b57a85616fcad535ecd85ee1b87b129.jpg', 1, '2023-02-08 23:53:41', '2023-02-08 23:53:41', NULL),
(17, 'Testing Agency', 'This is a slider test description', 'https://i.pinimg.com/474x/8b/57/a8/8b57a85616fcad535ecd85ee1b87b129.jpg', 1, '2023-02-08 23:53:41', '2023-02-08 23:53:41', NULL),
(18, 'Testing Agency', 'This is a slider test description', 'https://i.pinimg.com/474x/8b/57/a8/8b57a85616fcad535ecd85ee1b87b129.jpg', 1, '2023-02-08 23:53:42', '2023-02-08 23:53:42', NULL),
(19, 'Testing Agency', 'This is a slider test description', 'https://i.pinimg.com/474x/8b/57/a8/8b57a85616fcad535ecd85ee1b87b129.jpg', 1, '2023-02-08 23:53:42', '2023-02-08 23:53:42', NULL),
(20, 'Testing Agency', 'This is a slider test description', 'https://i.pinimg.com/474x/8b/57/a8/8b57a85616fcad535ecd85ee1b87b129.jpg', 1, '2023-02-08 23:53:42', '2023-02-08 23:53:42', NULL),
(21, 'Testing Agency', 'This is a slider test description', 'https://i.pinimg.com/474x/8b/57/a8/8b57a85616fcad535ecd85ee1b87b129.jpg', 1, '2023-02-08 23:53:42', '2023-02-08 23:53:42', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `rol` int(11) NOT NULL DEFAULT 0,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `last_name`, `created_by`, `created_at`, `updated_at`, `deleted_at`, `rol`, `token`) VALUES
(1, 'anyslehider@gmail.com', '$2a$10$1fh4pWhRTD8u.A0CBvLUCe8SlVji9mRuyyNu7ukc8H3zol5RW0yw6', 'Anyelber', 'Boscan', 1, '2023-02-08 18:49:01', '2023-02-08 18:49:01', NULL, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFueXNsZWhpZGVyQGdtYWlsLmNvbSIsImlhdCI6MTY3NTkyMTg3MiwiZXhwIjoxNjc1OTI5MDcyfQ.KyLkaOq4dZYHi6szvvUdrZhmrrPB_bHbO535nk6PDcQ'),
(2, 'admin@gmail.com', '$2a$10$Uc8Iq1hGAJ0hv8IeBBOv3e0qwNWfN/mNF2y3TwcrHBT8C6m7ZyVoK', 'admin', 'admin', 1, '2023-02-09 07:24:48', '2023-02-09 07:24:48', NULL, 2, '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `slider_data`
--
ALTER TABLE `slider_data`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `slider_data`
--
ALTER TABLE `slider_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
