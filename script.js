/* ===== ARKA PLAN: STATİK MATEMATİK FORMÜLLERİ ===== */
function fillBg() {
  const c = document.getElementById('bg-math');
  if (!c) return;
  c.innerHTML = '';
  const formulas = generateFormulas();
  const count = 30;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'math-p';
    el.style.top = '-8%';
    el.style.left = (Math.random() * 92 + 4) + '%';
    el.style.fontSize = (Math.random() * 0.35 + 0.9) + 'rem';
    const dur = Math.random() * 15 + 18;
    el.style.animationDuration = dur + 's';
    el.style.animationDelay = (Math.random() * -dur) + 's';
    el.textContent = formulas[Math.floor(Math.random() * formulas.length)];
    c.appendChild(el);
  }
}

function generateFormulas() {
  const arr = [];
  for (let i = 0; i < 60; i++) {
    const r = Math.random();
    if (r < 0.12) arr.push(genTrig());
    else if (r < 0.24) arr.push(genPow());
    else if (r < 0.36) arr.push(genDeriv());
    else if (r < 0.48) arr.push(genIntegral());
    else if (r < 0.60) arr.push(genLimit());
    else if (r < 0.72) arr.push(genLog());
    else if (r < 0.84) arr.push(genSqrt());
    else arr.push(genEq());
  }
  return arr;
}

function genTrig() {
  const a = rnd(2,9), b = rnd(2,7);
  const pool = [
    'sin(' + a + 'x) + cos(' + b + 'x)',
    'tan(' + a + 'x) · cot(' + b + 'x)',
    'sec²x − tan²x = 1',
    'sin(' + a + ') = ' + Math.sin(a).toFixed(3),
    'cos(' + a + ') = ' + Math.cos(a).toFixed(3),
    'd/dx sin(' + a + 'x) = ' + a + 'cos(' + a + 'x)',
    '∫sin(' + a + 'x) = −cos(' + a + 'x)/' + a + ' + C',
    'sin²x + cos²x = 1',
  ];
  return pool[Math.floor(Math.random() * pool.length)];
}

function genPow() {
  const a = rnd(2,9), b = rnd(2,5), c = rnd(2,4);
  const pool = [
    a + 'x^' + b + ' + ' + c + 'x = 0',
    '(' + a + 'x + ' + b + ')^' + c,
    a + '^(−' + b + ') = 1/' + Math.pow(a,b),
    'x^' + a + ' · x^' + b + ' = x^' + (a+b),
    '(' + a + 'x)^' + b + ' = ' + Math.pow(a,b) + 'x^' + b,
    a + '^' + b + ' = ' + Math.pow(a,b),
    '(x^' + a + ')^' + b + ' = x^' + (a*b),
  ];
  return pool[Math.floor(Math.random() * pool.length)];
}

function genDeriv() {
  const a = rnd(2,8), b = rnd(2,6), c = rnd(3,7);
  const pool = [
    'd/dx (' + a + 'x^' + b + ') = ' + (a*b) + 'x^' + (b-1),
    'd/dx e^(' + a + 'x) = ' + a + 'e^(' + a + 'x)',
    'd/dx ln(' + a + 'x) = 1/(' + a + 'x) · ' + a,
    'd/dx sin(' + a + 'x) = ' + a + 'cos(' + a + 'x)',
    'd²/dx² (' + a + 'x²) = ' + (2*a),
    'f\'(x) = lim[h→0] (f(x+h)−f(x))/h',
    '∂/∂x (' + a + 'x² + ' + b + 'y) = ' + (2*a) + 'x',
  ];
  return pool[Math.floor(Math.random() * pool.length)];
}

