// questionsData.js - Bộ dữ liệu đề cương ôn tập Vật Lí 11 HKI đầy đủ và chính xác 100%

const EXAM_DATA = {
  title: "ĐỀ CƯƠNG ÔN TẬP HKI MÔN VẬT LÍ KHỐI 11",
  subject: "VẬT LÍ 11",
  schoolYear: "Năm học 2024 - 2025",
  totalQuestions: 84, // 54 + 12 + 18
  parts: [
    { id: 1, name: "Phần I", desc: "Câu trắc nghiệm nhiều phương án lựa chọn (54 câu)", count: 54 },
    { id: 2, name: "Phần II", desc: "Câu trắc nghiệm Đúng / Sai (12 câu - 48 ý)", count: 12 },
    { id: 3, name: "Phần III", desc: "Câu trắc nghiệm trả lời ngắn (18 câu)", count: 18 }
  ]
};

// ==================== PHẦN I: 54 CÂU TRẮC NGHIỆM ĐƠN ====================
const PART_I_QUESTIONS = [
  {
    id: "I_1",
    num: 1,
    topic: "Dao động điều hòa",
    question: "Dao động là chuyển động có",
    options: [
      { key: "A", text: "giới hạn trong không gian lặp đi lặp lại nhiều lần quanh một vị trí cân bằng." },
      { key: "B", text: "qua lại hai bên vị trí cân bằng và không giới hạn không gian." },
      { key: "C", text: "trạng thái chuyển động được lặp lại như cũ sau những khoảng thời gian bằng nhau." },
      { key: "D", text: "lặp đi lặp lại nhiều lần có giới hạn trong không gian." }
    ],
    answer: "A",
    explanation: "Theo định nghĩa SGK Vật lí 11: Dao động cơ là chuyển động qua lại của vật quanh một vị trí cân bằng xác định và bị giới hạn trong không gian."
  },
  {
    id: "I_2",
    num: 2,
    topic: "Dao động điều hòa",
    question: "Dao động điều hòa là",
    options: [
      { key: "A", text: "dao động được mô tả bằng định luật hàm sin hay hàm cos theo thời gian." },
      { key: "B", text: "chuyển động tuần hoàn trong không gian, lặp đi lặp lại xung quanh một vị trí cố định." },
      { key: "C", text: "dao động có năng lượng không đổi theo thời gian." },
      { key: "D", text: "dao động được lặp đi lặp lại như cũ sau những khoảng thời gian xác định." }
    ],
    answer: "A",
    explanation: "Dao động điều hòa là dao động mà li độ của vật là một hàm cosin (hoặc sin) của thời gian: $x = A\\cos(\\omega t + \\varphi)$."
  },
  {
    id: "I_3",
    num: 3,
    topic: "Các đại lượng dao động",
    question: "Pha của dao động được dùng để xác định",
    options: [
      { key: "A", text: "biên độ dao động." },
      { key: "B", text: "tần số dao động." },
      { key: "C", text: "trạng thái dao động." },
      { key: "D", text: "chu kì dao động." }
    ],
    answer: "C",
    explanation: "Pha của dao động $(\\omega t + \\varphi)$ cho biết trạng thái dao động của vật (bao gồm li độ và chiều chuyển động) ở thời điểm $t$."
  },
  {
    id: "I_4",
    num: 4,
    topic: "Các đại lượng dao động",
    question: "Một chất điểm dao động điều hòa với phương trình $x = A\\cos(\\omega t + \\varphi)$, trong đó $A, \\omega$ là các hằng số dương. Pha của dao động ở thời điểm $t$ là",
    options: [
      { key: "A", text: "$\\omega t + \\varphi$." },
      { key: "B", text: "$\\omega$." },
      { key: "C", text: "$\\varphi$." },
      { key: "D", text: "$\\omega t$." }
    ],
    answer: "A",
    explanation: "Trong phương trình $x = A\\cos(\\omega t + \\varphi)$, đại lượng $(\\omega t + \\varphi)$ là pha dao động ở thời điểm $t$."
  },
  {
    id: "I_5",
    num: 5,
    topic: "Các đại lượng dao động",
    question: "Trong phương trình dao động điều hòa $x = A\\cos(\\omega t + \\varphi)$, đại lượng $(\\omega t + \\varphi)$ được gọi là",
    options: [
      { key: "A", text: "biên độ dao động." },
      { key: "B", text: "tần số của dao động." },
      { key: "C", text: "pha của dao động." },
      { key: "D", text: "chu kì của dao động." }
    ],
    answer: "C",
    explanation: "$(\\omega t + \\varphi)$ là pha của dao động tại thời điểm $t$."
  },
  {
    id: "I_6",
    num: 6,
    topic: "Các đại lượng dao động",
    question: "Một vật dao động điều hòa với phương trình $x = A\\cos(\\omega t + \\varphi)$, trong đó $\\omega$ là",
    options: [
      { key: "A", text: "biên độ của dao động." },
      { key: "B", text: "chu kì của dao động." },
      { key: "C", text: "tần số góc của dao động." },
      { key: "D", text: "tần số của dao động." }
    ],
    answer: "C",
    explanation: "$\\omega$ là tần số góc của dao động, có đơn vị là rad/s."
  },
  {
    id: "I_7",
    num: 7,
    topic: "Các đại lượng dao động",
    question: "Chu kì dao động của một vật được xác định bởi biểu thức nào sau đây?",
    options: [
      { key: "A", text: "$T = \\frac{2\\pi}{\\omega}$." },
      { key: "B", text: "$T = \\frac{\\omega}{2\\pi}$." },
      { key: "C", text: "$T = 2\\pi\\omega$." },
      { key: "D", text: "$T = \\frac{\\pi}{\\omega}$." }
    ],
    answer: "A",
    explanation: "Chu kì $T = \\frac{2\\pi}{\\omega} = \\frac{1}{f}$."
  },
  {
    id: "I_8",
    num: 8,
    topic: "Các đại lượng dao động",
    question: "Công thức nào sau đây biểu diễn sự liên hệ giữa tần số góc $\\omega$, tần số $f$ và chu kì $T$ của một dao động điều hòa?",
    options: [
      { key: "A", text: "$\\omega = 2\\pi f = \\frac{2\\pi}{T}$." },
      { key: "B", text: "$\\omega = \\pi f = \\frac{\\pi}{T}$." },
      { key: "C", text: "$T = \\omega = \\frac{1}{2\\pi f}$." },
      { key: "D", text: "$\\omega = 2\\pi T = \\frac{2\\pi}{f}$." }
    ],
    answer: "A",
    explanation: "Liên hệ giữa tần số góc, tần số và chu kì: $\\omega = 2\\pi f = \\frac{2\\pi}{T}$."
  },
  {
    id: "I_9",
    num: 9,
    topic: "Các đại lượng dao động",
    question: "Mối liên hệ giữa tần số $f$ và chu kì $T$ của một dao động điều hòa được biểu diễn bằng công thức nào sau đây?",
    options: [
      { key: "A", text: "$f = \\frac{1}{T}$." },
      { key: "B", text: "$f = 2\\pi T$." },
      { key: "C", text: "$f = \\frac{2\\pi}{T}$." },
      { key: "D", text: "$f = T$." }
    ],
    answer: "A",
    explanation: "Tần số $f = \\frac{1}{T}$."
  },
  {
    id: "I_10",
    num: 10,
    topic: "Phân loại dao động",
    question: "Chuyển động nào sau đây không được coi là dao động cơ?",
    options: [
      { key: "A", text: "Dây đàn ghi ta rung động." },
      { key: "B", text: "Chiếc đu đung đưa." },
      { key: "C", text: "Pit tông chuyển động lên xuống trong xi lanh." },
      { key: "D", text: "Một hòn đá được thả rơi." }
    ],
    answer: "D",
    explanation: "Hòn đá thả rơi là chuyển động thẳng biến đổi đều (rơi tự do), không phải chuyển động lặp đi lặp lại quanh vị trí cân bằng nên không phải dao động cơ."
  },
  {
    id: "I_11",
    num: 11,
    topic: "Phân loại dao động",
    question: "Hiện tượng nào sau đây trong thực tiễn không phải là một ví dụ về dao động cơ học?",
    options: [
      { key: "A", text: "Dây đàn ghi-ta rung động liên tục sau khi người nghệ sĩ gảy đàn." },
      { key: "B", text: "Quả lắc của chiếc đồng hồ quả lắc đung đưa qua lại." },
      { key: "C", text: "Chuyển động của pít-tông lên xuống trong xi-lanh của động cơ xe máy." },
      { key: "D", text: "Chuyển động của một chiếc ô tô đang chạy thẳng đều trên đường cao tốc." }
    ],
    answer: "D",
    explanation: "Ô tô chạy thẳng đều là chuyển động thẳng đều, không lặp lại quanh vị trí cân bằng."
  },
  {
    id: "I_12",
    num: 12,
    topic: "Phân loại dao động",
    question: "Chuyển động nào sau đây được coi là dao động cơ học?",
    options: [
      { key: "A", text: "Chiếc lá khô đang rơi thẳng từ trên cành cây xuống mặt đất." },
      { key: "B", text: "Bánh xe đạp đang quay đều khi chạy trên đường thẳng." },
      { key: "C", text: "Chiếc phao câu cá đang nhấp nhô lên xuống trên mặt nước." },
      { key: "D", text: "Chú chim bồ câu đang bay lượn thành một vòng tròn lớn trên bầu trời." }
    ],
    answer: "C",
    explanation: "Phao câu cá nhấp nhô lên xuống quanh vị trí cân bằng trên mặt nước là dao động cơ học."
  },
  {
    id: "I_13",
    num: 13,
    topic: "Vận tốc & Gia tốc",
    question: "Một vật dao động điều hòa. Khi vật đi từ vị trí biên âm đến biên dương thì giá trị gia tốc của vật",
    options: [
      { key: "A", text: "giảm rồi tăng." },
      { key: "B", text: "tăng rồi giảm." },
      { key: "C", text: "giảm." },
      { key: "D", text: "tăng." }
    ],
    answer: "C",
    explanation: "Giá trị gia tốc: $a = -\\omega^2 x$. Tại biên âm ($x = -A$): $a = +\\omega^2 A$ (giá trị cực đại). Tại biên dương ($x = +A$): $a = -\\omega^2 A$ (giá trị cực tiểu). Khi đi từ biên âm đến biên dương, $x$ tăng dần nên giá trị $a$ giảm liên tục."
  },
  {
    id: "I_14",
    num: 14,
    topic: "Vận tốc & Gia tốc",
    question: "Một vật dao động điều hòa. Khi vật đi từ vị trí biên dương đến biên âm thì giá trị gia tốc của vật",
    options: [
      { key: "A", text: "giảm rồi tăng." },
      { key: "B", text: "tăng rồi giảm." },
      { key: "C", text: "giảm." },
      { key: "D", text: "tăng." }
    ],
    answer: "D",
    explanation: "Tại biên dương ($x = +A$): $a = -\\omega^2 A$ (cực tiểu). Tại biên âm ($x = -A$): $a = +\\omega^2 A$ (cực đại). Do đó giá trị gia tốc tăng liên tục."
  },
  {
    id: "I_15",
    num: 15,
    topic: "Vận tốc & Gia tốc",
    question: "Một vật dao động điều hòa. Khi vật đi từ vị trí biên âm đến biên dương thì giá trị vận tốc của vật",
    options: [
      { key: "A", text: "giảm rồi tăng." },
      { key: "B", text: "tăng rồi giảm." },
      { key: "C", text: "giảm." },
      { key: "D", text: "tăng." }
    ],
    answer: "B",
    explanation: "Vật đi từ biên âm sang biên dương là chuyển động theo chiều dương ($v > 0$). Ở biên âm: $v = 0$; qua VTCB: $v = +v_{max} = \\omega A$; đến biên dương: $v = 0$. Vậy giá trị vận tốc tăng rồi giảm."
  },
  {
    id: "I_16",
    num: 16,
    topic: "Năng lượng dao động",
    question: "Một chất điểm có khối lượng m, dao động điều hòa quanh vị trí cân bằng O với tần số góc $\\omega$, biên độ A. Lấy gốc thế năng tại O. Khi li độ là x thì thế năng $W_t$ tính bằng biểu thức",
    options: [
      { key: "A", text: "$W_t = \\frac{1}{2}m\\omega^2 A^2$." },
      { key: "B", text: "$W_t = \\frac{1}{2}m\\omega^2 x^2$." },
      { key: "C", text: "$W_t = \\frac{1}{2}m\\omega A^2$." },
      { key: "D", text: "$W_t = \\frac{1}{2}m\\omega x^2$." }
    ],
    answer: "B",
    explanation: "Thế năng của chất điểm dao động điều hòa: $W_t = \\frac{1}{2}kx^2 = \\frac{1}{2}m\\omega^2 x^2$."
  },
  {
    id: "I_17",
    num: 17,
    topic: "Năng lượng dao động",
    question: "Một chất điểm có khối lượng m, dao động điều hòa quanh vị trí cân bằng O với tần số góc $\\omega$, biên độ A. Khi vận tốc của chất điểm là v thì động năng của chất điểm $W_đ$ tính bằng biểu thức",
    options: [
      { key: "A", text: "$W_đ = \\frac{1}{2}m\\omega^2 A^2$." },
      { key: "B", text: "$W_đ = \\frac{1}{2}m\\omega v^2$." },
      { key: "C", text: "$W_đ = \\frac{1}{2}mv^2$." },
      { key: "D", text: "$W_đ = \\frac{1}{2}m\\omega^2 v^2$." }
    ],
    answer: "C",
    explanation: "Động năng: $W_đ = \\frac{1}{2}mv^2$."
  },
  {
    id: "I_18",
    num: 18,
    topic: "Năng lượng dao động",
    question: "Một chất điểm có khối lượng m, dao động điều hòa quanh vị trí cân bằng O với tần số góc $\\omega$, biên độ A. Lấy gốc thế năng tại O. Cơ năng W tính bằng biểu thức",
    options: [
      { key: "A", text: "$W = \\frac{1}{2}m\\omega A^2$." },
      { key: "B", text: "$W = \\frac{1}{2}m\\omega^2 A^2$." },
      { key: "C", text: "$W = \\frac{1}{2}m\\omega^2 A$." },
      { key: "D", text: "$W = \\frac{1}{2}m\\omega A$." }
    ],
    answer: "B",
    explanation: "Cơ năng bảo toàn: $W = W_đ + W_t = \\frac{1}{2}m\\omega^2 A^2$."
  },
  {
    id: "I_19",
    num: 19,
    topic: "Năng lượng dao động",
    question: "Một chất điểm dao động điều hòa quanh vị trí cân bằng O. Lấy gốc thế năng tại O. Khi vật đi từ vị trí cân bằng ra biên thì",
    options: [
      { key: "A", text: "thế năng và động năng tăng." },
      { key: "B", text: "thế năng và động năng giảm." },
      { key: "C", text: "thế năng giảm và động năng tăng." },
      { key: "D", text: "thế năng tăng và động năng giảm." }
    ],
    answer: "D",
    explanation: "Từ VTCB ra biên: độ lớn li độ $|x|$ tăng $\\Rightarrow$ thế năng tăng; tốc độ $|v|$ giảm $\\Rightarrow$ động năng giảm."
  },
  {
    id: "I_20",
    num: 20,
    topic: "Năng lượng dao động",
    question: "Một chất điểm dao động điều hòa quanh vị trí cân bằng O. Lấy gốc thế năng tại O. Khi vật đi từ biên âm sang biên dương thì",
    options: [
      { key: "A", text: "thế năng giảm rồi tăng." },
      { key: "B", text: "thế năng tăng rồi giảm." },
      { key: "C", text: "thế năng luôn tăng." },
      { key: "D", text: "thế năng luôn giảm." }
    ],
    answer: "A",
    explanation: "Tại biên âm thế năng cực đại $\\rightarrow$ về VTCB thế năng giảm về 0 $\\rightarrow$ ra biên dương thế năng lại tăng đến cực đại."
  },
  {
    id: "I_21",
    num: 21,
    topic: "Năng lượng dao động",
    question: "Một chất điểm dao động điều hòa quanh vị trí cân bằng O. Lấy gốc thế năng tại O. Khi vật đi từ biên âm sang biên dương thì",
    options: [
      { key: "A", text: "động năng giảm rồi tăng." },
      { key: "B", text: "động năng tăng rồi giảm." },
      { key: "C", text: "động năng luôn tăng." },
      { key: "D", text: "động năng luôn giảm." }
    ],
    answer: "B",
    explanation: "Tại biên âm $v = 0 \\Rightarrow W_đ = 0 \\rightarrow$ qua VTCB động năng cực đại $\\rightarrow$ ra biên dương động năng lại giảm về 0."
  },
  {
    id: "I_22",
    num: 22,
    topic: "Dao động tắt dần & cưỡng bức",
    question: "Dao động tắt dần là một dao động có",
    options: [
      { key: "A", text: "biên độ thay đổi liên tục." },
      { key: "B", text: "chu kì tăng tỉ lệ với thời gian." },
      { key: "C", text: "có ma sát cực đại." },
      { key: "D", text: "biên độ giảm dần do ma sát." }
    ],
    answer: "D",
    explanation: "Dao động tắt dần có biên độ và cơ năng giảm dần theo thời gian do tác dụng của lực ma sát và lực cản của môi trường."
  },
  {
    id: "I_23",
    num: 23,
    topic: "Dao động tắt dần & cưỡng bức",
    question: "Dao động cưỡng bức là dao động của hệ",
    options: [
      { key: "A", text: "dưới tác dụng của lực đàn hồi." },
      { key: "B", text: "dưới tác dụng của một ngoại lực biến thiên tuần hoàn theo thời gian." },
      { key: "C", text: "trong điều kiện không có lực ma sát." },
      { key: "D", text: "dưới tác dụng của lực quán tính." }
    ],
    answer: "B",
    explanation: "Dao động cưỡng bức là dao động duy trì dưới tác dụng của một ngoại lực biến thiên tuần hoàn theo thời gian."
  },
  {
    id: "I_24",
    num: 24,
    topic: "Dao động duy trì",
    question: "Dao động duy trì là dao động tắt dần mà người ta đã",
    options: [
      { key: "A", text: "làm mất lực cản của môi trường đối với vật chuyển động." },
      { key: "B", text: "tác dụng ngoại lực biến đổi điều hoà theo thời gian vào vật dao động." },
      { key: "C", text: "tác dụng ngoại lực vào vật dao động cùng chiều với chuyển động trong một phần của từng chu kì." },
      { key: "D", text: "kích thích lại dao động sau khi dao động bị tắt hẳn." }
    ],
    answer: "C",
    explanation: "Dao động duy trì được cung cấp năng lượng đúng bằng phần năng lượng tiêu hao sau mỗi chu kì (cùng chiều chuyển động) mà không làm thay đổi chu kì riêng."
  },
  {
    id: "I_25",
    num: 25,
    topic: "Cộng hưởng",
    question: "Trong dao động cưỡng bức, với cùng một ngoại lực tác dụng, hiện tượng cộng hưởng sẽ rõ nét hơn nếu",
    options: [
      { key: "A", text: "dao động tắt dần có tần số riêng càng lớn." },
      { key: "B", text: "ma sát tác dụng lên vật dao động càng nhỏ." },
      { key: "C", text: "dao động tắt dần có biên độ càng lớn." },
      { key: "D", text: "dao động tắt dần cùng pha với ngoại lực tuần hoàn." }
    ],
    answer: "B",
    explanation: "Lực cản môi trường (ma sát) càng nhỏ thì đồ thị cộng hưởng càng dốc và nhọn, biên độ cộng hưởng càng lớn (rõ nét hơn)."
  },
  {
    id: "I_26",
    num: 26,
    topic: "Dao động cưỡng bức",
    question: "Phát biểu nào sau đây là không đúng?",
    options: [
      { key: "A", text: "Tần số của dao động cưỡng bức luôn bằng tần số của dao động riêng." },
      { key: "B", text: "Tần số của dao động cưỡng bức bằng tần số của lực cưỡng bức." },
      { key: "C", text: "Chu kì của dao động cưỡng bức có thể bằng chu kì của dao động riêng." },
      { key: "D", text: "Chu kì của dao động cưỡng bức bằng chu kì của lực cưỡng bức." }
    ],
    answer: "A",
    explanation: "Tần số dao động cưỡng bức luôn bằng tần số của ngoại lực cưỡng bức. Nó chỉ bằng tần số riêng khi xảy ra hiện tượng cộng hưởng."
  },
  {
    id: "I_27",
    num: 27,
    topic: "Cộng hưởng",
    question: "Trong dao động cưỡng bức, biên độ của dao động cưỡng bức",
    options: [
      { key: "A", text: "không phụ thuộc vào biên độ của ngoại lực." },
      { key: "B", text: "giảm khi tần số ngoại lực giảm." },
      { key: "C", text: "đạt cực đại khi tần số ngoại lực bằng tần số dao động riêng của hệ dao động cưỡng bức." },
      { key: "D", text: "tăng khi tần số ngoại lực tăng." }
    ],
    answer: "C",
    explanation: "Hiện tượng cộng hưởng xảy ra khi tần số ngoại lực $f = f_0$ (tần số riêng), khi đó biên độ dao động đạt giá trị cực đại."
  },
  {
    id: "I_28",
    num: 28,
    topic: "Đại cương sóng cơ",
    question: "Sóng cơ là",
    options: [
      { key: "A", text: "dao động lan truyền trong một môi trường." },
      { key: "B", text: "dao động của mọi điểm trong một môi trường." },
      { key: "C", text: "một dạng chuyển động đặc biệt của môi trường." },
      { key: "D", text: "sự truyền chuyển động của các phần tử trong môi trường." }
    ],
    answer: "A",
    explanation: "Sóng cơ là sự lan truyền dao động cơ học trong môi trường vật chất theo thời gian."
  },
  {
    id: "I_29",
    num: 29,
    topic: "Đại cương sóng cơ",
    question: "Sóng cơ học truyền được trong môi trường nào sau đây?",
    options: [
      { key: "A", text: "Chất lỏng, khí." },
      { key: "B", text: "Chất rắn, khí, chân không." },
      { key: "C", text: "Chất rắn, lỏng, khí." },
      { key: "D", text: "Chất rắn, lỏng." }
    ],
    answer: "C",
    explanation: "Sóng cơ truyền được trong các môi trường vật chất đàn hồi: rắn, lỏng, khí. Sóng cơ không truyền được trong chân không."
  },
  {
    id: "I_30",
    num: 30,
    topic: "Đại cương sóng cơ",
    question: "Gọi $v_r, v_l, v_k$ lần lượt là vận tốc truyền sóng cơ trong các môi trường rắn, lỏng, khí. Kết luận đúng là",
    options: [
      { key: "A", text: "$v_r < v_l < v_k$." },
      { key: "B", text: "$v_r < v_k < v_l$." },
      { key: "C", text: "$v_r > v_l > v_k$." },
      { key: "D", text: "$v_r > v_k > v_l$." }
    ],
    answer: "C",
    explanation: "Tốc độ truyền sóng cơ giảm dần theo mật độ liên kết phân tử của môi trường: $v_r > v_l > v_k$."
  },
  {
    id: "I_31",
    num: 31,
    topic: "Đại cương sóng cơ",
    question: "Trong sóng cơ, tốc độ truyền sóng là",
    options: [
      { key: "A", text: "tốc độ lan truyền dao động trong môi trường truyền sóng." },
      { key: "B", text: "tốc độ cực tiểu của các phần tử môi trường truyền sóng." },
      { key: "C", text: "tốc độ chuyển động của các phần tử môi trường truyền sóng." },
      { key: "D", text: "tốc độ cực đại của các phần tử môi trường truyền sóng." }
    ],
    answer: "A",
    explanation: "Tốc độ truyền sóng là tốc độ lan truyền pha (trạng thái dao động) trong môi trường truyền sóng."
  },
  {
    id: "I_32",
    num: 32,
    topic: "Bước sóng",
    question: "Bước sóng là khoảng cách giữa hai điểm",
    options: [
      { key: "A", text: "gần nhau nhất mà dao động tại hai điểm đó cùng pha." },
      { key: "B", text: "trên cùng một phương truyền sóng mà dao động tại hai điểm đó cùng pha." },
      { key: "C", text: "trên cùng một phương truyền sóng mà dao động tại hai điểm đó ngược pha." },
      { key: "D", text: "gần nhau nhất trên cùng một phương truyền sóng mà dao động tại hai điểm đó cùng pha." }
    ],
    answer: "D",
    explanation: "Bước sóng $\\lambda$ là khoảng cách giữa hai điểm gần nhau nhất trên cùng một phương truyền sóng mà dao động tại hai điểm đó cùng pha."
  },
  {
    id: "I_33",
    num: 33,
    topic: "Chu kì sóng",
    question: "Trong sự truyền sóng cơ học, chu kì của sóng được định nghĩa là",
    options: [
      { key: "A", text: "quãng đường mà sóng truyền đi được trong một giây." },
      { key: "B", text: "số bước sóng truyền đi được trong một giây." },
      { key: "C", text: "khoảng thời gian để sóng truyền đi được một quãng đường bằng đúng một bước sóng." },
      { key: "D", text: "khoảng cách gần nhất giữa hai phần tử môi trường dao động ngược pha." }
    ],
    answer: "C",
    explanation: "Chu kì sóng $T$ chính là khoảng thời gian để sóng truyền đi được một quãng đường bằng đúng một bước sóng $\\lambda = v \\cdot T$."
  },
  {
    id: "I_34",
    num: 34,
    topic: "Sóng dọc & Sóng ngang",
    question: "Sóng dọc là sóng các phần tử",
    options: [
      { key: "A", text: "có phương dao động nằm ngang." },
      { key: "B", text: "có phương dao động thẳng đứng." },
      { key: "C", text: "có phương dao động vuông góc với phương truyền sóng." },
      { key: "D", text: "có phương dao động trùng với phương truyền sóng." }
    ],
    answer: "D",
    explanation: "Sóng dọc là sóng trong đó phương dao động của các phần tử môi trường trùng với phương truyền sóng."
  },
  {
    id: "I_35",
    num: 35,
    topic: "Sóng dọc & Sóng ngang",
    question: "Sóng ngang là sóng các phần tử",
    options: [
      { key: "A", text: "có phương dao động nằm ngang." },
      { key: "B", text: "có phương dao động thẳng đứng." },
      { key: "C", text: "có phương dao động vuông góc với phương truyền sóng." },
      { key: "D", text: "có phương dao động trùng với phương truyền sóng." }
    ],
    answer: "C",
    explanation: "Sóng ngang là sóng trong đó phương dao động của các phần tử môi trường vuông góc với phương truyền sóng."
  },
  {
    id: "I_36",
    num: 36,
    topic: "Sóng dọc & Sóng ngang",
    question: "Để phân loại sóng ngang và sóng dọc người ta dựa vào",
    options: [
      { key: "A", text: "phương dao động và phương truyền sóng." },
      { key: "B", text: "năng lượng sóng và tốc độ truyền sóng." },
      { key: "C", text: "phương truyền sóng và tần số sóng." },
      { key: "D", text: "tốc độ truyền sóng và bước sóng." }
    ],
    answer: "A",
    explanation: "Phân loại sóng ngang hay sóng dọc căn cứ vào mối quan hệ giữa phương dao động của các phần tử môi trường và phương truyền sóng."
  },
  {
    id: "I_37",
    num: 37,
    topic: "Quá trình truyền sóng",
    question: "Phát biểu nào sau đây là sai khi nói về quá trình truyền sóng?",
    options: [
      { key: "A", text: "Quá trình truyền sóng là quá trình truyền dao động trong môi trường đàn hồi." },
      { key: "B", text: "Quá trình truyền sóng là quá trình truyền năng lượng." },
      { key: "C", text: "Quá trình truyền sóng là quá trình truyền pha dao động." },
      { key: "D", text: "Quá trình truyền sóng là quá trình truyền các phần tử vật chất." }
    ],
    answer: "D",
    explanation: "Quá trình truyền sóng không làm các phần tử vật chất bị cuốn theo chiều truyền, chúng chỉ dao động quanh vị trí cân bằng cố định."
  },
  {
    id: "I_38",
    num: 38,
    topic: "Quá trình truyền sóng",
    question: "Khi một sóng cơ lan truyền trong môi trường đàn hồi, các phần tử vật chất của môi trường đó sẽ",
    options: [
      { key: "A", text: "di chuyển ra xa nguồn cùng với hình ảnh sóng." },
      { key: "B", text: "chỉ dao động quanh vị trí cân bằng cố định của chúng." },
      { key: "C", text: "chuyển động với tốc độ bằng tốc độ truyền sóng." },
      { key: "D", text: "dồn về phía trước theo hướng truyền của năng lượng." }
    ],
    answer: "B",
    explanation: "Các phần tử môi trường chỉ dao động tại chỗ quanh vị trí cân bằng cố định."
  },
  {
    id: "I_39",
    num: 39,
    topic: "Quá trình truyền sóng",
    question: "Bản chất của quá trình truyền sóng cơ học là sự lan truyền của các đại lượng nào sau đây trong môi trường?",
    options: [
      { key: "A", text: "Các phần tử vật chất và năng lượng dao động." },
      { key: "B", text: "Trạng thái dao động (pha dao động) và năng lượng." },
      { key: "C", text: "Vận tốc dao động và khối lượng của các phần tử." },
      { key: "D", text: "Vị trí cân bằng của các phần tử vật chất." }
    ],
    answer: "B",
    explanation: "Bản chất của sóng cơ là sự lan truyền trạng thái dao động (pha dao động) và năng lượng dao động qua môi trường đàn hồi."
  },
  {
    id: "I_40",
    num: 40,
    topic: "Giao thoa sóng",
    question: "Hai nguồn sóng kết hợp là hai nguồn dao động cùng phương, cùng",
    options: [
      { key: "A", text: "biên độ nhưng khác tần số." },
      { key: "B", text: "pha ban đầu nhưng khác tần số." },
      { key: "C", text: "tần số và có hiệu số pha không đổi theo thời gian." },
      { key: "D", text: "biên độ và có hiệu số pha thay đổi theo thời gian." }
    ],
    answer: "C",
    explanation: "Hai nguồn kết hợp là hai nguồn dao động cùng phương, cùng tần số và có độ lệch pha không đổi theo thời gian."
  },
  {
    id: "I_41",
    num: 41,
    topic: "Giao thoa sóng",
    question: "Phát biểu nào sau đây là sai khi nói về giao thoa sóng?",
    options: [
      { key: "A", text: "Giao thoa là sự tổng hợp của hai hay nhiều sóng." },
      { key: "B", text: "Giao thoa là sự tổng hợp của hai hay nhiều sóng kết hợp." },
      { key: "C", text: "Hai sóng xuất phát từ cùng một nguồn sóng là hai sóng kết hợp." },
      { key: "D", text: "Các sóng kết hợp là các sóng dao động cùng tần số, cùng phương, hiệu số pha không thay đổi theo thời gian." }
    ],
    answer: "A",
    explanation: "Giao thoa sóng là hiện tượng hai sóng kết hợp gặp nhau tạo ra các gợn sóng tăng cường hoặc triệt tiêu nhau, không phải hai sóng bất kì nào cũng giao thoa."
  },
  {
    id: "I_42",
    num: 42,
    topic: "Giao thoa sóng",
    question: "Điều kiện để hai sóng cơ khi gặp nhau, giao thoa được với nhau là hai sóng phải xuất phát từ hai nguồn dao động",
    options: [
      { key: "A", text: "cùng biên độ và có hiệu số pha không đổi theo thời gian." },
      { key: "B", text: "cùng tần số, cùng phương." },
      { key: "C", text: "có cùng pha ban đầu và cùng biên độ." },
      { key: "D", text: "cùng tần số, cùng phương và có hiệu số pha không đổi theo thời gian." }
    ],
    answer: "D",
    explanation: "Điều kiện giao thoa: hai sóng kết hợp cùng tần số, cùng phương và có hiệu số pha không đổi theo thời gian."
  },
  {
    id: "I_43",
    num: 43,
    topic: "Giao thoa sóng",
    question: "Trong sự giao thoa sóng trên mặt nước của hai nguồn kết hợp, cùng pha, những điểm dao động với biên độ cực đại có hiệu khoảng cách từ đó tới các nguồn với $k = 0, \\pm 1, \\pm 2,...$ có giá trị là",
    options: [
      { key: "A", text: "$d_2 - d_1 = k\\lambda$." },
      { key: "B", text: "$d_2 - d_1 = (k + \\frac{1}{2})\\lambda$." },
      { key: "C", text: "$d_2 - d_1 = 2k\\lambda$." },
      { key: "D", text: "$d_2 - d_1 = \\frac{k\\lambda}{2}$." }
    ],
    answer: "A",
    explanation: "Điều kiện cực đại giao thoa của 2 nguồn cùng pha: $d_2 - d_1 = k\\lambda$ ($k \\in \\mathbb{Z}$)."
  },
  {
    id: "I_44",
    num: 44,
    topic: "Giao thoa sóng",
    question: "Trong sự giao thoa sóng trên mặt nước của hai nguồn kết hợp, cùng pha, những điểm dao động với biên độ cực tiểu có hiệu khoảng cách từ đó tới các nguồn với $k = 0, \\pm 1, \\pm 2,...$ có giá trị là",
    options: [
      { key: "A", text: "$d_2 - d_1 = k\\lambda$." },
      { key: "B", text: "$d_2 - d_1 = (k + \\frac{1}{2})\\lambda$." },
      { key: "C", text: "$d_2 - d_1 = 2k\\lambda$." },
      { key: "D", text: "$d_2 - d_1 = \\frac{k\\lambda}{2}$." }
    ],
    answer: "B",
    explanation: "Điều kiện cực tiểu giao thoa của 2 nguồn cùng pha: $d_2 - d_1 = (k + 0.5)\\lambda$ ($k \\in \\mathbb{Z}$)."
  },
  {
    id: "I_45",
    num: 45,
    topic: "Giao thoa sóng",
    question: "Ở mặt nước có hai nguồn sóng dao động theo phương vuông góc với mặt nước, có cùng phương trình $u = A\\cos(\\omega t)$. Trong miền gặp nhau của hai sóng, những điểm mà ở đó các phần tử nước dao động với biên độ cực đại sẽ có hiệu đường đi của sóng từ hai nguồn đến đó bằng",
    options: [
      { key: "A", text: "một số lẻ lần nửa bước sóng." },
      { key: "B", text: "một số nguyên lần bước sóng." },
      { key: "C", text: "một số nguyên lần nửa bước sóng." },
      { key: "D", text: "một số lẻ lần bước sóng." }
    ],
    answer: "B",
    explanation: "Biên độ cực đại khi hiệu đường đi $\\Delta d = k\\lambda$, tức bằng một số nguyên lần bước sóng."
  },
  {
    id: "I_46",
    num: 46,
    topic: "Bài toán giao thoa",
    question: "Trong thí nghiệm giao thoa sóng trên mặt nước, hai nguồn $S_1, S_2$ dao động cùng pha. Tốc độ truyền sóng trên mặt nước đo được là 40 cm/s. Tại điểm M trên mặt nước cách các nguồn $S_1$ và $S_2$ lần lượt các khoảng bằng 28 cm và 18 cm có một cực đại giao thoa đi qua. Biết rằng trong khoảng giữa M và đường trung trực của $S_1S_2$ chỉ còn có một cực đại khác. Tần số dao động của hai nguồn sóng bằng",
    options: [
      { key: "A", text: "10 Hz." },
      { key: "B", text: "5 Hz." },
      { key: "C", text: "8 Hz." },
      { key: "D", text: "12 Hz." }
    ],
    answer: "C",
    explanation: "Giữa M và đường trung trực có 1 cực đại khác $\\Rightarrow$ M là cực đại bậc $k = 2$.\nTa có: $|d_1 - d_2| = 28 - 18 = 10\\text{ cm} = 2\\lambda \\Rightarrow \\lambda = 5\\text{ cm}$.\nTần số dao động: $f = \\frac{v}{\\lambda} = \\frac{40}{5} = 8\\text{ Hz}$."
  },
  {
    id: "I_47",
    num: 47,
    topic: "Bài toán giao thoa",
    question: "Trong thí nghiệm giao thoa sóng trên mặt nước, hai nguồn $S_1, S_2$ dao động cùng pha và cùng tần số bằng 13 Hz. Tại điểm M trên mặt nước cách các nguồn $S_1$ và $S_2$ lần lượt các khoảng bằng 32 cm và 20 cm có một cực đại đi qua. Trong khoảng giữa M và đường trung trực của $S_1S_2$ còn có hai cực đại khác. Tốc độ truyền sóng trên mặt nước bằng",
    options: [
      { key: "A", text: "63 cm/s." },
      { key: "B", text: "60 cm/s." },
      { key: "C", text: "50 cm/s." },
      { key: "D", text: "52 cm/s." }
    ],
    answer: "D",
    explanation: "Giữa M và trung trực có 2 cực đại khác $\\Rightarrow$ M là cực đại bậc $k = 3$.\nHiệu khoảng cách: $|d_1 - d_2| = 32 - 20 = 12\\text{ cm} = 3\\lambda \\Rightarrow \\lambda = 4\\text{ cm}$.\nTốc độ truyền sóng: $v = \\lambda \\cdot f = 4 \\times 13 = 52\\text{ cm/s}$."
  },
  {
    id: "I_48",
    num: 48,
    topic: "Bài toán giao thoa",
    question: "Trong thí nghiệm giao thoa sóng trên mặt nước, hai nguồn kết hợp $S_1, S_2$ dao động cùng pha. Tại điểm M trên mặt nước cách các nguồn $S_1$ và $S_2$ lần lượt các khoảng bằng 40 cm và 16 cm là một điểm dao động với biên độ cực đại. Biết tốc độ truyền sóng trên mặt nước là 30 cm/s và trong khoảng giữa M và đường trung trực của $S_1S_2$ còn có ba cực đại khác. Chu kì dao động của các nguồn sóng là",
    options: [
      { key: "A", text: "0,1 s." },
      { key: "B", text: "0,2 s." },
      { key: "C", text: "0,4 s." },
      { key: "D", text: "0,5 s." }
    ],
    answer: "B",
    explanation: "Giữa M và trung trực còn 3 cực đại khác $\\Rightarrow$ M là cực đại bậc $k = 4$.\nTa có: $|d_1 - d_2| = 40 - 16 = 24\\text{ cm} = 4\\lambda \\Rightarrow \\lambda = 6\\text{ cm}$.\nChu kì sóng: $T = \\frac{\\lambda}{v} = \\frac{6}{30} = 0{,}2\\text{ s}$."
  },
  {
    id: "I_49",
    num: 49,
    topic: "Phản xạ sóng",
    question: "Khi nói về sự phản xạ của sóng cơ trên vật cản cố định, phát biểu nào sau đây đúng?",
    options: [
      { key: "A", text: "Tần số của sóng phản xạ luôn lớn hơn tần số của sóng tới." },
      { key: "B", text: "Sóng phản xạ luôn ngược pha với sóng tới ở điểm phản xạ." },
      { key: "C", text: "Tần số của sóng phản xạ luôn nhỏ hơn tần số của sóng tới." },
      { key: "D", text: "Sóng phản xạ luôn cùng pha với sóng tới ở điểm phản xạ." }
    ],
    answer: "B",
    explanation: "Tại điểm phản xạ trên vật cản cố định, sóng phản xạ luôn luôn ngược pha với sóng tới."
  },
  {
    id: "I_50",
    num: 50,
    topic: "Phản xạ sóng",
    question: "Khi nói về sự phản xạ của sóng cơ trên vật cản tự do, phát biểu nào sau đây đúng?",
    options: [
      { key: "A", text: "Tần số của sóng phản xạ luôn lớn hơn tần số của sóng tới." },
      { key: "B", text: "Sóng phản xạ luôn ngược pha với sóng tới ở điểm phản xạ." },
      { key: "C", text: "Tần số của sóng phản xạ luôn nhỏ hơn tần số của sóng tới." },
      { key: "D", text: "Sóng phản xạ luôn cùng pha với sóng tới ở điểm phản xạ." }
    ],
    answer: "D",
    explanation: "Tại điểm phản xạ trên vật cản tự do, sóng phản xạ luôn cùng pha với sóng tới."
  },
  {
    id: "I_51",
    num: 51,
    topic: "Phản xạ sóng",
    question: "Trong quá trình truyền sóng, khi gặp vật cản thì sóng bị phản xạ. Tại điểm phản xạ thì sóng tới và sóng phản xạ sẽ",
    options: [
      { key: "A", text: "luôn cùng pha." },
      { key: "B", text: "không cùng loại." },
      { key: "C", text: "luôn ngược pha." },
      { key: "D", text: "cùng tần số." }
    ],
    answer: "D",
    explanation: "Sóng tới và sóng phản xạ lan truyền trong cùng một môi trường nên luôn có cùng tần số (và cùng tốc độ, bước sóng)."
  },
  {
    id: "I_52",
    num: 52,
    topic: "Sóng dừng",
    question: "Điều kiện có sóng dừng trên dây chiều dài $l$ khi một đầu dây cố định và đầu còn lại tự do là",
    options: [
      { key: "A", text: "$l = (2k + 1)\\frac{\\lambda}{2}$." },
      { key: "B", text: "$l = k\\frac{\\lambda}{2}$." },
      { key: "C", text: "$l = k\\lambda$." },
      { key: "D", text: "$l = (2k + 1)\\frac{\\lambda}{4}$." }
    ],
    answer: "D",
    explanation: "Điều kiện sóng dừng một đầu cố định, một đầu tự do: chiều dài dây bằng một số lẻ lần một phần tư bước sóng: $l = (2k + 1)\\frac{\\lambda}{4}$ ($k = 0, 1, 2,...$)."
  },
  {
    id: "I_53",
    num: 53,
    topic: "Sóng dừng",
    question: "Điều kiện có sóng dừng trên dây chiều dài $l$ khi cả hai đầu dây cố định hay hai đầu tự do là",
    options: [
      { key: "A", text: "$l = k\\lambda$." },
      { key: "B", text: "$l = k\\frac{\\lambda}{2}$." },
      { key: "C", text: "$l = (2k + 1)\\frac{\\lambda}{2}$." },
      { key: "D", text: "$l = (2k + 1)\\frac{\\lambda}{4}$." }
    ],
    answer: "B",
    explanation: "Điều kiện sóng dừng hai đầu cố định (hoặc hai đầu tự do): $l = k\\frac{\\lambda}{2}$ với $k$ là số bó sóng (số bụng sóng)."
  },
  {
    id: "I_54",
    num: 54,
    topic: "Sóng dừng",
    question: "Trên một sợi dây có sóng dừng với bước sóng là $\\lambda$. Khoảng cách giữa hai nút sóng liền kề là",
    options: [
      { key: "A", text: "$\\lambda$." },
      { key: "B", text: "$2\\lambda$." },
      { key: "C", text: "$\\frac{\\lambda}{2}$." },
      { key: "D", text: "$\\frac{\\lambda}{4}$." }
    ],
    answer: "C",
    explanation: "Khoảng cách giữa hai nút sóng liên tiếp (hoặc hai bụng sóng liên tiếp) bằng một nửa bước sóng: $\\frac{\\lambda}{2}$."
  }
];

