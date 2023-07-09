
INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', '2023-06-13 01:52:52', '2023-06-13 01:52:52'),
(2, 'User', '2023-06-13 01:52:52', '2023-06-13 01:52:52');

INSERT INTO `users` (`id`, `firstName`, `lastName`, `dob`, `phone`, `email`, `username`, `password`, `roleId`, `createdAt`, `updatedAt`) VALUES
(1, '123', '123', '2000-04-20 00:00:00', '+84 123123123', '123@gmail.com', '123', '123', 1, '2023-06-13 01:52:52', '2023-06-13 01:52:52'),
(2, 'Vs', 'Phu', '2000-04-20 00:00:00', '+84 918301328', 'vusiphu@gmail.com', 'phuvs', '123', 1, '2023-06-13 01:52:52', '2023-06-13 01:52:52');

INSERT INTO `playlists` (`id`, `title`, `topics`, `creater`, `createdAt`, `updatedAt`) VALUES
(1, 'Top ca khúc 2021', 'Pop, Chill, Dingga, Songs, Lofi, Trending', 'Cindy Cường', '2023-06-18 12:14:06', '2023-06-18 12:14:06'),
(2, 'Top USUK 2020', 'Pop, Chill, Trending', 'Grady Phùng', '2023-06-18 12:15:23', '2023-06-18 12:15:23');


INSERT INTO `banghis` (`id`, `name`, `time`, `singer`, `author`, `type`, `format`, `picture`, `hsd`, `createdAt`, `updatedAt`) VALUES
('KRA40102234', 'Build a b*tch', '02:32', 'Bella Poarch', 'Bella Poarch', 2, 2, 'https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/video_1.png?alt=media&token=a1aceed9-d853-46bb-953e-ed979e86c3a5', 3, '2023-06-14 17:18:31', '2023-06-14 17:18:31'),
('KRA40102799', 'Generic Granite Bike', '05:01', 'GDragon', 'GDragon', 2, 3, 'https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/video_2.png?alt=media&token=944b4789-3b88-46f5-973c-acb973bbd4cc', 2, '2023-06-14 17:15:01', '2023-06-14 17:15:01'),
('KRA4010501', 'Sleek Granite Ball', '02:21', 'Min', 'Min', 3, 3, 'https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/video_3.png?alt=media&token=9739674e-c56e-4897-886a-bb7d39113b84', 3, '2023-06-14 17:14:33', '2023-06-14 17:14:33'),
('KRA40105463', 'Handcrafted Fresh Bacon Multy', '04:27', 'Phan Mạnh Quỳnh', 'Phan Mạnh Quỳnh', 2, 3, 'https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/video_4.png?alt=media&token=b4998159-8b1f-49e8-aa2a-592dd4040f6f', 2, '2023-06-14 17:08:29', '2023-06-14 17:08:29'),
('KRA40105519', 'Ergonomic Fresh Chips', '16:18', 'Chillies', 'Chillies', 2, 2, 'https://firebasestorage.googleapis.com/v0/b/vcpmc---intermediate-d30ab.appspot.com/o/video_5.png?alt=media&token=a5174003-c935-4cd0-bda5-73ad2474b904', 2, '2023-06-14 17:09:50', '2023-06-14 17:09:50');


INSERT INTO `banghiplaylists` (`id`, `banGhiId`, `playlistId`, `createdAt`, `updatedAt`) VALUES
(1, 'KRA4010501', 1, '2023-06-18 12:30:02', '2023-06-18 12:30:02'),
(2, 'KRA40102234', 1, '2023-06-18 12:30:12', '2023-06-18 12:30:12'),
(3, 'KRA40102799', 1, '2023-06-18 12:30:17', '2023-06-18 12:30:17'),
(4, 'KRA40105519', 1, '2023-06-18 12:30:22', '2023-06-18 12:30:22');