function genIntegral() {
  const a = rnd(2,6), b = rnd(2,5), c = rnd(2,4);
  const pool = [
    '∫(' + a + 'x^' + b + ')dx = ' + (a/(b+1)).toFixed(2) + 'x^' + (b+1) + ' + C',
    '∫(' + a + '/x)dx = ' + a + '·ln|x| + C',
    '∫e^(' + a + 'x)dx = e^(' + a + 'x)/' + a + ' + C',
    '∫(' + a + 'x + ' + b + ')dx = ' + (a/2).toFixed(1) + 'x² + ' + b + 'x + C',
    '∫sin(' + a + 'x)dx = −cos(' + a + 'x)/' + a + ' + C',
    '∫cos(' + a + 'x)dx = sin(' + a + 'x)/' + a + ' + C',
    '∫₀¹ x^' + a + ' dx = 1/' + (a+1),
  ];
  return pool[Math.floor(Math.random() * pool.length)];
}

function genLimit() {
  const a = rnd(2,9);
  const pool = [
    'lim[x→0] sin(' + a + 'x)/(' + a + 'x) = 1',
    'lim[x→∞] (1 + 1/x)^x = e',
    'lim[x→0] (e^' + a + 'x − 1)/' + a + 'x = 1',
    'lim[x→0] (1 − cosx)/x² = 1/2',
    'lim[x→' + a + '] (x²−' + (a*a) + ')/(x−' + a + ') = ' + (2*a),
    'lim[n→∞] ' + a + '/n = 0',
    'lim[x→0] tan(' + a + 'x)/sin(' + a + 'x) = 1',
  ];
  return pool[Math.floor(Math.random() * pool.length)];
}

function genLog() {
  const a = rnd(2,9), b = rnd(2,8), c = rnd(2,5);
  const pool = [
    'log(' + a + '·' + b + ') = log' + a + ' + log' + b,
    'log(' + a + '^' + c + ') = ' + c + '·log' + a,
    'ln(e^' + a + ') = ' + a,
    'e^ln(' + a + ') = ' + a,
    'log₂' + Math.pow(2,c) + ' = ' + c,
    'log₁₀' + Math.pow(10,c) + ' = ' + c,
    'ln(' + a + ') = ' + Math.log(a).toFixed(3),
  ];
  return pool[Math.floor(Math.random() * pool.length)];
}

function genSqrt() {
  const a = rnd(2,9), b = rnd(2,6), c = rnd(2,5);
  const pool = [
    '√(' + (a*a) + ') = ' + a,
    '√(' + (a*a*b) + ') = ' + a + '√' + b,
    '³√(' + (a*a*a) + ') = ' + a,
    '(' + a + ' + ' + b + ')² = ' + (a*a) + ' + ' + (2*a*b) + ' + ' + (b*b),
    a + '² − ' + b + '² = (' + a + '+' + b + ')(' + a + '−' + b + ')',
    '√(' + a + ') + √(' + b + ')',
    '(' + a + '√' + b + ')² = ' + (a*a*b),
  ];
  return pool[Math.floor(Math.random() * pool.length)];
}

function genEq() {
  const a = rnd(2,9), b = rnd(3,12), c = rnd(2,8);
  const pool = [
    a + 'x + ' + b + ' = ' + c + '  →  x = ' + ((c-b)/a).toFixed(2),
    a + 'x² + ' + b + 'x = 0  →  x(' + a + 'x + ' + b + ')',
    'Δ = ' + b + '² − 4·' + a + '·' + c + ' = ' + (b*b - 4*a*c),
    a + '/' + b + ' + ' + c + '/' + b + ' = ' + ((a+c)/b).toFixed(2),
    a + '·(' + b + ' + ' + c + ') = ' + (a*b) + ' + ' + (a*c),
    'x² + ' + a + 'x + ' + b + ' = 0',
    a + 'x − ' + b + ' = ' + c + '  →  x = ' + ((b+c)/a).toFixed(2),
  ];
  return pool[Math.floor(Math.random() * pool.length)];
}

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* ===== EKRAN ===== */
function go(id) {
  clickSound();
  startChillMusic();
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
  fillBg();
  startGlitchLoop();
  if (id === 'lobby') updateLobbyDeco();
}
function goToLobby() { go('lobby'); }