// ==================== PHẦN II: 12 CÂU ĐÚNG / SAI ====================
const PART_II_QUESTIONS = [
  {
    id: "II_1",
    num: 1,
    topic: "Phương trình vận tốc",
    context: "Một vật dao động điều hoà có phương trình vận tốc $v = 20\\pi\\cos(10\\pi t + \\frac{\\pi}{6})$ (cm/s).",
    items: [
      {
        id: "a",
        text: "Vận tốc của vật đạt giá trị cực đại khi vật đi qua vị trí cân bằng.",
        answer: true,
        explanation: "Khi vật qua vị trí cân bằng theo chiều dương thì vận tốc đạt giá trị cực đại $v_{max} = +\\omega A$."
      },
      {
        id: "b",
        text: "Vận tốc cực đại của vật được tính bằng công thức $v_{max} = \\frac{A}{\\omega}$.",
        answer: false,
        explanation: "Công thức đúng của vận tốc cực đại là $v_{max} = \\omega A$."
      },
      {
        id: "c",
        text: "Tại thời điểm ban đầu $t = 2\\text{ s}$, vận tốc của vật có giá trị là $10\\sqrt{3}\\pi$ cm/s.",
        answer: true,
        explanation: "Thay $t = 2$ vào phương trình: $v = 20\\pi\\cos(10\\pi \\cdot 2 + \\frac{\\pi}{6}) = 20\\pi\\cos(20\\pi + \\frac{\\pi}{6}) = 20\\pi\\cos(\\frac{\\pi}{6}) = 20\\pi \\cdot \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}\\pi$ cm/s."
      },
      {
        id: "d",
        text: "Quãng đường của vật dao động trong 2 chu kì là 8 cm.",
        answer: false,
        explanation: "Từ $v_{max} = \\omega A = 20\\pi \\Rightarrow 10\\pi A = 20\\pi \\Rightarrow A = 2$ cm.\nTrong 1 chu kì vật đi được quãng đường $4A = 8$ cm. Trong 2 chu kì quãng đường là $S = 2 \\times 4A = 8A = 8 \\times 2 = 16$ cm (không phải 8 cm)."
      }
    ]
  },
  {
    id: "II_2",
    num: 2,
    topic: "Phương trình gia tốc",
    context: "Một chất điểm dao động điều hoà, phương trình gia tốc của chất điểm là $a = 40\\cos(4\\pi t + \\frac{\\pi}{3})$ (m/s²). Lấy $\\pi^2 = 10$.",
    items: [
      {
        id: "a",
        text: "Gia tốc của vật đạt giá trị cực tiểu khi vật ở vị trí biên âm.",
        answer: false,
        explanation: "Gia tốc $a = -\\omega^2 x$. Tại vị trí biên âm ($x = -A$), gia tốc đạt giá trị CỰC ĐẠI: $a_{max} = +\\omega^2 A$. Tại biên dương ($x = +A$) gia tốc mới đạt giá trị CỰC TIỂU: $a_{min} = -\\omega^2 A$."
      },
      {
        id: "b",
        text: "Gia tốc cực đại của vật được tính bằng công thức $a_{max} = \\omega^2 A$.",
        answer: true,
        explanation: "Gia tốc cực đại có độ lớn và giá trị cực đại là $a_{max} = \\omega^2 A$."
      },
      {
        id: "c",
        text: "Tại thời điểm $t = 0{,}5\\text{ s}$, gia tốc của vật có giá trị là 20 m/s².",
        answer: true,
        explanation: "Thay $t = 0{,}5\\text{ s}$: $a = 40\\cos(4\\pi \\cdot 0{,}5 + \\frac{\\pi}{3}) = 40\\cos(2\\pi + \\frac{\\pi}{3}) = 40\\cos(\\frac{\\pi}{3}) = 40 \\times 0{,}5 = 20\\text{ m/s}^2$."
      },
      {
        id: "d",
        text: "Quãng đường vật đi trong 3 chu kì là 0,5 m.",
        answer: false,
        explanation: "Ta có $a_{max} = \\omega^2 A \\Rightarrow 40 = (4\\pi)^2 A = 16\\pi^2 A = 16 \\times 10 \\times A = 160A \\Rightarrow A = \\frac{40}{160} = 0{,}25\\text{ m}$.\nTrong 3 chu kì vật đi được: $S = 3 \\times 4A = 12A = 12 \\times 0{,}25 = 3\\text{ m}$ (không phải 0,5 m)."
      }
    ]
  },
  {
    id: "II_3",
    num: 3,
    topic: "Con lắc lò xo & Vận tốc",
    context: "Cho một con lắc lò xo dao động điều hoà với phương trình vận tốc $v = 10\\pi\\cos(\\pi t + \\frac{3\\pi}{4})$ (cm/s).",
    items: [
      {
        id: "a",
        text: "Vận tốc của vật bằng không (độ lớn cực tiểu) khi vật đi qua các vị trí biên âm và biên dương.",
        answer: true,
        explanation: "Ở hai vị trí biên (biên âm và biên dương), vận tốc của vật triệt tiêu ($v = 0$), độ lớn vận tốc đạt cực tiểu."
      },
      {
        id: "b",
        text: "Vận tốc cực đại của con lắc được xác định bằng công thức $v_{max} = \\omega^2 A$.",
        answer: false,
        explanation: "Công thức vận tốc cực đại là $v_{max} = \\omega A$, còn $\\omega^2 A$ là gia tốc cực đại."
      },
      {
        id: "c",
        text: "Tại thời điểm $t = 0{,}25\\text{ s}$, vận tốc của vật có giá trị là $5\\pi$ cm/s.",
        answer: false,
        explanation: "Thay $t = 0{,}25\\text{ s}$: pha dao động là $\\pi \\cdot 0{,}25 + \\frac{3\\pi}{4} = \\frac{\\pi}{4} + \\frac{3\\pi}{4} = \\pi$.\nDo đó $v = 10\\pi\\cos(\\pi) = -10\\pi\\text{ cm/s}$ (không phải $5\\pi$ cm/s)."
      },
      {
        id: "d",
        text: "Quỹ đạo của con lắc lò xo là 20 cm.",
        answer: true,
        explanation: "Ta có $v_{max} = \\omega A \\Rightarrow 10\\pi = \\pi A \\Rightarrow A = 10\\text{ cm}$.\nChiều dài quỹ đạo $L = 2A = 2 \\times 10 = 20\\text{ cm}$."
      }
    ]
  },
  {
    id: "II_4",
    num: 4,
    topic: "Năng lượng dao động lò xo",
    context: "Một con lắc lò xo có vật nhỏ khối lượng 200g dao động điều hòa theo phương trình $x = 5\\cos(10t + \\frac{\\pi}{3})$ (cm) (với $t$ tính bằng giây).",
    items: [
      {
        id: "a",
        text: "Thế năng của vật đạt giá trị lớn nhất khi vật đi qua vị trí cân bằng.",
        answer: false,
        explanation: "Tại vị trí cân bằng $x = 0$ nên thế năng đạt cực tiểu ($W_t = 0$). Thế năng đạt cực đại khi vật ở vị trí biên ($x = \\pm A$)."
      },
      {
        id: "b",
        text: "Khi vật chuyển động từ vị trí biên âm về vị trí cân bằng, thế năng của vật đang chuyển hóa dần thành động năng.",
        answer: true,
        explanation: "Khi đi từ biên về VTCB: tốc độ tăng nên động năng tăng, độ lớn li độ giảm nên thế năng giảm $\\Rightarrow$ thế năng chuyển hóa thành động năng."
      },
      {
        id: "c",
        text: "Cơ năng của con lắc trong quá trình dao động là 0,025 J.",
        answer: true,
        explanation: "Đổi $m = 0{,}2\\text{ kg}, A = 0{,}05\\text{ m}, \\omega = 10\\text{ rad/s}$.\nCơ năng: $W = \\frac{1}{2}m\\omega^2 A^2 = \\frac{1}{2} \\times 0{,}2 \\times 10^2 \\times 0{,}05^2 = 0{,}1 \\times 100 \\times 0{,}0025 = 0{,}025\\text{ J}$."
      },
      {
        id: "d",
        text: "Tại thời điểm $t = \\frac{\\pi}{15}\\text{ s}$, động năng của vật có giá trị là 0,025 J.",
        answer: false,
        explanation: "Tại $t = \\frac{\\pi}{15}\\text{ s}$, pha dao động: $\\Phi = 10 \\cdot \\frac{\\pi}{15} + \\frac{\\pi}{3} = \\frac{2\\pi}{3} + \\frac{\\pi}{3} = \\pi$.\nLi độ: $x = 5\\cos(\\pi) = -5\\text{ cm} = -A$ (vật đang ở biên âm).\nỞ biên âm, tốc độ $v = 0$ nên động năng $W_đ = 0\\text{ J}$ (không phải 0,025 J)."
      }
    ]
  },
  {
    id: "II_5",
    num: 5,
    topic: "Năng lượng dao động con lắc",
    context: "Một vật có khối lượng 100g dao động điều hòa với phương trình $x = 10\\cos(4\\pi t - \\frac{\\pi}{2})$ (cm). Lấy $\\pi^2 = 10$.",
    items: [
      {
        id: "a",
        text: "Động năng của vật đạt giá trị nhỏ nhất khi vật ở vị trí biên dương và biên âm.",
        answer: true,
        explanation: "Ở hai vị trí biên $x = \\pm A$, vận tốc của vật bằng 0 nên động năng nhỏ nhất $W_{đ,min} = 0$."
      },
      {
        id: "b",
        text: "Khi vật chuyển động từ vị trí cân bằng ra vị trí biên dương, động năng của vật tăng dần và thế năng giảm dần.",
        answer: false,
        explanation: "Từ VTCB ra biên dương, vận tốc giảm nên động năng giảm dần, li độ tăng nên thế năng tăng dần."
      },
      {
        id: "c",
        text: "Cơ năng của hệ dao động là 80 J.",
        answer: false,
        explanation: "Đổi đơn vị: $m = 0{,}1\\text{ kg}, A = 0{,}1\\text{ m}, \\omega = 4\\pi\\text{ rad/s} \\Rightarrow \\omega^2 = 16\\pi^2 = 160$.\nCơ năng: $W = \\frac{1}{2}m\\omega^2 A^2 = \\frac{1}{2} \\times 0{,}1 \\times 160 \\times (0{,}1)^2 = 0{,}08\\text{ J}$ (80 J là sai do không đổi cm sang m)."
      },
      {
        id: "d",
        text: "Tại thời điểm $t = \\frac{1}{24}\\text{ s}$, động năng của vật có giá trị là 0,06 J.",
        answer: true,
        explanation: "Tại $t = \\frac{1}{24}\\text{ s}$, pha dao động: $\\Phi = 4\\pi \\cdot \\frac{1}{24} - \\frac{\\pi}{2} = \\frac{\\pi}{6} - \\frac{\\pi}{2} = -\\frac{\\pi}{3}$.\nLi độ: $x = 10\\cos(-\\frac{\\pi}{3}) = 5\\text{ cm} = \\frac{A}{2}$.\nKhi $x = \\frac{A}{2} \\Rightarrow W_t = \\frac{1}{4}W \\Rightarrow W_đ = \\frac{3}{4}W = \\frac{3}{4} \\times 0{,}08 = 0{,}06\\text{ J}$."
      }
    ]
  },
  {
    id: "II_6",
    num: 6,
    topic: "Cơ năng dao động điều hòa",
    context: "Một chất điểm khối lượng 250g dao động điều hòa dọc theo trục Ox. Phương trình dao động của chất điểm là $x = 4\\cos(20t + \\frac{\\pi}{6})$ (cm).",
    items: [
      {
        id: "a",
        text: "Động năng của vật dao động điều hòa đạt giá trị cực đại khi vật đi qua vị trí cân bằng.",
        answer: true,
        explanation: "Tại vị trí cân bằng, tốc độ của vật đạt cực đại $v_{max} = \\omega A$ nên động năng đạt giá trị cực đại $W_{đ,max} = W = \\frac{1}{2}m\\omega^2 A^2$."
      },
      {
        id: "b",
        text: "Khi vật chuyển động chậm dần, cơ năng của vật giảm dần do có sự chuyển hoá năng lượng từ động năng sang thế năng.",
        answer: false,
        explanation: "Trong dao động điều hòa, cơ năng được bảo toàn (không đổi theo thời gian), chỉ có động năng chuyển hóa thành thế năng."
      },
      {
        id: "c",
        text: "Cơ năng của chất điểm trong quá trình dao động là 0,08 J.",
        answer: true,
        explanation: "$m = 0{,}25\\text{ kg}, A = 0{,}04\\text{ m}, \\omega = 20\\text{ rad/s}$.\n$W = \\frac{1}{2}m\\omega^2 A^2 = \\frac{1}{2} \\times 0{,}25 \\times 20^2 \\times (0{,}04)^2 = 0{,}5 \\times 0{,}25 \\times 400 \\times 0{,}0016 = 0{,}08\\text{ J}$."
      },
      {
        id: "d",
        text: "Tại thời điểm $t = \\frac{\\pi}{120}\\text{ s}$, động năng của chất điểm có giá trị là 0,04 J.",
        answer: false,
        explanation: "Tại $t = \\frac{\\pi}{120}\\text{ s}$, pha: $\\Phi = 20 \\cdot \\frac{\\pi}{120} + \\frac{\\pi}{6} = \\frac{\\pi}{6} + \\frac{\\pi}{6} = \\frac{\\pi}{3}$.\n$x = 4\\cos(\\frac{\\pi}{3}) = 2\\text{ cm} = \\frac{A}{2} \\Rightarrow W_t = \\frac{W}{4} \\Rightarrow W_đ = \\frac{3}{4}W = \\frac{3}{4} \\times 0{,}08 = 0{,}06\\text{ J}$ (không phải 0,04 J)."
      }
    ]
  },
  {
    id: "II_7",
    num: 7,
    topic: "Sóng điện từ",
    context: "Cho các phát biểu sau đây về sóng điện từ:",
    items: [
      {
        id: "a",
        text: "Sóng điện từ truyền được trong cả môi trường vật chất (rắn, lỏng, khí) và trong chân không.",
        answer: true,
        explanation: "Khác với sóng cơ, sóng điện từ không cần môi trường vật chất mang hạt mà lan truyền được trong cả chân không (với tốc độ $c = 3 \\cdot 10^8$ m/s) và các môi trường vật chất."
      },
      {
        id: "b",
        text: "Cho 4 bức xạ: tia X, tia hồng ngoại, ánh sáng nhìn thấy, tia tử ngoại. Khi sắp xếp theo thứ tự bước sóng giảm dần, ta có dãy: tia hồng ngoại, ánh sáng nhìn thấy, tia tử ngoại, tia X.",
        answer: true,
        explanation: "Theo thang sóng điện từ: $\\lambda_{hồng ngoại} > \\lambda_{nhìn thấy} > \\lambda_{tử ngoại} > \\lambda_{tia X}$."
      },
      {
        id: "c",
        text: "Tại mỗi điểm có sóng điện từ truyền qua, vectơ cường độ điện trường $\\vec{E}$ và vectơ cảm ứng từ $\\vec{B}$ luôn dao động vuông pha với nhau.",
        answer: false,
        explanation: "Tại mỗi điểm, $\\vec{E}$ và $\\vec{B}$ luôn dao động CÙNG PHA với nhau (chúng đạt cực đại cùng lúc và triệt tiêu cùng lúc, chỉ có phương dao động là vuông góc với nhau)."
      },
      {
        id: "d",
        text: "Khi sóng điện từ truyền từ chân không vào trong nước, tốc độ truyền sóng giảm nhưng tần số của sóng lại tăng lên.",
        answer: false,
        explanation: "Khi truyền qua các môi trường khác nhau, tần số của sóng điện từ luôn KHÔNG ĐỔI. Tốc độ truyền sóng giảm từ $c$ xuống $v = c/n$ nên bước sóng giảm theo."
      }
    ]
  },
  {
    id: "II_8",
    num: 8,
    topic: "Sóng điện từ",
    context: "Cho các phát biểu sau đây về sóng điện từ:",
    items: [
      {
        id: "a",
        text: "Sóng điện từ là sóng ngang.",
        answer: true,
        explanation: "Sóng điện từ là sóng ngang vì các vectơ $\\vec{E}$ và $\\vec{B}$ vuông góc với nhau và vuông góc với phương truyền sóng $\\vec{v}$."
      },
      {
        id: "b",
        text: "Cho 4 bức xạ: sóng vô tuyến, tia tử ngoại, tia hồng ngoại, tia gamma. Khi sắp xếp theo thứ tự tần số tăng dần, ta có dãy: sóng vô tuyến, tia hồng ngoại, tia gamma, tia tử ngoại.",
        answer: false,
        explanation: "Thứ tự tần số tăng dần đúng phải là: sóng vô tuyến < tia hồng ngoại < tia tử ngoại < tia gamma (tia gamma có tần số lớn nhất)."
      },
      {
        id: "c",
        text: "Trong quá trình lan truyền, vectơ cường độ điện trường $\\vec{E}$ và vectơ cảm ứng từ $\\vec{B}$ luôn có phương song song với nhau.",
        answer: false,
        explanation: "Trong sóng điện từ, $\\vec{E}$ và $\\vec{B}$ có phương vuông góc với nhau: $\\vec{E} \\perp \\vec{B}$ và vuông góc với phương truyền sóng."
      },
      {
        id: "d",
        text: "Khi một bức xạ đơn sắc truyền từ thủy tinh ra không khí, bước sóng của bức xạ đó sẽ tăng lên.",
        answer: true,
        explanation: "Khi truyền từ thủy tinh ($n > 1$) ra không khí ($n \\approx 1$), tốc độ truyền sóng tăng từ $v = c/n$ lên $c$. Vì tần số $f$ không đổi nên bước sóng $\\lambda = \\frac{v}{f}$ tăng lên."
      }
    ]
  },
  {
    id: "II_9",
    num: 9,
    topic: "Sóng điện từ",
    context: "Cho các phát biểu sau đây về sóng điện từ:",
    items: [
      {
        id: "a",
        text: "Sóng điện từ không truyền được trong môi trường chân không.",
        answer: false,
        explanation: "Sóng điện từ truyền tốt nhất trong chân không với tốc độ lớn nhất trong tự nhiên: $c \\approx 3 \\cdot 10^8$ m/s."
      },
      {
        id: "b",
        text: "Cho 4 bức xạ: tia gamma, ánh sáng đỏ, tia tử ngoại, sóng vô tuyến. Sắp xếp các bức xạ này theo thứ tự bước sóng tăng dần là: tia gamma, tia tử ngoại, ánh sáng đỏ, sóng vô tuyến.",
        answer: true,
        explanation: "Thứ tự bước sóng tăng dần: $\\lambda_{gamma} < \\lambda_{tử ngoại} < \\lambda_{đỏ} < \\lambda_{vô tuyến}$."
      },
      {
        id: "c",
        text: "Tại bất kì thời điểm nào, ở một điểm có sóng điện từ truyền qua, nếu cường độ điện trường đạt cực đại thì cảm ứng từ tại đó cũng đồng thời đạt giá trị cực đại.",
        answer: true,
        explanation: "Vì tại mỗi điểm, $\\vec{E}$ và $\\vec{B}$ dao động cùng pha với nhau nên chúng cùng đạt cực đại và cùng triệt tiêu đồng thời."
      },
      {
        id: "d",
        text: "Khi truyền từ môi trường nước ra không khí, tần số của sóng điện từ thay đổi làm bước sóng thay đổi theo.",
        answer: false,
        explanation: "Tần số của sóng phụ thuộc duy nhất vào nguồn phát và KHÔNG THAY ĐỔI khi truyền qua các môi trường khác nhau."
      }
    ]
  },
  {
    id: "II_10",
    num: 10,
    topic: "Đồ thị sóng cơ",
    context: "Một sóng cơ học truyền dọc theo trục Ox có đồ thị biểu diễn li độ u (cm) theo tọa độ x (cm) tại một thời điểm nhất định được cho như hình vẽ. Biết chu kì dao động của sóng là $T = 0{,}5\\text{ s}$.",
    image: "assets/image15.jpg",
    items: [
      {
        id: "a",
        text: "Biên độ dao động của sóng cơ này là 2,0 cm.",
        answer: true,
        explanation: "Từ đồ thị, giá trị cực đại của li độ là $u_{max} = 2{,}0$ cm, do đó biên độ sóng $A = 2{,}0$ cm."
      },
      {
        id: "b",
        text: "Bước sóng của sóng cơ lan truyền trên trục Ox là 40 cm.",
        answer: true,
        explanation: "Khoảng cách giữa hai đỉnh sóng liên tiếp (hoặc 1 chu kì không gian) trên đồ thị là từ $x = 10$ cm đến $x = 50$ cm $\\Rightarrow \\lambda = 50 - 10 = 40$ cm (hoặc từ 0 đến 40 cm)."
      },
      {
        id: "c",
        text: "Tốc độ truyền sóng dọc theo trục Ox là 80 cm/s.",
        answer: true,
        explanation: "Tốc độ truyền sóng: $v = \\frac{\\lambda}{T} = \\frac{40}{0{,}5} = 80$ cm/s."
      },
      {
        id: "d",
        text: "Tốc độ dao động cực đại của các phần tử môi trường khi có sóng truyền qua là $16\\pi$ cm/s.",
        answer: false,
        explanation: "Tần số góc: $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{0{,}5} = 4\\pi$ rad/s.\nTốc độ dao động cực đại: $v_{max} = \\omega A = 4\\pi \\times 2{,}0 = 8\\pi$ cm/s (không phải $16\\pi$ cm/s)."
      }
    ]
  },
  {
    id: "II_11",
    num: 11,
    topic: "Đồ thị sóng cơ",
    context: "Một sóng cơ học truyền dọc theo trục Ox có đồ thị biểu diễn li độ u (cm) theo tọa độ x (cm) tại một thời điểm nhất định được cho như hình vẽ. Biết chu kì dao động của sóng là $T = 2{,}5\\text{ s}$.",
    image: "assets/image16.jpg",
    items: [
      {
        id: "a",
        text: "Biên độ dao động của sóng cơ này là 3,0 m.",
        answer: false,
        explanation: "Trục tung ghi đơn vị $u$ là cm, đỉnh sóng ở 3,0 cm nên biên độ là $A = 3{,}0$ cm (không phải 3,0 m)."
      },
      {
        id: "b",
        text: "Bước sóng của sóng cơ lan truyền trên trục Ox là 40 cm.",
        answer: false,
        explanation: "Đỉnh đầu tiên ở $x = 0$, đỉnh tiếp theo ở $x = 80$ cm $\\Rightarrow$ bước sóng $\\lambda = 80$ cm (không phải 40 cm)."
      },
      {
        id: "c",
        text: "Tốc độ truyền sóng dọc theo trục Ox là 32 cm/s.",
        answer: true,
        explanation: "Tốc độ truyền sóng: $v = \\frac{\\lambda}{T} = \\frac{80}{2{,}5} = 32$ cm/s."
      },
      {
        id: "d",
        text: "Tốc độ dao động cực đại của các phần tử môi trường khi có sóng truyền qua là $12\\pi$ cm/s.",
        answer: false,
        explanation: "$v_{max} = \\omega A = \\frac{2\\pi}{T} A = \\frac{2\\pi}{2{,}5} \\times 3 = 2{,}4\\pi$ cm/s (không phải $12\\pi$ cm/s)."
      }
    ]
  },
  {
    id: "II_12",
    num: 12,
    topic: "Đồ thị sóng cơ",
    context: "Một sóng cơ học truyền dọc theo trục Ox có đồ thị biểu diễn li độ u (m) theo tọa độ x (m) tại thời điểm $t = 0$ được cho như hình vẽ. Biết chu kì dao động của sóng là $T = 0{,}2\\text{ s}$.",
    image: "assets/image17.jpg",
    items: [
      {
        id: "a",
        text: "Biên độ dao động của sóng cơ này là 0,01 m.",
        answer: true,
        explanation: "Đỉnh sóng có giá trị $u = 0{,}01$ m $\\Rightarrow$ biên độ dao động $A = 0{,}01$ m."
      },
      {
        id: "b",
        text: "Bước sóng của sóng cơ lan truyền trên trục Ox là 0,02 m.",
        answer: false,
        explanation: "Từ $x = 0$ đến $x = 0{,}02$ m là nửa bước sóng (nửa chu kì hình sin) $\\Rightarrow \\lambda = 2 \\times 0{,}02 = 0{,}04$ m (hoặc khoảng cách giữa 2 điểm cùng trạng thái từ 0 đến 0,04 m)."
      },
      {
        id: "c",
        text: "Tốc độ truyền sóng dọc theo trục Ox là 20 cm/s.",
        answer: true,
        explanation: "Tốc độ truyền sóng: $v = \\frac{\\lambda}{T} = \\frac{0{,}04\\text{ m}}{0{,}2\\text{ s}} = 0{,}2\\text{ m/s} = 20\\text{ cm/s}$."
      },
      {
        id: "d",
        text: "Tốc độ dao động cực đại của các phần tử môi trường khi có sóng truyền qua là $20\\pi$ cm/s.",
        answer: false,
        explanation: "Tần số góc: $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{0{,}2} = 10\\pi$ rad/s.\nTốc độ dao động cực đại: $v_{max} = \\omega A = 10\\pi \\times 0{,}01\\text{ m/s} = 0{,}1\\pi\\text{ m/s} = 10\\pi\\text{ cm/s}$ (không phải $20\\pi$ cm/s)."
      }
    ]
  }
];

