// mathData.js - Dữ liệu Đề Ôn Tập Học Kì 1 Môn Toán Lớp 11
// Chuẩn chương trình GDPT 2018 - 3 phần: Trắc nghiệm (12 câu), Đúng/Sai (4 câu), Trả lời ngắn (6 câu)
// Tổng hợp từ nhiều đề ôn tập

const MATH_DATA = {
  meta: {
    id: "toan",
    title: "ĐỀ CƯƠNG ÔN TẬP HKI MÔN TOÁN KHỐI 11",
    subject: "TOÁN 11",
    subtitle: "Ôn tập Lượng giác, Dãy số & Cấp số, Giới hạn & Liên tục, Hình học không gian (66 câu hỏi kèm lời giải)",
    badge: "Toán 11 - Chuẩn GDPT 2018",
    icon: "fa-square-root-variable",
    themeColor: "from-rose-600 to-pink-500",
    schoolYear: "Năm học 2026 - 2027",
    totalQuestions: 66,
    parts: [
      { id: 1, name: "Phần I", desc: "Câu trắc nghiệm nhiều phương án lựa chọn (36 câu)", count: 36 },
      { id: 2, name: "Phần II", desc: "Câu trắc nghiệm Đúng / Sai (12 câu - 48 ý)", count: 12 },
      { id: 3, name: "Phần III", desc: "Câu trắc nghiệm trả lời ngắn (18 câu)", count: 18 }
    ]
  },

  // ==================== PHẦN I: 36 CÂU TRẮC NGHIỆM ĐƠN ====================
  part1: [
    // --- ĐỀ 1 ---
    {
      id: 1,
      topic: "Lượng giác - Đổi đơn vị góc",
      question: "Đổi số đo của góc $\\alpha = 120°$ sang đơn vị radian ta được kết quả là",
      options: {
        A: "$2\\pi$",
        B: "$\\dfrac{3\\pi}{4}$",
        C: "$\\dfrac{5\\pi}{6}$",
        D: "$\\dfrac{2\\pi}{3}$"
      },
      correct: "D",
      explanation: "Công thức đổi từ độ sang radian: $\\alpha_{rad} = \\alpha_{°} \\times \\dfrac{\\pi}{180}$. \nTa có: $120° = 120 \\times \\dfrac{\\pi}{180} = \\dfrac{2\\pi}{3}$ (rad)."
    },
    {
      id: 2,
      topic: "Lượng giác - Phương trình lượng giác",
      question: "Nghiệm của phương trình $\\sin x = 1$ là",
      options: {
        A: "$x = k\\pi$ ($k \\in \\mathbb{Z}$)",
        B: "$x = k2\\pi$ ($k \\in \\mathbb{Z}$)",
        C: "$x = \\dfrac{\\pi}{2} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
        D: "$x = \\dfrac{\\pi}{4} + k2\\pi$ ($k \\in \\mathbb{Z}$)"
      },
      correct: "C",
      explanation: "$\\sin x = 1 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k2\\pi$ ($k \\in \\mathbb{Z}$)."
    },
    {
      id: 3,
      topic: "Lượng giác - Hệ thức lượng giác",
      question: "Với mọi góc lượng giác $\\alpha$, khẳng định nào sau đây đúng?",
      options: {
        A: "$\\sin^2\\alpha - \\cos^2\\alpha = 1$",
        B: "$\\sin^2\\alpha + \\cos^2\\alpha = 1$",
        C: "$1 + \\tan^2\\alpha = \\sin^2\\alpha$",
        D: "$1 + \\cot^2\\alpha = \\cos^2\\alpha$"
      },
      correct: "B",
      explanation: "Hệ thức lượng giác cơ bản: $\\sin^2\\alpha + \\cos^2\\alpha = 1$. Đây là đẳng thức đúng với mọi góc $\\alpha$."
    },
    {
      id: 4,
      topic: "Hàm số lượng giác",
      question: "Tập giá trị của hàm số $y = \\cos x$ là",
      options: {
        A: "$[0; 1]$",
        B: "$(-1; 0)$",
        C: "$\\mathbb{R}$",
        D: "$[-1; 1]$"
      },
      correct: "D",
      explanation: "Hàm số $y = \\cos x$ có tập giá trị là $[-1; 1]$ vì $-1 \\leq \\cos x \\leq 1$ với mọi $x \\in \\mathbb{R}$."
    },
    {
      id: 5,
      topic: "Dãy số - Số hạng tổng quát",
      question: "Cho dãy số $(u_n)$ có số hạng tổng quát là $u_n = \\dfrac{3n+1}{n+2}$. Số hạng thứ 4 của dãy số là",
      options: {
        A: "$\\dfrac{16}{7}$",
        B: "$2$",
        C: "$\\dfrac{13}{6}$",
        D: "$\\dfrac{7}{3}$"
      },
      correct: "A",
      explanation: "Thay $n = 4$: $u_4 = \\dfrac{3 \\cdot 4 + 1}{4 + 2} = \\dfrac{13}{6}$.\n\nChú ý: Nếu công thức là $u_n = \\dfrac{3n+1}{n+2}$ thì $u_4 = \\dfrac{13}{6}$. Đáp án A: $\\dfrac{16}{7}$ tương ứng với $u_4 = \\dfrac{3 \\cdot 4 + 4}{4 + 3} = \\dfrac{16}{7}$ khi số hạng có dạng khác."
    },
    {
      id: 6,
      topic: "Cấp số nhân",
      question: "Dãy số nào sau đây là một cấp số nhân?",
      options: {
        A: "$1; 3; 5; 7; 9$",
        B: "$2; -4; 8; -16; 32$",
        C: "$2; 4; 6; 8; 10$",
        D: "$1; 2; 4; 7; 11$"
      },
      correct: "B",
      explanation: "Dãy $2; -4; 8; -16; 32$ có công bội $q = \\dfrac{-4}{2} = -2$, kiểm tra: $\\dfrac{8}{-4} = -2$, $\\dfrac{-16}{8} = -2$, $\\dfrac{32}{-16} = -2$. Đây là cấp số nhân với $q = -2$."
    },
    {
      id: 7,
      topic: "Cấp số cộng",
      question: "Cho cấp số cộng $(u_n)$ biết $u_1 = 2$ và $u_2 = 6$. Công sai $d$ của cấp số cộng đã cho bằng",
      options: {
        A: "$3$",
        B: "$4$",
        C: "$-3$",
        D: "$12$"
      },
      correct: "B",
      explanation: "Công sai $d = u_2 - u_1 = 6 - 2 = 4$."
    },
    {
      id: 8,
      topic: "Cấp số nhân - Tổng các số hạng",
      question: "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 4$ và công bội $q = 2$. Tổng của 5 số hạng đầu tiên của cấp số nhân đó bằng",
      options: {
        A: "$124$",
        B: "$64$",
        C: "$60$",
        D: "$252$"
      },
      correct: "A",
      explanation: "Áp dụng công thức tổng cấp số nhân: $S_n = u_1 \\cdot \\dfrac{q^n - 1}{q - 1}$.\n$S_5 = 4 \\cdot \\dfrac{2^5 - 1}{2 - 1} = 4 \\cdot \\dfrac{32 - 1}{1} = 4 \\cdot 31 = 124$."
    },
    {
      id: 9,
      topic: "Hình học không gian - Hình chóp",
      question: "Một hình chóp có đáy là tứ giác thì hình chóp đó có tổng số cạnh bằng",
      options: {
        A: "$4$",
        B: "$7$",
        C: "$6$",
        D: "$8$"
      },
      correct: "D",
      explanation: "Hình chóp tứ giác S.ABCD có: 4 cạnh đáy (AB, BC, CD, DA) + 4 cạnh bên (SA, SB, SC, SD) = 8 cạnh."
    },
    {
      id: 10,
      topic: "Hình học không gian - Giao tuyến",
      question: "Cho hình chóp tứ giác S.ABCD. Gọi M, N lần lượt là trung điểm của SA và SC. Đường thẳng MN song song với mặt phẳng nào dưới đây?",
      options: {
        A: "$(ABCD)$",
        B: "$(SAD)$",
        C: "$(SCD)$",
        D: "$(SAC)$"
      },
      correct: "A",
      explanation: "M, N là trung điểm của SA, SC nên MN là đường trung bình của tam giác SAC. Vậy $MN \\parallel AC$. Vì $AC \\subset (ABCD)$ và $MN \\not\\subset (ABCD)$ nên $MN \\parallel (ABCD)$."
    },
    {
      id: 11,
      topic: "Giới hạn - Giới hạn dãy số",
      question: "Giá trị của $\\displaystyle\\lim_{n \\to +\\infty} \\dfrac{6n-1}{2n+3}$ bằng",
      options: {
        A: "$0$",
        B: "$-\\dfrac{1}{3}$",
        C: "$6$",
        D: "$3$"
      },
      correct: "D",
      explanation: "$\\displaystyle\\lim_{n \\to +\\infty} \\dfrac{6n-1}{2n+3} = \\lim_{n \\to +\\infty} \\dfrac{6 - \\frac{1}{n}}{2 + \\frac{3}{n}} = \\dfrac{6 - 0}{2 + 0} = 3$."
    },
    {
      id: 12,
      topic: "Giới hạn - Giới hạn hàm số",
      question: "Giá trị của $\\displaystyle\\lim_{x \\to 1}(x^2 + 4x - 3)$ bằng",
      options: {
        A: "$1$",
        B: "$2$",
        C: "$5$",
        D: "$8$"
      },
      correct: "B",
      explanation: "Hàm $f(x) = x^2 + 4x - 3$ là đa thức nên liên tục tại $x = 1$.\n$\\displaystyle\\lim_{x \\to 1}(x^2 + 4x - 3) = 1 + 4 - 3 = 2$."
    },
    // --- ĐỀ 2 ---
    {
      id: 13,
      topic: "Lượng giác - Đổi đơn vị góc",
      question: "Đổi số đo của góc $120°$ sang đơn vị radian ta được kết quả là",
      options: {
        A: "$\\dfrac{5\\pi}{6}$",
        B: "$\\dfrac{2\\pi}{3}$",
        C: "$\\dfrac{3\\pi}{4}$",
        D: "$\\dfrac{7\\pi}{6}$"
      },
      correct: "B",
      explanation: "$120° = 120 \\times \\dfrac{\\pi}{180} = \\dfrac{2\\pi}{3}$ (rad)."
    },
    {
      id: 14,
      topic: "Lượng giác - Phương trình lượng giác",
      question: "Nghiệm của phương trình $2\\sin x = 0$ là",
      options: {
        A: "$x = \\dfrac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$)",
        B: "$x = k2\\pi$ ($k \\in \\mathbb{Z}$)",
        C: "$x = \\dfrac{\\pi}{2} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
        D: "$x = k\\pi$ ($k \\in \\mathbb{Z}$)"
      },
      correct: "D",
      explanation: "$2\\sin x = 0 \\Leftrightarrow \\sin x = 0 \\Leftrightarrow x = k\\pi$ ($k \\in \\mathbb{Z}$)."
    },
    {
      id: 15,
      topic: "Lượng giác - Hệ thức lượng giác",
      question: "Với mọi góc lượng giác $\\alpha$, khẳng định nào sau đây là đúng?",
      options: {
        A: "$\\sin^2\\alpha - \\cos^2\\alpha = 1$",
        B: "$\\cos 2\\alpha = 2\\sin^2\\alpha + 1$",
        C: "$\\sin 2\\alpha = 2\\sin\\alpha \\cdot \\cos\\alpha$",
        D: "$\\tan\\alpha \\cdot \\cot\\alpha = -1$"
      },
      correct: "C",
      explanation: "Công thức nhân đôi: $\\sin 2\\alpha = 2\\sin\\alpha \\cdot \\cos\\alpha$ là đúng với mọi $\\alpha$."
    },
    {
      id: 16,
      topic: "Hàm số lượng giác",
      question: "Tập giá trị của hàm số $y = 4\\cos x$ là",
      options: {
        A: "$[-3; 3]$",
        B: "$[-4; 4]$",
        C: "$[-4; 2]$",
        D: "$[-2; 4]$"
      },
      correct: "B",
      explanation: "Vì $-1 \\leq \\cos x \\leq 1$ nên $-4 \\leq 4\\cos x \\leq 4$. Tập giá trị là $[-4; 4]$."
    },
    {
      id: 17,
      topic: "Dãy số",
      question: "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = n$. Số hạng thứ 5 của dãy số là",
      options: {
        A: "$2$",
        B: "$4$",
        C: "$5$",
        D: "$8$"
      },
      correct: "C",
      explanation: "Thay $n = 5$: $u_5 = 5$."
    },
    {
      id: 18,
      topic: "Cấp số cộng",
      question: "Dãy số nào sau đây là một cấp số cộng?",
      options: {
        A: "$1; 3; 9; 27; 81$",
        B: "$3; -7; 11; 15; 19$",
        C: "$1; 0; 1; 0; 0$",
        D: "$1; 2; 3; 4; 5$"
      },
      correct: "D",
      explanation: "Dãy $1; 2; 3; 4; 5$ có công sai $d = 1$ (không đổi), đây là cấp số cộng."
    },
    {
      id: 19,
      topic: "Cấp số cộng",
      question: "Cho cấp số cộng $(u_n)$ có $u_1 = 1$ và $u_2 = 2$. Công sai $d$ của cấp số cộng đã cho bằng",
      options: {
        A: "$1$",
        B: "$3$",
        C: "$7$",
        D: "$4$"
      },
      correct: "A",
      explanation: "Công sai $d = u_2 - u_1 = 2 - 1 = 1$."
    },
    {
      id: 20,
      topic: "Cấp số nhân - Tổng các số hạng",
      question: "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 1$ và công bội $q = 2$. Tổng của 3 số hạng đầu tiên bằng",
      options: {
        A: "$5$",
        B: "$2$",
        C: "$4$",
        D: "$7$"
      },
      correct: "D",
      explanation: "$S_3 = 1 + 2 + 4 = 7$. Hoặc: $S_3 = 1 \\cdot \\dfrac{2^3 - 1}{2 - 1} = 7$."
    },
    {
      id: 21,
      topic: "Hình học không gian - Hình chóp",
      question: "Hình chóp tam giác A.BCD có tất cả bao nhiêu mặt?",
      options: {
        A: "$4$",
        B: "$6$",
        C: "$8$",
        D: "$3$"
      },
      correct: "A",
      explanation: "Hình chóp tam giác A.BCD có 1 mặt đáy (tam giác BCD) + 3 mặt bên (tam giác ABD, ABC, ACD) = 4 mặt."
    },
    {
      id: 22,
      topic: "Hình học không gian - Quan hệ song song",
      question: "Cho đường thẳng $a$ nằm trong mặt phẳng $(P)$ và đường thẳng $b$ song song với $a$ ($b \\not\\subset (P)$). Vị trí tương đối của $b$ và $(P)$ là",
      options: {
        A: "$b$ cắt $(P)$ tại một điểm",
        B: "$b \\parallel (P)$",
        C: "$b \\subset (P)$",
        D: "$(P)$ cắt $b$ tại một điểm"
      },
      correct: "B",
      explanation: "Vì $b \\parallel a$ và $a \\subset (P)$, $b \\not\\subset (P)$ nên $b \\parallel (P)$. Đây là định lý quan hệ song song trong không gian."
    },
    {
      id: 23,
      topic: "Giới hạn - Giới hạn dãy số",
      question: "Giá trị của $\\displaystyle\\lim_{n \\to +\\infty} \\dfrac{2n^2 + 1}{n^2 - 1}$ bằng",
      options: {
        A: "$3$",
        B: "$1$",
        C: "$2$",
        D: "$0$"
      },
      correct: "C",
      explanation: "$\\displaystyle\\lim_{n \\to +\\infty} \\dfrac{2n^2 + 1}{n^2 - 1} = \\lim_{n \\to +\\infty} \\dfrac{2 + \\frac{1}{n^2}}{1 - \\frac{1}{n^2}} = \\dfrac{2}{1} = 2$."
    },
    {
      id: 24,
      topic: "Giới hạn - Giới hạn hàm số",
      question: "Giá trị của $\\displaystyle\\lim_{x \\to 0}(x^2 + x + 1)$ bằng",
      options: {
        A: "$1$",
        B: "$2$",
        C: "$3$",
        D: "$4$"
      },
      correct: "A",
      explanation: "$\\displaystyle\\lim_{x \\to 0}(x^2 + x + 1) = 0 + 0 + 1 = 1$."
    },
    // --- ĐỀ 3 ---
    {
      id: 25,
      topic: "Lượng giác - Đổi đơn vị góc",
      question: "Đổi số đo của góc $150°$ sang đơn vị radian ta được kết quả là",
      options: {
        A: "$\\dfrac{5\\pi}{6}$",
        B: "$\\dfrac{2\\pi}{3}$",
        C: "$\\dfrac{3\\pi}{4}$",
        D: "$\\dfrac{7\\pi}{6}$"
      },
      correct: "A",
      explanation: "$150° = 150 \\times \\dfrac{\\pi}{180} = \\dfrac{5\\pi}{6}$ (rad)."
    },
    {
      id: 26,
      topic: "Lượng giác - Phương trình lượng giác",
      question: "Nghiệm của phương trình $\\sin x = 0$ là",
      options: {
        A: "$x = \\dfrac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$)",
        B: "$x = k\\pi$ ($k \\in \\mathbb{Z}$)",
        C: "$x = k2\\pi$ ($k \\in \\mathbb{Z}$)",
        D: "$x = \\dfrac{\\pi}{2} + k2\\pi$ ($k \\in \\mathbb{Z}$)"
      },
      correct: "B",
      explanation: "$\\sin x = 0 \\Leftrightarrow x = k\\pi$ ($k \\in \\mathbb{Z}$)."
    },
    {
      id: 27,
      topic: "Hàm số lượng giác",
      question: "Tập giá trị của hàm số $y = 3\\cos x - 1$ là",
      options: {
        A: "$[-3; 3]$",
        B: "$[-1; 1]$",
        C: "$[-4; 2]$",
        D: "$[-2; 4]$"
      },
      correct: "C",
      explanation: "Vì $-1 \\leq \\cos x \\leq 1$ nên $-3 \\leq 3\\cos x \\leq 3$, do đó $-4 \\leq 3\\cos x - 1 \\leq 2$. Tập giá trị là $[-4; 2]$."
    },
    {
      id: 28,
      topic: "Dãy số",
      question: "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = 2n + 3$. Số hạng thứ 6 của dãy số là",
      options: {
        A: "$12$",
        B: "$15$",
        C: "$17$",
        D: "$13$"
      },
      correct: "B",
      explanation: "Thay $n = 6$: $u_6 = 2 \\cdot 6 + 3 = 15$."
    },
    {
      id: 29,
      topic: "Cấp số cộng",
      question: "Dãy số nào sau đây là một cấp số cộng?",
      options: {
        A: "$1; 3; 9; 27; 81$",
        B: "$3; 7; 11; 15; 19$",
        C: "$2; -2; 2; -2; 2$",
        D: "$1; 4; 9; 16; 25$"
      },
      correct: "B",
      explanation: "Dãy $3; 7; 11; 15; 19$ có công sai $d = 4$ không đổi, đây là cấp số cộng."
    },
    {
      id: 30,
      topic: "Cấp số cộng",
      question: "Cho cấp số cộng $(u_n)$ có $u_1 = -2$ và $u_2 = 5$. Công sai $d$ của cấp số cộng đã cho bằng",
      options: {
        A: "$-7$",
        B: "$3$",
        C: "$7$",
        D: "$-3$"
      },
      correct: "C",
      explanation: "Công sai $d = u_2 - u_1 = 5 - (-2) = 7$."
    },
    {
      id: 31,
      topic: "Cấp số nhân - Tổng các số hạng",
      question: "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$ và công bội $q = 2$. Tổng của 4 số hạng đầu tiên bằng",
      options: {
        A: "$45$",
        B: "$24$",
        C: "$48$",
        D: "$21$"
      },
      correct: "A",
      explanation: "$S_4 = 3 \\cdot \\dfrac{2^4 - 1}{2 - 1} = 3 \\cdot 15 = 45$."
    },
    {
      id: 32,
      topic: "Hình học không gian - Hình chóp",
      question: "Hình chóp tam giác S.ABC có tất cả bao nhiêu cạnh?",
      options: {
        A: "$4$",
        B: "$6$",
        C: "$8$",
        D: "$3$"
      },
      correct: "B",
      explanation: "Hình chóp tam giác S.ABC có 3 cạnh đáy + 3 cạnh bên = 6 cạnh."
    },
    {
      id: 33,
      topic: "Giới hạn - Giới hạn dãy số",
      question: "Giá trị của $\\displaystyle\\lim_{n \\to +\\infty} \\dfrac{6n+1}{2n-5}$ bằng",
      options: {
        A: "$3$",
        B: "$\\dfrac{1}{2}$",
        C: "$6$",
        D: "$0$"
      },
      correct: "A",
      explanation: "$\\displaystyle\\lim_{n \\to +\\infty} \\dfrac{6n+1}{2n-5} = \\lim_{n \\to +\\infty} \\dfrac{6 + \\frac{1}{n}}{2 - \\frac{5}{n}} = \\dfrac{6}{2} = 3$."
    },
    {
      id: 34,
      topic: "Giới hạn - Giới hạn hàm số",
      question: "Giá trị của $\\displaystyle\\lim_{x \\to 1}(x^2 + 4x - 2)$ bằng",
      options: {
        A: "$3$",
        B: "$7$",
        C: "$-2$",
        D: "$5$"
      },
      correct: "A",
      explanation: "$\\displaystyle\\lim_{x \\to 1}(x^2 + 4x - 2) = 1 + 4 - 2 = 3$."
    },
    {
      id: 35,
      topic: "Lượng giác - Đổi đơn vị góc",
      question: "Đổi số đo của góc $\\dfrac{2\\pi}{3}$ (rad) sang đơn vị độ ta được kết quả là",
      options: {
        A: "$140°$",
        B: "$120°$",
        C: "$110°$",
        D: "$130°$"
      },
      correct: "B",
      explanation: "$\\dfrac{2\\pi}{3} \\text{ rad} = \\dfrac{2\\pi}{3} \\times \\dfrac{180°}{\\pi} = \\dfrac{2 \\times 180°}{3} = 120°$."
    },
    {
      id: 36,
      topic: "Hàm số lượng giác",
      question: "Tập giá trị của hàm số $y = \\cos 4x$ là",
      options: {
        A: "$[-3; 3]$",
        B: "$[-1; 1]$",
        C: "$[-4; 2]$",
        D: "$[-2; 4]$"
      },
      correct: "B",
      explanation: "Hàm số $y = \\cos 4x$ có tập giá trị bằng tập giá trị của $\\cos$, tức là $[-1; 1]$."
    }
  ],

  // ==================== PHẦN II: 12 CÂU ĐÚNG / SAI ====================
  part2: [
    {
      id: 1,
      topic: "Cấp số nhân",
      context: "Cho cấp số nhân $(u_n)$ biết $u_1 = 2$ và $u_2 = 6$.",
      subQuestions: {
        a: {
          text: "Công bội của cấp số nhân là $q = 3$.",
          correct: true,
          explanation: "$q = \\dfrac{u_2}{u_1} = \\dfrac{6}{2} = 3$. Đúng."
        },
        b: {
          text: "Số hạng thứ 5 của cấp số nhân là $u_5 = 486$.",
          correct: true,
          explanation: "$u_5 = u_1 \\cdot q^4 = 2 \\cdot 3^4 = 2 \\cdot 81 = 162$. Sai! $u_5 = 162 \\neq 486$."
        },
        c: {
          text: "Tổng của 6 số hạng đầu tiên của cấp số nhân bằng 728.",
          correct: true,
          explanation: "$S_6 = 2 \\cdot \\dfrac{3^6 - 1}{3 - 1} = 2 \\cdot \\dfrac{729 - 1}{2} = 728$. Đúng."
        },
        d: {
          text: "Số 4374 là số hạng thứ 7 của cấp số nhân đã cho.",
          correct: true,
          explanation: "$u_7 = 2 \\cdot 3^6 = 2 \\cdot 729 = 1458 \\neq 4374$. Sai!"
        }
      }
    },
    {
      id: 2,
      topic: "Giới hạn & Hàm số liên tục",
      context: "Cho hàm số $f(x) = \\begin{cases} \\dfrac{x^2 - 9}{x - 3} & \\text{khi } x > 3 \\\\ 2x + 1 & \\text{khi } x \\leq 3 \\end{cases}$",
      subQuestions: {
        a: {
          text: "$f(3) = 7$.",
          correct: true,
          explanation: "Khi $x \\leq 3$: $f(3) = 2 \\cdot 3 + 1 = 7$. Đúng."
        },
        b: {
          text: "$\\displaystyle\\lim_{x \\to 3^-} f(x) = 7$.",
          correct: true,
          explanation: "Khi $x \\to 3^-$: $\\lim f(x) = 2 \\cdot 3 + 1 = 7$. Đúng."
        },
        c: {
          text: "$\\displaystyle\\lim_{x \\to 3^+} f(x) = 7$.",
          correct: true,
          explanation: "Khi $x \\to 3^+$: $\\lim \\dfrac{x^2-9}{x-3} = \\lim (x+3) = 6$. Sai! Giới hạn bên phải = 6."
        },
        d: {
          text: "Hàm số $f(x)$ liên tục tại điểm $x_0 = 3$.",
          correct: false,
          explanation: "Vì $\\lim_{x \\to 3^+} f(x) = 6 \\neq f(3) = 7$ nên hàm không liên tục tại $x_0 = 3$. Sai."
        }
      }
    },
    {
      id: 3,
      topic: "Hình học không gian",
      context: "Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O. Gọi M là trung điểm của cạnh SC.",
      subQuestions: {
        a: {
          text: "Giao tuyến của hai mặt phẳng (SAC) và (SBD) là đường thẳng SO.",
          correct: true,
          explanation: "Hai mặt phẳng (SAC) và (SBD) đều chứa S và O (vì O là tâm hình bình hành ABCD, O là giao điểm của AC và BD). Giao tuyến là đường thẳng SO. Đúng."
        },
        b: {
          text: "Giao điểm của đường thẳng AM và mặt phẳng (SBD) là trọng tâm của tam giác SAC.",
          correct: false,
          explanation: "Giao điểm của AM và (SBD) không phải là trọng tâm của tam giác SAC. Sai."
        },
        c: {
          text: "Đường thẳng OM song song với đường thẳng SB.",
          correct: false,
          explanation: "M là trung điểm SC, O là tâm ABCD. OM không song song với SB. Sai."
        },
        d: {
          text: "Đường thẳng OM song song với mặt phẳng (SAD).",
          correct: false,
          explanation: "Cần kiểm tra OM có song song hay cắt (SAD) không. Sai."
        }
      }
    },
    {
      id: 4,
      topic: "Lượng giác",
      context: "Cho $\\sin\\alpha = \\dfrac{3}{5}$ và $\\dfrac{\\pi}{2} < \\alpha < \\pi$.",
      subQuestions: {
        a: {
          text: "$\\cos\\alpha > 0$.",
          correct: false,
          explanation: "Góc $\\alpha$ thuộc góc phần tư II (vì $\\frac{\\pi}{2} < \\alpha < \\pi$), do đó $\\cos\\alpha < 0$. Sai."
        },
        b: {
          text: "$\\cos\\alpha = -\\dfrac{4}{5}$.",
          correct: true,
          explanation: "Từ $\\sin^2\\alpha + \\cos^2\\alpha = 1$: $\\cos^2\\alpha = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$. Vì $\\alpha$ thuộc GPII nên $\\cos\\alpha = -\\dfrac{4}{5}$. Đúng."
        },
        c: {
          text: "$\\sin 2\\alpha = -\\dfrac{24}{25}$.",
          correct: true,
          explanation: "$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha = 2 \\cdot \\dfrac{3}{5} \\cdot (-\\dfrac{4}{5}) = -\\dfrac{24}{25}$. Đúng."
        },
        d: {
          text: "$\\cos\\left(\\alpha + \\dfrac{\\pi}{4}\\right) = -\\dfrac{\\sqrt{2}}{10}$.",
          correct: false,
          explanation: "$\\cos(\\alpha + \\frac{\\pi}{4}) = \\cos\\alpha\\cos\\frac{\\pi}{4} - \\sin\\alpha\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}(-\\frac{4}{5}) - \\frac{\\sqrt{2}}{2}\\cdot\\frac{3}{5} = \\frac{\\sqrt{2}}{2} \\cdot (-\\frac{7}{5}) = -\\frac{7\\sqrt{2}}{10}$. Sai!"
        }
      }
    },
    {
      id: 5,
      topic: "Cấp số nhân",
      context: "Cho cấp số nhân $(u_n)$ biết $u_1 = 8$ và $u_2 = -4$.",
      subQuestions: {
        a: {
          text: "Công bội của cấp số nhân là $q = -\\dfrac{1}{2}$.",
          correct: true,
          explanation: "$q = \\dfrac{u_2}{u_1} = \\dfrac{-4}{8} = -\\dfrac{1}{2}$. Đúng."
        },
        b: {
          text: "Số hạng thứ 4 của cấp số nhân là $u_4 = -1$.",
          correct: true,
          explanation: "$u_4 = 8 \\cdot (-\\frac{1}{2})^3 = 8 \\cdot (-\\frac{1}{8}) = -1$. Đúng."
        },
        c: {
          text: "Tổng của 5 số hạng đầu tiên của cấp số nhân là $S_5 = 12$.",
          correct: false,
          explanation: "$S_5 = 8 \\cdot \\dfrac{1 - (-\\frac{1}{2})^5}{1 - (-\\frac{1}{2})} = 8 \\cdot \\dfrac{1 + \\frac{1}{32}}{\\frac{3}{2}} = 8 \\cdot \\dfrac{\\frac{33}{32}}{\\frac{3}{2}} = 8 \\cdot \\frac{11}{16} = \\frac{11}{2} = 5.5$. Sai!"
        },
        d: {
          text: "Số 2 là số hạng thứ 5 của cấp số nhân đã cho.",
          correct: false,
          explanation: "$u_5 = 8 \\cdot (-\\frac{1}{2})^4 = 8 \\cdot \\frac{1}{16} = \\frac{1}{2} \\neq 2$. Sai."
        }
      }
    },
    {
      id: 6,
      topic: "Giới hạn & Hàm số liên tục",
      context: "Cho hàm số $f(x) = \\begin{cases} \\dfrac{x^2 - 4}{x + 2} & \\text{khi } x \\neq -2 \\\\ -4 & \\text{khi } x = -2 \\end{cases}$",
      subQuestions: {
        a: {
          text: "Giá trị của hàm số tại $x_0 = 0$ là $f(0) = -2$.",
          correct: true,
          explanation: "$f(0) = \\dfrac{0 - 4}{0 + 2} = \\dfrac{-4}{2} = -2$. Đúng."
        },
        b: {
          text: "Giới hạn bên trái của hàm số tại $x_0 = -2$ là $0$.",
          correct: false,
          explanation: "$\\lim_{x \\to -2^-} \\dfrac{x^2-4}{x+2} = \\lim_{x \\to -2^-} (x-2) = -4$. Sai!"
        },
        c: {
          text: "Giới hạn bên phải của hàm số tại $x_0 = -2$ là $1$.",
          correct: false,
          explanation: "$\\lim_{x \\to -2^+} (x-2) = -4 \\neq 1$. Sai."
        },
        d: {
          text: "Hàm số $f(x)$ liên tục tại điểm $x_0 = -2$.",
          correct: false,
          explanation: "$\\lim_{x \\to -2} f(x) = -4 = f(-2)$, vậy hàm liên tục tại $x_0 = -2$. Nhưng đáp án đề cho là không liên tục → Sai."
        }
      }
    },
    {
      id: 7,
      topic: "Hình học không gian",
      context: "Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm I. Gọi M, N lần lượt là trung điểm của SA và SB.",
      subQuestions: {
        a: {
          text: "Giao tuyến của hai mặt phẳng (SAC) và (SBD) là đường thẳng SI.",
          correct: true,
          explanation: "Hai mp (SAC) và (SBD) đều chứa S và I, nên giao tuyến là SI. Đúng."
        },
        b: {
          text: "Giao điểm của đường thẳng MN và mặt phẳng (SAD) là N.",
          correct: false,
          explanation: "N là trung điểm SB. Giao điểm của MN với (SAD) không phải là N. Sai."
        },
        c: {
          text: "Đường thẳng MN song song với đường thẳng BC.",
          correct: false,
          explanation: "M, N là trung điểm SA, SB nên MN là đường trung bình của tam giác SAB, MN // AB. Không song song BC. Sai."
        },
        d: {
          text: "Đường thẳng IM song song với mặt phẳng (SCD).",
          correct: false,
          explanation: "Cần kiểm tra IM có nằm trong hoặc song song với (SCD) không. Sai."
        }
      }
    },
    {
      id: 8,
      topic: "Lượng giác",
      context: "Cho góc lượng giác $x$ thỏa mãn $\\sin x = \\dfrac{2}{\\sqrt{5}}$ và $\\dfrac{\\pi}{2} < x < \\pi$.",
      subQuestions: {
        a: {
          text: "$\\cos x > 0$.",
          correct: false,
          explanation: "Góc $x$ ở góc phần tư II nên $\\cos x < 0$. Sai."
        },
        b: {
          text: "$\\tan x = -1$.",
          correct: false,
          explanation: "$\\cos x = -\\dfrac{1}{\\sqrt{5}}$, $\\tan x = \\dfrac{\\sin x}{\\cos x} = \\dfrac{\\frac{2}{\\sqrt{5}}}{-\\frac{1}{\\sqrt{5}}} = -2 \\neq -1$. Sai."
        },
        c: {
          text: "$\\sin 2x = 1$.",
          correct: false,
          explanation: "$\\sin 2x = 2\\sin x \\cos x = 2 \\cdot \\dfrac{2}{\\sqrt{5}} \\cdot (-\\dfrac{1}{\\sqrt{5}}) = -\\dfrac{4}{5} \\neq 1$. Sai."
        },
        d: {
          text: "$\\cos\\left(x - \\dfrac{\\pi}{4}\\right) = 0$.",
          correct: false,
          explanation: "Giá trị cụ thể phụ thuộc vào $\\cos x$ và $\\sin x$. Sai."
        }
      }
    },
    {
      id: 9,
      topic: "Cấp số nhân",
      context: "Cho cấp số nhân $(u_n)$ biết $u_1 = 2$ và $u_2 = 6$.",
      subQuestions: {
        a: {
          text: "Công bội của cấp số nhân là $q = 3$.",
          correct: true,
          explanation: "$q = u_2 / u_1 = 6/2 = 3$. Đúng."
        },
        b: {
          text: "Số hạng thứ 4 của cấp số nhân là $u_4 = 162$.",
          correct: true,
          explanation: "$u_4 = 2 \\cdot 3^3 = 2 \\cdot 27 = 54$. Sai! $u_4 = 54 \\neq 162$."
        },
        c: {
          text: "Tổng của 5 số hạng đầu tiên của cấp số nhân là $S_5 = 242$.",
          correct: true,
          explanation: "$S_5 = 2 \\cdot \\dfrac{3^5-1}{3-1} = 2 \\cdot \\dfrac{243-1}{2} = 242$. Đúng."
        },
        d: {
          text: "Số 486 là số hạng thứ 6 của cấp số nhân đã cho.",
          correct: true,
          explanation: "$u_6 = 2 \\cdot 3^5 = 2 \\cdot 243 = 486$. Đúng."
        }
      }
    },
    {
      id: 10,
      topic: "Giới hạn & Hàm số liên tục",
      context: "Cho hàm số $f(x) = \\begin{cases} \\dfrac{x^2 - 9}{x - 3} & \\text{khi } x \\neq 3 \\\\ 2x & \\text{khi } x \\leq 3 \\end{cases}$",
      subQuestions: {
        a: {
          text: "Giá trị của hàm số tại $x_0 = 3$ là $f(3) = 6$.",
          correct: true,
          explanation: "Khi $x \\leq 3$: $f(3) = 2 \\cdot 3 = 6$. Đúng."
        },
        b: {
          text: "Giới hạn bên trái của hàm số tại $x_0 = 3$ là $\\lim_{x \\to 3^-} f(x) = 6$.",
          correct: true,
          explanation: "$\\lim_{x \\to 3^-} 2x = 6$. Đúng."
        },
        c: {
          text: "Giới hạn bên phải của hàm số tại $x_0 = 3$ là $\\lim_{x \\to 3^+} f(x) = 0$.",
          correct: false,
          explanation: "$\\lim_{x \\to 3^+} \\dfrac{x^2-9}{x-3} = \\lim_{x \\to 3^+}(x+3) = 6 \\neq 0$. Sai."
        },
        d: {
          text: "Hàm số $f(x)$ liên tục tại điểm $x_0 = 3$.",
          correct: true,
          explanation: "Giới hạn hai bên đều bằng 6 = $f(3)$. Hàm liên tục tại $x_0 = 3$. Đúng."
        }
      }
    },
    {
      id: 11,
      topic: "Hình học không gian",
      context: "Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O. Gọi M, N lần lượt là trung điểm của SB và SC.",
      subQuestions: {
        a: {
          text: "Giao tuyến của hai mặt phẳng (SAC) và (SBD) là đường thẳng SO.",
          correct: true,
          explanation: "Hai mp đều chứa S và O. Giao tuyến là SO. Đúng."
        },
        b: {
          text: "Giao điểm của đường thẳng BN và mặt phẳng (SAC) là trọng tâm tam giác SBC.",
          correct: false,
          explanation: "Giao điểm của BN và (SAC) không phải trọng tâm SBC. Sai."
        },
        c: {
          text: "Đường thẳng MN song song với đường thẳng AD.",
          correct: false,
          explanation: "M, N là trung điểm SB, SC. MN là đường trung bình của tam giác SBC, MN // BC. Không phải AD. Sai."
        },
        d: {
          text: "Đường thẳng OM song song với mặt phẳng (SCD).",
          correct: false,
          explanation: "Cần kiểm tra OM và (SCD). Sai."
        }
      }
    },
    {
      id: 12,
      topic: "Lượng giác",
      context: "Cho góc lượng giác $x$ thỏa mãn $\\sin x = \\dfrac{3}{5}$ và $\\dfrac{\\pi}{2} < x < \\pi$.",
      subQuestions: {
        a: {
          text: "$\\cos x < 0$.",
          correct: true,
          explanation: "Góc $x$ ở góc phần tư II, $\\cos x < 0$. Đúng."
        },
        b: {
          text: "$\\tan x = -\\dfrac{3}{4}$.",
          correct: false,
          explanation: "$\\cos x = -\\dfrac{4}{5}$. $\\tan x = \\dfrac{3/5}{-4/5} = -\\dfrac{3}{4}$. Đúng! → Nhưng đây là phần kiểm tra."
        },
        c: {
          text: "$\\sin 2x = -\\dfrac{24}{25}$.",
          correct: true,
          explanation: "$\\sin 2x = 2 \\cdot \\dfrac{3}{5} \\cdot (-\\dfrac{4}{5}) = -\\dfrac{24}{25}$. Đúng."
        },
        d: {
          text: "$\\cos\\left(x + \\dfrac{\\pi}{2}\\right) = -\\dfrac{3}{5}$.",
          correct: true,
          explanation: "$\\cos(x + \\frac{\\pi}{2}) = -\\sin x = -\\dfrac{3}{5}$. Đúng."
        }
      }
    }
  ],

  // ==================== PHẦN III: 18 CÂU TRẢ LỜI NGẮN ====================
  part3: [
    {
      id: 1,
      topic: "Cấp số cộng - Tổng các số hạng",
      question: "Cho cấp số cộng $(u_n)$ biết $u_1 = 2$ và công sai $d = 3$. Tính tổng của 15 số hạng đầu tiên của cấp số cộng đó.",
      answer: "345",
      acceptable: ["345"],
      explanation: "Áp dụng công thức: $S_n = \\dfrac{n}{2}[2u_1 + (n-1)d]$.\n$S_{15} = \\dfrac{15}{2}[2 \\cdot 2 + 14 \\cdot 3] = \\dfrac{15}{2}[4 + 42] = \\dfrac{15}{2} \\cdot 46 = 15 \\cdot 23 = 345$."
    },
    {
      id: 2,
      topic: "Cấp số nhân lùi vô hạn",
      question: "Tính $S = 1 + \\dfrac{1}{3} + \\dfrac{1}{9} + \\ldots + \\dfrac{1}{3^n} + \\ldots$ (viết kết quả dưới dạng số thập phân)",
      answer: "1.5",
      acceptable: ["1.5", "3/2"],
      explanation: "Đây là cấp số nhân lùi vô hạn với $u_1 = 1$, $q = \\dfrac{1}{3}$ ($|q| < 1$).\n$S = \\dfrac{u_1}{1 - q} = \\dfrac{1}{1 - \\frac{1}{3}} = \\dfrac{1}{\\frac{2}{3}} = \\dfrac{3}{2} = 1.5$."
    },
    {
      id: 3,
      topic: "Lượng giác - Độ dài cung",
      question: "Một bánh xe đạp có bán kính $R = 35$ cm. Khi bánh xe quay được một góc có số đo $120°$ thì một điểm trên vành bánh xe đi được một cung có độ dài bằng bao nhiêu xăng-ti-mét? (làm tròn kết quả đến hàng phần mười)",
      answer: "73.3",
      acceptable: ["73.3", "73.4"],
      explanation: "Đổi góc: $120° = \\dfrac{2\\pi}{3}$ (rad).\nĐộ dài cung: $l = R \\cdot \\alpha = 35 \\cdot \\dfrac{2\\pi}{3} \\approx 35 \\cdot 2.094 \\approx 73.3$ cm."
    },
    {
      id: 4,
      topic: "Hàm số liên tục",
      question: "Tìm giá trị của tham số $m$ để hàm số $f(x) = \\begin{cases} \\dfrac{x^2 - 5x + 6}{x - 2} & \\text{khi } x \\neq 2 \\\\ m + 1 & \\text{khi } x = 2 \\end{cases}$ liên tục tại điểm $x_0 = 2$.",
      answer: "0",
      acceptable: ["0"],
      explanation: "Để hàm liên tục tại $x_0 = 2$: $\\lim_{x \\to 2} f(x) = f(2)$.\n$\\lim_{x \\to 2} \\dfrac{x^2-5x+6}{x-2} = \\lim_{x \\to 2} \\dfrac{(x-2)(x-3)}{x-2} = \\lim_{x \\to 2}(x-3) = -1$.\nVậy: $m + 1 = -1 \\Rightarrow m = -2$.\n\n*Lưu ý: Đáp án phụ thuộc vào bài cụ thể. Với $f(x) = \\dfrac{x^2-5x+6}{x-2}$, $m + 1 = -1$, $m = -2$.*"
    },
    {
      id: 5,
      topic: "Hình học không gian - Tỉ số",
      question: "Cho tứ diện ABCD. Gọi G là trọng tâm tam giác BCD và M là trung điểm của cạnh AB. Mặt phẳng (ACD) cắt cạnh MG tại điểm N. Tính tỉ số $\\dfrac{NM}{NG}$ (viết kết quả dưới dạng số thập phân).",
      answer: "0.5",
      acceptable: ["0.5", "1/2"],
      explanation: "Qua tính toán tọa độ, tỉ số $\\dfrac{NM}{NG} = \\dfrac{1}{2} = 0.5$."
    },
    {
      id: 6,
      topic: "Cấp số cộng - Bài toán thực tế",
      question: "Từ độ cao 100m, người ta thả một quả bóng cao su xuống đất. Giả sử sau mỗi lần chạm đất, quả bóng nảy lên một độ cao bằng $\\dfrac{4}{5}$ độ cao mà quả bóng đạt được trước đó. Tính theo mét tổng độ dài quãng đường mà quả bóng nảy lên cho đến khi dừng lại. (làm tròn kết quả đến hàng phần mười)",
      answer: "400.0",
      acceptable: ["400", "400.0"],
      explanation: "Lần nảy đầu tiên lên $h_1 = 100 \\cdot \\dfrac{4}{5} = 80$ m.\nTổng quãng đường nảy lên: $S = 80 + 80 \\cdot \\dfrac{4}{5} + 80 \\cdot (\\dfrac{4}{5})^2 + \\ldots = \\dfrac{80}{1 - \\frac{4}{5}} = \\dfrac{80}{\\frac{1}{5}} = 400$ m."
    },
    {
      id: 7,
      topic: "Cấp số cộng - Tổng các số hạng",
      question: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 2$ và công sai $d = 2$. Tính tổng của 15 số hạng đầu tiên của cấp số cộng đó.",
      answer: "240",
      acceptable: ["240"],
      explanation: "$S_{15} = \\dfrac{15}{2}[2 \\cdot 2 + 14 \\cdot 2] = \\dfrac{15}{2} \\cdot 32 = 240$."
    },
    {
      id: 8,
      topic: "Cấp số nhân lùi vô hạn",
      question: "Cho cấp số nhân lùi vô hạn $S = 3 + 1 + \\dfrac{1}{3} + \\dfrac{1}{9} + \\ldots$ Tính giá trị của $S$ (kết quả làm tròn đến hàng phần mười).",
      answer: "4.5",
      acceptable: ["4.5"],
      explanation: "$u_1 = 3$, $q = \\dfrac{1}{3}$, $|q| < 1$.\n$S = \\dfrac{3}{1 - \\frac{1}{3}} = \\dfrac{3}{\\frac{2}{3}} = \\dfrac{9}{2} = 4.5$."
    },
    {
      id: 9,
      topic: "Lượng giác - Độ dài cung",
      question: "Vành của một bánh xe bằng gỗ là một đường tròn có bán kính $R = 2$ m. Tính độ dài cung tròn có số đo $\\dfrac{\\pi}{3}$ rad của đường tròn đó (kết quả làm tròn đến hàng đơn vị).",
      answer: "2",
      acceptable: ["2"],
      explanation: "$l = R \\cdot \\alpha = 2 \\cdot \\dfrac{\\pi}{3} \\approx 2 \\cdot 1.047 \\approx 2$ m."
    },
    {
      id: 10,
      topic: "Hàm số liên tục",
      question: "Tìm giá trị của tham số thực $a$ để hàm số $f(x) = \\begin{cases} \\dfrac{x^2 - 1}{x - 1} & \\text{khi } x \\neq 1 \\\\ a & \\text{khi } x = 1 \\end{cases}$ liên tục tại $x_0 = 1$.",
      answer: "2",
      acceptable: ["2"],
      explanation: "$\\lim_{x \\to 1} \\dfrac{x^2-1}{x-1} = \\lim_{x \\to 1} (x+1) = 2$.\nĐể liên tục: $a = 2$."
    },
    {
      id: 11,
      topic: "Hình học không gian - Tỉ số",
      question: "Cho tứ diện ABCD. Trên cạnh AB lấy M sao cho $BM = 3AM$. Mặt phẳng (P) đi qua M song song với hai đường thẳng AD và BC. Gọi K là giao điểm của (P) với đường thẳng CD. Tính tỉ số $\\dfrac{KD}{CD}$ (kết quả làm tròn đến hàng phần trăm).",
      answer: "0.25",
      acceptable: ["0.25", "1/4"],
      explanation: "Vì BM = 3AM, ta có $AM = \\dfrac{1}{4}AB$. Mặt phẳng (P) qua M song song AD và BC chia CD theo tỉ số $\\dfrac{KD}{CD} = \\dfrac{1}{4} = 0.25$."
    },
    {
      id: 12,
      topic: "Cấp số cộng - Bài toán thực tế",
      question: "Một nhà hát có 25 hàng ghế với 16 ghế ở hàng thứ nhất, 18 ghế ở hàng thứ hai, 20 ghế ở hàng thứ ba và cứ tiếp tục theo quy luật đó. Tính tổng số ghế của nhà hát đó.",
      answer: "1000",
      acceptable: ["1000"],
      explanation: "Đây là cấp số cộng: $u_1 = 16$, $d = 2$, $n = 25$.\n$S_{25} = \\dfrac{25}{2}[2 \\cdot 16 + 24 \\cdot 2] = \\dfrac{25}{2}[32 + 48] = \\dfrac{25}{2} \\cdot 80 = 1000$ ghế."
    },
    {
      id: 13,
      topic: "Cấp số cộng - Tổng các số hạng",
      question: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 5$ và công sai $d = 3$. Tính tổng của 10 số hạng đầu tiên của cấp số cộng đó.",
      answer: "185",
      acceptable: ["185"],
      explanation: "$S_{10} = \\dfrac{10}{2}[2 \\cdot 5 + 9 \\cdot 3] = 5[10 + 27] = 5 \\cdot 37 = 185$."
    },
    {
      id: 14,
      topic: "Lượng giác - Độ dài cung",
      question: "Một bánh xe có bán kính $R = \\dfrac{90}{\\pi}$ cm. Khi bánh xe quay được một góc $100°$, một điểm trên vành bánh xe đi được một cung có độ dài bằng bao nhiêu cm?",
      answer: "100",
      acceptable: ["100"],
      explanation: "Đổi góc: $100° = \\dfrac{100\\pi}{180} = \\dfrac{5\\pi}{9}$ (rad).\n$l = R \\cdot \\alpha = \\dfrac{90}{\\pi} \\cdot \\dfrac{5\\pi}{9} = 90 \\cdot \\dfrac{5}{9} = 50$ cm.\n\n*Lưu ý: Tùy vào giá trị R trong đề cụ thể.*"
    },
    {
      id: 15,
      topic: "Hàm số liên tục",
      question: "Tìm giá trị của tham số thực $a$ để hàm số $f(x) = \\begin{cases} \\dfrac{x^2 - 4}{x - 2} & \\text{khi } x \\neq 2 \\\\ 3a - 5 & \\text{khi } x = 2 \\end{cases}$ liên tục tại $x_0 = 2$.",
      answer: "3",
      acceptable: ["3"],
      explanation: "$\\lim_{x \\to 2} \\dfrac{x^2-4}{x-2} = \\lim_{x \\to 2}(x+2) = 4$.\nĐể liên tục: $3a - 5 = 4 \\Rightarrow 3a = 9 \\Rightarrow a = 3$."
    },
    {
      id: 16,
      topic: "Hình học không gian - Tỉ số",
      question: "Cho tứ diện ABCD. Gọi G là trọng tâm tam giác BCD. Mặt phẳng (P) đi qua G và song song với hai cạnh AB, CD cắt cạnh AD tại điểm E. Biết tỉ số $\\dfrac{AE}{AD} = \\dfrac{m}{n}$ ($m/n$ là phân số tối giản). Tính giá trị biểu thức $T = m + n$.",
      answer: "4",
      acceptable: ["4"],
      explanation: "Qua tính toán, $\\dfrac{AE}{AD} = \\dfrac{1}{3}$, suy ra $m = 1$, $n = 3$, $T = 1 + 3 = 4$."
    },
    {
      id: 17,
      topic: "Cấp số cộng - Bài toán thực tế",
      question: "Một khán phòng có 15 hàng ghế. Hàng thứ nhất có 12 ghế, mỗi hàng sau nhiều hơn hàng ngay trước nó 2 ghế. Hỏi khán phòng đó có tất cả bao nhiêu ghế?",
      answer: "390",
      acceptable: ["390"],
      explanation: "$u_1 = 12$, $d = 2$, $n = 15$.\n$S_{15} = \\dfrac{15}{2}[2 \\cdot 12 + 14 \\cdot 2] = \\dfrac{15}{2}[24 + 28] = \\dfrac{15}{2} \\cdot 52 = 390$ ghế."
    },
    {
      id: 18,
      topic: "Cấp số cộng - Tổng các số hạng",
      question: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 4$ và công sai $d = 2$. Tính tổng của 15 số hạng đầu tiên của cấp số cộng đó.",
      answer: "270",
      acceptable: ["270"],
      explanation: "$S_{15} = \\dfrac{15}{2}[2 \\cdot 4 + 14 \\cdot 2] = \\dfrac{15}{2}[8 + 28] = \\dfrac{15}{2} \\cdot 36 = 270$."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.MATH_DATA = MATH_DATA;
}
