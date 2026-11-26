// chemistryData.js - Dữ liệu Đề Cương Ôn Tập Học Kì 1 Môn Hóa Học Lớp 11
// Chuẩn chương trình GDPT 2018 - Đầy đủ 3 phần: Trắc nghiệm (50 câu), Đúng/Sai (10 câu), Trả lời ngắn (10 câu)

const CHEMISTRY_DATA = {
  meta: {
    id: "hoahoc",
    title: "ĐỀ CƯƠNG ÔN TẬP HKI MÔN HÓA HỌC KHỐI 11",
    subject: "HÓA HỌC 11",
    subtitle: "Ôn tập Chủ đề 2, 3: Nitrogen, Sulfur & Đại cương Hóa học hữu cơ (70 câu hỏi kèm lời giải)",
    badge: "Hóa Học 11 - Chuẩn GDPT 2018",
    icon: "fa-flask",
    themeColor: "from-emerald-600 to-teal-500",
    schoolYear: "Năm học 2024 - 2025",
    totalQuestions: 70,
    parts: [
      { id: 1, name: "Phần I", desc: "Câu trắc nghiệm nhiều phương án lựa chọn (50 câu)", count: 50 },
      { id: 2, name: "Phần II", desc: "Câu trắc nghiệm Đúng / Sai (10 câu - 40 ý)", count: 10 },
      { id: 3, name: "Phần III", desc: "Câu trắc nghiệm trả lời ngắn (10 câu)", count: 10 }
    ]
  },

  // ==================== PHẦN I: 50 CÂU TRẮC NGHIỆM ĐƠN ====================
  part1: [
    {
      id: 1,
      topic: "Đơn chất Nitrogen",
      question: "Ở nhiệt độ thường, nitrogen khá trơ về mặt hoạt động hóa học là do",
      options: {
        A: "Nitrogen có bán kính nguyên tử nhỏ.",
        B: "Nitrogen có độ âm điện lớn nhất.",
        C: "Phân tử nitrogen có liên kết ba khá bền.",
        D: "Phân tử nitrogen không phân cực."
      },
      correct: "C",
      explanation: "Phân tử nitrogen gồm 2 nguyên tử liên kết với nhau bằng liên kết ba rất bền vững ($N \\equiv N$), năng lượng liên kết lớn ($945\\text{ kJ/mol}$) nên ở nhiệt độ thường nitrogen khá trơ về mặt hóa học."
    },
    {
      id: 2,
      topic: "Đơn chất Nitrogen",
      question: "$\\text{N}_2$ phản ứng với $\\text{O}_2$ tạo thành $\\text{NO}$ ở điều kiện nào sau đây?",
      options: {
        A: "Nhiệt độ $100^\\circ\\text{C}$.",
        B: "Nhiệt độ khoảng $3000^\\circ\\text{C}$.",
        C: "Nhiệt độ khoảng $1000^\\circ\\text{C}$.",
        D: "Điều kiện thường."
      },
      correct: "B",
      explanation: "$\\text{N}_2 + \\text{O}_2 \\rightleftharpoons 2\\text{NO}$ xảy ra ở nhiệt độ rất cao khoảng $3000^\\circ\\text{C}$ hoặc khi có tia lửa điện (như hiện tượng sấm sét trong tự nhiên)."
    },
    {
      id: 3,
      topic: "Đơn chất Nitrogen",
      question: "Khi có sấm chớp sinh ra khí gì?",
      options: {
        A: "NO.",
        B: "$\\text{NO}_2$.",
        C: "$\\text{O}_2$.",
        D: "$\\text{N}_2$."
      },
      correct: "A",
      explanation: "Khi có sấm chớp tạo ra nhiệt độ cao làm nitrogen và oxygen trong không khí phản ứng tạo thành nitrogen monoxide: $\\text{N}_2 + \\text{O}_2 \\xrightarrow{\\text{tia lửa điện}} 2\\text{NO}$."
    },
    {
      id: 4,
      topic: "Đơn chất Nitrogen",
      question: "Khí $\\text{N}_2$ thể hiện tính khử trong phản ứng với",
      options: {
        A: "$\\text{H}_2$.",
        B: "$\\text{O}_2$.",
        C: "Li.",
        D: "Mg."
      },
      correct: "B",
      explanation: "Trong phản ứng với $\\text{O}_2$, số oxi hóa của N tăng từ $0$ lên $+2$ trong $\\text{NO}$, do đó $\\text{N}_2$ đóng vai trò là chất khử. Trong phản ứng với kim loại hoặc $\\text{H}_2$, N giảm số oxi hóa nên đóng vai trò chất oxi hóa."
    },
    {
      id: 5,
      topic: "Ứng dụng của Nitrogen",
      question: "Trong công nghiệp, phần lớn lượng nitrogen sản xuất ra được dùng để",
      options: {
        A: "Làm môi trường trơ trong luyện kim, điện tử.",
        B: "Tổng hợp phân đạm.",
        C: "Sản xuất nitric acid.",
        D: "Tổng hợp ammonia."
      },
      correct: "D",
      explanation: "Phần lớn lượng nitrogen sản xuất trong công nghiệp được dùng để tổng hợp ammonia ($\text{NH}_3$), từ đó dùng để sản xuất nitric acid, phân đạm và nhiều hóa chất khác."
    },
    {
      id: 6,
      topic: "Ứng dụng của Nitrogen",
      question: "Trong lĩnh vực y tế, nitrogen lỏng dùng để làm gì trong công nghiệp?",
      options: {
        A: "Sản xuất ammonia ($\\text{NH}_3$).",
        B: "Dùng làm môi trường trơ.",
        C: "Dùng để bảo quản máu và mẫu vật sinh học.",
        D: "Dùng để bảo quản thức ăn."
      },
      correct: "C",
      explanation: "Nitrogen lỏng có nhiệt độ sôi rất thấp ($-196^\\circ\\text{C}$), được dùng rộng rãi trong y tế và công nghệ sinh học để bảo quản đông lạnh mẫu vật sinh học, trứng, tinh trùng và máu."
    },
    {
      id: 7,
      topic: "Ammonia & Hợp chất",
      question: "Ammonia đóng vai trò chất khử khi tác dụng với chất nào sau đây?",
      options: {
        A: "$\\text{H}_2\\text{O}$.",
        B: "$\\text{HCl}$.",
        C: "$\\text{H}_3\\text{PO}_4$.",
        D: "$\\text{O}_2$ (Pt, $t^\\circ$)."
      },
      correct: "D",
      explanation: "Trong phản ứng $4\\text{NH}_3 + 5\\text{O}_2 \\xrightarrow{\\text{Pt}, t^\\circ} 4\\text{NO} + 6\\text{H}_2\\text{O}$, số oxi hóa của N tăng từ $-3$ lên $+2$, nên $\\text{NH}_3$ đóng vai trò là chất khử. Với axit hay nước, ammonia chỉ thể hiện tính base."
    },
    {
      id: 8,
      topic: "Ammonia & Hợp chất",
      question: "Lấy 1 thanh thủy tinh nhúng vào dung dịch $\\text{HCl}$ đặc và 1 thanh thủy tinh khác nhúng vào dung dịch $\\text{NH}_3$ đặc. Sau đó đưa 2 thanh thủy tinh lại gần nhau thấy có hiện tượng gì?",
      options: {
        A: "Tạo khói trắng bay lên.",
        B: "Tạo khói màu vàng.",
        C: "Trên thanh thủy tinh có hơi nước bám vào.",
        D: "Không có hiện tượng gì."
      },
      correct: "A",
      explanation: "Khí $\\text{NH}_3$ và khí $\\text{HCl}$ bay ra gặp nhau tạo thành những hạt tinh thể ammonium chloride cực nhỏ lơ lửng như khói trắng: $\\text{NH}_3(g) + \\text{HCl}(g) \\rightarrow \\text{NH}_4\\text{Cl}(s)$."
    },
    {
      id: 9,
      topic: "Muối Ammonium",
      question: "Nhận biết muối ammonium người ta thường dùng hóa chất nào sau đây?",
      options: {
        A: "Dung dịch acid.",
        B: "Dung dịch kiềm.",
        C: "Dung dịch muối.",
        D: "Nước."
      },
      correct: "B",
      explanation: "Muối ammonium tác dụng với dung dịch kiềm khi đun nhẹ sinh ra khí $\\text{NH}_3$ có mùi khai, làm xanh giấy quỳ tím ẩm: $\\text{NH}_4^+ + \\text{OH}^- \\rightarrow \\text{NH}_3\\uparrow + \\text{H}_2\\text{O}$."
    },
    {
      id: 10,
      topic: "Muối Ammonium",
      question: "Để tạo độ xốp cho một số loại bánh (bánh bao) có thể dùng muối nào sau đây làm bột nở?",
      options: {
        A: "$(\\text{NH}_4)_2\\text{SO}_4$.",
        B: "$\\text{NH}_4\\text{HCO}_3$.",
        C: "$\\text{CaCO}_3$.",
        D: "$\\text{NH}_4\\text{NO}_2$."
      },
      correct: "B",
      explanation: "Muối $\\text{NH}_4\\text{HCO}_3$ (ammonium hydrogencarbonate) bị nhiệt phân tạo ra các khí thoát ra làm xốp bánh: $\\text{NH}_4\\text{HCO}_3 \\xrightarrow{t^\\circ} \\text{NH}_3\\uparrow + \\text{CO}_2\\uparrow + \\text{H}_2\\text{O}$."
    },
    {
      id: 11,
      topic: "Muối Ammonium",
      question: "Cho các dung dịch không màu: $\\text{NH}_4\\text{Cl}$, $(\\text{NH}_4)_2\\text{SO}_4$, $\\text{Na}_2\\text{SO}_4$, người ta sử dụng thuốc thử nào?",
      options: {
        A: "Dung dịch $\\text{HCl}$.",
        B: "Dung dịch $\\text{NaOH}$.",
        C: "Dung dịch $\\text{Ba(OH)}_2$.",
        D: "Dung dịch $\\text{BaCl}_2$."
      },
      correct: "C",
      explanation: "Dùng dung dịch $\\text{Ba(OH)}_2$:\n- $\\text{NH}_4\\text{Cl}$: chỉ có khí mùi khai $\\text{NH}_3$.\n- $(\\text{NH}_4)_2\\text{SO}_4$: vừa có kết tủa trắng $\\text{BaSO}_4$ vừa có khí mùi khai $\\text{NH}_3$.\n- $\\text{Na}_2\\text{SO}_4$: chỉ có kết tủa trắng $\\text{BaSO}_4$, không có khí."
    },
    {
      id: 12,
      topic: "Nitric acid",
      question: "Tính chất hóa học cơ bản của nitric acid là",
      options: {
        A: "Tính acid yếu và tính khử mạnh.",
        B: "Tính acid mạnh và tính khử mạnh.",
        C: "Tính acid yếu và tính oxi hóa mạnh.",
        D: "Tính acid mạnh và tính oxi hóa mạnh."
      },
      correct: "D",
      explanation: "Nitric acid ($\\text{HNO}_3$) là một trong các acid vô cơ mạnh nhất (phân li hoàn toàn trong nước) và có tính oxi hóa rất mạnh do N có số oxi hóa cao nhất là $+5$."
    },
    {
      id: 13,
      topic: "Nitric acid",
      question: "Kim loại nào thụ động hóa trong dung dịch $\\text{HNO}_3$ đặc nguội?",
      options: {
        A: "Mg, Al, Fe.",
        B: "Al, Cu, Zn.",
        C: "Al, Fe, Cr.",
        D: "Fe, Al, Ag."
      },
      correct: "C",
      explanation: "Nhôm (Al), sắt (Fe) và chromium (Cr) bị thụ động hóa (tạo màng oxide bảo vệ trơ) trong dung dịch $\\text{HNO}_3$ đặc nguội và $\\text{H}_2\\text{SO}_4$ đặc nguội."
    },
    {
      id: 14,
      topic: "Nguyên tố Sulfur",
      question: "Nguyên tố sulfur có số hiệu nguyên tử là 16. Vị trí của sulfur trong bảng tuần hoàn các nguyên tố hóa học là",
      options: {
        A: "Chu kì 3, nhóm VIA.",
        B: "Chu kì 5, nhóm VIA.",
        C: "Chu kì 3, nhóm IVA.",
        D: "Chu kì 5, nhóm IVA."
      },
      correct: "A",
      explanation: "Sulfur ($Z=16$): cấu hình electron là $1s^2 2s^2 2p^6 3s^2 3p^4$. Có 3 lớp electron nên thuộc chu kì 3; có 6 electron lớp ngoài cùng (phân nhóm chính) nên thuộc nhóm VIA."
    },
    {
      id: 15,
      topic: "Nguyên tố Sulfur",
      question: "Tính chất vật lí nào sau đây không phải của sulfur?",
      options: {
        A: "Là chất rắn màu vàng, không tan trong nước.",
        B: "Tinh thể sulfur gồm 8 nguyên tử liên kết với nhau tạo thành mạch vòng $\\text{S}_8$.",
        C: "Có nhiệt độ nóng chảy thấp hơn nhiệt độ sôi của nước.",
        D: "Tan nhiều trong benzene, carbon disulfide."
      },
      correct: "C",
      explanation: "Nhiệt độ nóng chảy của sulfur nằm trong khoảng $113^\\circ\\text{C} - 119^\\circ\\text{C}$, cao hơn nhiệt độ sôi của nước ($100^\\circ\\text{C}$), do đó phát biểu C là không đúng."
    },
    {
      id: 16,
      topic: "Nguyên tố Sulfur",
      question: "Các số oxi hoá có thể có của sulfur trong hợp chất là",
      options: {
        A: "-2, 0, +2, +6.",
        B: "0, +2, +4, +6.",
        C: "-2, 0, +4, +6.",
        D: "-2, 0, +3, +6."
      },
      correct: "C",
      explanation: "Các số oxi hóa phổ biến và bền của sulfur là $-2$ (trong muối sulfide, $\\text{H}_2\\text{S}$), $0$ (đơn chất), $+4$ (trong $\\text{SO}_2$, muối sulfite), $+6$ (trong $\\text{SO}_3$, $\\text{H}_2\\text{SO}_4$, muối sulfate)."
    },
    {
      id: 17,
      topic: "Đơn chất Sulfur",
      question: "Câu nào sau đây diễn tả đúng tính chất hóa học của sulfur?",
      options: {
        A: "Sulfur có cả tính oxi hóa và tính khử.",
        B: "Sulfur chỉ có tính khử.",
        C: "Sulfur không có tính oxi hóa và tính khử.",
        D: "Sulfur chỉ có tính oxi hóa."
      },
      correct: "A",
      explanation: "Đơn chất sulfur có số oxi hóa trung gian là $0$, có thể giảm xuống $-2$ (thể hiện tính oxi hóa khi tác dụng với kim loại, $\\text{H}_2$) hoặc tăng lên $+4, +6$ (thể hiện tính khử khi tác dụng với $\\text{O}_2, \\text{F}_2, \\text{HNO}_3$)."
    },
    {
      id: 18,
      topic: "Đơn chất Sulfur",
      question: "Hơi thủy ngân (mercury) rất độc, bởi vậy khi làm vỡ nhiệt kế thủy ngân thì chất bột được dùng để rắc lên thủy ngân rồi gom lại là",
      options: {
        A: "Vôi sống.",
        B: "Cát.",
        C: "Muối ăn.",
        D: "Sulfur."
      },
      correct: "D",
      explanation: "Sulfur phản ứng êm dịu với thủy ngân lỏng ngay ở nhiệt độ thường tạo thành chất rắn $\\text{HgS}$ không bay hơi và không độc: $\\text{Hg} + \\text{S} \\rightarrow \\text{HgS}$."
    },
    {
      id: 19,
      topic: "Đơn chất Sulfur",
      question: "Sulfur có khả năng phản ứng với kim loại nào ở nhiệt độ thường?",
      options: {
        A: "Na.",
        B: "Hg.",
        C: "Fe.",
        D: "Mg."
      },
      correct: "B",
      explanation: "Thủy ngân (Hg) phản ứng với bột sulfur ngay ở nhiệt độ phòng tạo thành HgS."
    },
    {
      id: 20,
      topic: "Sulfur Dioxide",
      question: "Chất được dùng để tẩy trắng giấy và bột giấy trong công nghiệp là",
      options: {
        A: "$\\text{CO}_2$.",
        B: "$\\text{SO}_2$.",
        C: "$\\text{N}_2\\text{O}$.",
        D: "$\\text{NO}_2$."
      },
      correct: "B",
      explanation: "$\\text{SO}_2$ (sulfur dioxide) có tính tẩy màu do tính khử/oxi hóa đặc trưng, được dùng nhiều trong tẩy trắng bột giấy, sợi dệt và đường tinh luyện."
    },
    {
      id: 21,
      topic: "Mưa Acid",
      question: "Ô nhiễm không khí có thể tạo ra mưa acid, gây ra tác hại rất lớn với môi trường. Hai khí nào sau đây đều là nguyên nhân gây ra mưa acid?",
      options: {
        A: "$\\text{H}_2\\text{S}$ và $\\text{N}_2$.",
        B: "$\\text{CO}_2$ và $\\text{O}_2$.",
        C: "$\\text{SO}_2$ và $\\text{NO}_2$.",
        D: "$\\text{NH}_3$ và $\\text{HCl}$."
      },
      correct: "C",
      explanation: "Hai tác nhân chính gây ra mưa acid là $\\text{SO}_2$ và các nitrogen oxide ($\\text{NO}_x$, chủ yếu $\\text{NO}_2$). Chúng hòa tan trong nước mưa tạo thành acid $\\text{H}_2\\text{SO}_4$ và $\\text{HNO}_3$."
    },
    {
      id: 22,
      topic: "Sulfur Dioxide",
      question: "Chỉ dùng một thuốc thử nào sau đây để phân biệt các lọ đựng riêng biệt $\\text{SO}_2$ và $\\text{CO}_2$?",
      options: {
        A: "Dung dịch $\\text{Ba(OH)}_2$.",
        B: "Dung dịch $\\text{NaOH}$.",
        C: "Dung dịch $\\text{Br}_2$.",
        D: "Dung dịch $\\text{Ca(OH)}_2$."
      },
      correct: "C",
      explanation: "Khí $\\text{SO}_2$ làm mất màu nâu đỏ của dung dịch nước bromine do phản ứng: $\\text{SO}_2 + \\text{Br}_2 + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{HBr} + \\text{H}_2\\text{SO}_4$. Còn $\\text{CO}_2$ không làm mất màu nước bromine."
    },
    {
      id: 23,
      topic: "Sulfuric acid",
      question: "Khi pha loãng dung dịch sulfuric acid cần tuân thủ thao tác nào sau đây để đảm bảo an toàn?",
      options: {
        A: "Rót từ từ acid vào nước.",
        B: "Rót từ từ nước vào acid.",
        C: "Rót nhanh acid vào nước.",
        D: "Rót nhanh nước vào acid."
      },
      correct: "A",
      explanation: "Acid sulfuric đặc tan vô cùng tỏa nhiệt và nặng hơn nước. Phải rót từ từ acid vào nước và khuấy nhẹ bằng đũa thủy tinh, tuyệt đối không được rót nước vào acid đặc vì nước sôi đột ngột sẽ làm bắn acid gây bỏng nặng."
    },
    {
      id: 24,
      topic: "Sulfuric acid",
      question: "Rót vào cốc chứa đường saccarose khoảng 10 đến 15 ml dung dịch $\\text{H}_2\\text{SO}_4$ đặc. Hiện tượng quan sát được là",
      options: {
        A: "Đường tan trong acid tạo thành dung dịch trong suốt.",
        B: "Đường bị hóa than màu nâu đỏ, trên bề mặt than có sủi bọt khí.",
        C: "Đường tan trong acid tạo dung dịch có màu xanh.",
        D: "Đường bị hóa than màu đen, khối than dâng lên miệng cốc và có sủi bọt khí."
      },
      correct: "D",
      explanation: "$\\text{H}_2\\text{SO}_4$ đặc có tính háo nước cực mạnh, hút nước từ saccarose biến thành than carbon đen: $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11} \\xrightarrow{\\text{H}_2\\text{SO}_4\\text{ đ}} 12\\text{C} + 11\\text{H}_2\\text{O}$. Sau đó một phần C bị oxi hóa sinh ra $\\text{CO}_2, \\text{SO}_2$ đẩy khối than dâng cao xốp sủi bọt."
    },
    {
      id: 25,
      topic: "Sulfuric acid",
      question: "Tính chất hóa học chung của sulfuric acid là",
      options: {
        A: "Tính acid mạnh và tính khử mạnh.",
        B: "Tính acid mạnh và tính oxi hóa mạnh.",
        C: "Tính acid yếu và tính khử mạnh.",
        D: "Tính acid yếu và tính oxi hóa mạnh."
      },
      correct: "B",
      explanation: "Sulfuric acid thể hiện tính acid mạnh khi ở dạng loãng và tính oxi hóa mạnh khi ở dạng đặc nóng."
    },
    {
      id: 26,
      topic: "Sulfuric acid loãng",
      question: "Dãy kim loại phản ứng được với dung dịch $\\text{H}_2\\text{SO}_4$ loãng là",
      options: {
        A: "Ag, Ba, Fe.",
        B: "Mg, Al, Fe.",
        C: "Cu, Zn, Na.",
        D: "Au, Pt, Al."
      },
      correct: "B",
      explanation: "Chỉ các kim loại đứng trước hydrogen trong dãy hoạt động hóa học mới tác dụng được với $\\text{H}_2\\text{SO}_4$ loãng giải phóng $\\text{H}_2$. Dãy Mg, Al, Fe đều đứng trước H."
    },
    {
      id: 27,
      topic: "Sulfuric acid đặc",
      question: "Kim loại không phản ứng được với acid $\\text{H}_2\\text{SO}_4$ đặc, nguội là",
      options: {
        A: "Ag.",
        B: "Al.",
        C: "Mg.",
        D: "Cu."
      },
      correct: "B",
      explanation: "Nhôm (Al), sắt (Fe), chromium (Cr) bị thụ động hóa trong $\\text{H}_2\\text{SO}_4$ đặc nguội nên không phản ứng."
    },
    {
      id: 28,
      topic: "Sulfuric acid loãng",
      question: "Cho dãy các kim loại: Na, Mg, Fe, Zn, Cu, Ag. Số kim loại tác dụng với dung dịch $\\text{H}_2\\text{SO}_4$ loãng là",
      options: {
        A: "4.",
        B: "5.",
        C: "2.",
        D: "3."
      },
      correct: "A",
      explanation: "Các kim loại đứng trước H phản ứng với $\\text{H}_2\\text{SO}_4$ loãng gồm: Na, Mg, Fe, Zn (tổng cộng 4 kim loại). Cu và Ag đứng sau H nên không phản ứng."
    },
    {
      id: 29,
      topic: "Sulfuric acid loãng",
      question: "Sulfuric acid loãng tác dụng với Fe tạo thành sản phẩm",
      options: {
        A: "$\\text{Fe}_2(\\text{SO}_4)_3$ và $\\text{H}_2$.",
        B: "$\\text{FeSO}_4$ và $\\text{H}_2$.",
        C: "$\\text{FeSO}_4$ và $\\text{SO}_2$.",
        D: "$\\text{Fe}_2(\\text{SO}_4)_3$, $\\text{SO}_2$, $\\text{H}_2\\text{O}$."
      },
      correct: "B",
      explanation: "Fe tác dụng với $\\text{H}_2\\text{SO}_4$ loãng chỉ bị oxi hóa lên sắt(II): $\\text{Fe} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{FeSO}_4 + \\text{H}_2\\uparrow$."
    },
    {
      id: 30,
      topic: "Sulfuric acid",
      question: "Kết luận nào không đúng khi nói về $\\text{H}_2\\text{SO}_4$?",
      options: {
        A: "$\\text{H}_2\\text{SO}_4$ loãng có đầy đủ tính chất chung của acid.",
        B: "Khi tiếp xúc với $\\text{H}_2\\text{SO}_4$ đặc dễ gây bỏng nặng.",
        C: "Khi pha loãng sulfuric acid, cho từ từ nước vào acid.",
        D: "$\\text{H}_2\\text{SO}_4$ đặc là chất hút nước mạnh."
      },
      correct: "C",
      explanation: "Quy tắc an toàn pha loãng acid: tuyệt đối không được cho nước vào acid đặc, mà phải rót từ từ acid vào nước."
    },
    {
      id: 31,
      topic: "Nhận biết Sulfate",
      question: "Cho dãy các chất: NaOH, NaCl, $\\text{NaNO}_3$, $\\text{Na}_2\\text{SO}_4$. Chất trong dãy phản ứng được với dung dịch $\\text{BaCl}_2$ là",
      options: {
        A: "NaOH.",
        B: "NaCl.",
        C: "$\\text{Na}_2\\text{SO}_4$.",
        D: "$\\text{NaNO}_3$."
      },
      correct: "C",
      explanation: "$\\text{BaCl}_2 + \\text{Na}_2\\text{SO}_4 \\rightarrow \\text{BaSO}_4\\downarrow + 2\\text{NaCl}$. Kết tủa $\\text{BaSO}_4$ màu trắng không tan trong acid."
    },
    {
      id: 32,
      topic: "Nhận biết Sulfate",
      question: "Cho vài giọt dung dịch $\\text{BaCl}_2$ vào dung dịch nào sau đây sẽ tạo kết tủa trắng?",
      options: {
        A: "KCl.",
        B: "$\\text{K}_2\\text{SO}_4$.",
        C: "$\\text{KNO}_3$.",
        D: "KOH."
      },
      correct: "B",
      explanation: "$\\text{Ba}^{2+} + \\text{SO}_4^{2-} \\rightarrow \\text{BaSO}_4\\downarrow$ (kết tủa trắng bền)."
    },
    {
      id: 33,
      topic: "Nhận biết Sulfate",
      question: "Nhận biết dung dịch muối sulfate ($\\text{SO}_4^{2-}$) dùng thuốc thử nào sau đây?",
      options: {
        A: "$\\text{Ba(OH)}_2$.",
        B: "Quỳ tím.",
        C: "Na.",
        D: "HCl."
      },
      correct: "A",
      explanation: "Dùng thuốc thử chứa ion $\\text{Ba}^{2+}$ (như $\\text{BaCl}_2, \\text{Ba(OH)}_2, \\text{Ba(NO}_3)_2$) vì tạo kết tủa trắng $\\text{BaSO}_4$ đặc trưng không tan trong acid mạnh."
    },
    {
      id: 34,
      topic: "Nhận biết Sulfate",
      question: "Để phân biệt dung dịch $\\text{Na}_2\\text{SO}_4$ với dung dịch NaCl, người ta dùng dung dịch",
      options: {
        A: "$\\text{KNO}_3$.",
        B: "NaOH.",
        C: "HCl.",
        D: "$\\text{BaCl}_2$."
      },
      correct: "D",
      explanation: "$\\text{BaCl}_2$ cho kết tủa trắng với $\\text{Na}_2\\text{SO}_4$, không có hiện tượng với NaCl."
    },
    {
      id: 35,
      topic: "Nhận biết dung dịch",
      question: "Có 4 dung dịch đựng trong 4 lọ mất nhãn: HCl, $\\text{Na}_2\\text{SO}_4$, NaCl, $\\text{Ba(OH)}_2$, chỉ dùng một thuốc thử có thể nhận biết được tất cả các chất trên là",
      options: {
        A: "Quỳ tím.",
        B: "$\\text{H}_2\\text{SO}_4$.",
        C: "$\\text{BaCl}_2$.",
        D: "$\\text{AgNO}_3$."
      },
      correct: "A",
      explanation: "Dùng quỳ tím:\n- HCl làm quỳ hóa đỏ.\n- $\\text{Ba(OH)}_2$ làm quỳ hóa xanh.\n- $\\text{Na}_2\\text{SO}_4$ và NaCl không đổi màu quỳ.\nLấy $\\text{Ba(OH)}_2$ vừa nhận biết nhỏ vào 2 dung dịch chưa biết: $\\text{Na}_2\\text{SO}_4$ xuất hiện kết tủa trắng $\\text{BaSO}_4$, NaCl không hiện tượng."
    },
    {
      id: 36,
      topic: "Đại cương Hóa học hữu cơ",
      question: "Hợp chất hữu cơ nhất thiết phải chứa nguyên tố",
      options: {
        A: "Hydrogen.",
        B: "Carbon.",
        C: "Oxygen.",
        D: "Nitrogen."
      },
      correct: "B",
      explanation: "Hợp chất hữu cơ là hợp chất của carbon (trừ CO, $\\text{CO}_2$, muối carbonate, cyanide, carbide,...), do đó nhất thiết phải chứa nguyên tố carbon."
    },
    {
      id: 37,
      topic: "Đại cương Hóa học hữu cơ",
      question: "Hóa học hữu cơ là ngành hóa học chuyên nghiên cứu",
      options: {
        A: "Các hợp chất của carbon.",
        B: "Các hợp chất của carbon trừ (CO, $\\text{CO}_2$).",
        C: "Các hợp chất của carbon trừ (CO, $\\text{CO}_2$, muối carbonate, cyanide, carbide,…).",
        D: "Các hợp chất chỉ có trong cơ thể sống."
      },
      correct: "C",
      explanation: "Theo định nghĩa SGK: Hóa học hữu cơ là ngành chuyên nghiên cứu các hợp chất của carbon trừ các chất vô cơ đơn giản như oxide của carbon, acid carbonic và muối carbonate, cyanide, carbide,..."
    },
    {
      id: 38,
      topic: "Phân loại Hợp chất hữu cơ",
      question: "Chất nào sau đây không phải là chất hữu cơ?",
      options: {
        A: "$\\text{C}_2\\text{H}_5\\text{OH}$.",
        B: "$\\text{C}_2\\text{H}_4$.",
        C: "$\\text{C}_2\\text{H}_2$.",
        D: "$\\text{CO}_2$."
      },
      correct: "D",
      explanation: "$\\text{CO}_2$ (carbon dioxide) là hợp chất vô cơ."
    },
    {
      id: 39,
      topic: "Phân loại Hợp chất hữu cơ",
      question: "Chất nào sau đây là chất hữu cơ?",
      options: {
        A: "$\\text{CaC}_2$.",
        B: "$\\text{NaHCO}_3$.",
        C: "$\\text{CH}_3\\text{COONa}$.",
        D: "$\\text{Al}_4\\text{C}_3$."
      },
      correct: "C",
      explanation: "$\\text{CH}_3\\text{COONa}$ (sodium acetate) là muối hữu cơ. Các chất $\\text{CaC}_2, \\text{Al}_4\\text{C}_3$ (carbide) và $\\text{NaHCO}_3$ (bicarbonate) là hợp chất vô cơ."
    },
    {
      id: 40,
      topic: "Phân loại Hợp chất hữu cơ",
      question: "Chất nào sau đây là hydrocarbon?",
      options: {
        A: "$\\text{C}_2\\text{H}_5\\text{NH}_2$.",
        B: "$\\text{CH}_3\\text{COOH}$.",
        C: "$\\text{C}_2\\text{H}_5\\text{OH}$.",
        D: "$\\text{C}_2\\text{H}_6$."
      },
      correct: "D",
      explanation: "Hydrocarbon là hợp chất chỉ tạo bởi 2 nguyên tố carbon và hydrogen. $\\text{C}_2\\text{H}_6$ (ethane) là hydrocarbon."
    },
    {
      id: 41,
      topic: "Phân loại Hợp chất hữu cơ",
      question: "Chất nào sau đây là dẫn xuất của hydrocarbon?",
      options: {
        A: "$\\text{CaC}_2$.",
        B: "$\\text{C}_6\\text{H}_6$.",
        C: "$\\text{C}_2\\text{H}_5\\text{Cl}$.",
        D: "$\\text{CH}_4$."
      },
      correct: "C",
      explanation: "$\\text{C}_2\\text{H}_5\\text{Cl}$ (ethyl chloride) là dẫn xuất halogen của hydrocarbon."
    },
    {
      id: 42,
      topic: "Liên kết trong HCHC",
      question: "Liên kết hóa học trong phân tử hợp chất hữu cơ chủ yếu là loại liên kết nào sau đây?",
      options: {
        A: "Liên kết ion.",
        B: "Liên kết cộng hóa trị.",
        C: "Liên kết cho nhận.",
        D: "Liên kết hydrogen."
      },
      correct: "B",
      explanation: "Liên kết giữa các nguyên tử trong phân tử chất hữu cơ chủ yếu là liên kết cộng hóa trị (phân cực hoặc không phân cực)."
    },
    {
      id: 43,
      topic: "Tính chất chung HCHC",
      question: "Nhận xét nào đúng khi nói về tính chất cơ bản của các chất hữu cơ so với các hợp chất vô cơ?",
      options: {
        A: "Độ tan trong nước lớn hơn.",
        B: "Độ bền nhiệt cao hơn.",
        C: "Tốc độ phản ứng nhanh hơn.",
        D: "Nhiệt độ nóng chảy, nhiệt độ sôi thấp hơn."
      },
      correct: "D",
      explanation: "Do liên kết giữa các phân tử hữu cơ là tương tác van der Waals yếu, nên đa số hợp chất hữu cơ có nhiệt độ nóng chảy và nhiệt độ sôi thấp hơn nhiều so với hợp chất vô cơ ion."
    },
    {
      id: 44,
      topic: "Phổ hồng ngoại (IR)",
      image: "assets/chem_img_1.jpeg",
      question: "Cho phổ hồng ngoại của chất X như hình dưới đây:\n\nPhân tử chất X có chứa nhóm chức nào?",
      options: {
        A: "Aldehyde.",
        B: "Carboxylic acid.",
        C: "Alcohol.",
        D: "Amine."
      },
      correct: "C",
      explanation: "Trên phổ hồng ngoại của chất X có một tín hiệu hấp thụ rất mạnh và chân rộng ở vùng $3200 - 3600\\text{ cm}^{-1}$ đặc trưng cho dao động hóa trị của liên kết $\\text{O}-\\text{H}$ của alcohol (nhóm chức Alcohol)."
    },
    {
      id: 45,
      topic: "Tách & Tinh chế",
      question: "Để tách dầu ăn ra khỏi hỗn hợp gồm dầu ăn và nước, có thể sử dụng phương pháp",
      options: {
        A: "Sắc kí.",
        B: "Chưng cất.",
        C: "Bay hơi.",
        D: "Chiết."
      },
      correct: "D",
      explanation: "Dầu ăn không tan trong nước và nhẹ hơn nước nên tạo thành hỗn hợp hai lớp chất lỏng phân lớp. Dùng phễu chiết để tách riêng nước ở lớp dưới và dầu ăn ở lớp trên."
    },
    {
      id: 46,
      topic: "Phương pháp Chưng cất",
      question: "Nước và rượu dễ dàng được tách ra khỏi hỗn hợp rượu và nước bằng cách chưng cất vì chúng có",
      options: {
        A: "Mật độ khác nhau.",
        B: "Điểm nóng chảy khác nhau.",
        C: "Nhiệt độ sôi khác nhau.",
        D: "Màu sắc khác nhau."
      },
      correct: "C",
      explanation: "Phương pháp chưng cất dựa trên nguyên tắc các chất lỏng trong hỗn hợp có nhiệt độ sôi khác nhau đáng kể (ethanol sôi ở $78.3^\\circ\\text{C}$, nước sôi ở $100^\\circ\\text{C}$)."
    },
    {
      id: 47,
      topic: "Sắc kí cột",
      question: "Hợp chất nào sau đây được sử dụng làm chất rắn trong pha tĩnh của phương pháp sắc kí cột?",
      options: {
        A: "Silicagel.",
        B: "Sodium oxide.",
        C: "Magnesium oxide.",
        D: "Barium oxide."
      },
      correct: "A",
      explanation: "Pha tĩnh trong sắc kí cột thường là các chất rắn có diện tích bề mặt lớn, khả năng hấp phụ tốt như silicagel ($\text{SiO}_2 \\cdot x\\text{H}_2\\text{O}$) hoặc alumina ($\text{Al}_2\\text{O}_3$)."
    },
    {
      id: 48,
      topic: "Sắc kí cột",
      question: "Phương pháp nào dưới đây được dùng để tách các hợp chất hữu cơ có hàm lượng nhỏ, khó tách ra khỏi nhau?",
      options: {
        A: "Phương pháp chưng cất.",
        B: "Phương pháp chiết.",
        C: "Phương pháp kết tinh.",
        D: "Sắc kí cột."
      },
      correct: "D",
      explanation: "Sắc kí cột là phương pháp cực kì hiệu quả dùng để tách, tinh chế các chất hữu cơ có hàm lượng rất nhỏ, tính chất gần giống nhau mà các phương pháp khác không tách được."
    },
    {
      id: 49,
      topic: "Sắc kí cột",
      question: "Trong phương pháp sắc kí cột, chất hấp phụ còn được gọi là",
      options: {
        A: "Pha hấp phụ.",
        B: "Pha bị hấp phụ.",
        C: "Pha tĩnh.",
        D: "Pha động."
      },
      correct: "C",
      explanation: "Chất hấp phụ dạng hạt rắn nhồi cố định trong cột sắc kí được gọi là pha tĩnh (stationary phase); dung môi chạy qua cột gọi là pha động."
    },
    {
      id: 50,
      topic: "Chưng cất lôi cuốn hơi nước",
      question: "Để chiết xuất tinh dầu sả, tiến hành phương pháp chưng cất lôi cuốn hơi nước, sau đó tiến hành ngưng tụ sẽ thu được",
      options: {
        A: "Tinh dầu sả nguyên chất.",
        B: "Hỗn hợp đồng nhất là tinh dầu sả hoà tan trong nước.",
        C: "Hỗn hợp 2 lớp: lớp phía trên là tinh dầu sả, lớp phía dưới là nước.",
        D: "Hỗn hợp 2 lớp: lớp phía trên là nước, lớp phía dưới là tinh dầu sả."
      },
      correct: "C",
      explanation: "Tinh dầu sả bay hơi cùng hơi nước, khi ngưng tụ sẽ tạo thành hỗn hợp không đồng nhất gồm 2 lớp chất lỏng. Do tinh dầu sả nhẹ hơn nước và không tan trong nước nên nó nổi lên tạo lớp phía trên, nước ở lớp dưới."
    }
  ],

  // ==================== PHẦN II: 10 CÂU ĐÚNG / SAI ====================
  part2: [
    {
      id: 1,
      topic: "Cấu tạo Nitric acid",
      image: "assets/chem_img_2.jpeg",
      context: "Cho các nhận định sau về cấu tạo phân tử nitric acid ($\\text{HNO}_3$):",
      subQuestions: {
        a: {
          text: "Liên kết O – H phân cực về oxygen.",
          correct: true,
          explanation: "Độ âm điện của O ($3.44$) lớn hơn H ($2.20$), nên cặp electron dùng chung lệch về phía nguyên tử oxygen."
        },
        b: {
          text: "Nguyên tử N có số oxi hóa là +5.",
          correct: true,
          explanation: "Trong $\\text{HNO}_3$, số oxi hóa của H là $+1$, O là $-2$, nên số oxi hóa của N là $+5$."
        },
        c: {
          text: "Nguyên tử N có hóa trị bằng 5.",
          correct: false,
          explanation: "N ở chu kì 2 không có phân lớp d nên hóa trị tối đa chỉ là IV (gồm 3 liên kết cộng hóa trị thông thường và 1 liên kết cho nhận)."
        },
        d: {
          text: "Liên kết cho – nhận N→O kém bền.",
          correct: false,
          explanation: "Liên kết cho - nhận trong phân tử nitric acid có độ dài và năng lượng tương đương liên kết cộng hóa trị bình thường, không phải kém bền."
        }
      }
    },
    {
      id: 2,
      topic: "Tính tan của Ammonia",
      image: "assets/chem_img_3.jpeg",
      context: "Tiến hành thí nghiệm thử tính tan của ammonia như hình vẽ:",
      subQuestions: {
        a: {
          text: "Thí nghiệm trên chứng tỏ $\\text{NH}_3$ tan nhiều trong nước.",
          correct: true,
          explanation: "Ammonia tan cực nhiều trong nước (ở $20^\\circ\\text{C}$, 1 lít nước hòa tan khoảng 700 lít khí $\\text{NH}_3$)."
        },
        b: {
          text: "Thí nghiệm trên chứng tỏ $\\text{NH}_3$ có tính base.",
          correct: true,
          explanation: "Dung dịch $\\text{NH}_3$ trong nước có tính base yếu làm phenolphtalein chuyển sang màu hồng (hoặc quỳ tím chuyển xanh)."
        },
        c: {
          text: "Nước phun vào bình do $\\text{NH}_3$ tan mạnh trong nước làm tăng áp suất trong bình.",
          correct: false,
          explanation: "Do $\\text{NH}_3$ tan mạnh làm giảm áp suất trong bình kín so với áp suất khí quyển, nên nước bị hút phun mạnh vào bình tạo đài phun nước."
        },
        d: {
          text: "Nước ở trong bình chuyển từ không màu sang màu xanh.",
          correct: false,
          explanation: "Thí nghiệm sử dụng dung dịch phenolphthalein, nên nước phun vào chuyển thành màu hồng (chỉ chuyển màu xanh nếu dùng quỳ tím)."
        }
      }
    },
    {
      id: 3,
      topic: "Muối Ammonium",
      context: "Muối ammonium có nhiều ứng dụng như làm phân bón hóa học, chất phụ gia thực phẩm. Một số muối ammonium phổ biến như $\\text{NH}_4\\text{NO}_3$, $(\\text{NH}_4)_2\\text{SO}_4$, $\\text{NH}_4\\text{Cl}$, $(\\text{NH}_4)_2\\text{CO}_3$ ….",
      subQuestions: {
        a: {
          text: "Các muối ammonium tan trong nước tạo dung dịch chất điện li mạnh.",
          correct: true,
          explanation: "Tất cả các muối ammonium đều tan tốt trong nước và phân li hoàn toàn thành ion: $\\text{NH}_4\\text{X} \\rightarrow \\text{NH}_4^+ + \\text{X}^-$."
        },
        b: {
          text: "Nhận biết sự có mặt của ion $\\text{NH}_4^+$ có thể dùng một trong các hóa chất như NaOH, NaCl.",
          correct: false,
          explanation: "Chỉ dùng dung dịch kiềm (như NaOH), không thể dùng NaCl vì không có phản ứng và không có hiện tượng."
        },
        c: {
          text: "Các muối ammonium tác dụng với dung dịch base thu được khí có mùi khai là $\\text{NH}_3$.",
          correct: true,
          explanation: "Ion $\\text{NH}_4^+$ tác dụng với $\\text{OH}^-$ sinh ra khí $\\text{NH}_3$ có mùi khai đặc trưng."
        },
        d: {
          text: "Hầu hết muối ammonium đều bền với nhiệt.",
          correct: false,
          explanation: "Tất cả các muối ammonium đều kém bền với nhiệt và dễ bị nhiệt phân khi đun nóng."
        }
      }
    },
    {
      id: 4,
      topic: "Đồng vị của Sulfur",
      image: "assets/chem_img_4.jpeg",
      context: "Sulfur (lưu huỳnh) là nguyên tố phổ biến thứ 17 trên vỏ Trái Đất. Kí hiệu hoá học của đồng vị phổ biến nhất của sulfur là $^{32}_{16}\\text{S}$. Xác định tính đúng/sai của các phát biểu sau:",
      subQuestions: {
        a: {
          text: "Nguyên tử sulfur có 16 neutron trong hạt nhân nguyên tử.",
          correct: true,
          explanation: "Số neutron $N = A - Z = 32 - 16 = 16$."
        },
        b: {
          text: "Ở trạng thái cơ bản nguyên tử sulfur không có electron độc thân.",
          correct: false,
          explanation: "Cấu hình phân lớp ngoài cùng của S là $3s^2 3p^4$, theo quy tắc Hund có 2 electron độc thân ở phân lớp 3p."
        },
        c: {
          text: "Sulfur có số oxi hoá cao nhất +6, thấp nhất là -2 trong hợp chất.",
          correct: true,
          explanation: "Sulfur thuộc nhóm VIA nên số oxi hóa cao nhất là $+6$, thấp nhất là $6 - 8 = -2$."
        },
        d: {
          text: "Đơn chất sulfur thể hiện được cả tính oxi hoá và tính khử.",
          correct: true,
          explanation: "Sulfur đơn chất có số oxi hóa $0$, có thể giảm xuống $-2$ (tính oxi hóa) hoặc tăng lên $+4, +6$ (tính khử)."
        }
      }
    },
    {
      id: 5,
      topic: "Sulfuric acid",
      image: "assets/chem_img_5.jpeg",
      context: "Sulfuric acid là một acid có nhiều ứng dụng như sản xuất phân bón, chất tẩy rửa, sơn, phẩm màu,… Công thức cấu tạo của sulfuric acid như hình vẽ:",
      subQuestions: {
        a: {
          text: "Công thức phân tử của sulfuric acid là $\\text{H}_2\\text{SO}_4$.",
          correct: true,
          explanation: "Đúng theo công thức phân tử chuẩn của acid sulfuric."
        },
        b: {
          text: "Sulfuric acid là chất điện li mạnh.",
          correct: true,
          explanation: "Nấc thứ nhất của $\\text{H}_2\\text{SO}_4$ phân li hoàn toàn trong nước: $\\text{H}_2\\text{SO}_4 \\rightarrow \\text{H}^+ + \\text{HSO}_4^-$."
        },
        c: {
          text: "Sulfuric acid có khả năng hút ẩm nên được dùng làm khô hoá chất trong các bình hút ẩm.",
          correct: true,
          explanation: "Acid sulfuric đặc có tính háo nước mạnh nên thường được dùng làm chất làm khô các chất khí không tác dụng với nó."
        },
        d: {
          text: "Khi pha loãng sulfuric acid cần cho từ từ nước vào acid đặc.",
          correct: false,
          explanation: "Phải rót từ từ acid vào nước, tuyệt đối không được rót nước vào acid đặc vì sẽ gây sôi bắn acid nguy hiểm."
        }
      }
    },
    {
      id: 6,
      topic: "Đặc điểm Hợp chất hữu cơ (1)",
      context: "Có hơn 20 triệu hợp chất hữu cơ khác nhau, các hợp chất này thường có một số đặc điểm chung. Xác định tính đúng/sai của các phát biểu sau:",
      subQuestions: {
        a: {
          text: "Liên kết chủ yếu trong hợp chất hữu cơ là liên kết ion.",
          correct: false,
          explanation: "Liên kết chủ yếu trong phân tử hợp chất hữu cơ là liên kết cộng hóa trị."
        },
        b: {
          text: "Các hợp chất hữu cơ thường có nhiệt độ nóng chảy và nhiệt độ sôi thấp.",
          correct: true,
          explanation: "Do liên kết giữa các phân tử hữu cơ là lực liên kết yếu nên chúng có nhiệt độ nóng chảy và sôi tương đối thấp."
        },
        c: {
          text: "Các hợp chất hữu cơ thường tan tốt trong nước.",
          correct: false,
          explanation: "Đa số các chất hữu cơ không phân cực hoặc ít phân cực nên không tan hoặc ít tan trong nước, tan tốt trong dung môi hữu cơ."
        },
        d: {
          text: "Phản ứng hữu cơ thường xảy ra nhanh nên sẽ theo nhiều hướng khác nhau.",
          correct: false,
          explanation: "Phản ứng của các chất hữu cơ thường xảy ra chậm, không hoàn toàn, cần nhiệt độ và xúc tác, và sinh ra hỗn hợp nhiều sản phẩm phụ."
        }
      }
    },
    {
      id: 7,
      topic: "Đặc điểm Hợp chất hữu cơ (2)",
      context: "Phát biểu sau đây về đặc điểm chung của hợp chất hữu cơ là đúng hay sai?",
      subQuestions: {
        a: {
          text: "Hợp chất hữu cơ nhất thiết phải chứa nguyên tố carbon và hydrogen.",
          correct: false,
          explanation: "Chỉ nhất thiết phải chứa nguyên tố carbon. Nhiều chất hữu cơ không có hydrogen, ví dụ $\\text{CCl}_4, \\text{CF}_4, \\text{C}_6\\text{Cl}_6$."
        },
        b: {
          text: "Nguyên tử carbon có khả năng liên kết với nhau tạo thành mạch carbon.",
          correct: true,
          explanation: "Carbon có hóa trị IV và có khả năng đặc biệt tự liên kết tạo thành mạch thẳng, mạch nhánh hoặc mạch vòng."
        },
        c: {
          text: "Hợp chất hữu cơ thường có nhiệt độ nóng chảy và nhiệt độ sôi cao.",
          correct: false,
          explanation: "Hợp chất hữu cơ thường có nhiệt độ nóng chảy và nhiệt độ sôi thấp."
        },
        d: {
          text: "Các hợp chất hữu cơ thường dễ cháy nhưng bền với nhiệt.",
          correct: false,
          explanation: "Các hợp chất hữu cơ dễ cháy và kém bền với nhiệt (dễ bị nhiệt phân hủy, hóa than)."
        }
      }
    },
    {
      id: 8,
      topic: "Cấu tạo Hợp chất hữu cơ X",
      image: "assets/chem_img_6.jpeg",
      context: "Từ một loài dương xỉ phổ biến thuộc họ Gleicheniaceae, nhóm nghiên cứu đã phân lập được hợp chất X có công thức cấu tạo như hình. Phát biểu sau đây đúng hay sai?",
      subQuestions: {
        a: {
          text: "Hợp chất X có chứa 4 nhóm -OH.",
          correct: true,
          explanation: "Quan sát công thức cấu tạo của hợp chất X có 4 nhóm hydroxy (-OH) đính vào khung phân tử."
        },
        b: {
          text: "Hợp chất X có chứa nhóm chức ether.",
          correct: true,
          explanation: "Trong cấu trúc có chứa liên kết ether C-O-C tạo cầu trong phân tử."
        },
        c: {
          text: "Hợp chất X có chứa nhóm chức ketone.",
          correct: false,
          explanation: "Hợp chất X không có nhóm carbonyl C=O của ketone."
        },
        d: {
          text: "Hợp chất X là hợp chất đa chức.",
          correct: false,
          explanation: "Hợp chất X vừa có nhóm -OH vừa có nhóm ether nên là hợp chất tạp chức, không phải đa chức."
        }
      }
    },
    {
      id: 9,
      topic: "Cấu tạo Phân tử Prolin",
      image: "assets/chem_img_7.jpeg",
      context: "Giải Nobel Hoá học năm 2021 được trao cho Benjamin List và David MacMillan. Benjamin List đã sử dụng prolin làm chất xúc tác. Prolin có công thức cấu tạo như hình vẽ:",
      subQuestions: {
        a: {
          text: "Prolin là hợp chất đa chức.",
          correct: false,
          explanation: "Prolin chứa đồng thời nhóm carboxyl (-COOH) và nhóm amino bậc hai (-NH-), nên nó là hợp chất tạp chức (amino acid vòng)."
        },
        b: {
          text: "Prolin có chứa một nhóm chức ancol.",
          correct: false,
          explanation: "Nhóm -OH nằm trong nhóm carboxyl -COOH, không phải nhóm chức ancol (alcohol)."
        },
        c: {
          text: "Một phân tử prolin có chứa 8 nguyên tử H.",
          correct: false,
          explanation: "Công thức phân tử của prolin là $\\text{C}_5\\text{H}_9\\text{NO}_2$, có 9 nguyên tử H."
        },
        d: {
          text: "Phân tử prolin chứa 17 nguyên tử của các nguyên tố.",
          correct: true,
          explanation: "Tổng số nguyên tử trong 1 phân tử $\\text{C}_5\\text{H}_9\\text{NO}_2$ là $5 + 9 + 1 + 2 = 17$ nguyên tử."
        }
      }
    },
    {
      id: 10,
      topic: "Nấu rượu gạo thủ công",
      context: "Quá trình nấu rượu gạo thủ công được thực hiện như sau:\n- Bước 1: Gạo được nấu chín, để nguội, rắc men, ủ kín 3-5 ngày, thu được hỗn hợp gồm nước, ethanol và bã rượu.\n- Bước 2: Đun nóng hỗn hợp đến sôi, hơi bay ra đi vào đường ống dẫn được làm lạnh sẽ hoá lỏng và chảy vào bình hứng.\nCác phát biểu sau đây đúng hay sai?",
      subQuestions: {
        a: {
          text: "Ở giai đoạn đầu xảy ra sự chuyển hoá tinh bột thành ethanol.",
          correct: true,
          explanation: "Dưới tác dụng của men vi sinh, tinh bột thủy phân thành glucose rồi lên men thành ethanol: $(\\text{C}_6\\text{H}_{10}\\text{O}_5)_n \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 \\rightarrow 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2$."
        },
        b: {
          text: "Quá trình chưng cất thì nồng độ rượu giảm dần trong hỗn hợp đun sôi.",
          correct: true,
          explanation: "Do ethanol có nhiệt độ sôi thấp hơn nước ($78.3^\\circ\\text{C} < 100^\\circ\\text{C}$) nên bay hơi trước, nồng độ rượu trong nồi đun giảm dần."
        },
        c: {
          text: "Trong quá trình chưng cất tỉ lệ ethanol/nước giảm dần cho đến khi không thay đổi nữa.",
          correct: false,
          explanation: "Tỉ lệ này giảm dần cho đến khi hết sạch ethanol trong nồi đun."
        },
        d: {
          text: "Thùng nước lạnh đóng vai trò chuyển pha hơi thành pha lỏng.",
          correct: true,
          explanation: "Thùng nước lạnh làm ngưng tụ hơi ethanol và hơi nước thành chất lỏng chảy vào bình hứng."
        }
      }
    }
  ],

  // ==================== PHẦN III: 10 CÂU TRẢ LỜI NGẮN ====================
  part3: [
    {
      id: 1,
      topic: "Cấu tạo phân tử Nitrogen",
      question: "Trong phân tử nitrogen có bao nhiêu liên kết $\\pi$?",
      answer: "2",
      acceptable: ["2", "hai"],
      explanation: "Phân tử nitrogen có liên kết ba giữa 2 nguyên tử N ($:N \\equiv N:$), bao gồm 1 liên kết $\\sigma$ và 2 liên kết $\\pi$."
    },
    {
      id: 2,
      topic: "Số oxi hóa của Nitrogen",
      question: "Cho các chất sau: $\\text{NH}_4\\text{NO}_3$, $\\text{HNO}_3$, $\\text{N}_2\\text{O}$, $\\text{N}_2\\text{O}_5$, $\\text{NO}_2$, $\\text{NH}_4\\text{Cl}$, $\\text{NH}_3$, $(\\text{NH}_4)_2\\text{SO}_4$, $\\text{NaNO}_2$, $\\text{KNO}_3$. Có bao nhiêu chất có chứa nguyên tử nitrogen có số oxi hóa là +5?",
      answer: "4",
      acceptable: ["4", "bốn"],
      explanation: "Các chất chứa nguyên tử nitrogen có số oxi hóa $+5$ là: $\\text{NH}_4\\text{NO}_3$ (gốc $\\text{NO}_3^-$ có N mang số oxi hóa $+5$), $\\text{HNO}_3$, $\\text{N}_2\\text{O}_5$, và $\\text{KNO}_3$. Tổng cộng có 4 chất."
    },
    {
      id: 3,
      topic: "Phản ứng Oxi hóa - Khử",
      question: "Cho sơ đồ phản ứng: $\\text{Fe} + \\text{HNO}_3 \\rightarrow \\text{Fe(NO}_3)_3 + \\text{NO} + \\text{H}_2\\text{O}$. Sau khi cân bằng, tổng hệ số cân bằng (nguyên, tối giản) của các chất trong phản ứng là bao nhiêu?",
      answer: "9",
      acceptable: ["9", "chín"],
      explanation: "Phương trình phản ứng đã cân bằng: $1\\text{Fe} + 4\\text{HNO}_3 \\rightarrow 1\\text{Fe(NO}_3)_3 + 1\\text{NO} + 2\\text{H}_2\\text{O}$. Tổng hệ số nguyên tối giản: $1 + 4 + 1 + 1 + 2 = 9$."
    },
    {
      id: 4,
      topic: "Tính toán Kim loại với Acid",
      question: "Cho m gam Al phản ứng hoàn toàn với dung dịch $\\text{HNO}_3$ loãng (dư), thu được 4,958 lít khí NO (đkc, sản phẩm khử duy nhất). Giá trị của m là bao nhiêu?",
      answer: "5.4",
      acceptable: ["5.4", "5,4"],
      unit: "gam",
      explanation: "Ở điều kiện chuẩn ($25^\\circ\\text{C}, 1\\text{ bar}$): $n_{\\text{NO}} = \\frac{4.958}{24.79} = 0.2\\text{ mol}$. Bảo toàn electron: $3n_{\\text{Al}} = 3n_{\\text{NO}} \\Rightarrow n_{\\text{Al}} = 0.2\\text{ mol}$. Khối lượng Al: $m = 0.2 \\times 27 = 5.4\\text{ gam}$."
    },
    {
      id: 5,
      topic: "Khí Sulfur Dioxide",
      question: "Oxide X là chất khí, mùi hắc, độc (gây ho, viêm đường hô hấp). Trong công nghiệp, X dùng làm chất tẩy trắng bột gỗ, sản xuất sulfuric acid. Phân tử khối của X là bao nhiêu amu?",
      answer: "64",
      acceptable: ["64", "64 amu"],
      unit: "amu",
      explanation: "Khí X là sulfur dioxide ($\\text{SO}_2$). Phân tử khối: $M_{\\text{SO}_2} = 32 + 16 \\times 2 = 64\\text{ amu}$."
    },
    {
      id: 6,
      topic: "Tính toán Kim loại với H2SO4 loãng",
      question: "Hoà tan hoàn toàn 11,9 gam hỗn hợp kim loại Al, Zn, Fe bằng dung dịch $\\text{H}_2\\text{SO}_4$ loãng, thấy thoát ra b mol khí $\\text{H}_2$. Cô cạn dung dịch sau phản ứng thu được 50,3 gam muối sulfate khan. Giá trị của b là bao nhiêu?",
      answer: "0.4",
      acceptable: ["0.4", "0,4"],
      unit: "mol",
      explanation: "Khối lượng muối sulfate = khối lượng kim loại + khối lượng ion $\\text{SO}_4^{2-}$. Ta có: $50.3 = 11.9 + 96 \\times n_{\\text{SO}_4^{2-}} \\Rightarrow 96b = 38.4 \\Rightarrow b = 0.4\\text{ mol}$."
    },
    {
      id: 7,
      topic: "Xác định Hợp chất hữu cơ",
      question: "Cho các hợp chất: $\\text{CO}_2$, $\\text{CCl}_4$, $\\text{NaHCO}_3$, $\\text{NaCN}$, $\\text{CH}_4$, $\\text{CH}_3\\text{OH}$, $\\text{HCOOH}$. Có bao nhiêu hợp chất hữu cơ trong các hợp chất đã cho?",
      answer: "4",
      acceptable: ["4", "bốn"],
      explanation: "Hợp chất hữu cơ gồm 4 chất: $\\text{CCl}_4$, $\\text{CH}_4$, $\\text{CH}_3\\text{OH}$, $\\text{HCOOH}$. Các chất $\\text{CO}_2$, $\\text{NaHCO}_3$, $\\text{NaCN}$ là các hợp chất vô cơ."
    },
    {
      id: 8,
      topic: "Đọc phổ hồng ngoại (IR)",
      image: "assets/chem_img_8.jpeg",
      question: "Cho phổ hồng ngoại như hình bên dưới. Số sóng hấp thụ đặc trưng của nhóm –OH trên phổ hồng ngoại trên là bao nhiêu?",
      answer: "3350",
      acceptable: ["3350", "3340", "3360", "khoảng 3350"],
      unit: "cm⁻¹",
      explanation: "Trên phổ hồng ngoại, pic tù, rộng và mạnh ở vùng $3300 - 3400\\text{ cm}^{-1}$ (cực đại khoảng $3350\\text{ cm}^{-1}$) là tín hiệu đặc trưng cho dao động hóa trị của liên kết $\\text{O}-\\text{H}$ alcohol."
    },
    {
      id: 9,
      topic: "Sắc kí cột",
      image: "assets/chem_img_9.jpeg",
      question: "Phương pháp sắc kí cột có thể được dùng để tách các hợp chất estriol, estradiol và estrone. Sau một thời gian có sự tách các chất như trong sơ đồ. Nếu đánh số thứ tự các chất estriol, estradiol và estrone theo thứ tự 1, 2, 3. Sắp xếp các chất (ghi số thứ tự, viết liền không cách) theo thứ tự tăng dần khả năng hoà tan trong dung môi.",
      answer: "123",
      acceptable: ["123", "1, 2, 3", "1;2;3"],
      explanation: "Chất tan kém hơn trong dung môi (pha động) và bị hấp phụ mạnh hơn trên pha tĩnh sẽ di chuyển chậm nhất và ở trên cùng (estriol - 1), tiếp theo là estradiol (2), và chất tan tốt nhất trong pha động sẽ di chuyển nhanh nhất xuống đáy cột (estrone - 3). Thứ tự tăng dần độ tan: 123."
    },
    {
      id: 10,
      topic: "Phương pháp tách & tinh chế",
      question: "Để nghiên cứu thành phần hóa học của một loại cây thuốc người ta làm như sau: Ngâm mẫu cây trong dung môi thích hợp một thời gian, sau đó gạn lấy chất lỏng. Đun sôi hỗn hợp để thu hồi bớt dung môi, được hỗn hợp sệt gọi là cao tổng. Cho cao tổng vào cột sắc kí, sau đó đổ dung môi thích hợp vào cột. Dùng các lọ nhỏ hứng lấy các phân đoạn chất lỏng chảy ra khỏi cột sắc kí. Trong quá trình trên đã áp dụng mấy phương pháp để tách và tinh chế chất?",
      answer: "3",
      acceptable: ["3", "ba"],
      explanation: "Đã áp dụng 3 phương pháp tách và tinh chế:\n1. Phương pháp chiết (ngâm mẫu cây trong dung môi rồi gạn).\n2. Phương pháp chưng cất (đun sôi để thu hồi dung môi).\n3. Phương pháp sắc kí cột."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.CHEMISTRY_DATA = CHEMISTRY_DATA;
}
