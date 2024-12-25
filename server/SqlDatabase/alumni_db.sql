

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Table structure for table `alumnus_bio`
--

CREATE TABLE `alumnus_bio` (
  `id` int(30) NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `batch` year(4) NOT NULL,
  `course_id` int(30) NOT NULL,
  `email` varchar(250) NOT NULL,
  `connected_to` text NOT NULL,
  `avatar` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0= Unverified, 1= Verified',
  `date_created` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumnus_bio`
--

INSERT INTO `alumnus_bio` (`id`, `name`, `gender`, `batch`, `course_id`, `email`, `connected_to`, `avatar`, `status`, `date_created`) VALUES
(1, 'Vicky Mahato', 'male', '2025', 1, 'alumnus@gmail.com', 'Microsoft dev', 'Public\\Avatar\\image_1712981521646.jpg', 1, '2024-03-07');

-- --------------------------------------------------------

--
-- Table structure for table `careers`
--

CREATE TABLE `careers` (
  `id` int(30) NOT NULL,
  `company` varchar(250) NOT NULL,
  `location` text NOT NULL,
  `job_title` text NOT NULL,
  `description` text NOT NULL,
  `user_id` int(30) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Dumping data for table `careers`
--

INSERT INTO `careers` (`id`, `company`, `location`, `job_title`, `description`, `user_id`, `date_created`) VALUES
(1, 'IT Company', 'Remote', 'Web Developer', '<p><strong><u>Lorem ipsum</u></strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><ol><li><em> Sagittis eu volutpat odio facilisis mauris sit amet massa vitae.</em> In tellus integer feugiat scelerisque varius morbi enim. Orci eu lobortis elementum nibh tellus molestie nunc. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Eleifend donec pretium vulputate sapien nec. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Quam adipiscing vitae proin sagittis nisl rhoncus. Sed viverra ipsum nunc aliquet bibendum. Enim ut sem viverra aliquet eget sit amet tellus. Integer feugiat scelerisque varius morbi enim nunc faucibus.</li><li><em>Viverra justo nec ultrices dui. L</em>eo vel orci porta non pulvinar neque laoreet. Id semper risus in hendrerit gravida rutrum quisque non tellus. Sit amet consectetur adipiscing elit ut. Id neque aliquam vestibulum morbi blandit cursus risus. Tristique senectus et netus et malesuada.</li><li> <em>Amet aliquam id diam maecenas ultricies mi eget mauris. </em>Morbi tristique senectus et netus et malesuada. Diam phasellus vestibulum lorem sed risus. Tempor orci dapibus ultrices in. Mi sit amet mauris commodo quis imperdiet. Quisque sagittis purus sit amet volutpat. Vehicula ipsum a arcu cursus. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Id volutpat lacus laoreet non curabitur. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Id aliquet lectus proin nibh nisl condimentum id venenatis. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet.</li></ol>', 1, '2020-10-15 14:14:27');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(30) NOT NULL,
  `course` text NOT NULL,
  `about` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `course`, `about`) VALUES
(1, 'AIML', '');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(30) NOT NULL,
  `title` varchar(250) NOT NULL,
  `content` text NOT NULL,
  `schedule` datetime NOT NULL,
  `banner` text NOT NULL,
  `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `content`, `schedule`, `banner`, `date_created`) VALUES

(2, 'Tik Title', '<p><em>Event tit<u>k</u></em><u>ssss</u> j<strong>nb</strong></p>', '2024-02-09 06:59:00', '', '2024-02-01 14:59:39');


-- --------------------------------------------------------

--
-- Table structure for table `event_commits`
--

