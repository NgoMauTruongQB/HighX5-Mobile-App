"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            // status 0 : upComing, 1 : onGoing, 2: Complete
            // 21 cái : 3 cái status 0 và 3 cái status 2 còn lại là status onGoing ( chú ý status kết thúc thì date_end phải kết thúc )
            // có tổng cộng 7 cái type : 21 cái event, mỗi cái type có 3 cái event
            "Events",
            [
                {
                    id: 1,
                    name: "K23 - Bén lửa sinh ra",
                    slogan: "Nhen nhóm - Bừng lên - Lan tỏa",
                    description:
                        'Ngày hội “K23 - BÉN LỬA SINH RA” với các trạm trò chơi liên hoàn gắn liền với các môn học đầy "khó nhằn" của sinh viên IT như K23 và hòn đá giải tích, hội toán rời rạc, hoàng tử tín hiệu số, python và đồ án tử thần,... được sự tham gia sôi nổi của các bạn newbie nhà ITF. Đầy bất ngờ với phần văn nghệ kết hợp với đèn led hết sức mãn nhãn của các bạn K23, hình ảnh truyền nhau ánh đèn hoa đăng cũng vô cùng đẹp và ý nghĩa.',
                    location: "Sân khu F, Đại học bách khoa",
                    status: 0,
                    date_start: "2024-06-20",
                    date_end: "2024-07-20",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701833394/Mobile/y8mke7ig8avsytt4vh4x.jpg",
                    type_id : 1,
                    createdBy : 1,
                },
                {
                    id: 2,
                    name: "IT - GEN Z FESTIVAL",
                    slogan: null,
                    description:
                        "Sao bao ngày mong chờ thì ngày “định mệnh” ấy đã đến, IT – GEN Z FESTIVAL chính thức “ra lò” và chào đón tất cả các ITer đến tham dự.",
                    location: "Sân khu F, Đại học bách khoa",
                    status: 0,
                    date_start: "2024-02-28",
                    date_end: "2024-03-09",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701833427/Mobile/hxvdyestrkidsjdpvcfc.jpg",
                    type_id : 1,
                    createdBy : 1,
                },
                {
                    id: 3,
                    name: "IT LEAGUE 2024",
                    slogan: "Who is the Champion?",
                    description:
                        "Hành trình kiếm tìm chủ nhân của chiếc cup vô địch giải đấu IT League. Cùng liên chi đoàn khoa công nghệ thông tin tham gia vào các khâu chuẩn bị để có một mùa giải mãn nhãn nhé. Nhanh tay đăng kí thôi.",
                    location:
                        "Sân bóng Nguyễn Chánh 2 - Đường số 4, P. Hòa Khánh Bắc, Q.Liên Chiểu, TP. Đà Nẵng",
                    status: 0,
                    date_start: "2024-02-27",
                    date_end: "2024-03-15",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701833465/Mobile/l52c3qxvdgzrwxvdrm79.png",
                    type_id : 1,
                    createdBy : 1,
                },
                {
                    id: 4,
                    name: "CodeFest 2023",
                    slogan: "Unleash the Coding Power",
                    description:
                        "CodeFest là thách thức lập trình cuối cùng nơi các thí sinh sẽ đối mặt với những vấn đề lập trình khó khăn. Hãy sẵn sàng để giải phóng kỹ năng lập trình của bạn và cạnh tranh để giành những giải thưởng hấp dẫn!",
                    location: "Đấu trường Tech Hub",
                    status: 1,
                    date_start: "2023-12-07",
                    date_end: "2024-02-10",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701833508/Mobile/vg46xs2bjpggkbnucn6g.png",
                    type_id : 2,
                    createdBy : 1,
                },
                {
                    id: 5,
                    name: "TechXperience Expo",
                    slogan: "Explore the Future Tech",
                    description:
                        "Bắt đầu một cuộc hành trình để khám phá những điều mới nhất và tuyệt vời nhất trong công nghệ. TechXperience Expo tổ chức những người yêu công nghệ, những người sáng tạo và chuyên gia ngành công nghiệp cho một ngày trải nghiệm công nghệ sâu sắc.",
                    location: "Trung tâm Đổi mới, Đại học Đà Nẵng",
                    status: 1,
                    date_start: "2023-12-06",
                    date_end: "2024-02-15",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701833554/Mobile/jflj2nej0jzvjleojnej.jpg",
                    type_id : 2,
                    createdBy : 1,
                },
                {
                    id: 6,
                    name: "Thách thức Data Crunch",
                    slogan: "Crack the Data Code",
                    description:
                        "Gọi tất cả những người đam mê dữ liệu! Tham gia Thách thức Data Crunch và thể hiện kỹ năng phân tích dữ liệu của bạn. Phân tích bộ dữ liệu thực tế và giải mã để khám phá thông tin quý báu.",
                    location: "Phòng Lab Dữ liệu",
                    status: 1,
                    date_start: "2023-12-05",
                    date_end: "2024-01-08",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701833581/Mobile/puquzt0dwvkcmmijhoq5.jpg",
                    type_id : 2,
                    createdBy : 1,
                },
                {
                    id: 7,
                    name: "InnoHackathon 2023",
                    slogan: "Innovate, Code, Win!",
                    description:
                        "InnoHackathon là thách thức đổi mới cuối cùng. Tập hợp đội của bạn, nảy ra những giải pháp sáng tạo và lập trình đường đến chiến thắng. Đến lúc biến những ý tưởng đổi mới của bạn thành hiện thực!",
                    location: "Trung tâm Đổi mới",
                    status: 1,
                    date_start: "2023-05-20",
                    date_end: "2024-05-06",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701833620/Mobile/dstvqbskhuk18hmnq1hr.png",
                    type_id : 3,
                    createdBy : 1,
                },
                {
                    id: 8,
                    name: "Hội nghị FutureTech",
                    slogan: "Shaping Tomorrow’s Tech",
                    description:
                        "Tham gia cùng các nhà lãnh đạo ngành, nhà nghiên cứu và người hâm mộ công nghệ tại Hội nghị FutureTech. Khám phá những công nghệ đột phá, thảo luận về xu hướng tương lai và tham gia vào việc định hình bức tranh công nghệ của ngày mai.",
                    location: "Trung tâm Hội nghị Công nghệ",
                    status: 1,
                    date_start: "2023-03-20",
                    date_end: "2024-04-12",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701833641/Mobile/odapvmbgscjzcqbqc0y5.jpg",
                    type_id : 3,
                    createdBy : 1,
                },
                {
                    id: 9,
                    name: "IT VOLLEYBALL TEAM",
                    slogan: " IGNITE THE POWER",
                    description:
                        "Các ITers có cơ hội nhận những phần quà bất ngờ khi tham gia cổ vũ và đặt câu hỏi cho đội bóng trong buổi giao lưu sau trận đấu. Hãy cùng tạo nên không khí nóng bỏng và tràn đầy năng lượng tích cực cho đội nhà!",
                    location: "Nhà thi đấu thể thao khu D - Trường Đại học Bách Khoa.",
                    status: 1,
                    date_start: "2023-03-02",
                    date_end: "2024-03-13",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701932739/Mobile/ara7bnb2ym0sviqmbpet.jpg",
                    type_id : 3,
                },
                {
                    id: 10,
                    name: "UNIHACK 2023",
                    slogan: "KHUẤY ĐỘNG KHÔNG KHÍ VỚI INFO SESSION",
                    description:
                        "Sự kiện Kickoff hứa hẹn mang đến cho bạn cái nhìn toàn diện về cuộc thi và những chia sẻ hết sức thú vị với nhiều chủ đề khác nhau. Hãy tham gia để không chỉ nắm bắt thông tin quan trọng mà còn được gặp gỡ các chuyên gia, nhà tài trợ và các đối tác đồng hành cùng UniHack 2023.",
                    location: "VTC Academy Plus - 130 Điện Biên Phủ, Thanh Khê, TP Đà Nẵng",
                    status: 1,
                    date_start: "2023-02-10",
                    date_end: "2024-02-27",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701936390/Mobile/m0b26owwprk01b96nkrm.jpg",
                    type_id : 4,
                },
                {
                    id: 11,
                    name: "IT LOL 2023",
                    slogan: "Unity Unleashes Triumph",
                    description:
                        "Một giải đấu quy tụ nhiều anh tài của ITF, hứa hẹn đem lại một sân chơi bổ ích, chuyên nghiệp cùng nhiều giải thưởng hấp dẫn.",
                    location: "phòng C202.",
                    status: 1,
                    date_start: "2023-01-24",
                    date_end: "2024-02-05",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701937348/Mobile/abv1c6mzsp3hmedvvums.jpg",
                    type_id : 4,
                },
                {
                    id: 12,
                    name: "BKDN TECHSHOW 2023",
                    slogan: "Sparks of Innovation, Thrills Await!",
                    description:
                        "Một ngày hội Khoa học Công nghệ với các sản phẩm nghiên cứu đầy mới mẻ, đột phá, những minigame hấp dẫn chắc chắn sẽ khiến bạn cảm nhận được sức nóng tuổi trẻ.",
                    location: "Trường THPT Chuyên Lê Quý Đôn",
                    status: 1,
                    date_start: "2023-01-02",
                    date_end: "2024-01-12",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701937629/Mobile/bsrghqp0pd7ptg3irihc.jpg",
                    type_id : 4,
                },
                {
                    id: 13,
                    name: "K22 - LET'S COMPILE",
                    slogan: "New Horizons, Same Sky. Ready for Takeoff?",
                    description:
                        "Tại đây, các bạn sẽ có cơ hội hòa mình vào bầu không khí năng động, sôi nổi thông qua 7 trạm trò chơi nhỏ thú vị. Nhiều phần quà có giá trị đến từ ITF sẽ được trao cho những người chơi tích cực nhất. ",
                    location: "khuôn viên trường ĐHBK - ĐHĐN.",
                    status: 1,
                    date_start: "2023-11-02",
                    date_end: "2024-11-11",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701937948/Mobile/hkmmfnfyb2pye0syjcdg.jpg",
                    type_id : 5,
                },
                {
                    id: 14,
                    name: "WE MIX, YOU MATCH - ONE DAY LEFT!",
                    slogan: "Destined Connection.",
                    description:
                        "Chương trình được thực hiện để các bạn có cơ hội gặp gỡ, làm quen với thành viên các trung đội khác nên các bạn đừng quá ngại ngùng mà hãy đăng ký tham gia để giao lưu cùng nhau nhé, biết đâu lại là duyên tiền định!",
                    location: "Trung tâm Giáo dục Quốc phòng An ninh Quân khu V.",
                    status: 1,
                    date_start: "2023-09-22",
                    date_end: "2024-10-06",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701938203/Mobile/hk1i1ixe9c2z8fipjrml.jpg",
                    type_id : 5,
                },
                {
                    id: 15,
                    name: "THẮP SÁNG TRUNG THU",
                    slogan: "CHIA HẠNH PHÚC, SẺ YÊU THƯƠNG",
                    description:
                        "Tết Trung thu không chỉ là lễ hội cổ truyền được nhiều trẻ em Việt Nam mong chờ, Trung Thu còn là tết đoàn viên, là dịp để gia đình quây quần bên nhau ngắm trăng, nếm bánh. Thế nhưng, không phải ai cũng may mắn có được bữa cơm vui vẻ bên gia đình dịp trăng tròn. ",
                    location: "Chân cầu Ngô Sĩ Liên.",
                    status: 1,
                    date_start: "2023-10-01",
                    date_end: "2024-10-09",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701938568/Mobile/ms1btnmtwgzn7wdkghto.jpg",
                    type_id : 5,
                },
                {
                    id: 16,
                    name: "[IC RE³] - RECAP - OUR BEST MEMORIES!",
                    slogan: "Xách ba lô và đi",
                    description:
                        "Đến với Hội trại năm nay, ITers không những được Return về mặt thể xác mà còn được Renew tâm hồn mình qua những lời nhắn đến từ trạm phát Confession của chúng tớ.  ",
                    location: "Biển Ngọc - Thị Trấn Lăng Cô, Phú Lộc, Thừa Thiên - Huế.",
                    status: 1,
                    date_start: "2023-09-02",
                    date_end: "2024-09-25",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701938894/Mobile/kru1pduegm1omlsavgqm.jpg",
                    type_id : 6,
                },
                {
                    id: 17,
                    name: "[5 DAYS CHALLENGE] - BETTER BY MY SELF - HERE WE GO!",
                    slogan: "sẵn sàng cho một năm mới đầy hứng khởi",
                    description:
                        " ITers ơii, Tết của các bạn như nào rồi ấy nhỉ?!Và để enjoy những ngày cuối cùng trước khi trở lại trường học tập, hãy cùng IT Media chúng tớ lan tỏa năng lượng tích cực trong năm mới này bằng sự kiện 5 Days Challenge nhé!",
                    location: "Đại học bách khoa Đà Nẵng",
                    status: 1,
                    date_start: "2023-08-10",
                    date_end: "2024-08-23",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701939493/Mobile/brxfiaskwpztcsbsnfrw.jpg",
                    type_id : 6,
                },
                {
                    id: 18,
                    name: "IT ESPORT - LOL",
                    slogan: "RINH CÚP VỀ NHÀ!",
                    description:
                        "Tiếp nối với sự thành công của giải đấu năm ngoái, BCH quyết định tổ chức IT LOL 2022 – một giải đấu quy tụ nhiều anh tài của ITF, hứa hẹn đem lại một sân chơi bổ ích, chuyên nghiệp cùng nhiều giải thưởng thưởng hấp dẫn.",
                    location: "Online trên MS Teams.",
                    status: 1,
                    date_start: "2023-06-22",
                    date_end: "2024-07-10",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701939890/Mobile/bdkh0hfdn0j7to3zslv5.jpg",
                    type_id : 6,
                },
                {
                    id: 19,
                    name: "DUT PROGRAMING CHALLENGE 2021",
                    slogan: "ARE YOU READY TO FIGHT!?",
                    description:
                        "Hãy sẵn sàng cho một sự kiện lập trình đầy hứng thú khi chúng tôi mang đến cho bạn Thách Thức Lập Trình DUT 2021! Đây không chỉ là một cuộc thi; đây là hành trình châm ngôn vào thế giới của thuật toán, giải quyết vấn đề và công nghệ tiên tiến. Dù bạn là một lập trình viên có kinh nghiệm hay một người mới tò mò, sự kiện này là nền tảng để thể hiện kỹ năng của bạn, học từ những người giỏi nhất và kết nối với những người có cùng sở thích.",
                    location: "Đại Học Bách Khoa Đà Nẵng",
                    status: 2,
                    date_start: "2021-05-21",
                    date_end: "2021-06-02",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701940270/Mobile/y8qebogeq2c6y3qgmabg.jpg",
                    type_id : 7,
                },
                {
                    id: 20,
                    name: "IT ESPORT - LEAGUE OF LEGENDS 2021",
                    slogan: "Mang ngôi vương về nhà",
                    description:
                        "Đã đến xuân rồi nhưng trời vẫn lạnh và bạn vẫn cô đơn ư? Đừng ủ rũ nữa mà hãy sẵn sàng làm nóng mùa xuân này cùng với chúng tớ khi giải đấu eSport thường niên của khoa CNTT đã chính thức trở lại với tên gọi [IT eSport - League of Legends 2021]. Nối tiếp sự thành công của các năm trước và ngày càng hoàn thiện hơn, giải đấu năm nay hứa hẹn sẽ mang đến cho chúng ta những màn tranh tài vô cùng nảy lửa cũng như những giải thưởng cực kì hấp dẫn dành cho các đội thi.",
                    location: " STC Gaming, 643 Tôn Đức Thắng, Hoà Khánh, Liên Chiểu, Đà Nẵng.",
                    status: 2,
                    date_start: "2021-04-03",
                    date_end: "2021-04-04",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701940774/Mobile/c1sedjhtsk9d7frmxqgz.jpg",
                    type_id : 7,
                },
                {
                    id: 21,
                    name: "BKDN TECHSHOW 2021",
                    slogan: "CHECK-IN NGAY ĐI, NHẬN QUÀ IT!! ",
                    description:
                        "Và đến với [BKDN Techshow 2021], một hoạt động không thể bỏ lỡ chính là check-in đấy nha. Hãy sẵn sàng để có cho mình những bức ảnh đẹp và [rinh] về những phần quà đặc biệt đến từ Khoa CNTT chúng tớ nhé!",
                    location: "Trường THPT Phan Châu Trinh, 154 Lê Lợi,  Hải Châu, Đà Nẵng.",
                    status: 2,
                    date_start: "2021-03-02",
                    date_end: "2021-04-02",
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701833641/Mobile/odapvmbgscjzcqbqc0y5.jpg",
                    type_id : 7,
                },

            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Events", null, {});
    },
};
