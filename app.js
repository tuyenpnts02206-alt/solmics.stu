// app.js - Solmics Multi-Subject Exam Review Application (Physics, Chemistry, History 11)
// Handles state management, multi-subject switching, scoring, practice/exam modes, KaTeX rendering, analytics, and dark mode.

(function () {
  'use strict';

  // Helper to safely access current subject questionsData
  function getQuestions() {
    const key = state.currentSubject || 'vatly';
    if (key === 'hoahoc' && typeof window !== 'undefined' && window.CHEMISTRY_DATA) {
      return window.CHEMISTRY_DATA;
    }
    if (key === 'lichsu' && typeof window !== 'undefined' && window.HISTORY_DATA) {
      return window.HISTORY_DATA;
    }
    if (typeof window !== 'undefined') {
      if (window.PHYSICS_DATA) return window.PHYSICS_DATA;
      if (window.questionsData) return window.questionsData;
    }
    return { part1: [], part2: [], part3: [] };
  }

  // --- STATE ---
  const state = {
    currentSubject: localStorage.getItem('solmics_active_subject') || 'vatly',
    mode: 'practice', // 'practice' | 'exam'
    userAnswers: {
      part1: {}, // { [id]: 'A' | 'B' | 'C' | 'D' }
      part2: {}, // { [id]: { a: true/false, b: true/false, c: true/false, d: true/false } }
      part3: {}  // { [id]: 'string' }
    },
    showExplanations: {}, // { [uniqueKey]: boolean } for practice mode toggle
    bookmarks: new Set(),
    activeFilter: 'all', // 'all' | 'part1' | 'part2' | 'part3' | 'wrong' | 'bookmarked'
    searchQuery: '',
    submitted: false,
    examTimeRemaining: 50 * 60, // 50 minutes in seconds
    timerInterval: null
  };

  function getStorageKey() {
    return 'solmics_review_data_' + (state.currentSubject || 'vatly');
  }

  // --- INIT ---
  document.addEventListener('DOMContentLoaded', () => {
    loadSavedState();
    setupEventListeners();
    updateSubjectUI();
    renderAll();
    updateDashboard();
    initCharts();
  });

  // --- LOCAL STORAGE ---
  function saveState() {
    try {
      const dataToSave = {
        mode: state.mode,
        userAnswers: state.userAnswers,
        bookmarks: Array.from(state.bookmarks),
        submitted: state.submitted,
        examTimeRemaining: state.examTimeRemaining
      };
      localStorage.setItem(getStorageKey(), JSON.stringify(dataToSave));
    } catch (e) {
      console.warn('Cannot save to localStorage', e);
    }
  }

  function loadSavedState() {
    try {
      const saved = localStorage.getItem(getStorageKey());
      if (saved) {
        const parsed = JSON.parse(saved);
        state.mode = parsed.mode || 'practice';
        state.userAnswers = parsed.userAnswers || { part1: {}, part2: {}, part3: {} };
        state.bookmarks = new Set(parsed.bookmarks || []);
        state.submitted = parsed.submitted || false;
        state.examTimeRemaining = parsed.examTimeRemaining || 50 * 60;
      } else {
        state.mode = 'practice';
        state.userAnswers = { part1: {}, part2: {}, part3: {} };
        state.bookmarks = new Set();
        state.submitted = false;
        state.examTimeRemaining = 50 * 60;
      }
    } catch (e) {
      console.warn('Cannot parse saved state', e);
    }
  }

  function resetAllData() {
    const qData = getQuestions();
    const subName = qData.meta?.subject || 'môn này';
    if (confirm(`Bạn có chắc chắn muốn làm lại từ đầu bài ${subName}? Toàn bộ câu trả lời của môn này sẽ bị xóa.`)) {
      if (state.timerInterval) clearInterval(state.timerInterval);
      state.userAnswers = { part1: {}, part2: {}, part3: {} };
      state.showExplanations = {};
      state.bookmarks.clear();
      state.submitted = false;
      state.examTimeRemaining = 50 * 60;
      localStorage.removeItem(getStorageKey());
      if (state.mode === 'exam') startExamTimer();
      renderAll();
      updateDashboard();
      updateCharts();
    }
  }

  // --- SCORING LOGIC ---
  function calculateScore() {
    const qData = getQuestions();
    let p1Correct = 0;
    let p1Wrong = 0;
    let p1Answered = 0;
    let p1Points = 0;

    (qData.part1 || []).forEach(q => {
      const ans = state.userAnswers.part1[q.id];
      if (ans !== undefined && ans !== null) {
        p1Answered++;
        if (ans === q.correct) {
          p1Correct++;
          p1Points += 0.25;
        } else {
          p1Wrong++;
        }
      }
    });

    let p2TotalCorrectSub = 0;
    let p2TotalWrongSub = 0;
    let p2FullyCorrect = 0;
    let p2Answered = 0;
    let p2Points = 0;
    let p2QuestionsWithMistake = 0;

    (qData.part2 || []).forEach(q => {
      const ansMap = state.userAnswers.part2[q.id] || {};
      const subKeys = ['a', 'b', 'c', 'd'];
      let answeredSubCount = 0;
      let correctSubCount = 0;

      subKeys.forEach(k => {
        if (ansMap[k] !== undefined && ansMap[k] !== null) {
          answeredSubCount++;
          const targetCorrect = q.subQuestions && q.subQuestions[k] ? q.subQuestions[k].correct : false;
          if (ansMap[k] === targetCorrect) {
            correctSubCount++;
            p2TotalCorrectSub++;
          } else {
            p2TotalWrongSub++;
          }
        }
      });

      if (answeredSubCount > 0) {
        p2Answered++;
        if (correctSubCount === 1) p2Points += 0.1;
        else if (correctSubCount === 2) p2Points += 0.25;
        else if (correctSubCount === 3) p2Points += 0.5;
        else if (correctSubCount === 4) {
          p2Points += 1.0;
          p2FullyCorrect++;
        }
        if (correctSubCount < 4) {
          p2QuestionsWithMistake++;
        }
      }
    });

    let p3Correct = 0;
    let p3Wrong = 0;
    let p3Answered = 0;
    let p3Points = 0;

    (qData.part3 || []).forEach(q => {
      const val = state.userAnswers.part3[q.id];
      if (val !== undefined && val !== null && String(val).trim() !== '') {
        p3Answered++;
        if (checkPart3Answer(val, q)) {
          p3Correct++;
          p3Points += 0.25;
        } else {
          p3Wrong++;
        }
      }
    });

    const p1Count = qData.part1?.length || 0;
    const p2Count = qData.part2?.length || 0;
    const p3Count = qData.part3?.length || 0;

    const totalQuestions = p1Count + p2Count + p3Count;
    const totalAnswered = p1Answered + p2Answered + p3Answered;
    const totalUnanswered = totalQuestions - totalAnswered;
    const totalCorrect = p1Correct + p2FullyCorrect + p3Correct;
    const totalWrong = p1Wrong + p2QuestionsWithMistake + p3Wrong;

    const rawPoints = p1Points + p2Points + p3Points;
    const maxRawPoints = (p1Count * 0.25) + (p2Count * 1.0) + (p3Count * 0.25);
    const scale10 = maxRawPoints > 0 ? (rawPoints / maxRawPoints) * 10.0 : 0;

    return {
      p1: { answered: p1Answered, correct: p1Correct, wrong: p1Wrong, points: p1Points, total: p1Count },
      p2: { answered: p2Answered, correctSubs: p2TotalCorrectSub, wrongSubs: p2TotalWrongSub, fullyCorrect: p2FullyCorrect, points: p2Points, total: p2Count },
      p3: { answered: p3Answered, correct: p3Correct, wrong: p3Wrong, points: p3Points, total: p3Count },
      totalQuestions,
      totalAnswered,
      totalUnanswered,
      totalCorrect,
      totalWrong,
      rawPoints: Math.round(rawPoints * 100) / 100,
      maxRawPoints: Math.round(maxRawPoints * 10) / 10,
      scale10: Math.round(scale10 * 100) / 100,
      accuracyPct: totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0
    };
  }

  function checkPart3Answer(userVal, q) {
    if (!userVal) return false;
    let clean = String(userVal).trim().toLowerCase().replace(',', '.');
    clean = clean.replace(/(m|cm|mm|s|giây|hz|j|rad\/s|n\/m|w|v\/m|v|amu|gam|g|mol|cm⁻¹)$/gi, '').trim();

    const target = String(q.answer).trim().toLowerCase().replace(',', '.');
    if (clean === target) return true;

    if (q.acceptable && Array.isArray(q.acceptable)) {
      for (let acc of q.acceptable) {
        let accClean = String(acc).trim().toLowerCase().replace(',', '.');
        if (clean === accClean) return true;
      }
    }

    const numUser = parseFloat(clean);
    const numTarget = parseFloat(target);
    if (!isNaN(numUser) && !isNaN(numTarget)) {
      if (Math.abs(numUser - numTarget) < 0.05) {
        return true;
      }
    }

    return false;
  }

  function isQuestionWrong(part, q) {
    if (part === 'part1') {
      const ans = state.userAnswers.part1[q.id];
      return ans !== undefined && ans !== null && ans !== q.correct;
    } else if (part === 'part2') {
      const ansMap = state.userAnswers.part2[q.id];
      if (!ansMap) return false;
      const subKeys = ['a', 'b', 'c', 'd'];
      let hasAnswer = false;
      let hasError = false;
      subKeys.forEach(k => {
        if (ansMap[k] !== undefined && ansMap[k] !== null) {
          hasAnswer = true;
          const targetCorrect = q.subQuestions && q.subQuestions[k] ? q.subQuestions[k].correct : false;
          if (ansMap[k] !== targetCorrect) {
            hasError = true;
          }
        }
      });
      return hasAnswer && hasError;
    } else if (part === 'part3') {
      const val = state.userAnswers.part3[q.id];
      return val !== undefined && val !== null && String(val).trim() !== '' && !checkPart3Answer(val, q);
    }
    return false;
  }

  // --- RENDERING ---
  function renderAll() {
    renderQuestionList();
    renderNavigationGrid();
    triggerKaTeX();
  }

  function renderQuestionList() {
    const container = document.getElementById('questionsContainer');
    if (!container) return;
    container.innerHTML = '';

    const qData = getQuestions();
    const filter = state.activeFilter;
    const search = state.searchQuery.trim().toLowerCase();

    const itemsToRender = [];

    const shouldCheckP1 = filter === 'all' || filter === 'part1' || filter === 'wrong' || filter === 'bookmarked';
    const shouldCheckP2 = filter === 'all' || filter === 'part2' || filter === 'wrong' || filter === 'bookmarked';
    const shouldCheckP3 = filter === 'all' || filter === 'part3' || filter === 'wrong' || filter === 'bookmarked';

    if (shouldCheckP1) {
      (qData.part1 || []).forEach(q => {
        if (matchesFilter('part1', q, filter, search)) {
          itemsToRender.push({ part: 'part1', data: q });
        }
      });
    }

    if (shouldCheckP2) {
      (qData.part2 || []).forEach(q => {
        if (matchesFilter('part2', q, filter, search)) {
          itemsToRender.push({ part: 'part2', data: q });
        }
      });
    }

    if (shouldCheckP3) {
      (qData.part3 || []).forEach(q => {
        if (matchesFilter('part3', q, filter, search)) {
          itemsToRender.push({ part: 'part3', data: q });
        }
      });
    }

    if (itemsToRender.length === 0) {
      container.innerHTML = `
        <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-10 text-center my-4 transition-colors">
          <div class="w-16 h-16 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
            <i class="fas fa-search"></i>
          </div>
          <h3 class="text-base font-semibold text-slate-800 dark:text-slate-200 mb-1">Không có câu hỏi nào phù hợp</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            ${filter === 'wrong' ? 'Chúc mừng! Hiện tại bạn chưa có câu trả lời sai nào.' : 'Vui lòng chọn bộ lọc khác hoặc xoá ô tìm kiếm để xem câu hỏi.'}
          </p>
        </div>
      `;
      return;
    }

    itemsToRender.forEach(item => {
      let cardEl;
      if (item.part === 'part1') {
        cardEl = createPart1Card(item.data);
      } else if (item.part === 'part2') {
        cardEl = createPart2Card(item.data);
      } else if (item.part === 'part3') {
        cardEl = createPart3Card(item.data);
      }
      if (cardEl) container.appendChild(cardEl);
    });
  }

  function matchesFilter(part, q, filter, search) {
    if (search) {
      const qText = (q.question || q.context || '') + ' ' + (q.id || '') + ' ' + (q.topic || '');
      if (!qText.toLowerCase().includes(search)) {
        return false;
      }
    }

    const uniqueId = `${part}_${q.id}`;

    if (filter === 'wrong') {
      return isQuestionWrong(part, q);
    }

    if (filter === 'bookmarked') {
      return state.bookmarks.has(uniqueId);
    }

    return true;
  }

  // --- PART 1 CARD ---
  function createPart1Card(q) {
    const card = document.createElement('div');
    const uniqueKey = `part1_${q.id}`;
    const userAns = state.userAnswers.part1[q.id];
    const isAnswered = userAns !== undefined && userAns !== null;
    const isCorrect = isAnswered && userAns === q.correct;
    const isWrong = isAnswered && !isCorrect;
    const showFeedback = state.mode === 'practice' ? isAnswered : state.submitted;
    const isBookmarked = state.bookmarks.has(uniqueKey);

    let statusBadge = '';
    if (showFeedback) {
      if (isCorrect) {
        statusBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"><i class="fas fa-check-circle"></i> Đúng</span>`;
      } else if (isWrong) {
        statusBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800"><i class="fas fa-times-circle"></i> Sai</span>`;
      }
    }

    card.id = `qcard_${uniqueKey}`;
    card.className = `bg-white dark:bg-slate-900 rounded-2xl shadow-sm border transition-all duration-200 p-5 md:p-6 mb-5 relative ${
      showFeedback && isWrong 
        ? 'border-rose-300 dark:border-rose-700 ring-1 ring-rose-200 dark:ring-rose-800/40' 
        : 'border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-700'
    }`;

    const optionsHtml = ['A', 'B', 'C', 'D'].map(optKey => {
      const optText = (q.options && q.options[optKey]) ? q.options[optKey] : '';
      let btnStyle = 'border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-850';
      let iconHtml = `<span class="w-7 h-7 rounded-lg border border-slate-300 dark:border-slate-600 flex items-center justify-center font-semibold text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 mr-3 flex-shrink-0">${optKey}</span>`;

      if (userAns === optKey) {
        btnStyle = 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/70 text-indigo-900 dark:text-indigo-200 font-medium ring-1 ring-indigo-500';
        iconHtml = `<span class="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-semibold text-xs mr-3 flex-shrink-0">${optKey}</span>`;
      }

      if (showFeedback) {
        if (optKey === q.correct) {
          btnStyle = 'border-emerald-500 dark:border-emerald-600 bg-emerald-50 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500';
          iconHtml = `<span class="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-semibold text-xs mr-3 flex-shrink-0"><i class="fas fa-check"></i></span>`;
        } else if (userAns === optKey && optKey !== q.correct) {
          btnStyle = 'border-rose-500 dark:border-rose-600 bg-rose-50 dark:bg-rose-950/70 text-rose-900 dark:text-rose-200 font-semibold ring-1 ring-rose-500';
          iconHtml = `<span class="w-7 h-7 rounded-lg bg-rose-600 text-white flex items-center justify-center font-semibold text-xs mr-3 flex-shrink-0"><i class="fas fa-times"></i></span>`;
        }
      }

      return `
        <button type="button" 
          class="opt-btn w-full text-left p-3 rounded-xl border flex items-center text-sm md:text-base transition-all duration-150 ${btnStyle}"
          data-part="part1" data-id="${q.id}" data-opt="${optKey}"
          ${state.mode === 'exam' && state.submitted ? 'disabled' : ''}>
          ${iconHtml}
          <div class="flex-1">${optText}</div>
        </button>
      `;
    }).join('');

    const showExplBox = showFeedback || state.showExplanations[uniqueKey];
    const explanationHtml = `
      <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <div class="flex items-center justify-between mb-2">
          <button type="button" class="toggle-expl-btn text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-1.5 focus:outline-none" data-key="${uniqueKey}">
            <i class="fas fa-lightbulb"></i>
            <span>${showExplBox ? 'Ẩn lời giải chi tiết' : 'Xem lời giải chi tiết'}</span>
            <i class="fas fa-chevron-${showExplBox ? 'up' : 'down'} text-[10px]"></i>
          </button>
          ${showFeedback ? `<span class="text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">Đáp án đúng: <strong>${q.correct}</strong></span>` : ''}
        </div>
        <div class="expl-content ${showExplBox ? 'block' : 'hidden'} bg-amber-50/70 dark:bg-amber-950/40 rounded-xl p-4 border border-amber-200/80 dark:border-amber-800/60 text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
          <div class="flex items-start gap-2.5">
            <span class="text-amber-600 dark:text-amber-400 mt-0.5 text-base flex-shrink-0"><i class="fas fa-graduation-cap"></i></span>
            <div class="flex-1 overflow-x-auto">
              <strong class="text-amber-900 dark:text-amber-300 block mb-1 font-semibold">Lời giải chi tiết:</strong>
              <div>${q.explanation}</div>
            </div>
          </div>
        </div>
      </div>
    `;

    let imageHtml = '';
    if (q.image) {
      imageHtml = `
        <div class="my-3 flex justify-center">
          <img src="${q.image}" alt="Hình vẽ minh họa câu ${q.id}" class="max-w-full md:max-h-72 object-contain rounded-lg shadow-sm bg-white p-1 border border-slate-200 dark:border-slate-700" />
        </div>
      `;
    }

    card.innerHTML = `
      <div class="flex items-start justify-between gap-3 mb-3">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="bg-indigo-600 text-white font-bold text-xs px-2.5 py-1 rounded-lg">Phần I - Câu ${q.id}</span>
          ${q.topic ? `<span class="text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">${q.topic}</span>` : ''}
          ${statusBadge}
        </div>
        <div class="flex items-center gap-1">
          <button type="button" class="bookmark-btn p-1.5 rounded-lg text-slate-400 dark:text-slate-500 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition" title="Đánh dấu câu này" data-key="${uniqueKey}">
            <i class="${isBookmarked ? 'fas fa-bookmark text-amber-500' : 'far fa-bookmark'}"></i>
          </button>
        </div>
      </div>

      <div class="text-slate-800 dark:text-slate-100 font-medium text-base md:text-lg mb-4 leading-relaxed">
        ${q.question}
      </div>

      ${imageHtml}

      <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-2">
        ${optionsHtml}
      </div>

      ${explanationHtml}
    `;

    return card;
  }

  // --- PART 2 CARD ---
  function createPart2Card(q) {
    const card = document.createElement('div');
    const uniqueKey = `part2_${q.id}`;
    const userAnsMap = state.userAnswers.part2[q.id] || {};
    const isBookmarked = state.bookmarks.has(uniqueKey);

    let subAnsweredCount = 0;
    let subCorrectCount = 0;
    const subKeys = ['a', 'b', 'c', 'd'];
    subKeys.forEach(k => {
      if (userAnsMap[k] !== undefined && userAnsMap[k] !== null) {
        subAnsweredCount++;
        const targetCorrect = q.subQuestions && q.subQuestions[k] ? q.subQuestions[k].correct : false;
        if (userAnsMap[k] === targetCorrect) {
          subCorrectCount++;
        }
      }
    });

    const showFeedback = state.mode === 'practice' ? (subAnsweredCount > 0) : state.submitted;

    let statusBadge = '';
    if (showFeedback && subAnsweredCount > 0) {
      if (subCorrectCount === 4) {
        statusBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"><i class="fas fa-check-double"></i> Đúng 4/4 ý (1.0 đ)</span>`;
      } else {
        statusBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">Đúng ${subCorrectCount}/4 ý</span>`;
      }
    }

    card.id = `qcard_${uniqueKey}`;
    card.className = `bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-violet-200 dark:hover:border-violet-700 transition-all duration-200 p-5 md:p-6 mb-5 relative`;

    let imageHtml = '';
    if (q.image) {
      imageHtml = `
        <div class="my-4 p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center">
          <img src="${q.image}" alt="Hình vẽ minh họa câu ${q.id}" class="max-w-full md:max-h-72 object-contain rounded-lg shadow-sm bg-white p-1" />
          <span class="text-xs text-slate-500 dark:text-slate-400 mt-2 italic">Hình ảnh minh họa / đồ thị cho Câu ${q.id}</span>
        </div>
      `;
    }

    const subRowsHtml = subKeys.map(k => {
      const sub = (q.subQuestions && q.subQuestions[k]) ? q.subQuestions[k] : { text: '', correct: false, explanation: '' };
      const userSubVal = userAnsMap[k];
      const subAnswered = userSubVal !== undefined && userSubVal !== null;
      const subCorrect = subAnswered && userSubVal === sub.correct;

      let rowHighlight = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850';
      if (showFeedback && subAnswered) {
        rowHighlight = subCorrect 
          ? 'border-emerald-300 dark:border-emerald-700 bg-emerald-50/40 dark:bg-emerald-950/30' 
          : 'border-rose-300 dark:border-rose-700 bg-rose-50/40 dark:bg-rose-950/30';
      }

      return `
        <div class="p-3.5 rounded-xl border ${rowHighlight} transition mb-3">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-start gap-2.5 flex-1">
              <span class="font-bold text-sm bg-violet-100 dark:bg-violet-950 text-violet-800 dark:text-violet-300 px-2 py-0.5 rounded uppercase mt-0.5">${k})</span>
              <div class="text-sm md:text-base text-slate-800 dark:text-slate-200 font-normal leading-relaxed">${sub.text}</div>
            </div>
            
            <div class="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
              <button type="button" 
                class="tf-btn px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold border transition-all ${
                  userSubVal === true 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm' 
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                }"
                data-part="part2" data-id="${q.id}" data-sub="${k}" data-val="true"
                ${state.mode === 'exam' && state.submitted ? 'disabled' : ''}>
                <i class="fas fa-check mr-1"></i> Đúng
              </button>

              <button type="button" 
                class="tf-btn px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold border transition-all ${
                  userSubVal === false 
                    ? 'bg-rose-600 text-white border-rose-600 shadow-sm' 
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                }"
                data-part="part2" data-id="${q.id}" data-sub="${k}" data-val="false"
                ${state.mode === 'exam' && state.submitted ? 'disabled' : ''}>
                <i class="fas fa-times mr-1"></i> Sai
              </button>
            </div>
          </div>

          ${showFeedback && subAnswered ? `
            <div class="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs flex items-center justify-between flex-wrap gap-1">
              <span class="font-medium ${subCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}">
                <i class="fas ${subCorrect ? 'fa-check' : 'fa-times'} mr-1"></i>
                Đáp án đúng: <strong>${sub.correct ? 'ĐÚNG' : 'SAI'}</strong>
              </span>
              <span class="text-slate-500 dark:text-slate-400 italic">${sub.explanation}</span>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    card.innerHTML = `
      <div class="flex items-start justify-between gap-3 mb-3">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="bg-violet-600 text-white font-bold text-xs px-2.5 py-1 rounded-lg">Phần II - Câu ${q.id}</span>
          ${q.topic ? `<span class="text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">${q.topic}</span>` : ''}
          ${statusBadge}
        </div>
        <div class="flex items-center gap-1">
          <button type="button" class="bookmark-btn p-1.5 rounded-lg text-slate-400 dark:text-slate-500 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition" title="Đánh dấu câu này" data-key="${uniqueKey}">
            <i class="${isBookmarked ? 'fas fa-bookmark text-amber-500' : 'far fa-bookmark'}"></i>
          </button>
        </div>
      </div>

      <div class="text-slate-800 dark:text-slate-100 font-medium text-base md:text-lg mb-2 leading-relaxed">
        ${q.context}
      </div>

      ${imageHtml}

      <div class="mt-4">
        ${subRowsHtml}
      </div>
    `;

    return card;
  }

  // --- PART 3 CARD ---
  function createPart3Card(q) {
    const card = document.createElement('div');
    const uniqueKey = `part3_${q.id}`;
    const userVal = state.userAnswers.part3[q.id] || '';
    const isAnswered = String(userVal).trim() !== '';
    const isCorrect = isAnswered && checkPart3Answer(userVal, q);
    const isWrong = isAnswered && !isCorrect;
    const showFeedback = state.mode === 'practice' ? isAnswered : state.submitted;
    const isBookmarked = state.bookmarks.has(uniqueKey);

    let statusBadge = '';
    if (showFeedback) {
      if (isCorrect) {
        statusBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"><i class="fas fa-check-circle"></i> Chính xác</span>`;
      } else if (isWrong) {
        statusBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800"><i class="fas fa-times-circle"></i> Chưa đúng</span>`;
      }
    }

    card.id = `qcard_${uniqueKey}`;
    card.className = `bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-700 transition-all duration-200 p-5 md:p-6 mb-5 relative ${
      showFeedback && isWrong ? 'border-rose-300 dark:border-rose-700 ring-1 ring-rose-200 dark:ring-rose-800/40' : ''
    }`;

    let imageHtml = '';
    if (q.image) {
      imageHtml = `
        <div class="my-4 p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center">
          <img src="${q.image}" alt="Hình vẽ minh họa câu ${q.id}" class="max-w-full md:max-h-72 object-contain rounded-lg shadow-sm bg-white p-1" />
          <span class="text-xs text-slate-500 dark:text-slate-400 mt-2 italic">Hình ảnh minh họa cho Câu ${q.id}</span>
        </div>
      `;
    }

    const showExplBox = showFeedback || state.showExplanations[uniqueKey];
    const explanationHtml = `
      <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <div class="flex items-center justify-between mb-2">
          <button type="button" class="toggle-expl-btn text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 flex items-center gap-1.5 focus:outline-none" data-key="${uniqueKey}">
            <i class="fas fa-lightbulb"></i>
            <span>${showExplBox ? 'Ẩn lời giải chi tiết' : 'Xem lời giải chi tiết'}</span>
            <i class="fas fa-chevron-${showExplBox ? 'up' : 'down'} text-[10px]"></i>
          </button>
          ${showFeedback ? `<span class="text-xs font-semibold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded border border-teal-200 dark:border-teal-800">Đáp án chuẩn: <strong>${q.answer} ${q.unit || ''}</strong></span>` : ''}
        </div>
        <div class="expl-content ${showExplBox ? 'block' : 'hidden'} bg-amber-50/70 dark:bg-amber-950/40 rounded-xl p-4 border border-amber-200/80 dark:border-amber-800/60 text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
          <div class="flex items-start gap-2.5">
            <span class="text-amber-600 dark:text-amber-400 mt-0.5 text-base flex-shrink-0"><i class="fas fa-graduation-cap"></i></span>
            <div class="flex-1 overflow-x-auto">
              <strong class="text-amber-900 dark:text-amber-300 block mb-1 font-semibold">Hướng dẫn giải:</strong>
              <div>${q.explanation}</div>
            </div>
          </div>
        </div>
      </div>
    `;

    card.innerHTML = `
      <div class="flex items-start justify-between gap-3 mb-3">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="bg-teal-600 text-white font-bold text-xs px-2.5 py-1 rounded-lg">Phần III - Câu ${q.id}</span>
          ${q.topic ? `<span class="text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">${q.topic}</span>` : ''}
          ${statusBadge}
        </div>
        <div class="flex items-center gap-1">
          <button type="button" class="bookmark-btn p-1.5 rounded-lg text-slate-400 dark:text-slate-500 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition" title="Đánh dấu câu này" data-key="${uniqueKey}">
            <i class="${isBookmarked ? 'fas fa-bookmark text-amber-500' : 'far fa-bookmark'}"></i>
          </button>
        </div>
      </div>

      <div class="text-slate-800 dark:text-slate-100 font-medium text-base md:text-lg mb-2 leading-relaxed">
        ${q.question}
      </div>

      ${imageHtml}

      <div class="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div class="relative flex-1 max-w-md">
          <input type="text" 
            class="p3-input w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900/40 text-slate-800 dark:text-slate-100 font-medium text-sm md:text-base outline-none transition placeholder:text-slate-400 dark:placeholder:text-slate-500"
            placeholder="Nhập kết quả số (VD: 2.5 hoặc 2,5)..."
            value="${userVal}"
            data-part="part3" data-id="${q.id}"
            ${state.mode === 'exam' && state.submitted ? 'disabled' : ''} />
          ${q.unit ? `<span class="absolute right-3.5 top-2.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">${q.unit}</span>` : ''}
        </div>

        <button type="button" 
          class="p3-check-btn px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm shadow-sm transition active:scale-95 flex items-center justify-center gap-1.5"
          data-id="${q.id}">
          <i class="fas fa-check"></i> Xác nhận
        </button>
      </div>

      ${explanationHtml}
    `;

    return card;
  }

  // --- NAVIGATION GRID ---
  function renderNavigationGrid() {
    const qData = getQuestions();
    const p1Container = document.getElementById('navGridPart1');
    const p2Container = document.getElementById('navGridPart2');
    const p3Container = document.getElementById('navGridPart3');

    if (p1Container) {
      p1Container.innerHTML = (qData.part1 || []).map(q => {
        const uniqueKey = `part1_${q.id}`;
        const ans = state.userAnswers.part1[q.id];
        const isAnswered = ans !== undefined && ans !== null;
        const isCorrect = isAnswered && ans === q.correct;
        const isWrong = isAnswered && !isCorrect;
        const isBookmarked = state.bookmarks.has(uniqueKey);

        let btnClass = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700';
        if (state.mode === 'practice') {
          if (isCorrect) btnClass = 'bg-emerald-500 text-white border-emerald-600 shadow-xs';
          else if (isWrong) btnClass = 'bg-rose-500 text-white border-rose-600 shadow-xs';
          else if (isAnswered) btnClass = 'bg-indigo-500 text-white border-indigo-600';
        } else {
          if (state.submitted) {
            if (isCorrect) btnClass = 'bg-emerald-500 text-white border-emerald-600';
            else if (isWrong) btnClass = 'bg-rose-500 text-white border-rose-600';
          } else {
            if (isAnswered) btnClass = 'bg-indigo-600 text-white border-indigo-700 shadow-xs';
          }
        }

        return `
          <button type="button" class="nav-jump-btn relative w-8 h-8 rounded-lg text-xs font-bold border transition flex items-center justify-center ${btnClass}" data-key="${uniqueKey}">
            ${q.id}
            ${isBookmarked ? `<span class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full ring-2 ring-white dark:ring-slate-900"></span>` : ''}
          </button>
        `;
      }).join('');
    }

    if (p2Container) {
      p2Container.innerHTML = (qData.part2 || []).map(q => {
        const uniqueKey = `part2_${q.id}`;
        const ansMap = state.userAnswers.part2[q.id] || {};
        const count = Object.keys(ansMap).length;
        const isBookmarked = state.bookmarks.has(uniqueKey);

        let btnClass = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700';
        if (state.mode === 'practice' || state.submitted) {
          const isWrong = isQuestionWrong('part2', q);
          if (count === 4 && !isWrong) btnClass = 'bg-emerald-500 text-white border-emerald-600';
          else if (isWrong) btnClass = 'bg-rose-500 text-white border-rose-600';
          else if (count > 0) btnClass = 'bg-violet-500 text-white border-violet-600';
        } else {
          if (count > 0) btnClass = 'bg-violet-600 text-white border-violet-700';
        }

        return `
          <button type="button" class="nav-jump-btn relative w-8 h-8 rounded-lg text-xs font-bold border transition flex items-center justify-center ${btnClass}" data-key="${uniqueKey}">
            ${q.id}
            ${isBookmarked ? `<span class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full ring-2 ring-white dark:ring-slate-900"></span>` : ''}
          </button>
        `;
      }).join('');
    }

    if (p3Container) {
      p3Container.innerHTML = (qData.part3 || []).map(q => {
        const uniqueKey = `part3_${q.id}`;
        const val = state.userAnswers.part3[q.id];
        const isAnswered = val !== undefined && val !== null && String(val).trim() !== '';
        const isBookmarked = state.bookmarks.has(uniqueKey);

        let btnClass = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700';
        if (state.mode === 'practice' || state.submitted) {
          const isCorrect = isAnswered && checkPart3Answer(val, q);
          const isWrong = isAnswered && !isCorrect;
          if (isCorrect) btnClass = 'bg-emerald-500 text-white border-emerald-600';
          else if (isWrong) btnClass = 'bg-rose-500 text-white border-rose-600';
          else if (isAnswered) btnClass = 'bg-teal-500 text-white border-teal-600';
        } else {
          if (isAnswered) btnClass = 'bg-teal-600 text-white border-teal-700';
        }

        return `
          <button type="button" class="nav-jump-btn relative w-8 h-8 rounded-lg text-xs font-bold border transition flex items-center justify-center ${btnClass}" data-key="${uniqueKey}">
            ${q.id}
            ${isBookmarked ? `<span class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full ring-2 ring-white dark:ring-slate-900"></span>` : ''}
          </button>
        `;
      }).join('');
    }
  }

  // --- DASHBOARD UPDATES ---
  function updateDashboard() {
    const score = calculateScore();

    const scoreEl = document.getElementById('statScore');
    const correctEl = document.getElementById('statCorrect');
    const wrongEl = document.getElementById('statWrong');
    const unansweredEl = document.getElementById('statUnanswered');
    const completionEl = document.getElementById('statCompletion');
    const completionBar = document.getElementById('completionBar');

    if (scoreEl) scoreEl.textContent = score.scale10.toFixed(2);
    if (correctEl) correctEl.textContent = score.totalCorrect;
    if (wrongEl) wrongEl.textContent = score.totalWrong;
    if (unansweredEl) unansweredEl.textContent = score.totalUnanswered;

    const completionRate = score.totalQuestions > 0 ? Math.round((score.totalAnswered / score.totalQuestions) * 100) : 0;
    if (completionEl) completionEl.textContent = `${completionRate}% (${score.totalAnswered}/${score.totalQuestions})`;
    if (completionBar) completionBar.style.width = `${completionRate}%`;

    const countAll = document.getElementById('countAll');
    const countWrong = document.getElementById('countWrong');
    const countBookmark = document.getElementById('countBookmark');

    if (countAll) countAll.textContent = score.totalQuestions;
    if (countWrong) countWrong.textContent = score.totalWrong;
    if (countBookmark) countBookmark.textContent = state.bookmarks.size;

    const submitBtn = document.getElementById('examSubmitBtn');
    if (submitBtn) {
      if (state.mode === 'exam') {
        submitBtn.classList.remove('hidden');
        if (state.submitted) {
          submitBtn.textContent = 'Đã nộp bài';
          submitBtn.disabled = true;
          submitBtn.classList.add('opacity-60', 'cursor-not-allowed');
        } else {
          submitBtn.textContent = 'Nộp bài thi';
          submitBtn.disabled = false;
          submitBtn.classList.remove('opacity-60', 'cursor-not-allowed');
        }
      } else {
        submitBtn.classList.add('hidden');
      }
    }
  }

  // --- CHARTS ---
  let accuracyChartInstance = null;
  let partChartInstance = null;

  function initCharts() {
    const ctxAcc = document.getElementById('chartAccuracy');
    const ctxPart = document.getElementById('chartPartProgress');
    const isDark = document.documentElement.classList.contains('dark');
    const textColor = isDark ? '#cbd5e1' : '#64748b';
    const gridColor = isDark ? '#334155' : '#f1f5f9';
    const borderColor = isDark ? '#1e293b' : '#ffffff';

    if (ctxAcc && window.Chart) {
      try {
        accuracyChartInstance = new Chart(ctxAcc, {
          type: 'doughnut',
          data: {
            labels: ['Đúng', 'Sai', 'Chưa làm'],
            datasets: [{
              data: [0, 0, (getQuestions().part1?.length || 0) + (getQuestions().part2?.length || 0) + (getQuestions().part3?.length || 0) || 84],
              backgroundColor: ['#10b981', '#f43f5e', isDark ? '#334155' : '#e2e8f0'],
              borderWidth: 2,
              borderColor: borderColor
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 }, color: textColor } },
              tooltip: {
                callbacks: {
                  label: function (ctx) {
                    const val = ctx.raw;
                    const total = calculateScore().totalQuestions || 1;
                    const pct = Math.round((val / total) * 100);
                    return ` ${ctx.label}: ${val} câu (${pct}%)`;
                  }
                }
              }
            },
            cutout: '70%'
          }
        });
      } catch (e) {
        console.warn('Error initializing accuracy chart', e);
      }
    }

    if (ctxPart && window.Chart) {
      try {
        partChartInstance = new Chart(ctxPart, {
          type: 'bar',
          data: {
            labels: ['Phần I (TN)', 'Phần II (Đ/S)', 'Phần III (Ngắn)'],
            datasets: [
              {
                label: 'Đúng',
                data: [0, 0, 0],
                backgroundColor: '#10b981',
                borderRadius: 6
              },
              {
                label: 'Sai',
                data: [0, 0, 0],
                backgroundColor: '#f43f5e',
                borderRadius: 6
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { stacked: true, grid: { display: false }, ticks: { color: textColor } },
              y: { stacked: true, grid: { color: gridColor }, beginAtZero: true, ticks: { color: textColor } }
            },
            plugins: {
              legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 }, color: textColor } }
            }
          }
        });
      } catch (e) {
        console.warn('Error initializing part chart', e);
      }
    }

    updateCharts();
  }

  function updateChartsTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const textColor = isDark ? '#cbd5e1' : '#64748b';
    const gridColor = isDark ? '#334155' : '#f1f5f9';
    const borderColor = isDark ? '#1e293b' : '#ffffff';

    if (accuracyChartInstance) {
      accuracyChartInstance.data.datasets[0].borderColor = borderColor;
      accuracyChartInstance.data.datasets[0].backgroundColor[2] = isDark ? '#334155' : '#e2e8f0';
      if (accuracyChartInstance.options.plugins?.legend?.labels) {
        accuracyChartInstance.options.plugins.legend.labels.color = textColor;
      }
      accuracyChartInstance.update();
    }

    if (partChartInstance) {
      if (partChartInstance.options.scales?.x?.ticks) {
        partChartInstance.options.scales.x.ticks.color = textColor;
      }
      if (partChartInstance.options.scales?.y?.ticks) {
        partChartInstance.options.scales.y.ticks.color = textColor;
      }
      if (partChartInstance.options.scales?.y?.grid) {
        partChartInstance.options.scales.y.grid.color = gridColor;
      }
      if (partChartInstance.options.plugins?.legend?.labels) {
        partChartInstance.options.plugins.legend.labels.color = textColor;
      }
      partChartInstance.update();
    }
  }

  function updateCharts() {
    const score = calculateScore();
    const qData = getQuestions();
    const p3Count = qData.part3 ? qData.part3.length : 0;

    if (accuracyChartInstance) {
      accuracyChartInstance.data.datasets[0].data = [
        score.totalCorrect,
        score.totalWrong,
        score.totalUnanswered
      ];
      accuracyChartInstance.update();
    }

    if (partChartInstance) {
      if (p3Count === 0) {
        partChartInstance.data.labels = ['Phần I (TN)', 'Phần II (Đ/S)'];
        partChartInstance.data.datasets[0].data = [
          score.p1.correct,
          score.p2.fullyCorrect
        ];
        partChartInstance.data.datasets[1].data = [
          score.p1.wrong,
          score.p2.wrongSubs > 0 ? (score.p2.answered - score.p2.fullyCorrect) : 0
        ];
      } else {
        partChartInstance.data.labels = ['Phần I (TN)', 'Phần II (Đ/S)', 'Phần III (Ngắn)'];
        partChartInstance.data.datasets[0].data = [
          score.p1.correct,
          score.p2.fullyCorrect,
          score.p3.correct
        ];
        partChartInstance.data.datasets[1].data = [
          score.p1.wrong,
          score.p2.wrongSubs > 0 ? (score.p2.answered - score.p2.fullyCorrect) : 0,
          score.p3.wrong
        ];
      }
      partChartInstance.update();
    }
  }

  // --- MULTI-SUBJECT UI & SWITCHING ---
  function updateSubjectUI() {
    const qData = getQuestions();
    const meta = qData.meta || {};

    const subSelect = document.getElementById('subjectSelect');
    if (subSelect && subSelect.value !== state.currentSubject) {
      subSelect.value = state.currentSubject;
    }

    const headerTitle = document.getElementById('headerTitle');
    if (headerTitle && meta.title) headerTitle.textContent = meta.title;

    const headerSubtitle = document.getElementById('headerSubtitle');
    if (headerSubtitle && meta.subtitle) headerSubtitle.textContent = meta.subtitle;

    const headerBadge = document.getElementById('headerBadge');
    if (headerBadge && meta.badge) headerBadge.textContent = meta.badge;

    const subjectIcon = document.getElementById('subjectIcon');
    if (subjectIcon && meta.icon) subjectIcon.className = meta.icon;

    const iconContainer = document.getElementById('subjectIconContainer');
    if (iconContainer) {
      if (state.currentSubject === 'hoahoc') {
        iconContainer.className = 'w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center text-xl shadow-md transition-all';
      } else if (state.currentSubject === 'lichsu') {
        iconContainer.className = 'w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 text-white flex items-center justify-center text-xl shadow-md transition-all';
      } else {
        iconContainer.className = 'w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center text-xl shadow-md transition-all';
      }
    }

    const p1Len = qData.part1 ? qData.part1.length : 0;
    const p2Len = qData.part2 ? qData.part2.length : 0;
    const p3Len = qData.part3 ? qData.part3.length : 0;

    const tabP1Label = document.getElementById('tabPart1Label');
    if (tabP1Label) tabP1Label.textContent = `Phần I: TN (${p1Len})`;

    const tabP2Label = document.getElementById('tabPart2Label');
    if (tabP2Label) tabP2Label.textContent = `Phần II: Đ/S (${p2Len})`;

    const tabP3Label = document.getElementById('tabPart3Label');
    if (tabP3Label) tabP3Label.textContent = `Phần III: Ngắn (${p3Len})`;

    const tabP3Btn = document.getElementById('tabPart3Btn');
    if (tabP3Btn) {
      if (p3Len === 0) {
        tabP3Btn.classList.add('hidden');
        if (state.activeFilter === 'part3') {
          const allTab = document.querySelector('.filter-tab[data-filter="all"]');
          if (allTab) allTab.click();
        }
      } else {
        tabP3Btn.classList.remove('hidden');
      }
    }

    const sideP1Title = document.getElementById('sidebarPart1Title');
    if (sideP1Title) sideP1Title.textContent = `Phần I: Trắc nghiệm (${p1Len} câu)`;

    const sideP1Range = document.getElementById('sidebarPart1Range');
    if (sideP1Range) sideP1Range.textContent = p1Len > 0 ? `1 - ${p1Len}` : '0';

    const sideP2Title = document.getElementById('sidebarPart2Title');
    if (sideP2Title) sideP2Title.textContent = `Phần II: Đúng / Sai (${p2Len} câu)`;

    const sideP2Range = document.getElementById('sidebarPart2Range');
    if (sideP2Range) sideP2Range.textContent = p2Len > 0 ? `1 - ${p2Len}` : '0';

    const sideP3Container = document.getElementById('sidebarPart3Container');
    const sideP3Title = document.getElementById('sidebarPart3Title');
    const sideP3Range = document.getElementById('sidebarPart3Range');
    if (sideP3Container) {
      if (p3Len === 0) {
        sideP3Container.classList.add('hidden');
      } else {
        sideP3Container.classList.remove('hidden');
        if (sideP3Title) sideP3Title.textContent = `Phần III: Trả lời ngắn (${p3Len} câu)`;
        if (sideP3Range) sideP3Range.textContent = `1 - ${p3Len}`;
      }
    }

    const modalSub = document.getElementById('modalSubjectSubtitle');
    if (modalSub && meta.title) {
      modalSub.textContent = meta.title + ' - ' + (meta.subject || '');
    }

    const modalP3Row = document.getElementById('modalP3Row');
    if (modalP3Row) {
      if (p3Len === 0) {
        modalP3Row.classList.add('hidden');
      } else {
        modalP3Row.classList.remove('hidden');
      }
    }
  }

  function switchSubject(newKey) {
    if (state.currentSubject === newKey) return;
    saveState();
    if (state.timerInterval) clearInterval(state.timerInterval);

    state.currentSubject = newKey;
    localStorage.setItem('solmics_active_subject', newKey);

    loadSavedState();

    const allTab = document.querySelector('.filter-tab[data-filter="all"]');
    if (allTab) {
      document.querySelectorAll('.filter-tab').forEach(t => {
        t.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
        t.classList.add('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
      });
      allTab.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
      allTab.classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
      state.activeFilter = 'all';
    }

    state.searchQuery = '';
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';

    const modePracticeBtn = document.getElementById('modePracticeBtn');
    const modeExamBtn = document.getElementById('modeExamBtn');
    if (modePracticeBtn && modeExamBtn) {
      if (state.mode === 'exam') {
        modeExamBtn.className = 'px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-semibold transition bg-indigo-600 text-white shadow-sm flex items-center gap-1.5';
        modePracticeBtn.className = 'px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-semibold transition bg-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1.5';
        if (!state.submitted) startExamTimer();
      } else {
        modePracticeBtn.className = 'px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-semibold transition bg-indigo-600 text-white shadow-sm flex items-center gap-1.5';
        modeExamBtn.className = 'px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-semibold transition bg-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1.5';
        updateTimerDisplay();
      }
    }

    updateSubjectUI();
    renderAll();
    updateDashboard();
    updateCharts();
  }

  // --- KaTeX RENDERING ---
  function triggerKaTeX() {
    if (window.renderMathInElement) {
      try {
        const target = document.getElementById('questionsContainer');
        if (target) {
          renderMathInElement(target, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false },
              { left: '\\(', right: '\\)', display: false },
              { left: '\\[', right: '\\]', display: true }
            ],
            throwOnError: false
          });
        }
      } catch (e) {
        console.warn('KaTeX rendering error:', e);
      }
    }
  }

  // --- TIMER (EXAM MODE) ---
  function startExamTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    updateTimerDisplay();

    state.timerInterval = setInterval(() => {
      if (state.examTimeRemaining > 0 && !state.submitted) {
        state.examTimeRemaining--;
        updateTimerDisplay();
        if (state.examTimeRemaining % 10 === 0) {
          saveState();
        }
      } else if (state.examTimeRemaining <= 0 && !state.submitted) {
        clearInterval(state.timerInterval);
        alert('Đã hết thời gian làm bài thi! Hệ thống sẽ tự động nộp bài.');
        submitExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const timerEl = document.getElementById('timerDisplay');
    const timerBox = document.getElementById('timerBox');
    if (!timerEl) return;

    if (state.mode === 'practice') {
      if (timerBox) timerBox.classList.add('hidden');
      return;
    } else {
      if (timerBox) timerBox.classList.remove('hidden');
    }

    const mins = Math.floor(state.examTimeRemaining / 60);
    const secs = state.examTimeRemaining % 60;
    timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    if (state.examTimeRemaining < 300) {
      timerEl.className = 'font-mono text-lg font-bold text-rose-600 animate-pulse';
    } else {
      timerEl.className = 'font-mono text-lg font-bold text-slate-800 dark:text-slate-100';
    }
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    const subjectSelect = document.getElementById('subjectSelect');
    if (subjectSelect) {
      subjectSelect.addEventListener('change', (e) => {
        switchSubject(e.target.value);
      });
    }

    const modePracticeBtn = document.getElementById('modePracticeBtn');
    const modeExamBtn = document.getElementById('modeExamBtn');

    if (modePracticeBtn && modeExamBtn) {
      modePracticeBtn.addEventListener('click', () => {
        if (state.mode !== 'practice') {
          state.mode = 'practice';
          modePracticeBtn.className = 'px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-semibold transition bg-indigo-600 text-white shadow-sm flex items-center gap-1.5';
          modeExamBtn.className = 'px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-semibold transition bg-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1.5';
          if (state.timerInterval) clearInterval(state.timerInterval);
          updateTimerDisplay();
          renderAll();
          updateDashboard();
          saveState();
        }
      });

      modeExamBtn.addEventListener('click', () => {
        if (state.mode !== 'exam') {
          if (confirm('Chuyển sang Chế độ Thi thử: Ẩn lời giải và đáp án tức thì, đếm ngược 50 phút. Bạn có muốn bắt đầu?')) {
            state.mode = 'exam';
            modeExamBtn.className = 'px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-semibold transition bg-indigo-600 text-white shadow-sm flex items-center gap-1.5';
            modePracticeBtn.className = 'px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-semibold transition bg-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1.5';
            startExamTimer();
            renderAll();
            updateDashboard();
            saveState();
          }
        }
      });
    }

    // Dark Mode Toggle
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('vl11_theme', isDark ? 'dark' : 'light');
        updateChartsTheme();
      });
    }

    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => {
          t.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
          t.classList.add('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
        });
        tab.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
        tab.classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');

        state.activeFilter = tab.dataset.filter;
        renderQuestionList();
        triggerKaTeX();
      });
    });

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderQuestionList();
        triggerKaTeX();
      });
    }

    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', resetAllData);
    }

    const examSubmitBtn = document.getElementById('examSubmitBtn');
    if (examSubmitBtn) {
      examSubmitBtn.addEventListener('click', () => {
        const score = calculateScore();
        if (confirm(`Bạn đã hoàn thành ${score.totalAnswered}/${score.totalQuestions} câu hỏi. Bạn có chắc chắn muốn nộp bài thi?`)) {
          submitExam();
        }
      });
    }

    const closeModalBtn = document.getElementById('closeModalBtn');
    const reviewWrongInModalBtn = document.getElementById('reviewWrongInModalBtn');

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        document.getElementById('resultModal').classList.add('hidden');
      });
    }

    if (reviewWrongInModalBtn) {
      reviewWrongInModalBtn.addEventListener('click', () => {
        document.getElementById('resultModal').classList.add('hidden');
        const wrongTab = document.querySelector('.filter-tab[data-filter="wrong"]');
        if (wrongTab) wrongTab.click();
      });
    }

    const container = document.getElementById('questionsContainer');
    if (container) {
      container.addEventListener('click', (e) => {
        const optBtn = e.target.closest('.opt-btn');
        if (optBtn) {
          const id = parseInt(optBtn.dataset.id, 10);
          const opt = optBtn.dataset.opt;
          handlePart1Select(id, opt);
          return;
        }

        const tfBtn = e.target.closest('.tf-btn');
        if (tfBtn) {
          const id = parseInt(tfBtn.dataset.id, 10);
          const sub = tfBtn.dataset.sub;
          const val = tfBtn.dataset.val === 'true';
          handlePart2Select(id, sub, val);
          return;
        }

        const p3Btn = e.target.closest('.p3-check-btn');
        if (p3Btn) {
          const id = parseInt(p3Btn.dataset.id, 10);
          const input = container.querySelector(`.p3-input[data-id="${id}"]`);
          if (input) {
            handlePart3Submit(id, input.value);
          }
          return;
        }

        const bookmarkBtn = e.target.closest('.bookmark-btn');
        if (bookmarkBtn) {
          const key = bookmarkBtn.dataset.key;
          toggleBookmark(key);
          return;
        }

        const explBtn = e.target.closest('.toggle-expl-btn');
        if (explBtn) {
          const key = explBtn.dataset.key;
          toggleExplanation(key);
          return;
        }
      });

      container.addEventListener('keydown', (e) => {
        if (e.target.classList.contains('p3-input') && e.key === 'Enter') {
          const id = parseInt(e.target.dataset.id, 10);
          handlePart3Submit(id, e.target.value);
        }
      });
    }

    document.addEventListener('click', (e) => {
      const jumpBtn = e.target.closest('.nav-jump-btn');
      if (jumpBtn) {
        const key = jumpBtn.dataset.key;
        scrollToQuestion(key);
      }
    });
  }

  // --- ACTIONS ---
  function handlePart1Select(id, opt) {
    state.userAnswers.part1[id] = opt;
    saveState();
    updateQuestionCardUI(`part1_${id}`);
    updateDashboard();
    renderNavigationGrid();
    updateCharts();
  }

  function handlePart2Select(id, sub, val) {
    if (!state.userAnswers.part2[id]) {
      state.userAnswers.part2[id] = {};
    }
    state.userAnswers.part2[id][sub] = val;
    saveState();
    updateQuestionCardUI(`part2_${id}`);
    updateDashboard();
    renderNavigationGrid();
    updateCharts();
  }

  function handlePart3Submit(id, val) {
    state.userAnswers.part3[id] = String(val).trim();
    saveState();
    updateQuestionCardUI(`part3_${id}`);
    updateDashboard();
    renderNavigationGrid();
    updateCharts();
  }

  function toggleBookmark(key) {
    if (state.bookmarks.has(key)) {
      state.bookmarks.delete(key);
    } else {
      state.bookmarks.add(key);
    }
    saveState();
    updateQuestionCardUI(key);
    renderNavigationGrid();
    updateDashboard();
  }

  function toggleExplanation(key) {
    state.showExplanations[key] = !state.showExplanations[key];
    const card = document.getElementById(`qcard_${key}`);
    if (card) {
      const explContent = card.querySelector('.expl-content');
      const toggleBtnSpan = card.querySelector('.toggle-expl-btn span');
      const toggleBtnIcon = card.querySelector('.toggle-expl-btn i:last-child');
      if (explContent) {
        if (state.showExplanations[key]) {
          explContent.classList.remove('hidden');
          explContent.classList.add('block');
          if (toggleBtnSpan) toggleBtnSpan.textContent = 'Ẩn lời giải chi tiết';
          if (toggleBtnIcon) toggleBtnIcon.className = 'fas fa-chevron-up text-[10px]';
          triggerKaTeX();
        } else {
          explContent.classList.add('hidden');
          explContent.classList.remove('block');
          if (toggleBtnSpan) toggleBtnSpan.textContent = 'Xem lời giải chi tiết';
          if (toggleBtnIcon) toggleBtnIcon.className = 'fas fa-chevron-down text-[10px]';
        }
      }
    }
  }

  function updateQuestionCardUI(uniqueKey) {
    const qData = getQuestions();
    const [part, idStr] = uniqueKey.split('_');
    const id = parseInt(idStr, 10);
    const oldCard = document.getElementById(`qcard_${uniqueKey}`);
    if (!oldCard) return;

    let newCard;
    if (part === 'part1') {
      const q = (qData.part1 || []).find(item => item.id === id);
      if (q) newCard = createPart1Card(q);
    } else if (part === 'part2') {
      const q = (qData.part2 || []).find(item => item.id === id);
      if (q) newCard = createPart2Card(q);
    } else if (part === 'part3') {
      const q = (qData.part3 || []).find(item => item.id === id);
      if (q) newCard = createPart3Card(q);
    }

    if (newCard) {
      oldCard.replaceWith(newCard);
      triggerKaTeX();
    }
  }

  function scrollToQuestion(uniqueKey) {
    let card = document.getElementById(`qcard_${uniqueKey}`);
    if (!card) {
      const allTab = document.querySelector('.filter-tab[data-filter="all"]');
      if (allTab) allTab.click();
      card = document.getElementById(`qcard_${uniqueKey}`);
    }

    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.add('ring-4', 'ring-indigo-300', 'dark:ring-indigo-600');
      setTimeout(() => {
        card.classList.remove('ring-4', 'ring-indigo-300', 'dark:ring-indigo-600');
      }, 1500);
    }
  }

  function submitExam() {
    state.submitted = true;
    if (state.timerInterval) clearInterval(state.timerInterval);
    saveState();
    renderAll();
    updateDashboard();
    updateCharts();
    showResultModal();
  }

  function showResultModal() {
    const modal = document.getElementById('resultModal');
    if (!modal) return;

    const score = calculateScore();
    const qData = getQuestions();
    const meta = qData.meta || {};

    const mSub = document.getElementById('modalSubjectSubtitle');
    const mScore = document.getElementById('modalScore');
    const mRaw = document.getElementById('modalRawPoints');
    const mCorrect = document.getElementById('modalCorrect');
    const mWrong = document.getElementById('modalWrong');
    const mP1 = document.getElementById('modalP1Stats');
    const mP2 = document.getElementById('modalP2Stats');
    const mP3 = document.getElementById('modalP3Stats');
    const mP3Row = document.getElementById('modalP3Row');

    if (mSub && meta.title) mSub.textContent = `${meta.title} - ${meta.subject || ''}`;
    if (mScore) mScore.textContent = score.scale10.toFixed(2);
    if (mRaw) mRaw.textContent = `${score.rawPoints.toFixed(2)} / ${score.maxRawPoints.toFixed(1)} đ`;
    if (mCorrect) mCorrect.textContent = `${score.totalCorrect} câu`;
    if (mWrong) mWrong.textContent = `${score.totalWrong} câu`;
    if (mP1) mP1.textContent = `${score.p1.correct}/${score.p1.total} câu (${score.p1.points.toFixed(2)} đ)`;
    if (mP2) mP2.textContent = `${score.p2.fullyCorrect}/${score.p2.total} câu đúng hoàn toàn (${score.p2.points.toFixed(2)} đ)`;

    if (score.p3.total > 0) {
      if (mP3Row) mP3Row.classList.remove('hidden');
      if (mP3) mP3.textContent = `${score.p3.correct}/${score.p3.total} câu (${score.p3.points.toFixed(2)} đ)`;
    } else {
      if (mP3Row) mP3Row.classList.add('hidden');
    }

    modal.classList.remove('hidden');
  }

})();