CREATE TABLE `event_commits` (
  `id` int(30) NOT NULL,
  `event_id` int(30) NOT NULL,
  `user_id` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event_commits`
--

INSERT INTO `event_commits` (`id`, `event_id`, `user_id`) VALUES
(12, 1, 2),
(13, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `forum_comments`
--

CREATE TABLE `forum_comments` (
  `id` int(30) NOT NULL,
  `topic_id` int(30) NOT NULL,
  `comment` text NOT NULL,
  `user_id` int(30) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `forum_comments`
--

INSERT INTO `forum_comments` (`id`, `topic_id`, `comment`, `user_id`, `date_created`) VALUES
(27, 4, 'wow great... Hello world bro edited', 2, '2024-03-07 12:51:48'),
(28, 4, 'thats cool', 1, '2024-03-14 15:58:08');

-- --------------------------------------------------------

--
-- Table structure for table `forum_topics`
--

CREATE TABLE `forum_topics` (
  `id` int(30) NOT NULL,
  `title` varchar(250) NOT NULL,
  `description` text NOT NULL,
  `user_id` int(30) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `forum_topics`
--

INSERT INTO `forum_topics` (`id`, `title`, `description`, `user_id`, `date_created`) VALUES
(1, 'AI Software Engineer ', '<h2><strong><em>AI </em></strong><em>World is so</em><strong><em> </em></strong><em>dangerous</em><strong><em>.</em></strong></h2><p><span style=\"color: rgb(85, 85, 85);\">XAMPP is meant only for development purposes. It has certain configuration settings that make it easy to develop locally but that are insecure if you want to have your installation accessible to others.</span></p><ol><li><span style=\"color: rgb(85, 85, 85);\">You have successfully installed XAMPP on this system! Now you can start using Apache, MariaDB, PHP and other components. You can find more info in the&nbsp;</span><a href=\"http://localhost/dashboard/faq.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(94, 137, 73); background-color: rgb(255, 255, 255);\">FAQs</a><span style=\"color: rgb(85, 85, 85);\">&nbsp;section or check the&nbsp;</span><a href=\"http://localhost/dashboard/howto.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(94, 137, 73); background-color: rgb(255, 255, 255);\">HOW-TO Guides</a><span style=\"color: rgb(85, 85, 85);\">&nbsp;for getting started with PHP applications.</span></li><li><span style=\"color: rgb(85, 85, 85);\">Start the XAMPP Control Panel to check the server status.</span></li><li><span style=\"color: rgb(85, 85, 85);\">XAMPP has been around for more than 10 years – there is a huge community behind it. You can get involved by joining our&nbsp;</span><a href=\"https://community.apachefriends.org/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(94, 137, 73); background-color: rgb(255, 255, 255);\">Forums</a><span style=\"color: rgb(85, 85, 85);\">, liking us on&nbsp;</span><a href=\"https://www.facebook.com/we.are.xampp\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(94, 137, 73); background-color: rgb(255, 255, 255);\">Facebook</a><span style=\"color: rgb(85, 85, 85);\">, or following our exploits on&nbsp;</span><a href=\"https://twitter.com/apachefriends\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(94, 137, 73); background-color: rgb(255, 255, 255);\">Twitter</a><span style=\"color: rgb(85, 85, 85);\">.</span></li></ol>', 2, '2024-03-03 08:35:04');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(30) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `about` text NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `image_path`, `about`, `created`) VALUES
(1, 'Public\\Images\\1591189015384_IMG_20200303_155233.jpg', '1591189015384_IMG_20200303_155233.jpg', '2024-02-15 20:48:55'),
(2, 'Public\\Images\\techno image.jpg', 'techno image.jpg', '2024-02-15 20:49:32'),
(3, 'Public\\Images\\WhatsApp Image 2024-12-16 at 15.29.39_3cb842cb.jpg', 'WhatsApp Image 2024-12-16 at 15.29.39_3cb842cb.jpg', '2024-02-15 20:49:47');
-- --------------------------------------------------------

--
-- Table structure for table `system_settings`
--

CREATE TABLE `system_settings` (
  `id` int(30) NOT NULL,
  `name` text NOT NULL,
  `email` varchar(200) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `cover_img` text NOT NULL,
  `about_content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `system_settings`
--

INSERT INTO `system_settings` (`id`, `name`, `email`, `contact`, `cover_img`, `about_content`) 
VALUES (1, 'Alumni - Techno Main Salt Lake', 'info@technoindiacollege.ac.in', '(+91) 33 4040 4040', 
'Public\\Images\\techno image.jpg', 
'Techno Main Salt Lake, located in Kolkata, West Bengal, India, is one of the leading educational institutions in the region. It is affiliated with Maulana Abul Kalam Azad University of Technology (MAKAUT). The college is renowned for its engineering, management, and applied sciences programs. Techno Main Salt Lake offers a diverse range of undergraduate and postgraduate courses, including B.Tech, MBA, and M.Tech, across various disciplines such as Computer Science, Civil, Mechanical, Electrical, Electronics, and more.\r\n<br/><center><h3>Department of Computer Science</h3></center><br/>Established: 2001.\r\nThe Department of Computer Science at Techno Main Salt Lake provides a state-of-the-art educational environment, with a focus on practical knowledge and industry readiness. The curriculum is regularly updated to meet industry standards, and the faculty members are highly qualified and experienced. The department offers undergraduate and postgraduate programs, along with research opportunities in the field of Computer Science.');


-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(30) NOT NULL,
  `name` text NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `type` varchar(10) NOT NULL DEFAULT 'Alumnus' COMMENT 'Admin,Alumnus',
  `auto_generated_pass` text NOT NULL,
  `alumnus_id` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `type`, `auto_generated_pass`, `alumnus_id`) VALUES
(1, 'Vicky Mahato', 'admin@gmail.com', '$2b$10$T3AaDtVF15J2PvFAEOrKge0b6/gWShoQnqoN0gz8MLkyQSUJHqyIC', 'admin', '', 0),
(2, 'Pulkit Sharma', 'alumnus@gmail.com', '$2b$10$KP.4g9uiF9kvTQGgRUhym.d7G8CANbljBJVNs9syiaGBT.tllzS3m', 'alumnus', '', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alumnus_bio`
--
ALTER TABLE `alumnus_bio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event_commits`
--
ALTER TABLE `event_commits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `forum_comments`
--
ALTER TABLE `forum_comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `forum_topics`
--
ALTER TABLE `forum_topics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `system_settings`
--
ALTER TABLE `system_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alumnus_bio`
--
ALTER TABLE `alumnus_bio`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `careers`
--
ALTER TABLE `careers`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `event_commits`
--
ALTER TABLE `event_commits`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `forum_comments`
--
ALTER TABLE `forum_comments`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `forum_topics`
--
ALTER TABLE `forum_topics`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `system_settings`
--
ALTER TABLE `system_settings`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