INSERT INTO `banghiuyquyens` (`id`, `name`, `singer`, `author`, `date`, `status`, `createdAt`, `updatedAt`) VALUES
('VNA1423525', 'Gorgeous Wooden Bike', 'Vương Anh Tú', 'Vương Phong', '2023-07-03 20:26:42', 1, '2023-07-04 15:26:42', '2023-07-04 15:26:42'),
('VNA1423637', 'Small Concrete Fish', 'Khác Hưng', 'Đinh Nhân DVM', '2023-07-02 20:27:21', 2, '2023-07-04 15:27:21', '2023-07-04 15:27:21'),
('VNA2575758', 'Yummy', 'Đen Vâu', 'Đoàn Lê DVM', '2023-07-04 20:28:01', 3, '2023-07-04 15:28:00', '2023-07-04 15:28:00');


INSERT INTO `devices` (`id`, `name`, `status`, `address`, `hsd`, `mac`, `memory`, `sku`, `username`, `createdAt`, `updatedAt`) VALUES
(1, 'Device A12321', 1, '194, Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh', '2023-10-25 09:45:55', '192.168.1.8', 65.25, '232124264', 'User 2', '2023-07-02 04:45:55', '2023-07-02 04:45:55'),
(2, 'Device A12154', 2, '86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh', '2023-08-17 09:47:54', '192.168.35.35', 56.23, '369258147', 'User 434', '2023-07-02 04:47:54', '2023-07-02 04:47:54');


INSERT INTO `hdkhaithacs` (`id`, `customer`, `user`, `status`, `createdAt`, `updatedAt`) VALUES
('HD123', 'Hợp đồng kinh doanh 1', 'Hợp đồng kinh doanh 1', 1, '2023-07-02 16:36:12', '2023-07-28 16:36:12'),
('UH1563167', 'Hợp đồng kinh doanh 3', 'Hợp đồng kinh doanh 3', 3, '2023-07-05 11:37:13', '2023-07-19 16:37:13'),
('YQ14145145', 'Hợp đồng kinh doanh 2', 'Hợp đồng kinh doanh 2', 2, '2023-07-03 16:36:52', '2023-07-12 16:36:52');


INSERT INTO `hduyquyens` (`id`, `name`, `user`, `ownership`, `effect`, `createdAt`, `updatedAt`) VALUES
('HD123', 'Hợp đồng uỷ quyền bài hát', 'Vương Anh Tú', 2, 2, '2023-07-02 07:42:02', '2023-07-02 07:42:02'),
('JD1466521', 'Hợp đồng uỷ quyền bài hát', 'Chillies', 2, 2, '2023-07-02 07:42:54', '2023-07-02 07:42:54'),
('YQ14145145', 'Hợp đồng uỷ quyền bài hát', 'Khác Hưng', 1, 4, '2023-07-02 07:42:37', '2023-07-02 07:42:37');


