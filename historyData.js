// historyData.js - Dữ liệu Đề Cương Ôn Tập Học Kì 1 Môn Lịch Sử Lớp 11
// Chuẩn chương trình GDPT 2018 - Gồm 2 phần: Trắc nghiệm (70 câu), Đúng / Sai (6 câu - 24 ý)

const HISTORY_DATA = {
  meta: {
    id: "lichsu",
    title: "ĐỀ CƯƠNG ÔN TẬP HKI MÔN LỊCH SỬ KHỐI 11",
    subject: "LỊCH SỬ 11",
    subtitle: "Chủ đề: Sự hình thành Liên bang Xô Viết, Sự phát triển của CNXH, Quá trình xâm lược & Phong trào giải phóng dân tộc ở Đông Nam Á (76 câu hỏi kèm giải thích)",
    badge: "Lịch Sử 11 - Chuẩn GDPT 2018",
    icon: "fa-landmark",
    themeColor: "from-amber-600 to-rose-500",
    schoolYear: "Năm học 2024 - 2025",
    totalQuestions: 76,
    parts: [
      { id: 1, name: "Phần I", desc: "Câu trắc nghiệm nhiều phương án lựa chọn (70 câu)", count: 70 },
      { id: 2, name: "Phần II", desc: "Câu trắc nghiệm Đúng / Sai (6 câu - 24 ý)", count: 6 }
    ]
  },

  // ==================== PHẦN I: 70 CÂU TRẮC NGHIỆM ĐƠN ====================
  part1: [
    // Bài 3: SỰ HÌNH THÀNH LIÊN BANG CỘNG HÒA XÃ HỘI CHỦ NGHĨA XÔ VIẾT (15 câu)
    {
      id: 1,
      topic: "Bài 3: Liên bang Xô Viết",
      question: "Sau thắng lợi của Cách mạng tháng Mười Nga (1917), nhiệm vụ hàng đầu của Chính quyền Xô viết là",
      options: {
        A: "Đập tan bộ máy nhà nước cũ, xây dựng nhà nước mới của những người lao động.",
        B: "Huy động tối đa nhân tài, vật lực để phục vụ cho cuộc chiến đấu bảo vệ Tổ quốc.",
        C: "Khôi phục kinh tế, hàn gắn vết thương chiến tranh và bảo vệ Tổ quốc.",
        D: "Ban hành Hiến pháp mới và chiến đấu chống \"thù trong giặc ngoài\"."
      },
      correct: "A",
      explanation: "Sau khi giành chính quyền, nhiệm vụ cấp bách hàng đầu là đập tan bộ máy áp bức của giai cấp bóc lột cũ và xây dựng bộ máy nhà nước kiểu mới của giai cấp công nhân và nhân dân lao động."
    },
    {
      id: 2,
      topic: "Bài 3: Liên bang Xô Viết",
      question: "Đại hội Xô viết toàn Nga lần thứ hai khai mạc đêm 25/10/1917 đã",
      options: {
        A: "Ban hành \"Chính sách Cộng sản thời chiến\".",
        B: "Phát động cuộc chiến đấu chống \"thù trong giặc ngoài\".",
        C: "Thông qua \"Chính sách kinh tế mới\" do Lê-nin soạn thảo.",
        D: "Tuyên bố thành lập Chính quyền Xô viết do Lê-nin đứng đầu."
      },
      correct: "D",
      explanation: "Đêm 25/10/1917, Đại hội Xô viết toàn Nga lần thứ hai tuyên bố thành lập Chính quyền Xô viết do V.I. Lê-nin đứng đầu, thông qua Sắc lệnh Hòa bình và Sắc lệnh Ruộng đất."
    },
    {
      id: 3,
      topic: "Bài 3: Liên bang Xô Viết",
      question: "Ở Nga, Chính quyền Xô viết do Lê-nin đứng đầu được thành lập vào năm nào?",
      options: {
        A: "Năm 1917.",
        B: "Năm 1918.",
        C: "Năm 1919.",
        D: "Năm 1922."
      },
      correct: "A",
      explanation: "Chính quyền Xô viết được thành lập ngay sau thắng lợi của Cách mạng tháng Mười Nga năm 1917."
    },
    {
      id: 4,
      topic: "Bài 3: Liên bang Xô Viết",
      question: "Khi mới thành lập (12/1922), Liên Xô gồm 4 nước Cộng hoà Xô viết là",
      options: {
        A: "Nga, U-crai-na, Bê-lô-rút-xi-a và Lít-va.",
        B: "Nga, U-crai-na, Bê-lô-rút-xi-a và Ngoại Cáp-ca-dơ.",
        C: "Nga, U-crai-na, Môn-đô-va và Lát-vi-a.",
        D: "Nga, U-crai-na, Tuốc-mê-ni-xtan và Ác-mê-ni-a."
      },
      correct: "B",
      explanation: "Tháng 12/1922, Đại hội lần thứ nhất các Xô viết toàn Liên bang đã nhất trí thông qua bản Tuyên ngôn thành lập Liên bang Cộng hòa xã hội chủ nghĩa Xô viết (gồm 4 nước: Nga, U-crai-na, Bê-lô-rút-xi-a và Ngoại Cáp-ca-dơ)."
    },
    {
      id: 5,
      topic: "Bài 3: Liên bang Xô Viết",
      question: "Nội dung nào dưới đây không phải là tư tưởng chỉ đạo của Lê-nin trong việc thành lập Liên bang Cộng hoà xã hội chủ nghĩa Xô viết?",
      options: {
        A: "Sự bình đẳng về mọi mặt giữa các dân tộc.",
        B: "Quyền dân tộc tự quyết của các dân tộc.",
        C: "Xây dựng một cộng đồng anh em giữa các dân tộc.",
        D: "Dùng bạo lực để xây dựng nền chuyên chính vô sản."
      },
      correct: "D",
      explanation: "Tư tưởng chỉ đạo của Lê-nin dựa trên nguyên tắc hoàn toàn tự nguyện, bình đẳng về mọi mặt giữa các dân tộc, tôn trọng quyền dân tộc tự quyết và xây dựng khối liên minh anh em hữu nghị."
    },
    {
      id: 6,
      topic: "Bài 3: Liên bang Xô Viết",
      question: "Liên bang Cộng hoà xã hội chủ nghĩa Xô viết được thành lập vào thời gian nào?",
      options: {
        A: "Tháng 3/1921.",
        B: "Tháng 12/1922.",
        C: "Tháng 3/1923.",
        D: "Tháng 1/1924."
      },
      correct: "B",
      explanation: "Ngày 30/12/1922, Đại hội lần thứ nhất các Xô viết toàn Liên bang đã thông qua Tuyên ngôn và Hiệp ước thành lập Liên bang Cộng hòa xã hội chủ nghĩa Xô viết (Liên Xô)."
    },
    {
      id: 7,
      topic: "Bài 3: Liên bang Xô Viết",
      question: "Trong những năm 1918 - 1921, nhân dân Nga Xô viết đã tiến hành",
      options: {
        A: "Chính sách kinh tế mới do Lê-nin soạn thảo.",
        B: "Xây dựng cơ sở vật chất của chủ nghĩa xã hội.",
        C: "Cuộc chiến đấu chống thù trong, giặc ngoài.",
        D: "Tiến hành Chiến tranh Vệ quốc chống lại phát xít Đức."
      },
      correct: "C",
      explanation: "Giai đoạn 1918 - 1921 là thời kì nước Nga Xô viết thực hiện Chính sách Cộng sản thời chiến để đánh bại cuộc can thiệp vũ trang của 14 nước đế quốc cấu kết với lực lượng phản cách mạng trong nước (thù trong, giặc ngoài)."
    },
    {
      id: 8,
      topic: "Bài 3: Liên bang Xô Viết",
      question: "Sự kiện nào dưới đây đánh dấu mốc hoàn thành của quá trình thành lập Nhà nước Liên bang Cộng hòa xã hội chủ nghĩa Xô viết?",
      options: {
        A: "Nước Nga Xô viết thực hiện chính sách kinh tế mới (tháng 3/1921).",
        B: "Bản Hiệp ước Liên bang được thông qua (tháng 12/1922).",
        C: "Tuyên ngôn thành lập Liên bang Xô viết được thông qua (tháng 12/1922).",
        D: "Bản Hiến pháp đầu tiên của Liên Xô được thông qua (tháng 1/1924)."
      },
      correct: "D",
      explanation: "Tháng 1/1924, Hiến pháp đầu tiên của Liên Xô được thông qua tại Đại hội Xô viết toàn Liên bang lần thứ hai, hoàn thành quá trình tổ chức thành lập Nhà nước Liên bang Xô viết."
    },
    {
      id: 9,
      topic: "Bài 3: Liên bang Xô Viết",
      question: "Sự ra đời của chính quyền Xô viết ở Nga gắn liền với sự kiện nào sau đây?",
      options: {
        A: "Cách mạng tháng Hai ở Nga thành công (1917).",
        B: "Cách mạng tháng Mười ở Nga thành công (1917).",
        C: "Chính sách Cộng sản thời chiến được ban hành (1919).",
        D: "Chính sách Kinh tế mới (NEP) được ban hành (1921)."
      },
      correct: "B",
      explanation: "Thắng lợi của Cách mạng tháng Mười năm 1917 đã lật đổ Chính phủ tư sản lâm thời và thiết lập Chính quyền Xô viết."
    },
    {
      id: 10,
      topic: "Bài 3: Liên bang Xô Viết",
      question: "Mục tiêu của việc thành lập Nhà nước Liên bang Cộng hòa xã hội chủ nghĩa Xô viết là",
      options: {
        A: "Chống lại sự tấn công của 14 nước đế quốc.",
        B: "Thực hiện hiệu quả Chính sách Kinh tế mới.",
        C: "Hợp tác, giúp đỡ lẫn nhau để cùng phát triển.",
        D: "Chống lại cuộc tấn công của phát xít Đức."
      },
      correct: "C",
      explanation: "Mục tiêu thành lập Liên bang Xô viết là liên minh các dân tộc bình đẳng để tăng cường sức mạnh quốc phòng, bảo vệ thành quả cách mạng và hợp tác, giúp đỡ lẫn nhau cùng phát triển kinh tế, văn hóa, xã hội."
    },
    {
      id: 11,
      topic: "Bài 3: Liên bang Xô Viết",
      question: "Đối với Liên Xô, sự ra đời của Liên bang Cộng hoà xã hội chủ nghĩa Xô viết có ý nghĩa như thế nào?",
      options: {
        A: "Tạo điều kiện để các nước cộng hòa phát triển kinh tế - xã hội.",
        B: "Chứng minh tính khoa học, đúng đắn của học thuyết Mác - Lênin.",
        C: "Cổ vũ phong trào giải phóng dân tộc của nhân dân các nước thuộc địa.",
        D: "Để lại bài học kinh nghiệm về mô hình nhà nước sau khi giành chính quyền."
      },
      correct: "A",
      explanation: "Đối với nội bộ Liên Xô: Việc hợp nhất tạo điều kiện khai thác tối đa nguồn lực to lớn của đất nước để các nước cộng hòa cùng nhau phát triển kinh tế, nâng cao đời sống và tăng cường tiềm lực quốc phòng."
    },
    {
      id: 12,
      topic: "Bài 3: Liên bang Xô Viết",
      question: "Nội dung nào sau đây không phản ánh đúng ý nghĩa sự ra đời của Liên bang Cộng hoà xã hội chủ nghĩa Xô viết đối với Liên Xô?",
      options: {
        A: "Giải quyết đúng đắn vấn đề dân tộc trên đất nước Xô viết.",
        B: "Cổ vũ phong trào giải phóng dân tộc ở các nước thuộc địa.",
        C: "Củng cố và tăng cường vị thế của Liên Xô trên trường quốc tế.",
        D: "Tạo điều kiện để các nước cộng hòa phát triển kinh tế - xã hội."
      },
      correct: "B",
      explanation: "\"Cổ vũ phong trào giải phóng dân tộc ở các nước thuộc địa\" là ý nghĩa quốc tế, không phải là ý nghĩa đối với nội bộ Liên bang Xô viết."
    },
    {
      id: 13,
      topic: "Bài 3: Liên bang Xô Viết",
      question: "Đối với quốc tế, sự ra đời của Liên bang Cộng hoà xã hội chủ nghĩa Xô viết có ý nghĩa như thế nào?",
      options: {
        A: "Làm thất bại ý đồ và hành động chia rẽ của các thế lực thù địch.",
        B: "Chứng minh tính khoa học, đúng đắn của chủ nghĩa Mác - Lênin.",
        C: "Củng cố và tăng cường vị thế của Liên Xô trên trường quốc tế.",
        D: "Tạo điều kiện để các nước cộng hòa phát triển kinh tế - xã hội."
      },
      correct: "B",
      explanation: "Đối với quốc tế: Sự ra đời của Liên Xô chứng minh tính khoa học, đúng đắn của chủ nghĩa Mác - Lê-nin về vấn đề dân tộc và cách mạng vô sản, đồng thời cổ vũ mạnh mẽ phong trào giải phóng dân tộc."
    },
    {
      id: 14,
      topic: "Bài 3: Liên bang Xô Viết",
      question: "Nội dung nào sau đây phản ánh đúng ý nghĩa quốc tế từ sự ra đời của Liên bang Cộng hoà xã hội chủ nghĩa Xô viết?",
      options: {
        A: "Làm thất bại ý đồ và hành động chia rẽ của các thế lực thù địch.",
        B: "Cổ vũ phong trào giải phóng dân tộc của các nước thuộc địa.",
        C: "Củng cố và tăng cường vị thế của Liên Xô trên trường quốc tế.",
        D: "Tạo điều kiện để các nước cộng hòa phát triển kinh tế - xã hội."
      },
      correct: "B",
      explanation: "Sự ra đời của Liên Xô là nguồn cổ vũ to lớn đối với phong trào cách mạng giải phóng dân tộc của nhân dân các nước thuộc địa và phụ thuộc trên toàn thế giới."
    },
    {
      id: 15,
      topic: "Bài 3: Liên bang Xô Viết",
      question: "Cuộc Cách mạng tháng Mười Nga (1917) thành công dưới sự lãnh đạo của chính đảng nào sau đây?",
      options: {
        A: "Đảng Xã hội.",
        B: "Đảng Bôn-sê-vích.",
        C: "Đảng Men-sê-vích.",
        D: "Đảng Cộng hòa."
      },
      correct: "B",
      explanation: "Cách mạng tháng Mười Nga thành công dưới sự lãnh đạo của Đảng Công nhân Xã hội dân chủ Nga (phái Bôn-sê-vích) do V.I. Lê-nin đứng đầu."
    },

    // Bài 4: SỰ PHÁT TRIỂN CỦA CHỦ NGHĨA XÃ HỘI TỪ SAU CTTG II ĐẾN NAY (20 câu)
    {
      id: 16,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Trong những năm 1944 - 1945, điều kiện khách quan thuận lợi nào đã thúc đẩy nhân dân các nước Đông Âu nổi dậy giành chính quyền, thành lập nhà nước dân chủ nhân dân?",
      options: {
        A: "Phát xít Đức chuyển hướng tấn công sang đánh chiếm các nước ở Bắc Âu và Tây Âu.",
        B: "Sự viện trợ về mọi mặt của các nước xã hội chủ nghĩa như: Liên Xô, Trung Quốc,…",
        C: "Thắng lợi của Hồng quân Liên Xô trong việc tiêu diệt chủ nghĩa phát xít ở châu Âu.",
        D: "Phe Đồng minh suy yếu, liên tục thất bại và buộc phải rút khỏi mặt trận Đông Âu."
      },
      correct: "C",
      explanation: "Thắng lợi của Hồng quân Liên Xô trong việc đánh bại phát xít Đức giải phóng lãnh thổ nước mình và tiến vào giải phóng Đông Âu là điều kiện khách quan thuận lợi quyết định."
    },
    {
      id: 17,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Trước năm 1945, quốc gia duy nhất trên thế giới đi theo con đường xã hội chủ nghĩa là",
      options: {
        A: "Liên Xô.",
        B: "Trung Quốc.",
        C: "Việt Nam.",
        D: "Cu-ba."
      },
      correct: "A",
      explanation: "Trước Chiến tranh thế giới thứ hai, Liên Xô là quốc gia xã hội chủ nghĩa duy nhất trên thế giới (vòng vây của chủ nghĩa tư bản)."
    },
    {
      id: 18,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Năm 1949, Trung Quốc đã",
      options: {
        A: "Lâm vào suy thoái, khủng hoảng nghiêm trọng về kinh tế - xã hội.",
        B: "Lựa chọn con đường phát triển đất nước theo hướng tư bản chủ nghĩa.",
        C: "Tiến hành cải cách mở cửa để đưa đất nước thoát khỏi khủng hoảng.",
        D: "Hoàn thành thắng lợi cuộc cách mạng dân tộc dân chủ nhân dân."
      },
      correct: "D",
      explanation: "Ngày 1/10/1949, nước Cộng hòa Nhân dân Trung Hoa tuyên bố thành lập, đánh dấu thắng lợi hoàn toàn của cuộc cách mạng dân tộc dân chủ nhân dân."
    },
    {
      id: 19,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Hiện nay, quốc gia nào ở châu Á đi theo con đường xã hội chủ nghĩa?",
      options: {
        A: "Cộng hòa Nhân dân Trung Hoa.",
        B: "Cộng hòa In-đô-nê-xi-a.",
        C: "Đại Hàn Dân Quốc.",
        D: "Nhật Bản."
      },
      correct: "A",
      explanation: "Hiện nay, các nước châu Á kiên định con đường xã hội chủ nghĩa gồm có: Trung Quốc, Việt Nam, Lào, Triều Tiên."
    },
    {
      id: 20,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Từ nửa cuối những năm 70 - đầu những năm 80 của thế kỉ XX, các nước xã hội chủ nghĩa ở Đông Âu và Liên Xô",
      options: {
        A: "Bước vào giai đoạn phát triển đỉnh cao.",
        B: "Ra đời và bước đầu đạt được nhiều thành tựu.",
        C: "Lâm vào suy thoái, khủng hoảng trên nhiều lĩnh vực.",
        D: "Tiến hành cải cách, đưa đất nước thoát khỏi khủng hoảng."
      },
      correct: "C",
      explanation: "Dưới tác động của cuộc khủng hoảng năng lượng thế giới (1973) cùng sự trì trệ của mô hình kinh tế kế hoạch hóa tập trung, Liên Xô và Đông Âu lâm vào suy thoái, khủng hoảng toàn diện."
    },
    {
      id: 21,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Chế độ xã hội chủ nghĩa sụp đổ ở Liên Xô vào thời gian nào?",
      options: {
        A: "1990.",
        B: "1991.",
        C: "1992.",
        D: "1993."
      },
      correct: "B",
      explanation: "Ngày 25/12/1991, lá cờ Liên bang Xô viết trên nóc điện Crem-li bị hạ xuống, đánh dấu sự sụp đổ của chế độ xã hội chủ nghĩa ở Liên Xô."
    },
    {
      id: 22,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Nội dung nào dưới đây không phản ánh đúng nguyên nhân dẫn đến sự sụp đổ của mô hình xã hội chủ nghĩa ở Đông Âu và Liên Xô?",
      options: {
        A: "Phạm nhiều sai lầm nghiêm trọng trong quá trình thực hiện cải cách, cải tổ.",
        B: "Chế độ xã hội chủ nghĩa không phù hợp với nguyện vọng của nhân dân.",
        C: "Không bắt kịp sự phát triển của cuộc cách mạng khoa học - công nghệ.",
        D: "Hoạt động chống phá của các thế lực thù địch trong và ngoài nước."
      },
      correct: "B",
      explanation: "Bản chất mục tiêu của chủ nghĩa xã hội là giải phóng con người, đem lại độc lập tự do hạnh phúc luôn phù hợp với nguyện vọng của nhân dân; sự sụp đổ là do mô hình thực hiện cụ thể mang tính giáo điều, sai lầm trong cải tổ và sự chống phá."
    },
    {
      id: 23,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Công cuộc xây dựng chủ nghĩa xã hội từ sau năm 1991 tiếp tục được duy trì và đẩy mạnh ở những quốc gia nào sau đây?",
      options: {
        A: "Trung Quốc, Việt Nam, Lào, Cu-ba.",
        B: "Trung Quốc, Nga, Việt Nam, Lào.",
        C: "Hàn Quốc, Triều Tiên, Việt Nam, Cu-ba.",
        D: "Lào, Cu-ba, Hàn Quốc, Nhật Bản."
      },
      correct: "A",
      explanation: "Sau biến cố năm 1991, các nước Trung Quốc, Việt Nam, Lào, Cu-ba kiên định con đường xã hội chủ nghĩa, tiến hành cải cách đổi mới và đạt được nhiều thành tựu quan trọng."
    },
    {
      id: 24,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Từ năm 1978 đến nay, Trung Quốc",
      options: {
        A: "Tiến hành công cuộc cải cách mở cửa.",
        B: "Tiến hành cuộc Cách mạng Văn hóa vô sản.",
        C: "Thực hiện đường lối Ba ngọn cờ hồng.",
        D: "Lâm vào suy thoái, khủng hoảng nghiêm trọng."
      },
      correct: "A",
      explanation: "Tháng 12/1978, Trung ương Đảng Cộng sản Trung Quốc do Đặng Tiểu Bình khởi xướng đã đề ra đường lối cải cách mở cửa đất nước."
    },
    {
      id: 25,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Trọng tâm trong đường lối đổi mới ở Việt Nam (từ năm 1986) là",
      options: {
        A: "Cải tổ chính trị.",
        B: "Phát triển kinh tế.",
        C: "Đổi mới văn hóa.",
        D: "Đổi mới hệ tư tưởng."
      },
      correct: "B",
      explanation: "Đại hội VI của Đảng Cộng sản Việt Nam (12/1986) xác định trọng tâm của công cuộc đổi mới là phát triển kinh tế, đồng thời từng bước đổi mới chính trị vững chắc."
    },
    {
      id: 26,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Thành tựu trong công cuộc xây dựng chủ nghĩa xã hội ở Trung Quốc, Việt Nam, Lào, Cu-ba từ năm 1991 đã chứng minh",
      options: {
        A: "Sức sống của chủ nghĩa xã hội trong một thế giới có nhiều biến động.",
        B: "Chủ nghĩa tư bản không còn là một hệ thống duy nhất trên thế giới.",
        C: "Chủ nghĩa xã hội ngày càng phát triển và mở rộng về không gian địa lí.",
        D: "Chủ nghĩa xã hội đã trở thành một hệ thống trên phạm vi thế giới."
      },
      correct: "A",
      explanation: "Thành tựu phát triển vượt bậc khẳng định chủ nghĩa xã hội có sức sống mãnh liệt và triển vọng phát triển thực sự dù bối cảnh thế giới có nhiều biến động phức tạp."
    },
    {
      id: 27,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Những thành tựu của công cuộc đổi mới, cải cách ở các nước châu Á, khu vực Mỹ La-tinh là cơ sở để khẳng định",
      options: {
        A: "Con đường đi lên chủ nghĩa xã hội phù hợp với xu thế phát triển của thời đại.",
        B: "Chủ nghĩa xã hội ngày càng phát triển và mở rộng về không gian địa lí.",
        C: "Chủ nghĩa tư bản không còn là một hệ thống duy nhất trên thế giới.",
        D: "Chủ nghĩa xã hội đã trở thành một hệ thống trên phạm vi thế giới."
      },
      correct: "A",
      explanation: "Khẳng định tính đúng đắn và sự phù hợp của con đường đi lên chủ nghĩa xã hội với tiến trình lịch sử nhân loại."
    },
    {
      id: 28,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Tình hình thế giới và trong nước từ cuối những năm 70 của thế kỉ XX đặt ra yêu cầu cấp bách nào đối với Trung Quốc?",
      options: {
        A: "Hoàn thành tập thể hóa nông nghiệp.",
        B: "Tập trung phát triển công nghiệp nặng.",
        C: "Hoàn thành công nghiệp hóa, hiện đại hóa.",
        D: "Tiến hành công cuộc cải cách đất nước."
      },
      correct: "D",
      explanation: "Trước hậu quả nặng nề của 10 năm \"Cách mạng Văn hóa\" và xu thế thế giới, yêu cầu cấp bách nhất là phải tiến hành cải cách, mở cửa để phát triển kinh tế - xã hội."
    },
    {
      id: 29,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Nội dung nào sau đây không phản ánh đúng thành tựu mà nhân dân Trung Quốc đạt được trong công cuộc cải cách mở cửa (từ năm 1978 đến nay)?",
      options: {
        A: "Xây dựng được hệ thống lí luận về chủ nghĩa xã hội đặc sắc Trung Quốc.",
        B: "Xây dựng được nền kinh tế kế hoạch hóa tập trung, quan liêu, bao cấp.",
        C: "Trở thành quốc gia thứ 3 trên thế giới có tàu đưa con người bay vào vũ trụ.",
        D: "Vai trò và vị thế quốc tế của Trung Quốc ngày càng được nâng cao."
      },
      correct: "B",
      explanation: "Trung Quốc đã xóa bỏ mô hình kinh tế kế hoạch hóa tập trung bao cấp để xây dựng nền kinh tế thị trường xã hội chủ nghĩa đặc sắc Trung Quốc."
    },
    {
      id: 30,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Nội dung nào không phản ánh đúng đường lối trong công cuộc cải cách - mở cửa ở Trung Quốc (từ 1978 - nay)?",
      options: {
        A: "Lấy phát triển kinh tế làm trọng tâm.",
        B: "Xây dựng nền kinh tế thị trường xã hội chủ nghĩa.",
        C: "Lấy cải tổ chính trị làm trọng tâm.",
        D: "Xóa bỏ cơ chế kế hoạch hóa, quan liêu, bao cấp."
      },
      correct: "C",
      explanation: "Đường lối của Trung Quốc lấy phát triển kinh tế làm trung tâm, kiên trì bốn nguyên tắc cơ bản, không lấy cải tổ chính trị làm trọng tâm."
    },
    {
      id: 31,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Những thành tựu của công cuộc đổi mới, cải cách ở các nước châu Á, khu vực Mỹ La-tinh là cơ sở vững chắc để chứng minh",
      options: {
        A: "Chủ nghĩa xã hội có sức sống, có triển vọng thực sự trên thế giới.",
        B: "Chủ nghĩa tư bản không còn là một hệ thống duy nhất trên thế giới.",
        C: "Chủ nghĩa xã hội ngày càng phát triển và mở rộng về không gian địa lí.",
        D: "Chủ nghĩa xã hội đã trở thành một hệ thống trên phạm vi thế giới."
      },
      correct: "A",
      explanation: "Chứng minh sức sống mãnh liệt và triển vọng hiện thực của chủ nghĩa xã hội trên thế giới."
    },
    {
      id: 32,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Nước Cộng hòa Cu-ba được thành lập (1959) sau khi đánh bại",
      options: {
        A: "Đế quốc Tây Ban Nha.",
        B: "Chế độ độc tài thân Mỹ.",
        C: "Chủ nghĩa thực dân cũ.",
        D: "Sự nô dịch của thực dân Anh."
      },
      correct: "B",
      explanation: "Ngày 1/1/1959, nghĩa quân dưới sự lãnh đạo của Phi-đen Cát-xtơ-rô đã lật đổ chế độ độc tài Ba-ti-xta (thân Mỹ), tuyên bố thành lập nước Cộng hòa Cu-ba."
    },
    {
      id: 33,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Chủ nghĩa xã hội vượt ra khỏi phạm vi một nước và trở thành hệ thống thế giới trong giai đoạn",
      options: {
        A: "Trước Chiến tranh thế giới thứ hai.",
        B: "Sau Chiến tranh thế giới thứ hai.",
        C: "Trước khi Liên bang Xô Viết ra đời.",
        D: "Chiến tranh thế giới thứ nhất kết thúc."
      },
      correct: "B",
      explanation: "Sau Chiến tranh thế giới thứ hai, sự ra đời của các nhà nước dân chủ nhân dân ở Đông Âu, thắng lợi của cách mạng Trung Quốc, Việt Nam, Triều Tiên đã đưa chủ nghĩa xã hội trở thành hệ thống thế giới."
    },
    {
      id: 34,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Sự kiện nào sau đây được coi là tổn thất nặng nề nhất đối với phong trào cộng sản và công nhân quốc tế?",
      options: {
        A: "Chiến tranh thế giới thứ hai bùng nổ (1939 – 1945).",
        B: "Trung Quốc gây ra vụ xung đột với Liên Xô (1969).",
        C: "Trung Quốc gây chiến tranh với Việt Nam (1979).",
        D: "Chủ nghĩa xã hội Liên Xô, Đông Âu sụp đổ (1991)."
      },
      correct: "D",
      explanation: "Sự sụp đổ của chế độ xã hội chủ nghĩa ở Liên Xô và Đông Âu (1989 - 1991) là tổn thất to lớn và nặng nề nhất đối với phong trào cách mạng thế giới."
    },
    {
      id: 35,
      topic: "Bài 4: Sự phát triển của CNXH",
      question: "Nguyên nhân chủ yếu dẫn đến chế độ xã hội chủ nghĩa ở Liên Xô và các nước Đông Âu tan rã là",
      options: {
        A: "Đường lối chủ quan, duy ý chí, tập trung quan liêu bao cấp.",
        B: "Đi tắt, đón đầu sự phát triển của khoa học – kĩ thuật tiên tiến.",
        C: "Khi tiến hành cải tổ phạm phải nhiều sai lầm trên nhiều mặt.",
        D: "Hoạt động chống phá của các thế lực thù địch ở ngoài nước."
      },
      correct: "A",
      explanation: "Nguyên nhân sâu xa và chủ yếu nhất là mô hình kinh tế - xã hội mang nặng tính tập trung quan liêu, bao cấp, đường lối chủ quan duy ý chí kéo dài qua nhiều thập kỉ."
    },

    // Bài 5: QUÁ TRÌNH XÂM LƯỢC VÀ CAI TRỊ CỦA CHỦ NGHĨA THỰC DÂN Ở ĐÔNG NAM Á (15 câu)
    {
      id: 36,
      topic: "Bài 5: Quá trình xâm lược ĐNA",
      question: "Quá trình xâm lược của thực dân phương Tây vào khu vực Đông Nam Á diễn ra trong bối cảnh chế độ phong kiến ở Đông Nam Á",
      options: {
        A: "Khủng hoảng, suy thoái.",
        B: "Ổn định, phát triển.",
        C: "Đang được hình thành.",
        D: "Sụp đổ hoàn toàn."
      },
      correct: "A",
      explanation: "Từ thế kỉ XVI đến XIX, các quốc gia phong kiến Đông Nam Á đều bước vào giai đoạn suy thoái, khủng hoảng sâu sắc về chính trị, kinh tế và xã hội."
    },
    {
      id: 37,
      topic: "Bài 5: Quá trình xâm lược ĐNA",
      question: "Đầu thế kỉ XX, các nước thực dân phương Tây đã",
      options: {
        A: "Kết thúc quá trình bành trướng thuộc địa ở châu Á.",
        B: "Tiến hành các cuộc chiến tranh giành thuộc địa.",
        C: "Hoàn thành quá trình thôn tính Đông Nam Á.",
        D: "Thúc đẩy các cuộc chiến tranh xâm lược ở châu Âu."
      },
      correct: "C",
      explanation: "Đến đầu thế kỉ XX, các nước thực dân phương Tây đã cơ bản hoàn thành việc phân chia và áp đặt ách thống trị lên hầu hết các nước Đông Nam Á (trừ Xiêm)."
    },
    {
      id: 38,
      topic: "Bài 5: Quá trình xâm lược ĐNA",
      question: "Trải qua hơn 60 năm (1824 - 1885), thực dân Anh chiếm được",
      options: {
        A: "Miến Điện.",
        B: "Xin-ga-po.",
        C: "Mã Lai.",
        D: "Bru-nây."
      },
      correct: "A",
      explanation: "Qua ba cuộc chiến tranh xâm lược kéo dài từ năm 1824 đến 1885, thực dân Anh đã hoàn thành xâm chiếm Miến Điện (Myanmar) và sáp nhập vào Ấn Độ thuộc Anh."
    },
    {
      id: 39,
      topic: "Bài 5: Quá trình xâm lược ĐNA",
      question: "Về mặt chính trị, sau khi hoàn thành xâm lược Đông Nam Á các nước thực dân phương Tây đã thi hành chính sách",
      options: {
        A: "\"Phản phong\".",
        B: "\"Ngu dân\".",
        C: "\"Đồng hóa\".",
        D: "\"Chia để trị\"."
      },
      correct: "D",
      explanation: "Về chính trị, thực dân phương Tây áp đặt ách cai trị trực tiếp hoặc gián tiếp và triệt để thi hành chính sách \"chia để trị\" nhằm làm suy yếu sức mạnh đoàn kết dân tộc."
    },
    {
      id: 40,
      topic: "Bài 5: Quá trình xâm lược ĐNA",
      question: "Trong chính sách cai trị về văn hóa, xã hội và giáo dục ở Đông Nam Á, thực dân phương Tây đã",
      options: {
        A: "Kìm hãm người dân thuộc địa trong tình trạng lạc hậu.",
        B: "Chú trọng thực hiện các chính sách xóa nghèo – đói.",
        C: "Phát triển kinh tế ở những nơi có điều kiện phù hợp.",
        D: "Chú trọng xây dựng hệ thống đường giao thông."
      },
      correct: "A",
      explanation: "Thực dân thi hành chính sách ngu dân, hạn chế giáo dục, duy trì hủ tục lạc hậu để dễ bề cai trị và kìm hãm người dân thuộc địa."
    },
    {
      id: 41,
      topic: "Bài 5: Quá trình xâm lược ĐNA",
      question: "Trong công cuộc cải cách, Chính phủ Xiêm đã thực hiện chính sách nào về kinh tế?",
      options: {
        A: "Tiến hành cải cách hành chính theo mô hình phương Tây.",
        B: "Khuyến khích đầu tư vào các ngành công nghiệp, đường sắt…",
        C: "Cắt một số vùng lãnh thổ thuộc ảnh hưởng của Xiêm.",
        D: "Công bố chương trình giáo dục đầu tiên ở Xiêm."
      },
      correct: "B",
      explanation: "Về kinh tế, vua Ra-ma V khuyến khích đầu tư nước ngoài, mở mang giao thông vận tải, xây dựng đường sắt và thúc đẩy thương mại phát triển."
    },
    {
      id: 42,
      topic: "Bài 5: Quá trình xâm lược ĐNA",
      question: "Trong công cuộc cải cách, Chính phủ Xiêm đã thực hiện chính sách nào đối với giáo dục?",
      options: {
        A: "Cắt một số vùng lãnh thổ thuộc ảnh hưởng của Xiêm.",
        B: "Mở các trường học theo mô hình phương Tây.",
        C: "Khuyến khích đầu tư vào các ngành công nghiệp, đường sắt…",
        D: "Áp dụng biện pháp miễn trừ và giảm thuế nông nghiệp."
      },
      correct: "B",
      explanation: "Chính phủ Xiêm cho mở các trường học hiện đại theo kiểu phương Tây, cử con em sang du học ở châu Âu."
    },
    {
      id: 43,
      topic: "Bài 5: Quá trình xâm lược ĐNA",
      question: "Những nội dung cải cách của vua Ra-ma V đã đưa Xiêm phát triển theo",
      options: {
        A: "Thể chế Tổng thống Liên bang.",
        B: "Con đường tư bản chủ nghĩa.",
        C: "Con đường xã hội chủ nghĩa.",
        D: "Liên kết với các nước trong khu vực."
      },
      correct: "B",
      explanation: "Công cuộc canh tân của Ra-ma V đã xóa bỏ tàn dư phong kiến lỗi thời, mở đường cho kinh tế Xiêm phát triển theo con đường tư bản chủ nghĩa."
    },
    {
      id: 44,
      topic: "Bài 5: Quá trình xâm lược ĐNA",
      question: "Nước duy nhất ở Đông Nam Á vẫn giữ được nền độc lập tương đối về chính trị là",
      options: {
        A: "Bru-nây.",
        B: "Xin-ga-po.",
        C: "Mã Lai.",
        D: "Xiêm."
      },
      correct: "D",
      explanation: "Xiêm (Thái Lan) là quốc gia duy nhất ở Đông Nam Á giữ được nền độc lập tương đối nhờ chính sách canh tân kịp thời và đường lối ngoại giao mềm dẻo."
    },
    {
      id: 45,
      topic: "Bài 5: Quá trình xâm lược ĐNA",
      question: "Vào giữa thế kỉ XIX, Vương quốc Xiêm đứng trước hoàn cảnh nào?",
      options: {
        A: "Đất nước phát triển mạnh mẽ theo con đường tư bản chủ nghĩa.",
        B: "Sự đe dọa xâm lược của các nước thực dân phương Tây.",
        C: "Tiến hành các cuộc chiến tranh mở rộng lãnh thổ.",
        D: "Chế độ phong kiến bước vào thời kì phát triển thịnh đạt."
      },
      correct: "B",
      explanation: "Đứng trước nguy cơ bị các thế lực thực dân phương Tây (đặc biệt là Anh và Pháp) nhòm ngó xâm lược."
    },
    {
      id: 46,
      topic: "Bài 5: Quá trình xâm lược ĐNA",
      question: "Các nước phương Tây thực hiện chính sách cai trị ở Đông Nam Á trên những lĩnh vực nào?",
      options: {
        A: "Chính trị, kinh tế, văn hóa - xã hội.",
        B: "Chính trị, kinh tế, quân sự.",
        C: "Kinh tế, quân sự, giáo dục.",
        D: "Văn hóa, giáo dục, kinh tế."
      },
      correct: "A",
      explanation: "Chính sách cai trị của chủ nghĩa thực dân phương Tây bao trùm trên tất cả các mặt: chính trị, kinh tế, văn hóa - xã hội và giáo dục."
    },
    {
      id: 47,
      topic: "Bài 5: Quá trình xâm lược ĐNA",
      question: "Từ năm 1898, quốc gia nào sau đây thay thế Tây Ban Nha cai trị Phi-líp-pin?",
      options: {
        A: "Pháp.",
        B: "I-ta-li-a.",
        C: "Mỹ.",
        D: "Anh."
      },
      correct: "C",
      explanation: "Sau chiến tranh Mỹ - Tây Ban Nha (1898), Mỹ đã thế chân Tây Ban Nha cai trị Phi-líp-pin."
    },
    {
      id: 48,
      topic: "Bài 5: Quá trình xâm lược ĐNA",
      question: "Trong chính sách cai trị về văn hóa, xã hội và giáo dục ở Đông Nam Á, thực dân phương Tây đã",
      options: {
        A: "Làm xói mòn giá trị truyền thống của các quốc gia.",
        B: "Chú trọng thực hiện các chính sách xóa nghèo – đói.",
        C: "Chú trọng xây dựng hệ thống đường giao thông.",
        D: "Phát triển kinh tế ở những nơi có điều kiện phù hợp."
      },
      correct: "A",
      explanation: "Văn hóa nô dịch và chia rẽ sắc tộc tôn giáo của thực dân làm xói mòn nghiêm trọng các giá trị văn hóa và đạo đức truyền thống của các dân tộc Đông Nam Á."
    },
    {
      id: 49,
      topic: "Bài 5: Quá trình xâm lược ĐNA",
      question: "Ngoài Ma-lai-xi-a, quốc gia nào sau đây ở Đông Nam Á bị thực dân Anh xâm lược và cai trị?",
      options: {
        A: "Việt Nam.",
        B: "Phi-lip-pin.",
        C: "Miến Điện.",
        D: "Xiêm."
      },
      correct: "C",
      explanation: "Thực dân Anh đã xâm chiếm và đặt ách cai trị lên Miến Điện (Myanmar), Mã Lai, Xin-ga-po, Bru-nây."
    },
    {
      id: 50,
      topic: "Bài 5: Quá trình xâm lược ĐNA",
      question: "Quốc gia nào ở Đông Nam Á trở thành vùng đệm giữa hai thế lực thực dân Anh và Pháp?",
      options: {
        A: "Xin-ga-po.",
        B: "Ma-lai-xi-a.",
        C: "Xiêm.",
        D: "In-đô-nê-xi-a."
      },
      correct: "C",
      explanation: "Xiêm nằm giữa Miến Điện, Mã Lai (thuộc Anh) và ba nước Đông Dương (thuộc Pháp), trở thành vùng đệm tranh chấp giữa hai cường quốc."
    },

    // Bài 6: HÀNH TRÌNH ĐI ĐẾN ĐỘC LẬP DÂN TỘC Ở ĐÔNG NAM Á (20 câu)
    {
      id: 51,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Trong giai đoạn 1954 - 1975, nhân dân ba nước Đông Dương đấu tranh chống kẻ thù chung là",
      options: {
        A: "Thực dân Anh.",
        B: "Thực dân Hà Lan.",
        C: "Đế quốc Mĩ.",
        D: "Thực dân Pháp."
      },
      correct: "C",
      explanation: "Sau Hiệp định Giơ-ne-vơ (1954), đế quốc Mỹ nhảy vào can thiệp và xâm lược ba nước Đông Dương (Việt Nam, Lào, Cam-pu-chia)."
    },
    {
      id: 52,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Trong những năm cuối thế kỉ XIX - đầu thế kỉ XX, nhân dân Mi-an-ma nổi dậy đấu tranh chống lại ách cai trị của thực dân",
      options: {
        A: "Hà Lan.",
        B: "Pháp.",
        C: "Tây Ban Nha.",
        D: "Anh."
      },
      correct: "D",
      explanation: "Mi-an-ma là thuộc địa của thực dân Anh nên phong trào đấu tranh của nhân dân hướng mũi nhọn chống thực dân Anh."
    },
    {
      id: 53,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Năm 1945, quốc gia nào sau đây ở khu vực Đông Nam Á tuyên bố độc lập sớm nhất?",
      options: {
        A: "Thái Lan.",
        B: "In-đô-nê-xi-a.",
        C: "Lào.",
        D: "Việt Nam."
      },
      correct: "B",
      explanation: "Ngày 17/8/1945, In-đô-nê-xi-a tuyên bố độc lập; Việt Nam tuyên bố ngày 2/9/1945; Lào tuyên bố ngày 12/10/1945."
    },
    {
      id: 54,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Cuộc khởi nghĩa nào được xem là biểu tượng của liên minh chiến đấu giữa nhân dân hai nước Việt Nam và Cam-pu-chia trong cuộc đấu tranh chống Pháp xâm lược?",
      options: {
        A: "Khởi nghĩa Pha – ca – đuốc.",
        B: "Khởi nghĩa Si-vô-tha.",
        C: "Khởi nghĩa Ong Kẹo và Com-ma-đam.",
        D: "Khởi nghĩa Pu-côm-bô."
      },
      correct: "D",
      explanation: "Khởi nghĩa Pu-côm-bô (1866 - 1867) đã xây dựng căn cứ ở vùng giáp ranh hai nước và phối hợp chiến đấu chặt chẽ với nghĩa quân Trương Quyền của Việt Nam."
    },
    {
      id: 55,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Cuộc khởi nghĩa của nhân dân Campuchia chống thực dân Pháp trong những năm 1863 - 1866 do ai lãnh đạo?",
      options: {
        A: "Si-vô-tha.",
        B: "Pu-côm-bô.",
        C: "A-cha Xoa.",
        D: "Com-ma-đam."
      },
      correct: "C",
      explanation: "Cuộc khởi nghĩa do nhà sư A-cha Xoa lãnh đạo diễn ra từ 1863 đến 1866 tại vùng giáp ranh miền Nam Việt Nam."
    },
    {
      id: 56,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Quốc gia nào sau đây ở khu vực Đông Nam Á tận dụng thời cơ Nhật Bản đầu hàng Đồng minh không điều kiện (tháng 8-1945) để tiến hành giành độc lập?",
      options: {
        A: "Mi-an-ma, Lào, Thái Lan.",
        B: "In-đô-nê-xi-a, Việt Nam, Lào.",
        C: "Thái Lan, Việt Nam, Cam-pu-chia.",
        D: "In-đô-nê-xi-a, Phi-líp-pin, Lào."
      },
      correct: "B",
      explanation: "Ba nước chớp đúng thời cơ tháng 8/1945 giành độc lập thành công là In-đô-nê-xi-a, Việt Nam và Lào."
    },
    {
      id: 57,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Những cuộc khởi nghĩa tiêu biểu của nhân dân Campuchia chống lại thực dân Pháp xâm lược là",
      options: {
        A: "Khởi nghĩa của hoàng thân Xi-vô-tha và Hô-xê Ri-dan.",
        B: "Khởi nghĩa của hoàng thân Xi-vô-tha và Đi-pô-nê-gô-rô.",
        C: "Khởi nghĩa của hoàng thân Xi-vô-tha và A-cha Xoa.",
        D: "Khởi nghĩa của hoàng thân Xi-vô-tha và Nô-rô-đôm."
      },
      correct: "C",
      explanation: "Các cuộc khởi nghĩa tiêu biểu ở Campuchia cuối thế kỉ XIX gồm khởi nghĩa A-cha Xoa, Pu-côm-bô và hoàng thân Si-vô-tha."
    },
    {
      id: 58,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Từ giữa những năm 60 đến cuối những năm 80 của thế kỉ XX, nhóm năm nước sáng lập ASEAN đã tiến hành chiến lược phát triển kinh tế nào sau đây?",
      options: {
        A: "Công nghiệp hóa thay thế nhập khẩu.",
        B: "Công nghiệp hóa lấy xuất khẩu làm chủ đạo.",
        C: "Quốc hữu hóa các doanh nghiệp nước ngoài.",
        D: "Công nghiệp hóa, điện khí hóa toàn quốc."
      },
      correct: "B",
      explanation: "Chuyển từ chiến lược thay thế nhập khẩu sang chiến lược công nghiệp hóa hướng về xuất khẩu (lấy xuất khẩu làm chủ đạo), mở cửa nền kinh tế thu hút vốn nước ngoài."
    },
    {
      id: 59,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Nội dung nào sau đây là một trong những chính sách phát triển kinh tế của Chính phủ Bru-nây được thực hiện từ những năm 80 của thế kỉ XX?",
      options: {
        A: "Cải cách đất nước, lấy đổi mới về chính trị làm trọng tâm.",
        B: "Xây dựng nền kinh tế kế hoạch hóa tập trung, quan liêu, bao cấp.",
        C: "Phát triển đất nước theo con đường xã hội chủ nghĩa.",
        D: "Đa dạng hoá nền kinh tế, gia tăng sản xuất hàng tiêu dùng và xuất khẩu."
      },
      correct: "D",
      explanation: "Chính phủ Bru-nây thực hiện chiến lược đa dạng hóa nền kinh tế nhằm giảm bớt sự phụ thuộc độc tôn vào khai thác dầu mỏ và khí đốt."
    },
    {
      id: 60,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Cuối thế kỉ XIX - đầu thế kỉ XX, phong trào giải phóng dân tộc theo xu hướng tư sản ở khu vực Đông Nam Á diễn ra sớm nhất ở",
      options: {
        A: "In-đô-nê-xi-a, Mi-an-ma, Phi-lip-pin.",
        B: "Phi-lip-pin, Thái Lan, Việt Nam.",
        C: "Thái Lan, Việt Nam, Lào.",
        D: "Việt Nam, Campuchia, Lào."
      },
      correct: "A",
      explanation: "Xu hướng dân chủ tư sản xuất hiện sớm nhất tại Phi-líp-pin (với Hô-xê Ri-dan, Bô-ni-pha-xi-ô), In-đô-nê-xi-a và Mi-an-ma."
    },
    {
      id: 61,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Thế kỉ XIX, nhân dân Miến Điện đấu tranh chống thực dân Anh với hình thức chủ yếu nào sau đây?",
      options: {
        A: "Cải cách ôn hòa.",
        B: "Chiến tranh du kích.",
        C: "Bất hợp tác.",
        D: "Đấu tranh nghị trường."
      },
      correct: "B",
      explanation: "Sau khi triều đình phong kiến thất bại, nhân dân Miến Điện đã tự phát đứng lên tổ chức chiến tranh du kích kháng cự quân xâm lược Anh bền bỉ."
    },
    {
      id: 62,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Sau nhiều thế kỉ là thuộc địa của chủ nghĩa thực dân, phần lớn các quốc gia Đông Nam Á vẫn là những nước",
      options: {
        A: "Công nghiệp phát triển.",
        B: "Công nghiệp lạc hậu.",
        C: "Công nghiệp mới.",
        D: "Nông nghiệp lạc hậu."
      },
      correct: "D",
      explanation: "Chính sách kìm hãm công nghiệp của thực dân biến Đông Nam Á thành thị trường tiêu thụ và nơi cung cấp nguyên liệu, nên đa phần vẫn là các nước nông nghiệp nghèo nàn lạc hậu."
    },
    {
      id: 63,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Thời gian đầu sau khi giành độc lập, một trong những nội dung của chính sách công nghiệp hóa thay thế nhập khẩu được nhóm 5 nước sáng lập ASEAN thực hiện là",
      options: {
        A: "Thu hút nguồn vốn đầu tư nước ngoài.",
        B: "Sản xuất hàng tiêu dùng để đáp ứng nhu cầu trong nước.",
        C: "Tăng cường mậu dịch đối ngoại.",
        D: "Tập trung sản xuất hàng hóa để xuất khẩu."
      },
      correct: "B",
      explanation: "Mục tiêu của chiến lược công nghiệp hóa thay thế nhập khẩu là đẩy mạnh sản xuất hàng tiêu dùng nội địa nhằm tự túc hàng hóa thay thế hàng nhập ngoại."
    },
    {
      id: 64,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Tháng 12-1986, Đảng cộng sản Việt Nam đã quyết định thực hiện",
      options: {
        A: "Xây dựng nền kinh tế tập trung.",
        B: "Trưng thu lương thực thừa.",
        C: "Đường lối đổi mới.",
        D: "Chính sách bế quan tỏa cảng."
      },
      correct: "C",
      explanation: "Đại hội đại biểu toàn quốc lần thứ VI của Đảng Cộng sản Việt Nam (12/1986) đã đề ra Đường lối đổi mới toàn diện đất nước."
    },
    {
      id: 65,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Trong năm 1930, ở Đông Nam Á, các Đảng Cộng sản đã ra đời ở những quốc gia nào sau đây?",
      options: {
        A: "Việt Nam, Mã Lai, Xiêm và Miến Điện.",
        B: "Việt Nam, Mã Lai, Xiêm và Phi-líp-pin.",
        C: "Việt Nam, Mã Lai, Xiêm và In-đô-nê-xi-a.",
        D: "Việt Nam, Mã Lai, Xiêm và Xin-ga-po."
      },
      correct: "B",
      explanation: "Năm 1930 chứng kiến sự thành lập của Đảng Cộng sản Việt Nam (tháng 2/1930), Đảng Cộng sản Mã Lai, Đảng Cộng sản Xiêm và Đảng Cộng sản Phi-líp-pin (tháng 11/1930)."
    },
    {
      id: 66,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Từ giữa những năm 50 của thế kỉ XX, nhóm năm nước sáng lập ASEAN đã tiến hành chiến lược phát triển kinh tế nào sau đây?",
      options: {
        A: "Quốc hữu hóa các doanh nghiệp nước ngoài.",
        B: "Công nghiệp hóa lấy xuất khẩu làm chủ đạo.",
        C: "Công nghiệp hóa thay thế nhập khẩu.",
        D: "Công nghiệp hóa, điện khí hóa toàn quốc."
      },
      correct: "C",
      explanation: "Giai đoạn từ giữa những năm 50 đến những năm 60 của thế kỉ XX, nhóm nước sáng lập ASEAN tiến hành chiến lược công nghiệp hóa thay thế nhập khẩu."
    },
    {
      id: 67,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Phong trào đấu tranh giành độc lập dân tộc ở Đông Nam Á (1920 – 1945) mang đặc điểm nổi bật nào sau đây?",
      options: {
        A: "Xuất hiện hai khuynh hướng cứu nước hoạt động là tư sản và vô sản.",
        B: "Phong trào đấu tranh ở các nước đều đi theo khuynh hướng vô sản.",
        C: "Chỉ những nước đi theo con đường cách mạng vô sản giành thắng lợi.",
        D: "Chỉ những nước đi theo con đường dân chủ tư sản giành thắng lợi."
      },
      correct: "A",
      explanation: "Đặc điểm nổi bật của phong trào giải phóng dân tộc thời kì này là sự tồn tại song song của hai khuynh hướng: khuynh hướng dân chủ tư sản và khuynh hướng vô sản."
    },
    {
      id: 68,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Đặc điểm nổi bật của phong trào đấu tranh giành độc lập dân tộc ở các nước Đông Nam Á trong giai đoạn 1920 – 1945 là",
      options: {
        A: "Xu hướng tư sản chiếm ưu thế tuyệt đối.",
        B: "Xu hướng tư sản dần thay thế xu hướng phong kiến.",
        C: "Ý thức hệ phong kiến chiếm ưu thế vượt trội.",
        D: "Tồn tại song song hai xu hướng tư sản và vô sản."
      },
      correct: "D",
      explanation: "Hai xu hướng tư sản và vô sản cùng tồn tại và hoạt động tích cực nhằm tìm kiếm con đường giải phóng cho dân tộc."
    },
    {
      id: 69,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Từ giữa những năm 50 đến giữa những năm 60 của thế kỉ XX, nhóm năm nước sáng lập ASEAN tiến hành chiến lược công nghiệp hóa thay thế nhập khẩu với mục tiêu",
      options: {
        A: "Mở cửa nền kinh tế, thu hút vốn đầu tư, kĩ thuật và công nghệ hiện đại của nước ngoài.",
        B: "Tập trung sản xuất hàng hoá để xuất khẩu, phát triển kinh tế đối ngoại, hội nhập thế giới.",
        C: "Nhanh chóng phát triển các ngành công nghiệp nặng, hội nhập với thị trường thế giới.",
        D: "Đưa đất nước thoát khỏi tình trạng nghèo nàn, lạc hậu, xây dựng nền kinh tế tự chủ."
      },
      correct: "D",
      explanation: "Mục tiêu nhằm nhanh chóng xóa bỏ tàn tích kinh tế thuộc địa, tự túc nhu cầu tiêu dùng và xây dựng nền kinh tế độc lập tự chủ."
    },
    {
      id: 70,
      topic: "Bài 6: Hành trình đến độc lập ĐNA",
      question: "Nội dung nào sau đây phản ánh đúng tác động tích cực từ chính sách cai trị của thực dân Anh đối với Mã Lai?",
      options: {
        A: "Giải quyết triệt để các mâu thuẫn trong xã hội.",
        B: "Đặt cơ sở hình thành nền văn hóa truyền thống.",
        C: "Kinh tế phát triển với tốc độ nhanh, quy mô lớn.",
        D: "Phát triển hệ thống giao thông vận tải, cầu cảng."
      },
      correct: "D",
      explanation: "Để phục vụ khai thác bóc lột khoáng sản (thiếc) và đồn điền cao su, thực dân Anh đã đầu tư xây dựng mạng lưới giao thông đường bộ, đường sắt và hệ thống cảng biển hiện đại ở Mã Lai."
    }
  ],

  // ==================== PHẦN II: 6 CÂU ĐÚNG / SAI ====================
  part2: [
    {
      id: 1,
      topic: "Bài 3: Ý nghĩa Liên bang Xô Viết",
      context: "Cho đoạn tư liệu sau đây:\n\"Sự ra đời của Liên bang Xô viết có ý nghĩa vô cùng quan trọng. Đây là thắng lợi của chính sách dân tộc theo chủ nghĩa Lê – nin, mở ra một con đường đúng đắn trong việc giải quyết vấn đề dân tộc, thủ tiêu những bất bình đẳng giữa các dân tộc, củng cố và tăng cường sức mạnh của Nhà nước Xô viết\".\n(Đỗ Thanh Bình (Chủ biên), Giáo trình lịch sử thế giới hiện đại, Tập 1, Nxb ĐHSP Hà Nội, tr.48)",
      subQuestions: {
        a: {
          text: "Tư liệu trên phản ánh ý nghĩa của sự ra đời của nhà nước Liên Xô.",
          correct: true,
          explanation: "Đoạn tư liệu khẳng định ý nghĩa quan trọng về mặt dân tộc và sức mạnh của nhà nước Liên Xô khi thành lập."
        },
        b: {
          text: "Sự ra đời của Liên bang Xô viết đã góp phần giải quyết vấn đề dân tộc trên cơ sở bình đẳng giữa các dân tộc.",
          correct: true,
          explanation: "Tư liệu ghi rõ: \"mở ra con đường đúng đắn trong việc giải quyết vấn đề dân tộc, thủ tiêu bất bình đẳng giữa các dân tộc\"."
        },
        c: {
          text: "Theo tư liệu, việc thành lập Liên bang Xô viết làm suy giảm vai trò và sức mạnh của Nhà nước Xô viết.",
          correct: false,
          explanation: "Tư liệu khẳng định việc này giúp \"củng cố và tăng cường sức mạnh của Nhà nước Xô viết\", không phải làm suy giảm."
        },
        d: {
          text: "Sự ra đời của Liên Xô cho thấy việc tôn trọng quyền bình đẳng giữa các dân tộc là một nhân tố quan trọng để xây dựng và củng cố sự thống nhất quốc gia.",
          correct: true,
          explanation: "Đây là bài học kinh nghiệm sâu sắc từ mô hình liên bang theo nguyên tắc bình đẳng của Lê-nin."
        }
      }
    },
    {
      id: 2,
      topic: "Bài 3: Cách mạng Tháng Mười & VN",
      context: "Cho đoạn tư liệu sau đây:\n\"Đối với Việt Nam, Cách mạng Tháng Mười Nga đã mở đường cho học thuyết Mác - Lê-nin thâm nhập vào Việt Nam trong bối cảnh đường lối giải phóng dân tộc của Việt Nam cuối thế kỷ XIX rơi vào khủng hoảng. Nghiên cứu Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của V.I. Lê-nin, dưới ánh sáng Cách mạng Tháng Mười, đã đưa Nguyễn Ái Quốc từ một người yêu nước trở thành một người cộng sản và tìm ra con đường để cứu nước, giải phóng dân tộc. Vì vậy, Luận cương của V.I. Lê-nin chính là sự khởi nguyên cho sự nghiệp giải phóng mà Chủ tịch Hồ Chí Minh dấn thân trong suốt cuộc đời oanh liệt của mình: Giải phóng dân tộc - Giải phóng giai cấp - Giải phóng con người\".",
      subQuestions: {
        a: {
          text: "Thắng lợi của Cách mạng tháng Mười Nga đã tạo điều kiện để chủ nghĩa Mác – Lê-nin được thâm nhập vào Việt Nam.",
          correct: true,
          explanation: "Cách mạng Tháng Mười mở đường truyền bá chủ nghĩa Mác - Lê-nin sang các nước phương Đông, trong đó có Việt Nam."
        },
        b: {
          text: "Nguyễn Ái Quốc tìm ra con đường cứu nước trước khi tiếp cận Luận cương của V.I. Lê-nin về vấn đề dân tộc và thuộc địa.",
          correct: false,
          explanation: "Nguyễn Ái Quốc tìm ra con đường cứu nước (con đường cách mạng vô sản) khi đọc Luận cương của Lê-nin vào tháng 7/1920."
        },
        c: {
          text: "Tư liệu cho thấy Cách mạng Tháng Mười Nga có ảnh hưởng quan trọng đối với quá trình Nguyễn Ái Quốc đến với chủ nghĩa cộng sản.",
          correct: true,
          explanation: "Ánh sáng của Cách mạng Tháng Mười và lý luận của Lê-nin đưa Người từ chủ nghĩa yêu nước đến với chủ nghĩa cộng sản."
        },
        d: {
          text: "Cách mạng Tháng Mười Nga đã tác động sâu sắc đến cách mạng Việt Nam, quyết định con đường giải phóng dân tộc gắn liền với giải phóng giai cấp và giải phóng con người.",
          correct: true,
          explanation: "Đúng theo nội dung đúc kết của đoạn tư liệu."
        }
      }
    },
    {
      id: 3,
      topic: "Bài 4: Cải cách mở cửa Trung Quốc",
      context: "Cho đoạn tư liệu sau:\n\"Do cải cách, mở cửa thành công nên Trung Quốc đã vượt qua trước những sóng gió về kinh tế, chính trị trong và ngoài nước, đặc biệt là cơn khủng hoảng tiền tệ châu Á năm 1997-1998. Sức mạnh tổng hợp của cả nước đã tăng cường, các mặt xã hội đều tiến bộ. Cải cách, mở cửa thực sự được coi là 'Cuộc cách mạng lần thứ hai' ở Trung Quốc...\nTuy nhiên, cải cách, mở cửa cũng còn không ít yếu kém. Kết cấu kinh tế chưa hợp lí, mất cân đối, chất lượng của nền kinh tế chưa cao, thể chế mới chưa hoàn thiện, chênh lệch giàu nghèo lớn, sức ép thiếu việc làm và tệ nạn xã hội tăng v.v...\"\n(Đỗ Thanh Bình (Chủ biên), Lịch sử thế giới hiện đại, Tập 1, NXB ĐHSP Hà Nội, 2012, tr.168-169)",
      subQuestions: {
        a: {
          text: "Đoạn tư liệu đề cập đến một số thách thức của Trung Quốc hiện nay.",
          correct: true,
          explanation: "Phần sau của tư liệu nêu rõ các thách thức: kết cấu kinh tế chưa hợp lí, chênh lệch giàu nghèo lớn, thiếu việc làm, tệ nạn xã hội."
        },
        b: {
          text: "Thành công của công cuộc cải cách, mở cửa đã giúp Trung Quốc nâng cao sức mạnh tổng hợp quốc gia và cải thiện nhiều mặt của đời sống xã hội.",
          correct: true,
          explanation: "Đúng theo câu văn: \"Sức mạnh tổng hợp của cả nước đã tăng cường, các mặt xã hội đều tiến bộ\"."
        },
        c: {
          text: "Việc Trung Quốc vượt qua cuộc khủng hoảng tiền tệ châu Á năm 1997 – 1998 cho thấy hiệu quả của đường lối cải cách, mở cửa trong việc nâng cao khả năng thích ứng của nền kinh tế.",
          correct: true,
          explanation: "Đúng theo nhận định trong đoạn tư liệu."
        },
        d: {
          text: "Những hạn chế trong quá trình cải cách, mở cửa cho thấy Trung Quốc cần thay đổi đường lối chiến lược, đưa đất nước phát triển trên con đường tư bản chủ nghĩa.",
          correct: false,
          explanation: "Trung Quốc kiên định con đường xây dựng chủ nghĩa xã hội đặc sắc Trung Quốc, không chuyển sang con đường tư bản chủ nghĩa."
        }
      }
    },
    {
      id: 4,
      topic: "Bài 5: Bối cảnh xâm lược ĐNA",
      context: "Cho đoạn tư liệu sau đây:\n\"Khi các nước tư bản Âu - Mĩ chuyển lên giai đoạn đế quốc chủ nghĩa thì việc xâm chiếm thuộc địa ở phương Đông nói chung, Đông Nam Á nói riêng cũng diễn ra nhanh chóng. Đây cũng là thời kì mà chế độ phong kiến ở các nước Đông Nam Á đã suy yếu, rơi vào cuộc khủng hoảng trầm trọng về chính trị, kinh tế - xã hội. Những mâu thuẫn trong xã hội phong kiến thêm gay gắt, dẫn tới những cuộc khởi nghĩa mạnh mẽ liên tiếp của nông dân. Tuy nhiên, trước nạn ngoại xâm, mâu thuẫn giai cấp trong nước tạm hoà hoãn để tập trung giải quyết mâu thuẫn giữa dân tộc với đế quốc xâm lược. Xu hướng cải cách, duy tân cũng nảy sinh.\"\n(Phan Ngọc Liên (Chủ biên), Lịch sử thế giới cận đại, Quyển 2, Nxb ĐHSP Hà Nội, tr.101)",
      subQuestions: {
        a: {
          text: "Theo đoạn tư liệu, khi các nước tư bản Âu – Mĩ xâm lược, các nước Đông Nam Á đang trong giai đoạn suy yếu, rơi vào khủng hoảng.",
          correct: true,
          explanation: "Đúng theo câu: \"chế độ phong kiến ở các nước Đông Nam Á đã suy yếu, rơi vào cuộc khủng hoảng trầm trọng\"."
        },
        b: {
          text: "Sự suy yếu của chế độ phong kiến ở Đông Nam Á là một trong những nguyên nhân khiến các quốc gia trong khu vực gặp khó khăn trong việc đối phó với sự xâm lược của các nước tư bản phương Tây.",
          correct: true,
          explanation: "Khủng hoảng làm suy kiệt tiềm lực quốc gia và khả năng phòng thủ của các nước Đông Nam Á."
        },
        c: {
          text: "Sự xuất hiện của xu hướng cải cách, duy tân ở một số nước Đông Nam Á cuối thế kỉ XIX – đầu thế kỉ XX cho thấy các lực lượng trong xã hội đã có những nỗ lực tìm kiếm con đường ứng phó với nguy cơ mất nước.",
          correct: true,
          explanation: "Đúng theo nhận định ở cuối đoạn tư liệu."
        },
        d: {
          text: "Những cuộc khởi nghĩa của nông dân ở Đông Nam Á trong thời kì chế độ phong kiến khủng hoảng đã chấm dứt hoàn toàn sự xâm lược của phương Tây.",
          correct: false,
          explanation: "Các phong trào nông dân dù diễn ra sôi nổi nhưng phần lớn đều thất bại do thiếu đường lối đúng đắn, không chấm dứt được xâm lược của phương Tây."
        }
      }
    },
    {
      id: 5,
      topic: "Bài 5: Cải cách ở Xiêm",
      context: "Cho đoạn tư liệu sau:\n\"Những cuộc cải cách ở Xiêm, từ vua Rama IV đến Rama V và Rama VI có ý nghĩa tích cực đối với sự phát triển của Xiêm trong điều kiện chưa thể thoát khỏi sự phụ thuộc vào các nước đế quốc thực dân. Trước hết, những cuộc cải cách này được thực hiện thông qua một chính sách ngoại giao khéo léo, mềm dẻo, tránh sự khiêu khích, gây chiến của các nước đế quốc... Thứ hai, các nhà vua Xiêm đã khai thác được tiềm năng trong nước, sử dụng sự đầu tư của nước ngoài để xây dựng mới nền kinh tế phát triển về nông nghiệp và công nghiệp... So với nhiều triều đình phong kiến trong khu vực, các vua Xiêm không bảo thủ, biết tiếp thu cái mới, quyết tâm canh tân đất nước...\"\n(Phan Ngọc Liên (Chủ biên), Lịch sử thế giới cận đại, Quyển 2, Nxb ĐHSP Hà Nội, tr.125)",
      subQuestions: {
        a: {
          text: "Công cuộc cải cách ở Xiêm cuối thế kỉ XIX đầu thế kỉ XX cho thấy việc kết hợp giữa cải cách trong nước và ngoại giao linh hoạt có thể góp phần bảo vệ chủ quyền quốc gia.",
          correct: true,
          explanation: "Tư liệu chỉ rõ kết hợp giữa nội lực cải cách và ngoại giao khéo léo đã giúp Xiêm giữ được độc lập tương đối."
        },
        b: {
          text: "Việc Xiêm sử dụng nguồn đầu tư nước ngoài trong quá trình cải cách chứng tỏ nước này hoàn toàn lệ thuộc vào các nước đế quốc phương Tây.",
          correct: false,
          explanation: "Xiêm lợi dụng sự cạnh tranh giữa các nước đế quốc để phát triển kinh tế và giữ độc lập ở mức độ nhất định, không hoàn toàn lệ thuộc."
        },
        c: {
          text: "Thành công của cải cách ở Xiêm bắt nguồn chủ yếu từ việc các nhà vua duy trì mô hình quản lí phong kiến truyền thống và hạn chế tiếp nhận ảnh hưởng bên ngoài.",
          correct: false,
          explanation: "Thành công là do \"không bảo thủ, biết tiếp thu cái mới, quyết tâm canh tân đất nước\" theo mô hình phương Tây."
        },
        d: {
          text: "Từ trường hợp Xiêm có thể rút ra bài học rằng các quốc gia cần chủ động đổi mới, tận dụng thời cơ quốc tế và kết hợp sức mạnh bên trong với quan hệ đối ngoại phù hợp để phát triển đất nước.",
          correct: true,
          explanation: "Đây là bài học lịch sử sâu sắc và đúng đắn từ kinh nghiệm canh tân của Xiêm."
        }
      }
    },
    {
      id: 6,
      topic: "Bài 6: Phong trào GPDT ở ĐNA",
      context: "Đọc đoạn tư liệu sau đây:\n\"Ở giai đoạn này, phong trào giải phóng dân tộc chuyển sang một nấc thang phát triển mới và có những đặc điểm mới. Đó là sự phát triển song song giữa hai loại phong trào: do giai cấp tư sản dân tộc lãnh đạo và do giai cấp vô sản đứng đầu. Đây cũng là giai đoạn 'bản lề' cho toàn bộ quá trình đấu tranh giành độc lập, nhất là cho giai đoạn từ sau năm 1945 trở đi. Bởi vì, giai đoạn này vừa tích lũy lực lượng, chuẩn bị cơ sở và tạo điều kiện cho việc giành thắng lợi cho các giai đoạn tiếp theo; vừa là sự tìm kiếm, lựa chọn con đường giải phóng dân tộc... Nếu như trong những năm cuối thế kỷ XIX và hai thập niên đầu thế kỷ XX, những nhà lãnh đạo của các dân tộc Đông Nam Á còn chưa tìm được con đường đúng đắn, phù hợp với dân tộc để đi tới độc lập, thì đến đây họ đã tìm cho mình một hướng đi, một giải pháp phù hợp...\"\n(Lương Ninh, Lịch sử Đông Nam Á, Nxb Giáo dục, 2008)",
      subQuestions: {
        a: {
          text: "Hai khuynh hướng cách mạng mới đã xuất hiện đồng thời và đấu tranh loại trừ nhau trong quá trình giải phóng dân tộc ở các nước Đông Nam Á.",
          correct: false,
          explanation: "Tư liệu ghi là: \"sự phát triển song song giữa hai loại phong trào\", không phải đấu tranh loại trừ lẫn nhau."
        },
        b: {
          text: "Các khuynh hướng đấu tranh sẽ vận động để định hình con đường phát triển của mỗi quốc gia sau khi hoàn thành đánh đuổi chủ nghĩa thực dân.",
          correct: true,
          explanation: "Đúng theo câu: \"Chính sự lựa chọn đó quyết định cả con đường đi lên trong xã hội hiện đại của mỗi quốc gia trong khu vực sau khi giành được độc lập dân tộc\"."
        },
        c: {
          text: "Các nước Đông Nam Á đã sớm tìm ra và lựa chọn con đường đúng đắn phù hợp từ cuối thế kỷ XIX và hai thập niên đầu thế kỷ XX.",
          correct: false,
          explanation: "Tư liệu nêu rõ: lúc bấy giờ các nhà lãnh đạo \"còn chưa tìm được con đường đúng đắn, phù hợp với dân tộc để đi tới độc lập\"."
        },
        d: {
          text: "Những thập niên đầu thế kỷ XX là giai đoạn chuẩn bị các điều kiện cần thiết cho sự phát triển của phong trào giải phóng dân tộc sau Chiến tranh thế giới thứ hai.",
          correct: true,
          explanation: "Giai đoạn này là giai đoạn \"bản lề\", tích lũy lực lượng và chuẩn bị điều kiện để bùng nổ thắng lợi sau năm 1945."
        }
      }
    }
  ],
  part3: []
};

if (typeof window !== 'undefined') {
  window.HISTORY_DATA = HISTORY_DATA;
}