// ==================== PHẦN III: 18 CÂU TRẢ LỜI NGẮN ====================
const PART_III_QUESTIONS = [
  {
    id: "III_1",
    num: 1,
    topic: "Dao động điều hòa",
    question: "Một chất điểm dao động điều hòa có phương trình $x = 4\\cos(5\\pi t + \\frac{\\pi}{3})$ (cm) ($t$ tính bằng giây). Tính li độ của chất điểm tại thời điểm $t = 0{,}2\\text{ s}$.",
    answer: "-2",
    acceptableAnswers: ["-2", "-2 cm", "-2cm"],
    unit: "cm",
    explanation: "Thay $t = 0{,}2\\text{ s}$ vào phương trình:\n$x = 4\\cos(5\\pi \\cdot 0{,}2 + \\frac{\\pi}{3}) = 4\\cos(\\pi + \\frac{\\pi}{3}) = 4\\cos(\\frac{4\\pi}{3}) = 4 \\times (-0{,}5) = -2\\text{ cm}$."
  },
  {
    id: "III_2",
    num: 2,
    topic: "Dao động điều hòa",
    question: "Một vật nhỏ dao động điều hòa theo phương trình $x = 5\\cos(10\\pi t - \\frac{\\pi}{6})$ (cm) ($t$ tính bằng giây). Tính li độ của vật tại thời điểm $t = 0{,}5\\text{ s}$. (Kết quả làm tròn đến hàng phần mười).",
    answer: "-4.3",
    acceptableAnswers: ["-4.3", "-4,3", "-4.3 cm", "-4,3 cm"],
    unit: "cm",
    explanation: "Thay $t = 0{,}5\\text{ s}$ vào phương trình:\nPha dao động: $10\\pi \\cdot 0{,}5 - \\frac{\\pi}{6} = 5\\pi - \\frac{\\pi}{6} = 4\\pi + (\\pi - \\frac{\\pi}{6}) = \\frac{5\\pi}{6}$.\n$x = 5\\cos(\\frac{5\\pi}{6}) = 5 \\times \\left(-\\frac{\\sqrt{3}}{2}\\right) \\approx -4{,}33\\text{ cm} \\approx -4{,}3\\text{ cm}$."
  },
  {
    id: "III_3",
    num: 3,
    topic: "Dao động lò xo",
    question: "Một con lắc lò xo dao động với phương trình $x = 6\\cos(4\\pi t + \\frac{\\pi}{2})$ (cm). Tính li độ của vật tại thời điểm $t = 0{,}125\\text{ s}$.",
    answer: "-6",
    acceptableAnswers: ["-6", "-6 cm", "-6cm"],
    unit: "cm",
    explanation: "Thay $t = 0{,}125\\text{ s}$:\nPha dao động: $4\\pi \\cdot 0{,}125 + \\frac{\\pi}{2} = \\frac{\\pi}{2} + \\frac{\\pi}{2} = \\pi$.\n$x = 6\\cos(\\pi) = -6\\text{ cm}$."
  },
  {
    id: "III_4",
    num: 4,
    topic: "Hệ thức độc lập",
    question: "Một vật dao động điều hòa với biên độ 5 cm và chu kì 0,2 s. Khi vật đi qua vị trí có li độ 3 cm thì tốc độ của vật là bao nhiêu cm/s? (Kết quả làm tròn đến hàng đơn vị).",
    answer: "126",
    acceptableAnswers: ["126", "126 cm/s", "125.66", "125,66"],
    unit: "cm/s",
    explanation: "Tần số góc: $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{0{,}2} = 10\\pi\\text{ rad/s}$.\nÁp dụng hệ thức độc lập thời gian:\n$v = \\omega\\sqrt{A^2 - x^2} = 10\\pi\\sqrt{5^2 - 3^2} = 10\\pi \\times 4 = 40\\pi \\approx 40 \\times 3{,}1416 = 125{,}66\\text{ cm/s} \\approx 126\\text{ cm/s}$."
  },
  {
    id: "III_5",
    num: 5,
    topic: "Hệ thức độc lập",
    question: "Một vật dao động điều hòa với tần số góc 10 rad/s. Khi vật có li độ -6 cm thì vận tốc của nó là 80 cm/s. Tính biên độ dao động của vật theo đơn vị cm.",
    answer: "10",
    acceptableAnswers: ["10", "10 cm", "10cm"],
    unit: "cm",
    explanation: "Áp dụng hệ thức độc lập:\n$A = \\sqrt{x^2 + \\left(\\frac{v}{\\omega}\\right)^2} = \\sqrt{(-6)^2 + \\left(\\frac{80}{10}\\right)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}$."
  },
  {
    id: "III_6",
    num: 6,
    topic: "Hệ thức độc lập nâng cao",
    question: "Một chất điểm dao động điều hòa với tần số góc $\\omega = 10\\pi\\text{ rad/s}$. Tại một thời điểm, chất điểm có tốc độ $30\\pi\\text{ cm/s}$ và gia tốc có độ lớn $4000\\text{ cm/s}^2$. Lấy $\\pi^2 = 10$. Tính biên độ dao động của chất điểm theo đơn vị cm. (Kết quả làm tròn đến hàng phần trăm).",
    answer: "5",
    acceptableAnswers: ["5", "5.00", "5,00", "5 cm"],
    unit: "cm",
    explanation: "Ta có $|a| = \\omega^2 |x| \\Rightarrow |x| = \\frac{|a|}{\\omega^2} = \\frac{4000}{(10\\pi)^2} = \\frac{4000}{100 \\times 10} = 4\\text{ cm}$.\nBiên độ dao động:\n$A = \\sqrt{x^2 + \\left(\\frac{v}{\\omega}\\right)^2} = \\sqrt{4^2 + \\left(\\frac{30\\pi}{10\\pi}\\right)^2} = \\sqrt{16 + 3^2} = \\sqrt{25} = 5\\text{ cm}$."
  },
  {
    id: "III_7",
    num: 7,
    topic: "Tỉ số năng lượng",
    question: "Một vật dao động điều hòa với phương trình $x = 10\\cos(4\\pi t + \\frac{\\pi}{3})$ (cm) ($t$ tính bằng giây). Tại vị trí có li độ bằng 5cm, tỉ số giữa động năng và cơ năng của vật là bao nhiêu?",
    answer: "0.75",
    acceptableAnswers: ["0.75", "0,75", "3/4"],
    unit: "",
    explanation: "Biên độ $A = 10\\text{ cm}$. Tại $x = 5\\text{ cm} = \\frac{A}{2}$.\nTỉ số thế năng trên cơ năng: $\\frac{W_t}{W} = \\left(\\frac{x}{A}\\right)^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4} = 0{,}25$.\nTỉ số giữa động năng và cơ năng: $\\frac{W_đ}{W} = 1 - \\frac{W_t}{W} = 1 - 0{,}25 = 0{,}75$ (hoặc $\\frac{3}{4}$)."
  },
  {
    id: "III_8",
    num: 8,
    topic: "Tỉ số năng lượng",
    question: "Một con lắc lò xo dao động theo trục Ox với phương trình $x = 8\\cos(5\\pi t - \\frac{\\pi}{4})$ (cm) ($t$ tính bằng s). Tính tỉ số giữa thế năng và cơ năng của con lắc tại vị trí li độ là $4\\sqrt{2}\\text{ cm}$.",
    answer: "0.5",
    acceptableAnswers: ["0.5", "0,5", "1/2"],
    unit: "",
    explanation: "Biên độ $A = 8\\text{ cm}$. Tại $x = 4\\sqrt{2}\\text{ cm} = \\frac{A\\sqrt{2}}{2}$.\nTỉ số giữa thế năng và cơ năng:\n$\\frac{W_t}{W} = \\left(\\frac{x}{A}\\right)^2 = \\left(\\frac{4\\sqrt{2}}{8}\\right)^2 = \\left(\\frac{\\sqrt{2}}{2}\\right)^2 = \\frac{2}{4} = 0{,}5$ (hoặc $\\frac{1}{2}$)."
  },
  {
    id: "III_9",
    num: 9,
    topic: "Tỉ số năng lượng",
    question: "Một chất điểm dao động điều hòa có phương trình li độ $x = 6\\cos(10\\pi t + \\frac{\\pi}{6})$ (cm). Tại vị trí chất điểm có li độ là -3 cm, tỉ số giữa động năng và thế năng của chất điểm bằng bao nhiêu?",
    answer: "3",
    acceptableAnswers: ["3", "3.0", "3,0"],
    unit: "",
    explanation: "Biên độ $A = 6\\text{ cm}$. Tại $x = -3\\text{ cm} = -\\frac{A}{2}$.\nTa có $\\frac{W_t}{W} = \\left(\\frac{x}{A}\\right)^2 = \\frac{1}{4} \\Rightarrow W_t = \\frac{W}{4}$.\nSuy ra động năng $W_đ = W - W_t = \\frac{3W}{4}$.\nTỉ số giữa động năng và thế năng: $\\frac{W_đ}{W_t} = \\frac{3/4}{1/4} = 3$."
  },
  {
    id: "III_10",
    num: 10,
    topic: "Truyền sóng cơ",
    question: "Một người quan sát một chiếc phao trên mặt biển thấy nó nhô lên cao 5 lần trong khoảng thời gian 8 s. Biết khoảng cách giữa 5 đỉnh sóng liên tiếp là 16 m. Tính tốc độ truyền sóng trên mặt biển (theo đơn vị m/s).",
    answer: "2",
    acceptableAnswers: ["2", "2 m/s", "2.0", "2,0"],
    unit: "m/s",
    explanation: "Phao nhô lên cao 5 lần tương ứng với 4 chu kì sóng: $4T = 8\\text{ s} \\Rightarrow T = 2\\text{ s}$.\nKhoảng cách giữa 5 đỉnh sóng liên tiếp tương ứng với 4 bước sóng: $4\\lambda = 16\\text{ m} \\Rightarrow \\lambda = 4\\text{ m}$.\nTốc độ truyền sóng: $v = \\frac{\\lambda}{T} = \\frac{4}{2} = 2\\text{ m/s}$."
  },
  {
    id: "III_11",
    num: 11,
    topic: "Truyền sóng cơ",
    question: "Sóng cơ lan truyền trên mặt nước với tốc độ 1,5 m/s. Một người quan sát thấy thời gian để 7 đỉnh sóng liên tiếp đi qua một điểm cố định là 12 s. Bước sóng của sóng nước này là bao nhiêu mét?",
    answer: "3",
    acceptableAnswers: ["3", "3 m", "3.0", "3,0"],
    unit: "m",
    explanation: "Thời gian để 7 đỉnh sóng liên tiếp đi qua là 6 chu kì: $6T = 12\\text{ s} \\Rightarrow T = 2\\text{ s}$.\nBước sóng: $\\lambda = v \\cdot T = 1{,}5 \\times 2 = 3\\text{ m}$."
  },
  {
    id: "III_12",
    num: 12,
    topic: "Truyền sóng cơ",
    question: "Một người quan sát sóng trên mặt biển thấy khoảng cách giữa 5 đỉnh sóng liên tiếp là 12 m. Biết tốc độ truyền sóng trên mặt biển là 2,4 m/s. Vận dụng kiến thức về sự truyền sóng, hãy tính tần số của sóng biển này theo đơn vị Hz.",
    answer: "0.8",
    acceptableAnswers: ["0.8", "0,8", "0.8 Hz", "4/5"],
    unit: "Hz",
    explanation: "Khoảng cách giữa 5 đỉnh sóng liên tiếp là $4\\lambda = 12\\text{ m} \\Rightarrow \\lambda = 3\\text{ m}$.\nTần số sóng: $f = \\frac{v}{\\lambda} = \\frac{2{,}4}{3} = 0{,}8\\text{ Hz}$."
  },
  {
    id: "III_13",
    num: 13,
    topic: "Giao thoa ánh sáng",
    question: "Trong thí nghiệm Y-âng về giao thoa ánh sáng, khoảng cách giữa hai khe là 1 mm, khoảng cách từ mặt phẳng chứa hai khe đến màn quan sát là 2 m. Nguồn sáng phát ra ánh sáng đơn sắc có bước sóng $0{,}5\\,\\mu\\text{m}$. Trên màn, xét một bề rộng miền giao thoa 12,5 mm đối xứng qua vân sáng trung tâm. Xác định số vân sáng quan sát được trên miền giao thoa này.",
    answer: "13",
    acceptableAnswers: ["13", "13 vân"],
    unit: "",
    explanation: "Khoảng vân: $i = \\frac{\\lambda D}{a} = \\frac{0{,}5 \\times 2}{1} = 1\\text{ mm}$.\nBề rộng trường giao thoa $L = 12{,}5\\text{ mm}$.\nSố vân sáng: $N_s = 2\\left\\lfloor \\frac{L}{2i} \\right\\rfloor + 1 = 2\\left\\lfloor \\frac{12{,}5}{2 \\times 1} \\right\\rfloor + 1 = 2 \\times 6 + 1 = 13$ vân sáng."
  },
  {
    id: "III_14",
    num: 14,
    topic: "Giao thoa ánh sáng",
    question: "Trong thí nghiệm giao thoa ánh sáng với khe Y-âng, người ta dùng ánh sáng đơn sắc có bước sóng $0{,}6\\,\\mu\\text{m}$. Khoảng cách giữa hai khe là 1,2 mm và khoảng cách từ hai khe đến màn là 2 m. Bề rộng của trường giao thoa trên màn đối xứng qua vân trung tâm là 15,2 mm. Tính số vân tối trên trường giao thoa.",
    answer: "16",
    acceptableAnswers: ["16", "16 vân"],
    unit: "",
    explanation: "Khoảng vân: $i = \\frac{\\lambda D}{a} = \\frac{0{,}6 \\times 2}{1{,}2} = 1\\text{ mm}$.\nToạ độ vùng giao thoa: $-\\frac{L}{2} \\le x \\le \\frac{L}{2} \\Leftrightarrow -7{,}6 \\le (k + 0{,}5)i \\le 7{,}6$.\n$\\Leftrightarrow -7{,}6 \\le k + 0{,}5 \\le 7{,}6 \\Leftrightarrow -8{,}1 \\le k \\le 7{,}1$.\nVì $k \\in \\mathbb{Z} \\Rightarrow k \\in \\{-8, -7, ..., 6, 7\\}$.\nSố vân tối: $7 - (-8) + 1 = 16$ vân tối."
  },
  {
    id: "III_15",
    num: 15,
    topic: "Giao thoa ánh sáng",
    question: "Một thí nghiệm Y-âng được thực hiện với ánh sáng đơn sắc có bước sóng $0{,}4\\,\\mu\\text{m}$. Khoảng cách giữa hai khe là 0,8 mm, khoảng cách từ mặt phẳng chứa hai khe đến màn là 2,4 m. Xét bề rộng miền giao thoa 11 mm đối xứng qua vân trung tâm. Tính tổng số vân sáng và vân tối quan sát được trên miền này.",
    answer: "19",
    acceptableAnswers: ["19", "19 vân"],
    unit: "",
    explanation: "Khoảng vân: $i = \\frac{\\lambda D}{a} = \\frac{0{,}4 \\times 2{,}4}{0{,}8} = 1{,}2\\text{ mm}$.\nBề rộng $L = 11\\text{ mm}$, toạ độ $-5{,}5\\text{ mm} \\le x \\le 5{,}5\\text{ mm}$.\n- Vân sáng: $-5{,}5 \\le k \\cdot 1{,}2 \\le 5{,}5 \\Leftrightarrow -4{,}58 \\le k \\le 4{,}58 \\Rightarrow k \\in \\{-4, ..., 4\\} \\Rightarrow 9$ vân sáng.\n- Vân tối: $-5{,}5 \\le (m + 0{,}5) \\cdot 1{,}2 \\le 5{,}5 \\Leftrightarrow -5{,}08 \\le m \\le 4{,}08 \\Rightarrow m \\in \\{-5, ..., 4\\} \\Rightarrow 10$ vân tối.\nTổng số vân sáng và vân tối: $9 + 10 = 19$."
  },
  {
    id: "III_16",
    num: 16,
    topic: "Sóng dừng",
    question: "Quan sát hình ảnh mô phỏng một sợi dây đàn hồi đang có hiện tượng sóng dừng ổn định. Biết hai đầu dây là hai điểm nút. Số bụng sóng hình thành trên đoạn dây này là bao nhiêu?",
    image: "assets/image18.jpg",
    answer: "4",
    acceptableAnswers: ["4", "4 bụng"],
    unit: "",
    explanation: "Dựa vào hình ảnh sợi dây sóng dừng, ta quan sát thấy có 4 múi sóng (bó sóng) độc lập dao động $\\Rightarrow$ Số bụng sóng hình thành trên dây là 4."
  },
  {
    id: "III_17",
    num: 17,
    topic: "Sóng dừng",
    question: "Quan sát hình ảnh mô phỏng một sợi dây đàn hồi đang có hiện tượng sóng dừng ổn định. Biết hai đầu dây là hai điểm nút. Số nút sóng hình thành trên đoạn dây này là bao nhiêu?",
    image: "assets/image18.jpg",
    answer: "5",
    acceptableAnswers: ["5", "5 nút"],
    unit: "",
    explanation: "Sợi dây có 4 bó sóng và cố định ở cả hai đầu.\nSố nút sóng = Số bó sóng + 1 = $4 + 1 = 5$ nút sóng (kể cả 2 nút ở hai đầu dây cố định)."
  },
  {
    id: "III_18",
    num: 18,
    topic: "Sóng dừng",
    question: "Quan sát hình ảnh mô phỏng một sợi dây đàn hồi đang có hiện tượng sóng dừng ổn định. Biết hai đầu dây là hai điểm nút. Tổng số nút và bụng sóng hình thành trên đoạn dây này là bao nhiêu?",
    image: "assets/image18.jpg",
    answer: "9",
    acceptableAnswers: ["9"],
    unit: "",
    explanation: "Trên sợi dây có 4 bụng sóng và 5 nút sóng.\nTổng số nút sóng và bụng sóng = $5 + 4 = 9$."
  }
];