/* ===== SES EFEKTLERİ ===== */
let audioCtx;
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}
function playTone(freq, duration, type = 'sine', vol = 0.08) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = vol;
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch(e) {}
}
function clickSound() {
  const ctx = getAudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(480, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(240, ctx.currentTime + 0.08);
  gain.gain.setValueAtTime(0.14, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime + 0.12);
}
function hoverSound() {
  const ctx = getAudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(360, ctx.currentTime);
  gain.gain.setValueAtTime(0.06, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime + 0.06);
}
function calcSound() {
  const ctx = getAudioCtx();
  [440, 554, 659].forEach((f, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = f;
    const t = ctx.currentTime + i * 0.04;
    gain.gain.setValueAtTime(0.1, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(t); osc.stop(t + 0.18);
  });
}
function successSound() {
  const ctx = getAudioCtx();
  [523, 659, 784, 1047].forEach((f, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = f;
    const t = ctx.currentTime + i * 0.07;
    gain.gain.setValueAtTime(0.1, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(t); osc.stop(t + 0.25);
  });
}
function failSound() {
  const ctx = getAudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(330, ctx.currentTime);
  osc.frequency.linearRampToValueAtTime(280, ctx.currentTime + 0.35);
  gain.gain.setValueAtTime(0.1, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime + 0.45);
}

/* ===== NUMPAD ===== */
const inputs = {};
function buildNumpad(prefix) {
  const np = document.getElementById('np-' + prefix);
  if (!np || np.children.length) return;
  const d = document.getElementById('d-' + prefix);
  inputs[prefix] = '';
  const keys = ['1','2','3','4','5','6','7','8','9','C', '0','←'];
  keys.forEach(k => {
    const b = document.createElement('button');
    b.textContent = k;
    if (k === 'C') b.className = 'np-w';
    b.onclick = () => {
      clickSound();
      if (k === 'C') inputs[prefix] = '';
      else if (k === '←') inputs[prefix] = inputs[prefix].slice(0, -1);
      else if (inputs[prefix].length < 8) inputs[prefix] += k;
      d.textContent = inputs[prefix] || '...';
    };
    np.appendChild(b);
  });
}

/* ===== HESAPLAMA ===== */
function getVal(prefix) {
  const v = parseFloat(inputs[prefix]);
  return isNaN(v) ? null : v;
}
function calc(prefix, rule) {
  calcSound();
  buildNumpad(prefix);
  const x = getVal(prefix);
  const out = document.getElementById('o-' + prefix);
  if (x === null) { out.textContent = 'Lütfen bir sayı girin'; return; }
  let r = '';
  switch (rule) {
    case 'sumN': { const n = x; r = 'Toplam = ' + (n * (1 + n) / 2); break; }
    case 'sumMid': { const n = x, mid = n; r = 'Toplam = ' + (n * mid); break; }
    case 'sumPair': { const n = x; r = 'Çift sayısı = ' + (n / 2) + ', Toplam = ' + (n * (n + 1) / 2); break; }
    case 'diffFL': { const n = x; r = 'aₙ − a₁ = ' + (n - 1); break; }
    case 'diff1': { r = 'aₙ₊₁ − aₙ = 1 (sabit)'; break; }
    case 'diffSq': {
      const sn = x * (x + 1) / 2;
      const sm = (x - 1) * x / 2;
      r = 'S(' + x + ') = ' + sn + ', S(' + (x - 1) + ') = ' + sm + ', Fark = ' + (sn - sm);
      break;
    }
    case 'prod3': { r = '(' + (x - 1) + ')·' + x + '·' + (x + 1) + ' = ' + ((x - 1) * x * (x + 1)); break; }
    case 'prodEven': { const p = x * (x + 1); r = x + '·' + (x + 1) + ' = ' + p + (p % 2 === 0 ? ' (çift ✓)' : ' (tek ?)'); break; }
    case 'fact': { let f = 1; for (let i = 2; i <= x; i++) f *= i; r = x + '! = ' + f; break; }
    case 'div1': { r = (x + 1) + '/' + x + ' = ' + ((x + 1) / x).toFixed(4) + ' = 1 + ' + (1 / x).toFixed(4); break; }
    case 'div2': { r = x + '/' + (x + 1) + ' = ' + (x / (x + 1)).toFixed(4) + ' = 1 − ' + (1 / (x + 1)).toFixed(4); break; }
    case 'divRule': { const p = x * (x + 1); r = x + '·' + (x + 1) + ' = ' + p + (p % 2 === 0 ? ' → 2\'ye bölünür ✓' : ''); break; }
  }
  out.textContent = r;
}

/* ===== DOĞRULAMA ===== */
function verify(prefix, rule) {
  calcSound();
  buildNumpad(prefix);
  const x = getVal(prefix);
  const out = document.getElementById('v-' + prefix);
  if (x === null) { out.textContent = 'Lütfen bir sayı girin'; out.className = 'vout no'; return; }
  let ok = false, msg = '';
  switch (rule) {
    case 'sumN': {
      let loopSum = 0;
      for (let i = 1; i <= x; i++) loopSum += i;
      const formula = x * (x + 1) / 2;
      ok = loopSum === formula;
      msg = ok ? 'Kural sağlanıyor ✓ (toplam = ' + loopSum + ')' : 'Kural sağlanmıyor ✗ (' + loopSum + ' ≠ ' + formula + ')';
      break;
    }
    case 'sumMid': {
      if (x % 2 === 0) { ok = false; msg = 'Kural sağlanmıyor ✗ (sayı adedi tek olmalı)'; break; }
      const mid = x;
      const start = mid - (x - 1) / 2;
      let loopSum = 0;
      for (let i = 0; i < x; i++) loopSum += start + i;
      const formula = x * mid;
      ok = loopSum === formula;
      msg = ok ? 'Kural sağlanıyor ✓ (toplam = ' + loopSum + ')' : 'Kural sağlanmıyor ✗ (' + loopSum + ' ≠ ' + formula + ')';
      break;
    }
    case 'sumPair': {
      if (x % 2 !== 0) { ok = false; msg = 'Kural sağlanmıyor ✗ (sayı adedi çift olmalı)'; break; }
      let loopSum = 0;
      for (let i = 1; i <= x; i++) loopSum += i;
      const formula = (x / 2) * (x + 1);
      ok = loopSum === formula;
      msg = ok ? 'Kural sağlanıyor ✓ (toplam = ' + loopSum + ')' : 'Kural sağlanmıyor ✗ (' + loopSum + ' ≠ ' + formula + ')';
      break;
    }
    case 'diffFL': {
      const first = 1, last = x;
      ok = (last - first) === (x - 1);
      msg = ok ? 'Kural sağlanıyor ✓ (' + last + ' − ' + first + ' = ' + (x - 1) + ')' : 'Kural sağlanmıyor ✗';
      break;
    }
    case 'diff1': {
      ok = ((x + 1) - x) === 1;
      msg = ok ? 'Kural sağlanıyor ✓ (sabit fark = 1)' : 'Kural sağlanmıyor ✗';
      break;
    }
    case 'diffSq': {
      const sn = x * (x + 1) / 2;
      const sm = (x - 1) * x / 2;
      const diff = sn - sm;
      ok = diff === x;
      msg = ok ? 'Kural sağlanıyor ✓ (' + sn + ' − ' + sm + ' = ' + diff + ' = ' + x + ')' : 'Kural sağlanmıyor ✗ (' + diff + ' ≠ ' + x + ')';
      break;
    }
    case 'prod3': {
      const left = (x - 1) * x * (x + 1);
      const right = x * x * x - x;
      ok = left === right;
      msg = ok ? 'Kural sağlanıyor ✓ (' + left + ' = ' + right + ')' : 'Kural sağlanmıyor ✗ (' + left + ' ≠ ' + right + ')';
      break;
    }
    case 'prodEven': {
      ok = (x * (x + 1)) % 2 === 0;
      msg = ok ? 'Kural sağlanıyor ✓ (çarpım çift)' : 'Kural sağlanmıyor ✗';
      break;
    }
    case 'fact': {
      let f = 1;
      for (let i = 2; i <= x; i++) f *= i;
      let f2 = 1;
      for (let i = 2; i <= x - 1; i++) f2 *= i;
      f2 = f2 * x;
      ok = f === f2;
      msg = ok ? 'Kural sağlanıyor ✓ (' + x + '! = ' + f + ')' : 'Kural sağlanmıyor ✗';
      break;
    }
    case 'div1': {
      const left = (x + 1) / x;
      const right = 1 + 1 / x;
      ok = Math.abs(left - right) < 0.0001;
      msg = ok ? 'Kural sağlanıyor ✓' : 'Kural sağlanmıyor ✗';
      break;
    }
    case 'div2': {
      const left = x / (x + 1);
      const right = 1 - 1 / (x + 1);
      ok = Math.abs(left - right) < 0.0001;
      msg = ok ? 'Kural sağlanıyor ✓' : 'Kural sağlanmıyor ✗';
      break;
    }
    case 'divRule': {
      const p = x * (x + 1);
      ok = p % 2 === 0;
      msg = ok ? 'Kural sağlanıyor ✓ (2\'ye bölünür)' : 'Kural sağlanmıyor ✗';
      break;
    }
  }
  out.textContent = msg;
  out.className = 'vout ' + (ok ? 'ok' : 'no');
  if (ok) successSound(); else failSound();
}

/* ===== KURAL GEÇİŞİ ===== */
const catMap = {
  toplama: ['card-t1','card-t2','card-t3'],
  cikarma: ['card-c1','card-c2','card-c3'],
  carpma:  ['card-r1','card-r2','card-r3'],
  bolme:   ['card-b1','card-b2','card-b3'],
};
function showRule(cat, idx) {
  clickSound();
  const ids = catMap[cat];
  if (!ids) return;
  ids.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', i === idx);
  });
  const view = document.getElementById(cat);
  const btns = view?.querySelectorAll('.cat-btn');
  btns?.forEach((b, i) => b.classList.toggle('active', i === idx));
}

/* ===== CHILL MÜZİK ===== */
let musicPlaying = false;
function startChillMusic() {
  if (musicPlaying) return;
  musicPlaying = true;
  const ctx = getAudioCtx();
  const now = ctx.currentTime;

  const master = ctx.createGain();
  master.gain.value = 0.18;
  master.connect(ctx.destination);

  // Reverb
  function createImpulse(ctx, dur, decay) {
    const sr = ctx.sampleRate;
    const len = sr * dur;
    const buf = ctx.createBuffer(2, len, sr);
    for (let c = 0; c < 2; c++) {
      const ch = buf.getChannelData(c);
      for (let i = 0; i < len; i++) {
        ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
      }
    }
    return buf;
  }
  const convolver = ctx.createConvolver();
  convolver.buffer = createImpulse(ctx, 1.2, 2.5);
  const reverbGain = ctx.createGain();
  reverbGain.gain.value = 0.10;
  master.connect(convolver);
  convolver.connect(reverbGain);
  reverbGain.connect(ctx.destination);

  // Delay
  const delay = ctx.createDelay();
  delay.delayTime.value = 0.25;
  const delayGain = ctx.createGain();
  delayGain.gain.value = 0.06;
  master.connect(delay);
  delay.connect(delayGain);
  delayGain.connect(ctx.destination);

  // Chord progression
  const chords = [
    { notes: [261.63, 329.63, 392.00], bass: 130.81 },
    { notes: [220.00, 261.63, 329.63], bass: 110.00 },
    { notes: [349.23, 440.00, 523.25], bass: 174.61 },
    { notes: [196.00, 246.94, 293.66], bass: 98.00 },
    { notes: [246.94, 311.13, 392.00], bass: 123.47 },
    { notes: [220.00, 261.63, 329.63], bass: 110.00 },
    { notes: [293.66, 349.23, 440.00], bass: 146.83 },
    { notes: [196.00, 246.94, 293.66], bass: 98.00 },
  ];
  const chordDur = 3.5;

  function playNote(f, time, dur, peak) {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const osc3 = ctx.createOscillator();
    const gain = ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.value = f;
    osc2.type = 'sine';
    osc2.frequency.value = f;
    osc3.type = 'sine';
    osc3.frequency.value = f * 1.003;
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(peak, time + 0.015);
    gain.gain.exponentialRampToValueAtTime(peak * 0.3, time + 0.5);
    gain.gain.exponentialRampToValueAtTime(0.001, time + dur);
    osc1.connect(gain); osc2.connect(gain); osc3.connect(gain);
    gain.connect(master);
    osc1.start(time); osc1.stop(time + dur + 0.1);
    osc2.start(time); osc2.stop(time + dur + 0.1);
    osc3.start(time); osc3.stop(time + dur + 0.1);
  }

  function playChord(chord, time, dur) {
    chord.notes.forEach(f => playNote(f, time, dur, 0.10));
    playNote(chord.bass, time, dur, 0.15);
  }

  for (let i = 0; i < 160; i++) {
    playChord(chords[i % chords.length], now + i * chordDur, chordDur - 0.3);
  }

  // Master breathing LFO
  const lfo = ctx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.value = 0.07;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.01;
  lfo.connect(lfoGain);
  lfoGain.connect(master.gain);
  lfo.start(now);
}

/* ===== LOBİ DEKORASYONU ===== */
const decoFractions = [
  { top: 'n(n+1)', bottom: '2', sub: 'Ardışık Sayıların Toplamı' },
  { top: 'n²', bottom: '2n−1', sub: 'Kareler Farkı' },
  { top: 'n!', bottom: 'n', sub: 'Faktöriyel Oranı' },
  { top: '∑k²', bottom: '6', sub: 'Kareler Toplamı' },
  { top: 'x³−x', bottom: '1', sub: 'Üç Çarpım Formülü' },
  { top: 'lim', bottom: 'e', sub: 'Euler Sabiti' },
  { top: 'sin²x', bottom: 'cos²x', sub: 'Trigonometri' },
  { top: 'π', bottom: '3.14159…', sub: 'Pi Sayısı' },
  { top: '√2', bottom: '1.414…', sub: 'Karekök' },
  { top: 'e^(iπ)', bottom: '−1', sub: 'Euler Özdeşliği' },
];

function updateLobbyDeco() {
  const wrap = document.querySelector('.lobby-deco');
  if (!wrap) return;
  const f = decoFractions[Math.floor(Math.random() * decoFractions.length)];
  const topEl = wrap.querySelector('.deco-top');
  const botEl = wrap.querySelector('.deco-bottom');
  const subEl = wrap.querySelector('.deco-sub');
  if (topEl) topEl.textContent = f.top;
  if (botEl) botEl.textContent = f.bottom;
  if (subEl) subEl.textContent = f.sub;

}

/* ===== ARKA PLAN GLITCH ===== */
let glitchInterval = null;
function spawnGlitch() {
  const el = document.createElement('div');
  el.className = 'bg-glitch';
  const size = Math.random() * 40 + 10;
  el.style.width = size + 'px';
  el.style.height = size + 'px';
  el.style.left = (Math.random() * 98 + 0.5) + 'vw';
  el.style.top = (Math.random() * 98 + 0.5) + 'vh';
  el.style.background = Math.random() > 0.5 ? '#d2d2d7' : '#c2c2c7';
  const opacity = Math.random() * 0.16 + 0.10;
  el.style.opacity = opacity.toFixed(3);
  el.style.animationDuration = (Math.random() * 3 + 1.2) + 's';
  el.style.animationDelay = (Math.random() * 5) + 's';
  document.body.appendChild(el);
  const life = Math.random() * 2500 + 2000;
  setTimeout(() => {
    el.style.opacity = '0';
    setTimeout(() => el.remove(), 1800);
  }, life);
}
function startGlitchLoop() {
  stopGlitchLoop();
  document.querySelectorAll('.bg-glitch').forEach(e => e.remove());
  for (let i = 0; i < 20; i++) spawnGlitch();
  glitchInterval = setInterval(spawnGlitch, 600);
}
function stopGlitchLoop() {
  if (glitchInterval) { clearInterval(glitchInterval); glitchInterval = null; }
}

/* ===== BAŞLANGIÇ ===== */
fillBg();
startGlitchLoop();
updateLobbyDeco();
