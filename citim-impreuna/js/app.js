/* Citim împreună — logică joc: completează cuvântul lipsă din fiecare verset, 5 pe pagină. */

const PAGE_SIZE = 5;
const POINTS_PER_VERSE = 10;
const PAGE_CLEAN_BONUS = 20;
const CHEERS = ["Bravo!", "Excelent!", "Minunat!", "Felicitări!", "Super!"];
const STORAGE_SCORE = "ci_score";
const STORAGE_PROGRESS = "ci_progress";

const totalPages = Math.ceil(VERSES.length / PAGE_SIZE);

const el = {
  score: document.getElementById("score"),
  scoreChip: document.getElementById("score-chip"),
  progress: document.getElementById("progress"),
  container: document.getElementById("verses-container"),
  cheer: document.getElementById("cheer"),
  checkBtn: document.getElementById("check-btn"),
  nextBtn: document.getElementById("next-btn"),
};

let score = parseInt(localStorage.getItem(STORAGE_SCORE), 10) || 0;
let page = parseInt(localStorage.getItem(STORAGE_PROGRESS), 10) || 0;
let hadMistake = false;

function save() {
  localStorage.setItem(STORAGE_SCORE, String(score));
  localStorage.setItem(STORAGE_PROGRESS, String(page));
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function updateScore(points) {
  score += points;
  el.score.textContent = score;
  el.scoreChip.classList.add("bump");
  setTimeout(() => el.scoreChip.classList.remove("bump"), 200);
  save();
}

function buildVerseCard(v) {
  const card = document.createElement("section");
  card.className = "card";

  const ref = document.createElement("div");
  ref.className = "ref";
  ref.textContent = v.ref;
  card.appendChild(ref);

  const verse = document.createElement("p");
  verse.className = "verse";

  const parts = v.text.split(/(\{\d+\})/);
  for (const part of parts) {
    const m = part.match(/^\{(\d+)\}$/);
    if (!m) {
      verse.appendChild(document.createTextNode(part));
      continue;
    }
    const blank = v.blanks[Number(m[1])];
    const select = document.createElement("select");
    select.className = "blank";
    select.dataset.answer = blank.answer;

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "— alege —";
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);

    for (const word of shuffle(blank.options)) {
      const opt = document.createElement("option");
      opt.value = word;
      opt.textContent = word;
      select.appendChild(opt);
    }
    select.addEventListener("change", () => select.classList.remove("wrong"));
    verse.appendChild(select);
  }
  card.appendChild(verse);
  return card;
}

function renderPage() {
  hadMistake = false;

  const start = page * PAGE_SIZE;
  const pageVerses = VERSES.slice(start, start + PAGE_SIZE);

  el.progress.textContent = `Pagina ${page + 1} din ${totalPages}`;
  el.cheer.hidden = true;
  el.cheer.innerHTML = "";
  el.checkBtn.hidden = false;
  el.nextBtn.hidden = true;

  el.container.innerHTML = "";
  for (const v of pageVerses) {
    el.container.appendChild(buildVerseCard(v));
  }
}

function checkAnswers() {
  const selects = [...el.container.querySelectorAll("select.blank")];
  if (selects.some((s) => s.value === "")) {
    selects.filter((s) => s.value === "").forEach((s) => flashWrong(s, false));
    return;
  }

  let earned = 0;
  for (const s of selects) {
    if (s.value === s.dataset.answer) {
      const span = document.createElement("span");
      span.className = "locked";
      span.textContent = s.dataset.answer;
      s.replaceWith(span);
      earned += POINTS_PER_VERSE;
    } else {
      hadMistake = true;
      flashWrong(s, true);
    }
  }
  if (earned > 0) updateScore(earned);

  if (!el.container.querySelector("select.blank")) {
    let bonus = 0;
    if (!hadMistake) {
      bonus = PAGE_CLEAN_BONUS;
      updateScore(bonus);
    }
    celebrate(bonus);
  }
}

function flashWrong(select, reset) {
  select.classList.remove("wrong");
  // forțează reluarea animației de scuturare
  void select.offsetWidth;
  select.classList.add("wrong");
  if (reset) select.value = "";
}

function celebrate(bonus) {
  const msg = CHEERS[Math.floor(Math.random() * CHEERS.length)];
  const bonusText = bonus > 0 ? ` (+${bonus} bonus fără greșeli!)` : "";
  el.cheer.innerHTML = `<div class="big">🎉 ${msg}</div><div class="points">Pagină completată${bonusText}</div>`;
  el.cheer.hidden = false;
  el.checkBtn.hidden = true;

  if (page + 1 < totalPages) {
    el.nextBtn.hidden = false;
  } else {
    el.nextBtn.hidden = true;
    setTimeout(showFinal, 1600);
  }
  launchConfetti();
}

function nextPage() {
  page += 1;
  save();
  renderPage();
}

function showFinal() {
  el.progress.textContent = "";
  el.cheer.hidden = true;
  el.checkBtn.hidden = true;
  el.nextBtn.hidden = true;
  el.container.innerHTML = "";

  const div = document.createElement("div");
  div.className = "final card";
  div.innerHTML = `
    <div class="trophy">🏆</div>
    <h2>Ai terminat toate versetele!</h2>
    <p>Punctaj total: <strong>⭐ ${score}</strong></p>
  `;
  const restart = document.createElement("button");
  restart.className = "btn secondary";
  restart.style.marginTop = "16px";
  restart.textContent = "Reia de la început";
  restart.addEventListener("click", () => {
    page = 0;
    save();
    renderPage();
  });
  div.appendChild(restart);
  el.container.appendChild(div);
}

/* --- Confetti simplu pe canvas, fără dependențe --- */
function launchConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#f0b429", "#4c3aa3", "#2e9e5b", "#d64545", "#3e9be0"];
  const pieces = Array.from({ length: 90 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * canvas.height * 0.4,
    w: 6 + Math.random() * 6,
    h: 8 + Math.random() * 8,
    color: colors[Math.floor(Math.random() * colors.length)],
    vy: 2.5 + Math.random() * 3,
    vx: -1.5 + Math.random() * 3,
    rot: Math.random() * Math.PI,
    vrot: -0.1 + Math.random() * 0.2,
  }));

  const start = performance.now();
  function frame(now) {
    const t = now - start;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of pieces) {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vrot;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (t < 2500) {
      requestAnimationFrame(frame);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  requestAnimationFrame(frame);
}

/* --- Inițializare --- */
el.checkBtn.addEventListener("click", checkAnswers);
el.nextBtn.addEventListener("click", nextPage);

el.score.textContent = score;
if (page >= totalPages) page = 0;
renderPage();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
