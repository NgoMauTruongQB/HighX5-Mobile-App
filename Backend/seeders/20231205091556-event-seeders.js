"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Events",
            [
                {
                    id: 1,
                    name: "K23 - Bén lửa sinh ra",
                    slogan: "Nhen nhóm - Bừng lên - Lan tỏa",
                    description:
                        'Ngày hội “K23 - BÉN LỬA SINH RA” với các trạm trò chơi liên hoàn gắn liền với các môn học đầy "khó nhằn" của sinh viên IT như K23 và hòn đá giải tích, hội toán rời rạc, hoàng tử tín hiệu số, python và đồ án tử thần,... được sự tham gia sôi nổi của các bạn newbie nhà ITF. Đầy bất ngờ với phần văn nghệ kết hợp với đèn led hết sức mãn nhãn của các bạn K23, hình ảnh truyền nhau ánh đèn hoa đăng cũng vô cùng đẹp và ý nghĩa.',
                    location: "Sân khu F, Đại học bách khoa",
                    status: 1,
                    date_start: "2023-11-20",
                    date_end: "2024-11-20",
                    image: "https://image.bnews.vn/MediaUpload/Org/2023/04/06/160727-van-hoa-soi-duong-doc-dao-le-nhay-lua-cua-nguoi-pa-then-o-lam-binh-tuyen-quang-.jpg",
                },
                {
                    id: 2,
                    name: "IT - GEN Z FESTIVAL",
                    slogan: null,
                    description:
                        "Sao bao ngày mong chờ thì ngày “định mệnh” ấy đã đến, IT – GEN Z FESTIVAL chính thức “ra lò” và chào đón tất cả các ITer đến tham dự.",
                    location: "Sân khu F, Đại học bách khoa",
                    status: 0,
                    date_start: "2022-12-04",
                    date_end: "2024-12-04",
                    image: "https://media.hanoitimes.vn/2023/04/07/TRAVEL_1.jpg",
                },
                {
                    id: 3,
                    name: "IT LEAGUE 2024",
                    slogan: "Who is the Champion?!",
                    description:
                        "Hành trình kiếm tìm chủ nhân của chiếc cup vô địch giải đấu IT League. Cùng liên chi đoàn khoa công nghệ thông tin tham gia vào các khâu chuẩn bị để có một mùa giải mãn nhãn nhé. Nhanh tay đăng kí thôi.",
                    location:
                        "Sân bóng Nguyễn Chánh 2 - Đường số 4, P. Hòa Khánh Bắc, Q.Liên Chiểu, TP. Đà Nẵng",
                    status: 0,
                    date_start: "2022-09-27",
                    date_end: "2024-09-27",
                    image: "https://fit-hau.edu.vn/storage/files/C%C3%A1c%20cu%E1%BB%99c%20thi%20Li%C3%AAn%20Chi%20%C4%90o%C3%A0n/IT-League2023/avatar%20it%20league.png",
                },
                {
                    id: 4,
                    name: "CodeFest 2023",
                    slogan: "Unleash the Coding Power",
                    description:
                        "CodeFest là thách thức lập trình cuối cùng nơi các thí sinh sẽ đối mặt với những vấn đề lập trình khó khăn. Hãy sẵn sàng để giải phóng kỹ năng lập trình của bạn và cạnh tranh để giành những giải thưởng hấp dẫn!",
                    location: "Đấu trường Tech Hub",
                    status: 2,
                    date_start: "2023-02-10",
                    date_end: "2024-02-10",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJ7R26bYunFKzthbmabMCi8ihqyO31NSoqPZYoj8YdZRslHu9y2x9oV7Z7upkjxFFDnQ&usqp=CAU",
                },
                {
                    id: 5,
                    name: "TechXperience Expo",
                    slogan: "Explore the Future Tech",
                    description:
                        "Bắt đầu một cuộc hành trình để khám phá những điều mới nhất và tuyệt vời nhất trong công nghệ. TechXperience Expo tổ chức những người yêu công nghệ, những người sáng tạo và chuyên gia ngành công nghiệp cho một ngày trải nghiệm công nghệ sâu sắc.",
                    location: "Trung tâm Đổi mới, Đại học Đà Nẵng",
                    status: 1,
                    date_start: "2023-11-15",
                    date_end: "2024-11-15",
                    image: "https://play-lh.googleusercontent.com/Z8i-NHiXcZMKI0SrFVJzJ4Zln48-zOlw8n8Ry1PbneVd5UyIcpqWkjKfpQgqTlHzAzjC",
                },
                {
                    id: 6,
                    name: "Thách thức Data Crunch",
                    slogan: "Crack the Data Code",
                    description:
                        "Gọi tất cả những người đam mê dữ liệu! Tham gia Thách thức Data Crunch và thể hiện kỹ năng phân tích dữ liệu của bạn. Phân tích bộ dữ liệu thực tế và giải mã để khám phá thông tin quý báu.",
                    location: "Phòng Lab Dữ liệu",
                    status: 1,
                    date_start: "2023-11-08",
                    date_end: "2024-11-08",
                    image: "https://i.scdn.co/image/ab6765630000ba8a772ab3432a4b798501cd9d21",
                },
                {
                    id: 7,
                    name: "InnoHackathon 2023",
                    slogan: "Innovate, Code, Win!",
                    description:
                        "InnoHackathon là thách thức đổi mới cuối cùng. Tập hợp đội của bạn, nảy ra những giải pháp sáng tạo và lập trình đường đến chiến thắng. Đến lúc biến những ý tưởng đổi mới của bạn thành hiện thực!",
                    location: "Trung tâm Đổi mới",
                    status: 0,
                    date_start: "2023-12-20",
                    date_end: "2024-12-20",
                    image: "https://eelisa.eu/wp-content/uploads/2022/09/Colores-corporativos-Post-de-Instagram.png",
                },
                {
                    id: 8,
                    name: "Hội nghị FutureTech",
                    slogan: "Shaping Tomorrow’s Tech",
                    description:
                        "Tham gia cùng các nhà lãnh đạo ngành, nhà nghiên cứu và người hâm mộ công nghệ tại Hội nghị FutureTech. Khám phá những công nghệ đột phá, thảo luận về xu hướng tương lai và tham gia vào việc định hình bức tranh công nghệ của ngày mai.",
                    location: "Trung tâm Hội nghị Công nghệ",
                    status: 2,
                    date_start: "2023-03-02",
                    date_end: "2024-03-02",
                    image: "https://play-lh.googleusercontent.com/bGGbcS97bKY8qrHit_NW8pNr2zvgfoycMm4fL7jB8SmUToV8uPQ6pWwOx6JQmIgcnRnS",
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Events", null, {});
    },
};