// Export window.questionsData for the web application
if (typeof window !== 'undefined') {
  window.questionsData = {
    meta: {
      id: "vatly",
      title: "ĐỀ CƯƠNG ÔN TẬP HKI MÔN VẬT LÍ KHỐI 11",
      subject: "VẬT LÍ 11",
      subtitle: "Đề cương ôn tập toàn diện: Dao động & Sóng cơ (84 câu hỏi kèm lời giải chi tiết)",
      badge: "Vật Lí 11 - Chuẩn GDPT 2018",
      icon: "fas fa-atom",
      themeColor: "from-indigo-600 to-violet-500",
      schoolYear: "Năm học 2024 - 2025",
      totalQuestions: 84,
      parts: [
        { id: 1, name: "Phần I", desc: "Câu trắc nghiệm nhiều phương án lựa chọn (54 câu)", count: 54 },
        { id: 2, name: "Phần II", desc: "Câu trắc nghiệm Đúng / Sai (12 câu - 48 ý)", count: 12 },
        { id: 3, name: "Phần III", desc: "Câu trắc nghiệm trả lời ngắn (18 câu)", count: 18 }
      ]
    },
    part1: PART_I_QUESTIONS.map(q => ({
      id: q.num,
      rawId: q.id,
      topic: q.topic,
      question: q.question,
      options: {
        A: (q.options && q.options.find(o => o.key === 'A')) ? q.options.find(o => o.key === 'A').text : '',
        B: (q.options && q.options.find(o => o.key === 'B')) ? q.options.find(o => o.key === 'B').text : '',
        C: (q.options && q.options.find(o => o.key === 'C')) ? q.options.find(o => o.key === 'C').text : '',
        D: (q.options && q.options.find(o => o.key === 'D')) ? q.options.find(o => o.key === 'D').text : ''
      },
      correct: q.answer,
      explanation: q.explanation
    })),
    part2: PART_II_QUESTIONS.map(q => ({
      id: q.num,
      rawId: q.id,
      topic: q.topic,
      context: q.context,
      image: q.image || null,
      subQuestions: {
        a: {
          text: (q.items && q.items.find(i => i.id === 'a')) ? q.items.find(i => i.id === 'a').text : '',
          correct: (q.items && q.items.find(i => i.id === 'a')) ? q.items.find(i => i.id === 'a').answer : false,
          explanation: (q.items && q.items.find(i => i.id === 'a')) ? q.items.find(i => i.id === 'a').explanation : ''
        },
        b: {
          text: (q.items && q.items.find(i => i.id === 'b')) ? q.items.find(i => i.id === 'b').text : '',
          correct: (q.items && q.items.find(i => i.id === 'b')) ? q.items.find(i => i.id === 'b').answer : false,
          explanation: (q.items && q.items.find(i => i.id === 'b')) ? q.items.find(i => i.id === 'b').explanation : ''
        },
        c: {
          text: (q.items && q.items.find(i => i.id === 'c')) ? q.items.find(i => i.id === 'c').text : '',
          correct: (q.items && q.items.find(i => i.id === 'c')) ? q.items.find(i => i.id === 'c').answer : false,
          explanation: (q.items && q.items.find(i => i.id === 'c')) ? q.items.find(i => i.id === 'c').explanation : ''
        },
        d: {
          text: (q.items && q.items.find(i => i.id === 'd')) ? q.items.find(i => i.id === 'd').text : '',
          correct: (q.items && q.items.find(i => i.id === 'd')) ? q.items.find(i => i.id === 'd').answer : false,
          explanation: (q.items && q.items.find(i => i.id === 'd')) ? q.items.find(i => i.id === 'd').explanation : ''
        }
      }
    })),
    part3: PART_III_QUESTIONS.map(q => ({
      id: q.num,
      rawId: q.id,
      topic: q.topic,
      question: q.question,
      image: q.image || null,
      answer: q.answer,
      acceptable: q.acceptableAnswers || [q.answer],
      unit: q.unit || '',
      explanation: q.explanation
    }))
  };
  window.PHYSICS_DATA = window.questionsData;
}