INSERT INTO `partners` (`id`, `name`, `username`, `email`, `hsd`, `phone`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Amy Ngọc', 'phm_L@gmail.com', 'phm_L@gmail.com', '2023-07-19 01:11:15', '021 593 1214', 1, '2023-07-05 20:11:15', '2023-07-05 20:11:15'),
(2, 'Zachary Hoàng', 'Thi@hotmail.com', 'Thi@hotmail.com', '2023-07-31 01:12:13', '022 819 3111', 0, '2023-07-05 20:12:13', '2023-07-05 20:12:13');


INSERT INTO `phanphoidoanhthus` (`id`, `user`, `songs`, `doanhThu`, `phi`, `nhuanBut`, `createdAt`, `updatedAt`) VALUES
('UQ789', 'Vương Anh Tú', 15, '365.000.000', '365.000.000', '365.000.000', '2023-07-05 23:18:45', '2023-07-05 23:18:45');


INSERT INTO `schedules` (`id`, `name`, `from`, `to`, `createdAt`, `updatedAt`) VALUES
(1, 'Lịch phát số 1', '2021-04-15 16:40:00', '2021-06-29 16:40:00', '2023-06-25 11:40:00', '2023-06-25 11:40:00'),
(2, 'Lịch phát số 2', '2021-05-11 16:40:00', '2021-06-24 16:40:00', '2023-06-25 11:40:00', '2023-06-25 11:40:00'),
(3, 'Lịch phát số 3', '2021-05-19 16:41:16', '2021-09-02 16:41:16', '2023-06-25 11:41:16', '2023-06-25 11:41:16'),
(4, 'Lịch phát số 4', '2021-08-19 16:41:16', '2022-02-08 16:41:16', '2023-06-25 11:41:16', '2023-06-25 11:41:16');


INSERT INTO `unitsuseddetails` (`id`, `name`, `role`, `email`, `username`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Nguyen Van A', 2, 'nguyenvanb@gmail.com', 'nguyenvanb', 1, '2023-07-05 18:41:02', '2023-07-12 23:41:03'),
(2, 'Nguyen Van B', 2, 'nguyenvanb@gmail.com', 'nguyenvanb', 2, '2023-07-05 18:42:55', '2023-07-10 23:42:55');


INSERT INTO `unitsuseds` (`id`, `name`, `admin`, `user`, `device`, `status`, `createdAt`, `updatedAt`) VALUES
('HD123', 'Cty TNHH TM DV ABCEDEF', 'Admin 1', 21, 15, 1, '2023-07-05 18:27:31', '2023-07-20 23:27:31'),
('UH1563167', 'Cty TNHH TM DV ABCEDEF', 'Admin 3', 36, 14, 0, '2023-07-05 18:28:46', '2023-07-19 23:28:46'),
('YQ14145145', 'Cty TNHH TM DV ABCEDEF', 'Admin 2', 25, 35, 1, '2023-07-05 18:28:12', '2023-07-31 23:28:12');


INSERT INTO `lichsudoisoatdetail` (`Id`, `name`, `luotPhat`, `doanhThu`, `bieuDien`, `sanXuat`, `vcpmc`) VALUES
(1, 'Let Us Be', 365, '365.000.000', '36.266', '36.266', '36.200'),
(2, 'Be Alone', 250, '250.000.000', '2500', '2510', '2540'),
(3, 'Gene', 425, '425.000.000', '1427', '1400', '1600'),
(4, 'Remeber Us This Way', 400, '400.000.000', '4000', '4069', '4089'),
(5, 'Kill This Love', 280, '280.000.000', '5434', '5214', '5384');


INSERT INTO `ppdtdetailleft` (`Id`, `name`, `luotPhat`, `doanhThu`, `hanhChinhPhi`, `nhuanBut`) VALUES
(1, 'Hết thương cạn nhớ ', 1200, '12.000.000', '2.500.000', '2.500.000'),
(2, 'Cuộc gọi nhỡ', 300, '3.000.000', '425.000', '425.000'),
(3, 'Gặp nhưng không ở lại', 1000, '10.000.000', '400.000', '400.000'),
(4, 'Giá cô ấy đừng xuất hiện', 2500, '24.500.000', '280.000', '280.000'),
(5, 'Gặp nhưng không ở lại 2', 400, '4.000.000', '250.000', '250.000');

INSERT INTO `ppdtdetailright` (`Id`, `name`, `luotPhat`, `doanhThu`) VALUES
(1, 'CTy TNHH A', 200, '2.500.000'),
(2, 'CTy TNHH A', 300, '425.000'),
(3, 'CTy TNHH A', 400, '400.000'),
(4, 'CTy TNHH A', 500, '280.000'),
(5, 'CTy TNHH A', 600, '250.000');

INSERT INTO `lichsudoisoats` (`id`, `name`, `from`, `to`, `typeHD`, `tongLuotPhat`, `tongDoanhThu`, `dtChuaPhanPhoi`, `day`, `createdAt`, `updatedAt`) VALUES
('HĐ123', 'Cty TNHH TM DV ABCEDEF', '2023-07-11 06:06:41', '2023-07-27 06:06:41', '1', 200, '365.000.000', '1.000.000', '2023-07-30 06:06:41', '2023-07-08 01:06:41', '2023-07-08 01:06:41');

