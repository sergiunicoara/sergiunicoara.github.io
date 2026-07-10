/* Fundaluri animate pe canvas — scene biblice colorate și detaliate, alese
   automat după cuvinte-cheie din versetele paginii curente.
   Fiecare scenă are init(w,h) -> stare și draw(ctx,w,h,age,stare). */

/* ── utilitare ─────────────────────────────────────────────── */
function rnd(a, b) { return a + Math.random() * (b - a); }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function skyGrad(ctx, w, h, stops, hFrac = 1) {
  const g = ctx.createLinearGradient(0, 0, 0, h * hFrac);
  stops.forEach(([p, c]) => g.addColorStop(p, c));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
}

function star5(ctx, x, y, r, col, alpha) {
  ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = col; ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const ang = (i * Math.PI) / 5 - Math.PI / 2, rad = i % 2 === 0 ? r : r * 0.45;
    const px = x + rad * Math.cos(ang), py = y + rad * Math.sin(ang);
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath(); ctx.fill(); ctx.restore();
}

function fluffyCloud(ctx, x, y, cw, ch, col, alpha) {
  ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = col;
  [[0, 0, 0.42], [-0.32, 0.1, 0.3], [0.32, 0.1, 0.32], [-0.14, -0.16, 0.3], [0.16, -0.14, 0.28]]
    .forEach(([dx, dy, r]) => { ctx.beginPath(); ctx.arc(x + dx * cw, y + dy * ch * 2, cw * r * 0.55, 0, Math.PI * 2); ctx.fill(); });
  ctx.restore();
}

function glowSun(ctx, x, y, r, t) {
  const halo = ctx.createRadialGradient(x, y, 0, x, y, r * 3);
  halo.addColorStop(0, 'rgba(255,236,150,.55)'); halo.addColorStop(1, 'rgba(255,236,150,0)');
  ctx.fillStyle = halo; ctx.fillRect(x - r * 3, y - r * 3, r * 6, r * 6);
  ctx.fillStyle = '#FFD54F'; ctx.beginPath(); ctx.arc(x, y, r * (1 + 0.04 * Math.sin(t)), 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#FFE082'; ctx.beginPath(); ctx.arc(x, y, r * 0.72, 0, Math.PI * 2); ctx.fill();
}

function hillBand(ctx, w, h, baseY, amp, freq, phase, col) {
  ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(0, h);
  for (let x = 0; x <= w; x += 8) {
    const y = baseY + amp * Math.sin((x / w) * Math.PI * freq + phase);
    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.lineTo(w, h); ctx.closePath(); ctx.fill();
}

function flame(ctx, x, y, s, t, seed = 0) {
  const f = 1 + 0.18 * Math.sin(t * 9 + seed) + 0.1 * Math.sin(t * 23 + seed * 2);
  const layers = [[s, '#FF7043', 0.9], [s * 0.66, '#FFA726', 0.95], [s * 0.38, '#FFEE58', 1]];
  layers.forEach(([r, c, a]) => {
    ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = c; ctx.beginPath();
    ctx.ellipse(x + Math.sin(t * 7 + seed) * s * 0.08, y - r * 0.5, r * 0.5 * f, r * f, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.restore();
  });
}

function smokePuffs(ctx, x, y, s, age, n = 3) {
  for (let i = 0; i < n; i++) {
    const p = ((age + i * 1100) % 3300) / 3300;
    ctx.save(); ctx.globalAlpha = 0.35 * (1 - p);
    ctx.fillStyle = '#B0BEC5'; ctx.beginPath();
    ctx.ellipse(x + Math.sin(p * 5 + i) * s * 0.4, y - p * s * 3.2, s * (0.3 + p * 0.7), s * (0.22 + p * 0.5), 0, 0, Math.PI * 2);
    ctx.fill(); ctx.restore();
  }
}

function figure(ctx, x, y, s, robe, skin = '#8D6E63') {
  // siluetă simplă: cap + robă
  ctx.fillStyle = skin; ctx.beginPath(); ctx.arc(x, y - s * 0.85, s * 0.18, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = robe; ctx.beginPath();
  ctx.moveTo(x - s * 0.3, y); ctx.quadraticCurveTo(x - s * 0.32, y - s * 0.72, x, y - s * 0.7);
  ctx.quadraticCurveTo(x + s * 0.32, y - s * 0.72, x + s * 0.3, y); ctx.closePath(); ctx.fill();
}

function bird(ctx, x, y, s, col = 'rgba(60,60,80,.7)') {
  ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = Math.max(1.4, s * 0.12); ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x - s, y); ctx.quadraticCurveTo(x - s * 0.4, y - s * 0.7, x, y);
  ctx.quadraticCurveTo(x + s * 0.4, y - s * 0.7, x + s, y); ctx.stroke(); ctx.restore();
}

function banner(ctx, x, y, len, t, col) {
  ctx.strokeStyle = '#6D4C41'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - len); ctx.stroke();
  ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(x, y - len);
  const sway = Math.sin(t * 2.4 + x) * len * 0.1;
  ctx.quadraticCurveTo(x + len * 0.3, y - len + sway, x + len * 0.55, y - len + len * 0.1 + sway);
  ctx.lineTo(x, y - len + len * 0.24); ctx.closePath(); ctx.fill();
}

function sheep(ctx, x, y, s, t, ph) {
  const bob = Math.sin(t * 2 + ph) * s * 0.05;
  ctx.fillStyle = '#FAFAFA'; ctx.beginPath(); ctx.ellipse(x, y + bob, s, s * 0.65, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#5D4037';
  ctx.beginPath(); ctx.arc(x - s * 0.85, y - s * 0.25 + bob, s * 0.32, 0, Math.PI * 2); ctx.fill();
  ctx.fillRect(x - s * 0.5, y + s * 0.4, s * 0.16, s * 0.5);
  ctx.fillRect(x + s * 0.35, y + s * 0.4, s * 0.16, s * 0.5);
}

function palmTree(ctx, x, y, s) {
  ctx.strokeStyle = '#8D6E63'; ctx.lineWidth = s * 0.12; ctx.beginPath();
  ctx.moveTo(x, y); ctx.quadraticCurveTo(x + s * 0.18, y - s * 0.6, x + s * 0.08, y - s * 1.1); ctx.stroke();
  ctx.strokeStyle = '#43A047'; ctx.lineWidth = s * 0.09;
  for (let i = 0; i < 6; i++) {
    const ang = -Math.PI / 2 + (i - 2.5) * 0.45;
    ctx.beginPath(); ctx.moveTo(x + s * 0.08, y - s * 1.1);
    ctx.quadraticCurveTo(x + s * 0.08 + Math.cos(ang) * s * 0.5, y - s * 1.1 + Math.sin(ang) * s * 0.5 - s * 0.1,
      x + s * 0.08 + Math.cos(ang) * s * 0.85, y - s * 1.1 + Math.sin(ang) * s * 0.55);
    ctx.stroke();
  }
}

/* ── scenele ───────────────────────────────────────────────── */
const SCENES = [
  {
    id: 'templu',
    keywords: ['altar', 'jertfă', 'jertfele', 'jertfa', 'templu', 'chivot', 'preot', 'preoți',
      'arderi', 'sfânt', 'slujbă', 'Silo', 'Casa Domnului', 'tămâie', 'efod'],
    init(w, h) {
      return {
        embers: Array.from({ length: 14 }, () => ({ x: rnd(-30, 30), period: rnd(2200, 4200), off: rnd(0, 5000), r: rnd(1.5, 3.5) })),
        rays: Array.from({ length: 5 }, (_, i) => ({ ang: -0.5 + i * 0.25, sp: rnd(0.4, 0.9), ph: rnd(0, 6) })),
      };
    },
    draw(ctx, w, h, age, s) {
      const t = age / 1000;
      skyGrad(ctx, w, h, [[0, '#FFE0B2'], [0.45, '#FFCC80'], [0.75, '#FFB74D'], [1, '#FF9800']]);
      // raze din cer
      s.rays.forEach(r => {
        ctx.save(); ctx.globalAlpha = 0.12 + 0.1 * Math.sin(t * r.sp + r.ph);
        ctx.fillStyle = '#FFF9C4'; ctx.beginPath();
        ctx.moveTo(w / 2, -20);
        ctx.lineTo(w / 2 + Math.tan(r.ang) * h - w * 0.05, h);
        ctx.lineTo(w / 2 + Math.tan(r.ang) * h + w * 0.05, h);
        ctx.closePath(); ctx.fill(); ctx.restore();
      });
      // platformă + trepte
      ctx.fillStyle = '#A1887F'; ctx.fillRect(0, h * 0.82, w, h * 0.18);
      ctx.fillStyle = '#8D6E63'; ctx.fillRect(w * 0.08, h * 0.79, w * 0.84, h * 0.035);
      ctx.fillStyle = '#795548'; ctx.fillRect(w * 0.13, h * 0.755, w * 0.74, h * 0.035);
      // templu
      const tx = w / 2, ty = h * 0.755, tw = Math.min(w * 0.62, 430), th = h * 0.4;
      ctx.fillStyle = '#D7CCC8'; ctx.fillRect(tx - tw / 2, ty - th, tw, th);
      // coloane
      ctx.fillStyle = '#EFEBE9';
      for (let i = 0; i < 6; i++) {
        const cx = tx - tw / 2 + tw * (0.08 + i * 0.168);
        ctx.fillRect(cx, ty - th + th * 0.18, tw * 0.07, th * 0.82);
      }
      // fronton
      ctx.fillStyle = '#BCAAA4'; ctx.beginPath();
      ctx.moveTo(tx - tw / 2 - tw * 0.06, ty - th); ctx.lineTo(tx, ty - th - h * 0.13);
      ctx.lineTo(tx + tw / 2 + tw * 0.06, ty - th); ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#FFD54F'; ctx.beginPath(); ctx.arc(tx, ty - th - h * 0.055, 9, 0, Math.PI * 2); ctx.fill();
      // altar în față
      const ax = tx, ay = h * 0.88;
      ctx.fillStyle = '#6D4C41'; ctx.fillRect(ax - 46, ay - 36, 92, 36);
      ctx.fillStyle = '#5D4037'; ctx.fillRect(ax - 56, ay - 8, 112, 10);
      flame(ctx, ax, ay - 36, 34, t);
      smokePuffs(ctx, ax, ay - 78, 16, age);
      // scântei
      s.embers.forEach(e => {
        const p = ((age + e.off) % e.period) / e.period;
        ctx.save(); ctx.globalAlpha = (1 - p) * 0.8; ctx.fillStyle = '#FFB300';
        ctx.beginPath(); ctx.arc(ax + e.x + Math.sin(p * 8) * 10, ay - 40 - p * 130, e.r * (1 - p * 0.5), 0, Math.PI * 2);
        ctx.fill(); ctx.restore();
      });
    },
  },
  {
    id: 'razboi',
    keywords: ['război', 'luptă', 'sabie', 'suliță', 'oaste', 'bătălie', 'arme', 'vitejii',
      'filisteni', 'oștire', 'înfrângere', 'biruit', 'tabără'],
    init(w, h) {
      return {
        spears: Array.from({ length: 9 }, (_, i) => ({ x: 0.05 + i * 0.11, hgt: rnd(0.1, 0.16), ph: rnd(0, 6) })),
        dust: Array.from({ length: 8 }, () => ({ x: rnd(0.2, 0.8), period: rnd(1800, 3200), off: rnd(0, 4000), r: rnd(8, 22) })),
        birds: Array.from({ length: 4 }, () => ({ x: rnd(0, 1), y: rnd(0.08, 0.22), sp: rnd(0.5, 1.1) })),
      };
    },
    draw(ctx, w, h, age, s) {
      const t = age / 1000;
      skyGrad(ctx, w, h, [[0, '#FF8A65'], [0.4, '#FF7043'], [0.7, '#F4511E'], [1, '#BF360C']]);
      glowSun(ctx, w * 0.5, h * 0.3, 34, t);
      // dealuri
      hillBand(ctx, w, h, h * 0.62, h * 0.03, 3, 0, '#6D4C41');
      hillBand(ctx, w, h, h * 0.7, h * 0.025, 4, 2, '#5D4037');
      // linii de sulițe — două tabere
      s.spears.forEach((sp, i) => {
        const side = i < 5 ? -1 : 1;
        const bx = w * sp.x, by = h * 0.72;
        const sway = Math.sin(t * 1.6 + sp.ph) * 3;
        ctx.strokeStyle = '#3E2723'; ctx.lineWidth = 3.5;
        ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx + sway + side * 8, by - h * sp.hgt); ctx.stroke();
        ctx.fillStyle = '#90A4AE'; ctx.beginPath();
        const tipx = bx + sway + side * 8, tipy = by - h * sp.hgt;
        ctx.moveTo(tipx - 4, tipy); ctx.lineTo(tipx, tipy - 14); ctx.lineTo(tipx + 4, tipy); ctx.closePath(); ctx.fill();
        // luptător sub suliță
        figure(ctx, bx, by, 34, i < 5 ? '#B71C1C' : '#1A237E');
      });
      // steaguri
      banner(ctx, w * 0.09, h * 0.72, 90, t, '#C62828');
      banner(ctx, w * 0.91, h * 0.72, 90, t + 1, '#283593');
      // praf
      s.dust.forEach(d => {
        const p = ((age + d.off) % d.period) / d.period;
        ctx.save(); ctx.globalAlpha = 0.3 * (1 - p);
        ctx.fillStyle = '#D7CCC8'; ctx.beginPath();
        ctx.ellipse(w * d.x + p * 30, h * 0.74 - p * 30, d.r * (1 + p), d.r * 0.5 * (1 + p), 0, 0, Math.PI * 2);
        ctx.fill(); ctx.restore();
      });
      // scânteie ciocnire în centru
      const clash = 0.5 + 0.5 * Math.sin(t * 3.4);
      star5(ctx, w * 0.5, h * 0.6, 12 + clash * 8, '#FFEB3B', 0.4 + clash * 0.6);
      // păsări care fug
      s.birds.forEach(b => { b.x += 0.0012 * b.sp; if (b.x > 1.1) b.x = -0.1; bird(ctx, w * b.x, h * b.y + Math.sin(t * 2 + b.x * 9) * 5, 10); });
      // sol
      ctx.fillStyle = '#4E342E'; ctx.fillRect(0, h * 0.86, w, h * 0.14);
    },
  },
  {
    id: 'imparat',
    keywords: ['împărat', 'împăratul', 'tron', 'palat', 'domnie', 'coroană', 'sceptru',
      'uns', 'rege', 'împărăție'],
    init() {
      return { sparks: Array.from({ length: 16 }, () => ({ x: rnd(0.1, 0.9), y: rnd(0.1, 0.6), sp: rnd(0.8, 2.4), ph: rnd(0, 6), r: rnd(2, 4.5) })) };
    },
    draw(ctx, w, h, age, s) {
      const t = age / 1000;
      skyGrad(ctx, w, h, [[0, '#4A148C'], [0.5, '#6A1B9A'], [0.85, '#4A148C'], [1, '#311B92']]);
      // raze aurii din spatele tronului
      for (let i = 0; i < 9; i++) {
        const ang = -Math.PI / 2 + (i - 4) * 0.22 + Math.sin(t * 0.4) * 0.03;
        ctx.save(); ctx.globalAlpha = 0.16 + 0.1 * Math.sin(t * 1.2 + i);
        ctx.strokeStyle = '#FFD54F'; ctx.lineWidth = 10;
        ctx.beginPath(); ctx.moveTo(w / 2, h * 0.44);
        ctx.lineTo(w / 2 + Math.cos(ang) * h * 0.55, h * 0.44 + Math.sin(ang) * h * 0.55); ctx.stroke(); ctx.restore();
      }
      // sclipiri
      s.sparks.forEach(sp => star5(ctx, w * sp.x, h * sp.y, sp.r, '#FFE082', 0.3 + 0.6 * (0.5 + 0.5 * Math.sin(t * sp.sp + sp.ph))));
      // covor roșu
      ctx.fillStyle = '#B71C1C'; ctx.beginPath();
      ctx.moveTo(w * 0.38, h * 0.62); ctx.lineTo(w * 0.62, h * 0.62); ctx.lineTo(w * 0.8, h); ctx.lineTo(w * 0.2, h); ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#FFD54F'; ctx.fillRect(w * 0.2, h * 0.98, w * 0.6, h * 0.02);
      // trepte
      ctx.fillStyle = '#7B1FA2'; ctx.fillRect(w * 0.26, h * 0.66, w * 0.48, h * 0.05);
      ctx.fillStyle = '#8E24AA'; ctx.fillRect(w * 0.31, h * 0.62, w * 0.38, h * 0.05);
      // tron auriu
      const cx = w / 2;
      ctx.fillStyle = '#F9A825'; ctx.fillRect(cx - 62, h * 0.38, 124, h * 0.24);
      ctx.fillStyle = '#FBC02D'; ctx.fillRect(cx - 78, h * 0.5, 20, h * 0.13); ctx.fillRect(cx + 58, h * 0.5, 20, h * 0.13);
      ctx.beginPath(); ctx.arc(cx, h * 0.38, 62, Math.PI, 0); ctx.fill();
      // împăratul
      figure(ctx, cx, h * 0.62, 86, '#4527A0', '#FFCC80');
      // coroană
      ctx.fillStyle = '#FFD600'; ctx.beginPath();
      const cy = h * 0.62 - 86 * 0.85 - 15;
      ctx.moveTo(cx - 16, cy + 10); ctx.lineTo(cx - 16, cy); ctx.lineTo(cx - 8, cy + 6); ctx.lineTo(cx, cy - 4);
      ctx.lineTo(cx + 8, cy + 6); ctx.lineTo(cx + 16, cy); ctx.lineTo(cx + 16, cy + 10); ctx.closePath(); ctx.fill();
      // sceptru
      ctx.strokeStyle = '#FFD600'; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(cx + 30, h * 0.52); ctx.lineTo(cx + 44, h * 0.62); ctx.stroke();
      star5(ctx, cx + 30, h * 0.52, 7, '#FFF176', 1);
      // torțe
      [[w * 0.14], [w * 0.86]].forEach(([tx2], i) => {
        ctx.fillStyle = '#5D4037'; ctx.fillRect(tx2 - 5, h * 0.5, 10, h * 0.16);
        flame(ctx, tx2, h * 0.5, 22, t, i * 3);
      });
    },
  },
  {
    id: 'pustie',
    keywords: ['pustie', 'pustiul', 'cort', 'nisip', 'tabăra', 'drum', 'călătorie', 'Zif', 'câmpii'],
    init(w, h) {
      return {
        sand: Array.from({ length: 12 }, () => ({ x: rnd(0, 1), y: rnd(0.72, 0.95), sp: rnd(0.3, 0.9), ph: rnd(0, 6) })),
        camelOff: rnd(0, 20000),
      };
    },
    draw(ctx, w, h, age, s) {
      const t = age / 1000;
      skyGrad(ctx, w, h, [[0, '#4FC3F7'], [0.45, '#81D4FA'], [0.7, '#FFE0B2'], [1, '#FFCC80']]);
      glowSun(ctx, w * 0.78, h * 0.16, 38, t);
      // dune
      hillBand(ctx, w, h, h * 0.62, h * 0.04, 2.5, 0.5, '#FFB74D');
      hillBand(ctx, w, h, h * 0.72, h * 0.045, 3.2, 2.2, '#FFA726');
      hillBand(ctx, w, h, h * 0.82, h * 0.05, 2.2, 4.1, '#FB8C00');
      // palmier
      palmTree(ctx, w * 0.12, h * 0.78, 70);
      // corturi
      const tent = (tx, ty, ts, col1, col2) => {
        ctx.fillStyle = col1; ctx.beginPath();
        ctx.moveTo(tx, ty - ts); ctx.lineTo(tx - ts * 1.1, ty); ctx.lineTo(tx + ts * 1.1, ty); ctx.closePath(); ctx.fill();
        ctx.fillStyle = col2; ctx.beginPath();
        ctx.moveTo(tx, ty - ts); ctx.lineTo(tx - ts * 0.25, ty); ctx.lineTo(tx + ts * 0.25, ty); ctx.closePath(); ctx.fill();
      };
      tent(w * 0.32, h * 0.8, 62, '#8D6E63', '#5D4037');
      tent(w * 0.62, h * 0.76, 44, '#A1887F', '#6D4C41');
      // cămilă traversând
      const cp = ((age + s.camelOff) % 26000) / 26000;
      const camX = -60 + (w + 120) * cp, camY = h * 0.85 + Math.sin(cp * 40) * 2;
      ctx.fillStyle = '#795548';
      ctx.beginPath(); ctx.ellipse(camX, camY, 26, 14, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(camX - 6, camY - 14, 8, 0, Math.PI * 2); ctx.fill(); // cocoașă
      ctx.beginPath(); ctx.arc(camX + 8, camY - 12, 7, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#795548'; ctx.lineWidth = 4; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(camX + 22, camY - 8); ctx.quadraticCurveTo(camX + 34, camY - 22, camX + 32, camY - 34); ctx.stroke();
      ctx.fillStyle = '#6D4C41'; ctx.beginPath(); ctx.arc(camX + 33, camY - 36, 5, 0, Math.PI * 2); ctx.fill();
      const legPh = t * 6;
      for (let i = 0; i < 4; i++) {
        const lx = camX - 16 + i * 11, sw = Math.sin(legPh + i * 1.6) * 4;
        ctx.beginPath(); ctx.moveTo(lx, camY + 8); ctx.lineTo(lx + sw, camY + 26); ctx.stroke();
      }
      // fire de nisip purtate de vânt
      s.sand.forEach(sd => {
        const x = (sd.x + t * 0.02 * sd.sp) % 1.05;
        ctx.save(); ctx.globalAlpha = 0.35;
        ctx.strokeStyle = '#FFE0B2'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(w * x, h * sd.y + Math.sin(t + sd.ph) * 4);
        ctx.quadraticCurveTo(w * x + 22, h * sd.y - 4, w * x + 44, h * sd.y + Math.sin(t + sd.ph + 1) * 4); ctx.stroke(); ctx.restore();
      });
    },
  },
  {
    id: 'pastor',
    keywords: ['oi', 'oile', 'turmă', 'păstor', 'oaie', 'miei', 'mielușea', 'pășune', 'Betleem'],
    init(w, h) {
      return {
        clouds: Array.from({ length: 4 }, () => ({ x: rnd(0, 1), y: rnd(0.06, 0.22), cw: rnd(70, 150), sp: rnd(0.1, 0.3) })),
        sheep: Array.from({ length: 5 }, (_, i) => ({ x: 0.15 + i * 0.16 + rnd(-0.04, 0.04), y: rnd(0.78, 0.88), s: rnd(16, 26), ph: rnd(0, 6) })),
        flowers: Array.from({ length: 14 }, () => ({ x: rnd(0, 1), y: rnd(0.72, 0.97), col: pick(['#EC407A', '#FFEE58', '#AB47BC', '#EF5350', '#42A5F5']) })),
        bfly: Array.from({ length: 3 }, () => ({ x: rnd(0.1, 0.9), y: rnd(0.4, 0.65), ph: rnd(0, 6), col: pick(['#FF7043', '#FFCA28', '#AB47BC']) })),
      };
    },
    draw(ctx, w, h, age, s) {
      const t = age / 1000;
      skyGrad(ctx, w, h, [[0, '#64B5F6'], [0.5, '#90CAF9'], [0.8, '#C5E1A5'], [1, '#AED581']]);
      glowSun(ctx, w * 0.16, h * 0.13, 32, t);
      s.clouds.forEach(c => { c.x += 0.0002 * c.sp * 60; if (c.x > 1.2) c.x = -0.2; fluffyCloud(ctx, w * c.x, h * c.y, c.cw, c.cw * 0.4, '#fff', 0.9); });
      // dealuri verzi
      hillBand(ctx, w, h, h * 0.58, h * 0.05, 2, 0.4, '#81C784');
      hillBand(ctx, w, h, h * 0.68, h * 0.05, 2.6, 2.4, '#66BB6A');
      hillBand(ctx, w, h, h * 0.8, h * 0.045, 2.1, 4.4, '#4CAF50');
      // copac
      ctx.fillStyle = '#6D4C41'; ctx.fillRect(w * 0.82 - 7, h * 0.52, 14, h * 0.14);
      ctx.fillStyle = '#388E3C'; ctx.beginPath(); ctx.arc(w * 0.82, h * 0.48, 46, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#43A047'; ctx.beginPath(); ctx.arc(w * 0.79, h * 0.52, 34, 0, Math.PI * 2); ctx.fill();
      // flori
      s.flowers.forEach(f => {
        ctx.fillStyle = f.col; ctx.beginPath(); ctx.arc(w * f.x, h * f.y, 4, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#FFF59D'; ctx.beginPath(); ctx.arc(w * f.x, h * f.y, 1.6, 0, Math.PI * 2); ctx.fill();
      });
      // păstorul cu toiag
      const px = w * 0.24, py = h * 0.82;
      figure(ctx, px, py, 78, '#8D6E63', '#FFCC80');
      ctx.strokeStyle = '#5D4037'; ctx.lineWidth = 5; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(px + 26, py - 60); ctx.lineTo(px + 34, py);
      ctx.moveTo(px + 26, py - 60); ctx.quadraticCurveTo(px + 14, py - 76, px + 26, py - 82); ctx.stroke();
      // oile
      s.sheep.forEach(sh => sheep(ctx, w * sh.x, h * sh.y, sh.s, t, sh.ph));
      // fluturi
      s.bfly.forEach(b => {
        const bx = w * b.x + Math.sin(t * 0.7 + b.ph) * 30, by = h * b.y + Math.cos(t * 0.9 + b.ph) * 18;
        const fl = Math.sin(t * 10 + b.ph) * 0.5 + 0.6;
        ctx.fillStyle = b.col;
        ctx.beginPath(); ctx.ellipse(bx - 4 * fl, by, 6 * fl, 4, -0.4, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(bx + 4 * fl, by, 6 * fl, 4, 0.4, 0, Math.PI * 2); ctx.fill();
      });
    },
  },
  {
    id: 'apa',
    keywords: ['apă', 'apele', 'râu', 'mare', 'Iordan', 'fântână', 'pârâu', 'setea', 'vad'],
    init(w, h) {
      return {
        fish: Array.from({ length: 3 }, (_, i) => ({ x: rnd(0.2, 0.8), period: rnd(4000, 7000), off: i * 2200 })),
        birds: Array.from({ length: 4 }, () => ({ x: rnd(0, 1), y: rnd(0.08, 0.25), sp: rnd(0.4, 0.9) })),
        reeds: Array.from({ length: 7 }, (_, i) => ({ x: i < 4 ? rnd(0.02, 0.14) : rnd(0.85, 0.98), hgt: rnd(0.1, 0.16), ph: rnd(0, 6) })),
      };
    },
    draw(ctx, w, h, age, s) {
      const t = age / 1000;
      skyGrad(ctx, w, h, [[0, '#4FC3F7'], [0.4, '#81D4FA'], [0.55, '#B3E5FC'], [1, '#B3E5FC']]);
      glowSun(ctx, w * 0.8, h * 0.14, 34, t);
      s.birds.forEach(b => { b.x += 0.001 * b.sp; if (b.x > 1.1) b.x = -0.1; bird(ctx, w * b.x, h * b.y + Math.sin(t * 2 + b.x * 8) * 6, 11); });
      // mal îndepărtat
      hillBand(ctx, w, h, h * 0.5, h * 0.03, 2.4, 1, '#8BC34A');
      // apa — benzi de valuri animate
      const waveBand = (yBase, amp, freq, spd, col) => {
        ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 6) {
          const y = yBase + amp * Math.sin((freq * x) / w * Math.PI * 2 + t * spd);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h); ctx.closePath(); ctx.fill();
      };
      waveBand(h * 0.55, 8, 3, 0.8, '#0288D1');
      waveBand(h * 0.62, 9, 4, 1.1, '#039BE5');
      waveBand(h * 0.7, 8, 5, 1.5, '#03A9F4');
      waveBand(h * 0.78, 7, 6, 1.9, '#29B6F6');
      waveBand(h * 0.88, 6, 7, 2.3, '#4FC3F7');
      // sclipiri pe apă
      for (let i = 0; i < 10; i++) {
        const sx = (i / 10 + t * 0.015) % 1;
        ctx.save(); ctx.globalAlpha = 0.4 + 0.3 * Math.sin(t * 2 + i);
        ctx.strokeStyle = '#E1F5FE'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(w * sx, h * (0.58 + (i % 4) * 0.09)); ctx.lineTo(w * sx + 18, h * (0.58 + (i % 4) * 0.09)); ctx.stroke();
        ctx.restore();
      }
      // pești sărind
      s.fish.forEach(f => {
        const p = ((age + f.off) % f.period) / f.period;
        if (p > 0.3) return;
        const jp = p / 0.3;
        const fx = w * f.x + jp * 50, fy = h * 0.62 - Math.sin(jp * Math.PI) * h * 0.09;
        ctx.save(); ctx.translate(fx, fy); ctx.rotate(jp < 0.5 ? -0.6 : 0.6);
        ctx.fillStyle = '#B0BEC5'; ctx.beginPath(); ctx.ellipse(0, 0, 16, 7, 0, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.moveTo(14, 0); ctx.lineTo(24, -7); ctx.lineTo(24, 7); ctx.closePath(); ctx.fill();
        ctx.restore();
      });
      // trestii
      s.reeds.forEach(r => {
        const sway = Math.sin(t * 1.4 + r.ph) * 6;
        ctx.strokeStyle = '#33691E'; ctx.lineWidth = 4; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(w * r.x, h * 0.98);
        ctx.quadraticCurveTo(w * r.x + sway * 0.5, h * (0.98 - r.hgt / 2), w * r.x + sway, h * (0.98 - r.hgt)); ctx.stroke();
        ctx.fillStyle = '#795548'; ctx.beginPath();
        ctx.ellipse(w * r.x + sway, h * (0.98 - r.hgt) - 8, 4, 11, 0, 0, Math.PI * 2); ctx.fill();
      });
    },
  },
  {
    id: 'cetate',
    keywords: ['cetate', 'cetatea', 'poartă', 'porți', 'zid', 'ziduri', 'Ierusalim', 'turn', 'Hebron', 'Gat'],
    init() {
      return { stars: Array.from({ length: 20 }, () => ({ x: rnd(0, 1), y: rnd(0, 0.3), r: rnd(1.5, 3), sp: rnd(0.6, 2), ph: rnd(0, 6) })) };
    },
    draw(ctx, w, h, age, s) {
      const t = age / 1000;
      skyGrad(ctx, w, h, [[0, '#5C6BC0'], [0.45, '#7986CB'], [0.75, '#FFAB91'], [1, '#FF8A65']]);
      s.stars.forEach(st => star5(ctx, w * st.x, h * st.y, st.r, '#FFF9C4', 0.3 + 0.5 * (0.5 + 0.5 * Math.sin(t * st.sp + st.ph))));
      glowSun(ctx, w * 0.5, h * 0.42, 40, t); // soare la apus în spatele cetății
      // deal
      hillBand(ctx, w, h, h * 0.6, h * 0.03, 2, 1, '#8D6E63');
      // zid principal
      const wallY = h * 0.56, wallH = h * 0.3;
      ctx.fillStyle = '#BCAAA4'; ctx.fillRect(0, wallY, w, wallH);
      // creneluri
      ctx.fillStyle = '#A1887F';
      for (let x = 0; x < w; x += 42) ctx.fillRect(x, wallY - 16, 26, 16);
      // rosturi cărămizi
      ctx.strokeStyle = 'rgba(93,64,55,.25)'; ctx.lineWidth = 1.5;
      for (let y = wallY + 22; y < wallY + wallH; y += 24) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
      // turnuri
      const tower = (tx, tw2, th2) => {
        ctx.fillStyle = '#A1887F'; ctx.fillRect(tx - tw2 / 2, wallY - th2, tw2, th2 + wallH);
        ctx.fillStyle = '#8D6E63';
        for (let x = tx - tw2 / 2; x < tx + tw2 / 2; x += 20) ctx.fillRect(x, wallY - th2 - 14, 13, 14);
        ctx.fillStyle = '#4E342E'; ctx.fillRect(tx - 9, wallY - th2 + 22, 18, 26);
      };
      tower(w * 0.14, 76, h * 0.16);
      tower(w * 0.86, 76, h * 0.16);
      // steag pe turn
      banner(ctx, w * 0.14, h * 0.56 - h * 0.16 - 14, 60, t, '#D32F2F');
      banner(ctx, w * 0.86, h * 0.56 - h * 0.16 - 14, 60, t + 2, '#1976D2');
      // poartă arcuită
      ctx.fillStyle = '#3E2723'; ctx.beginPath();
      ctx.moveTo(w * 0.44, wallY + wallH); ctx.lineTo(w * 0.44, wallY + wallH * 0.4);
      ctx.quadraticCurveTo(w * 0.5, wallY + wallH * 0.12, w * 0.56, wallY + wallH * 0.4);
      ctx.lineTo(w * 0.56, wallY + wallH); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = '#FFB300'; ctx.lineWidth = 3; ctx.stroke();
      // torțe la poartă
      flame(ctx, w * 0.415, wallY + wallH * 0.42, 16, t, 1);
      flame(ctx, w * 0.585, wallY + wallH * 0.42, 16, t, 4);
      // sol în fața zidului
      ctx.fillStyle = '#6D4C41'; ctx.fillRect(0, h * 0.86, w, h * 0.14);
    },
  },
  {
    id: 'noapte',
    keywords: ['noapte', 'noaptea', 'stele', 'întuneric', 'vis', 'somn', 'lună', 'a vorbit Domnul'],
    init(w, h) {
      return {
        stars: Array.from({ length: 60 }, () => ({ x: rnd(0, 1), y: rnd(0, 0.55), r: rnd(1, 3.4), sp: rnd(0.5, 2.2), ph: rnd(0, 6) })),
        shoots: Array.from({ length: 3 }, (_, i) => ({ trig: 2000 + i * 5000, x0: rnd(0.1, 0.6), y0: rnd(0.05, 0.3), dur: rnd(600, 900) })),
        flies: Array.from({ length: 8 }, () => ({ x: rnd(0.1, 0.9), y: rnd(0.6, 0.85), sp: rnd(0.8, 2), ph: rnd(0, 6) })),
      };
    },
    draw(ctx, w, h, age, s) {
      const t = age / 1000;
      skyGrad(ctx, w, h, [[0, '#0D1B4C'], [0.5, '#1A2C6B'], [0.85, '#283A80'], [1, '#1A2C6B']]);
      // luna cu halo pulsând
      const mx = w * 0.74, my = h * 0.18;
      const halo = ctx.createRadialGradient(mx, my, 0, mx, my, 110);
      halo.addColorStop(0, `rgba(255,249,196,${0.35 + 0.12 * Math.sin(t * 0.8)})`); halo.addColorStop(1, 'rgba(255,249,196,0)');
      ctx.fillStyle = halo; ctx.fillRect(mx - 110, my - 110, 220, 220);
      ctx.fillStyle = '#FFF9C4'; ctx.beginPath(); ctx.arc(mx, my, 42, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(200,190,140,.35)';
      ctx.beginPath(); ctx.arc(mx - 12, my - 8, 8, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(mx + 10, my + 12, 6, 0, Math.PI * 2); ctx.fill();
      // stele
      s.stars.forEach(st => star5(ctx, w * st.x, h * st.y, st.r, '#FFFDE7', 0.25 + 0.65 * (0.5 + 0.5 * Math.sin(t * st.sp + st.ph))));
      // stele căzătoare
      s.shoots.forEach(sh => {
        const el = (age - sh.trig) % 15000;
        if (el < 0 || el > sh.dur) return;
        const p = el / sh.dur;
        const x = w * sh.x0 + p * 190, y = h * sh.y0 + p * 80;
        ctx.save(); ctx.globalAlpha = p < 0.3 ? p / 0.3 : 1 - (p - 0.3) / 0.7;
        const g = ctx.createLinearGradient(x, y, x - 70, y - 30);
        g.addColorStop(0, '#fff'); g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.strokeStyle = g; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - 70, y - 30); ctx.stroke();
        star5(ctx, x, y, 4, '#fff', 1); ctx.restore();
      });
      // dealuri
      hillBand(ctx, w, h, h * 0.66, h * 0.04, 2.2, 1.2, '#152258');
      hillBand(ctx, w, h, h * 0.78, h * 0.04, 1.8, 3.6, '#0F1A45');
      // foc de tabără + siluetă dormind
      const fx = w * 0.35, fy = h * 0.88;
      ctx.strokeStyle = '#4E342E'; ctx.lineWidth = 5; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(fx - 14, fy); ctx.lineTo(fx + 14, fy - 6); ctx.moveTo(fx - 14, fy - 6); ctx.lineTo(fx + 14, fy); ctx.stroke();
      flame(ctx, fx, fy - 4, 24, t);
      // siluetă culcată
      ctx.fillStyle = '#37474F'; ctx.beginPath(); ctx.ellipse(w * 0.55, h * 0.9, 46, 13, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(w * 0.55 + 42, h * 0.885, 11, 0, Math.PI * 2); ctx.fill();
      // licurici
      s.flies.forEach(f => {
        const gl = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * f.sp + f.ph));
        ctx.save(); ctx.globalAlpha = gl; ctx.fillStyle = '#CDDC39';
        ctx.beginPath(); ctx.arc(w * f.x + Math.sin(t * 0.6 + f.ph) * 16, h * f.y + Math.cos(t * 0.5 + f.ph) * 10, 2.4, 0, Math.PI * 2);
        ctx.fill(); ctx.restore();
      });
    },
  },
  {
    id: 'munte',
    keywords: ['munte', 'muntele', 'deal', 'stâncă', 'vârf', 'Ghilboa', 'Carmel', 'înălțimi', 'suit'],
    init(w, h) {
      return {
        clouds: Array.from({ length: 5 }, () => ({ x: rnd(0, 1), y: rnd(0.08, 0.35), cw: rnd(80, 190), sp: rnd(0.12, 0.4) })),
        eagleC: { cx: rnd(0.3, 0.5), cy: rnd(0.18, 0.28) },
      };
    },
    draw(ctx, w, h, age, s) {
      const t = age / 1000;
      skyGrad(ctx, w, h, [[0, '#64B5F6'], [0.4, '#90CAF9'], [0.7, '#FFE0B2'], [1, '#FFF3E0']]);
      glowSun(ctx, w * 0.8, h * 0.15, 34, t);
      // munți în straturi
      const mtn = (baseX, peakY, half, col, snow) => {
        ctx.fillStyle = col; ctx.beginPath();
        ctx.moveTo(baseX - half, h * 0.78); ctx.lineTo(baseX, peakY); ctx.lineTo(baseX + half, h * 0.78);
        ctx.closePath(); ctx.fill();
        if (snow) {
          ctx.fillStyle = '#FFFFFF'; ctx.beginPath();
          ctx.moveTo(baseX, peakY);
          ctx.lineTo(baseX - half * 0.22, peakY + (h * 0.78 - peakY) * 0.24);
          ctx.lineTo(baseX - half * 0.1, peakY + (h * 0.78 - peakY) * 0.19);
          ctx.lineTo(baseX, peakY + (h * 0.78 - peakY) * 0.27);
          ctx.lineTo(baseX + half * 0.1, peakY + (h * 0.78 - peakY) * 0.18);
          ctx.lineTo(baseX + half * 0.22, peakY + (h * 0.78 - peakY) * 0.24);
          ctx.closePath(); ctx.fill();
        }
      };
      mtn(w * 0.85, h * 0.3, w * 0.45, '#9FA8DA', false);
      mtn(w * 0.2, h * 0.22, w * 0.5, '#7986CB', true);
      mtn(w * 0.55, h * 0.12, w * 0.62, '#5C6BC0', true);
      // nori care plutesc printre vârfuri
      s.clouds.forEach(c => { c.x += 0.00025 * c.sp * 60; if (c.x > 1.25) c.x = -0.25; fluffyCloud(ctx, w * c.x, h * c.y, c.cw, c.cw * 0.38, '#fff', 0.85); });
      // vultur rotindu-se
      const ea = t * 0.4, ex = w * s.eagleC.cx + Math.cos(ea) * w * 0.14, ey = h * s.eagleC.cy + Math.sin(ea) * h * 0.05;
      ctx.save(); ctx.strokeStyle = '#4E342E'; ctx.lineWidth = 3.4; ctx.lineCap = 'round';
      const flap = Math.sin(t * 4) * 6;
      ctx.beginPath(); ctx.moveTo(ex - 20, ey - flap); ctx.quadraticCurveTo(ex, ey + 6, ex + 20, ey - flap); ctx.stroke(); ctx.restore();
      // poale verzi + brazi
      hillBand(ctx, w, h, h * 0.8, h * 0.03, 2, 1, '#66BB6A');
      const pine = (px, py, ps) => {
        ctx.fillStyle = '#2E7D32';
        for (let i = 0; i < 3; i++) {
          ctx.beginPath(); ctx.moveTo(px, py - ps + i * ps * 0.26);
          ctx.lineTo(px - ps * (0.3 + i * 0.12), py - ps * 0.4 + i * ps * 0.28);
          ctx.lineTo(px + ps * (0.3 + i * 0.12), py - ps * 0.4 + i * ps * 0.28);
          ctx.closePath(); ctx.fill();
        }
      };
      pine(w * 0.1, h * 0.92, 60); pine(w * 0.22, h * 0.96, 46); pine(w * 0.88, h * 0.94, 56); pine(w * 0.76, h * 0.97, 40);
    },
  },
  {
    id: 'rugaciune',
    keywords: ['rugăciune', 'rugat', 'plâns', 'suflet', 'jelit', 'postit', 'Doamne', 'cerut', 'juruință', 'binecuvânt'],
    init() {
      return {
        motes: Array.from({ length: 18 }, () => ({ x: rnd(0.3, 0.7), y0: rnd(0.5, 0.95), period: rnd(4000, 9000), off: rnd(0, 9000), r: rnd(1.5, 3.5) })),
        doves: Array.from({ length: 2 }, (_, i) => ({ off: i * 6000 })),
      };
    },
    draw(ctx, w, h, age, s) {
      const t = age / 1000;
      skyGrad(ctx, w, h, [[0, '#FCE4EC'], [0.4, '#F8BBD0'], [0.7, '#FFE0B2'], [1, '#FFF3E0']]);
      // sursă de lumină divină
      const gx = w / 2, gy = h * 0.1;
      const glow = ctx.createRadialGradient(gx, gy, 0, gx, gy, h * 0.3);
      glow.addColorStop(0, `rgba(255,241,118,${0.6 + 0.2 * Math.sin(t)})`); glow.addColorStop(1, 'rgba(255,241,118,0)');
      ctx.fillStyle = glow; ctx.fillRect(0, 0, w, h * 0.5);
      // raze
      for (let i = 0; i < 7; i++) {
        const ang = Math.PI / 2 + (i - 3) * 0.17;
        ctx.save(); ctx.globalAlpha = 0.18 + 0.14 * Math.sin(t * 1.1 + i);
        ctx.fillStyle = '#FFF59D'; ctx.beginPath();
        ctx.moveTo(gx, gy);
        ctx.lineTo(gx + Math.cos(ang - 0.045) * h, gy + Math.sin(ang - 0.045) * h);
        ctx.lineTo(gx + Math.cos(ang + 0.045) * h, gy + Math.sin(ang + 0.045) * h);
        ctx.closePath(); ctx.fill(); ctx.restore();
      }
      // porumbei
      s.doves.forEach(d => {
        const p = ((age + d.off) % 12000) / 12000;
        const dx = w * (0.1 + p * 0.8), dy = h * 0.3 - Math.sin(p * Math.PI) * h * 0.1;
        bird(ctx, dx, dy + Math.sin(t * 3) * 4, 13, 'rgba(255,255,255,.95)');
      });
      // deal
      hillBand(ctx, w, h, h * 0.78, h * 0.04, 1.8, 0.8, '#A5D6A7');
      hillBand(ctx, w, h, h * 0.9, h * 0.03, 2.4, 2.8, '#81C784');
      // siluetă îngenuncheată
      const kx = w / 2, ky = h * 0.84;
      ctx.fillStyle = '#5D4037';
      ctx.beginPath(); ctx.ellipse(kx, ky - 26, 24, 32, -0.35, 0, Math.PI * 2); ctx.fill(); // trunchi aplecat
      ctx.beginPath(); ctx.arc(kx - 15, ky - 52, 15, 0, Math.PI * 2); ctx.fill(); // cap plecat
      ctx.beginPath(); ctx.ellipse(kx + 12, ky + 2, 22, 12, 0, 0, Math.PI * 2); ctx.fill(); // picioare îndoite
      // mâini împreunate
      ctx.fillStyle = '#FFCC80'; ctx.beginPath(); ctx.ellipse(kx - 20, ky - 24, 8, 12, -0.4, 0, Math.PI * 2); ctx.fill();
      // particule de lumină ce urcă
      s.motes.forEach(m => {
        const p = ((age + m.off) % m.period) / m.period;
        ctx.save(); ctx.globalAlpha = 0.7 * (1 - p);
        ctx.fillStyle = '#FFF176'; ctx.beginPath();
        ctx.arc(w * m.x + Math.sin(p * 6 + m.off) * 14, h * m.y0 - p * h * 0.4, m.r, 0, Math.PI * 2);
        ctx.fill(); ctx.restore();
      });
    },
  },
  {
    id: 'fuga',
    keywords: ['fugi', 'fugit', 'fuga', 'urmărit', 'ascuns', 'scăpat', 'pribeag', 'peștera', 'Adulam'],
    init() {
      return { dust: Array.from({ length: 6 }, (_, i) => ({ off: i * 380 })), bats: Array.from({ length: 3 }, () => ({ x: rnd(0.1, 0.3), y: rnd(0.3, 0.45), ph: rnd(0, 6) })) };
    },
    draw(ctx, w, h, age, s) {
      const t = age / 1000;
      skyGrad(ctx, w, h, [[0, '#7E57C2'], [0.5, '#9575CD'], [0.8, '#FF8A65'], [1, '#FF7043']]);
      glowSun(ctx, w * 0.85, h * 0.6, 30, t);
      // stânci
      hillBand(ctx, w, h, h * 0.55, h * 0.05, 1.6, 0.6, '#6D4C41');
      // gura peșterii
      ctx.fillStyle = '#4E342E'; ctx.beginPath();
      ctx.moveTo(w * 0.04, h * 0.78); ctx.quadraticCurveTo(w * 0.17, h * 0.42, w * 0.32, h * 0.78); ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#212121'; ctx.beginPath();
      ctx.moveTo(w * 0.08, h * 0.78); ctx.quadraticCurveTo(w * 0.17, h * 0.5, w * 0.28, h * 0.78); ctx.closePath(); ctx.fill();
      // lilieci lângă peșteră
      s.bats.forEach(b => {
        const bx = w * b.x + Math.sin(t * 1.4 + b.ph) * 24, by = h * b.y + Math.cos(t * 1.8 + b.ph) * 14;
        bird(ctx, bx, by, 8, 'rgba(30,20,40,.8)');
      });
      // sol
      ctx.fillStyle = '#5D4037'; ctx.fillRect(0, h * 0.78, w, h * 0.22);
      ctx.fillStyle = '#4E342E'; ctx.fillRect(0, h * 0.9, w, h * 0.1);
      // siluetă alergând (săltat animat)
      const runX = w * 0.58, runY = h * 0.8 + Math.abs(Math.sin(t * 5)) * -8;
      ctx.save(); ctx.translate(runX, runY); ctx.rotate(0.12);
      figure(ctx, 0, 0, 64, '#37474F', '#FFCC80');
      // mantie fluturând
      ctx.fillStyle = 'rgba(69,90,120,.8)'; ctx.beginPath();
      ctx.moveTo(-8, -40);
      ctx.quadraticCurveTo(-46 - Math.sin(t * 6) * 8, -22, -58, 6);
      ctx.quadraticCurveTo(-30, -4, -6, -6); ctx.closePath(); ctx.fill();
      // picioare în alergare
      const st = Math.sin(t * 10) * 16;
      ctx.strokeStyle = '#37474F'; ctx.lineWidth = 9; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(0, -6); ctx.lineTo(st, 22); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, -6); ctx.lineTo(-st, 20); ctx.stroke();
      ctx.restore();
      // praf în urmă
      s.dust.forEach(d => {
        const p = ((age + d.off) % 1400) / 1400;
        ctx.save(); ctx.globalAlpha = 0.4 * (1 - p);
        ctx.fillStyle = '#BCAAA4'; ctx.beginPath();
        ctx.ellipse(runX - 30 - p * 44, h * 0.82 - p * 12, 9 * (1 + p), 5 * (1 + p), 0, 0, Math.PI * 2);
        ctx.fill(); ctx.restore();
      });
      // urmăritor mic în depărtare
      figure(ctx, w * 0.9, h * 0.66, 30, '#B71C1C');
    },
  },
  {
    id: 'victorie',
    keywords: ['biruință', 'slavă', 'laudă', 'izbăvit', 'izbăvire', 'triumf', 'Goliat', 'înfrânt', 'bucurie', 'cântat'],
    init() {
      return { confetti: Array.from({ length: 26 }, () => ({ x: rnd(0, 1), period: rnd(3000, 6000), off: rnd(0, 6000), r: rnd(2.5, 5), col: pick(['#FFD54F', '#FF7043', '#4FC3F7', '#AED581', '#F06292']) })) };
    },
    draw(ctx, w, h, age, s) {
      const t = age / 1000;
      skyGrad(ctx, w, h, [[0, '#4FC3F7'], [0.45, '#81D4FA'], [0.75, '#FFF176'], [1, '#FFD54F']]);
      // raze rotitoare
      ctx.save(); ctx.translate(w / 2, h * 0.42); ctx.rotate(t * 0.1);
      for (let i = 0; i < 12; i++) {
        ctx.rotate(Math.PI / 6);
        ctx.globalAlpha = 0.14; ctx.fillStyle = '#FFF59D';
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-w * 0.06, -h); ctx.lineTo(w * 0.06, -h); ctx.closePath(); ctx.fill();
      }
      ctx.restore();
      // confetti / sclipiri căzând
      s.confetti.forEach(c => {
        const p = ((age + c.off) % c.period) / c.period;
        star5(ctx, w * c.x + Math.sin(p * 7) * 20, h * p, c.r, c.col, 0.85 * (1 - Math.abs(p - 0.5) * 0.8));
      });
      // deal
      hillBand(ctx, w, h, h * 0.72, h * 0.05, 1.6, 1, '#81C784');
      hillBand(ctx, w, h, h * 0.86, h * 0.04, 2.2, 3, '#66BB6A');
      // învingător pe deal cu sabia ridicată
      const vx = w / 2, vy = h * 0.74;
      figure(ctx, vx, vy, 90, '#1565C0', '#FFCC80');
      const raise = Math.sin(t * 2.4) * 0.1;
      ctx.save(); ctx.translate(vx + 22, vy - 62); ctx.rotate(-0.7 + raise);
      ctx.strokeStyle = '#FFB300'; ctx.lineWidth = 6; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -58); ctx.stroke();
      ctx.strokeStyle = '#B0BEC5'; ctx.lineWidth = 7;
      ctx.beginPath(); ctx.moveTo(0, -14); ctx.lineTo(0, -70); ctx.stroke();
      ctx.restore();
      star5(ctx, vx + 22 + Math.cos(-0.7 + raise + Math.PI / 2) * 70, vy - 62 - Math.sin(0.7 - raise + Math.PI / 2) * 66, 9, '#FFF176', 0.7 + 0.3 * Math.sin(t * 5));
      // steag fluturând
      banner(ctx, vx - 60, vy, 100, t, '#F9A825');
    },
  },
  {
    id: 'pergament',
    keywords: [],
    init() {
      return { sparks: Array.from({ length: 12 }, () => ({ x: rnd(0.15, 0.85), y: rnd(0.15, 0.8), sp: rnd(0.7, 1.8), ph: rnd(0, 6), r: rnd(2, 4) })) };
    },
    draw(ctx, w, h, age, s) {
      const t = age / 1000;
      skyGrad(ctx, w, h, [[0, '#FFF8E1'], [0.5, '#FFECB3'], [1, '#FFE082']]);
      // sclipiri aurii
      s.sparks.forEach(sp => star5(ctx, w * sp.x, h * sp.y, sp.r, '#FFB300', 0.25 + 0.5 * (0.5 + 0.5 * Math.sin(t * sp.sp + sp.ph))));
      // sulul — centrat, cu legănare fină
      const bob = Math.sin(t * 0.9) * 6;
      const sx = w / 2, sy = h * 0.5 + bob, sw = Math.min(w * 0.6, 320), sh = h * 0.44;
      // umbră
      ctx.save(); ctx.globalAlpha = 0.18; ctx.fillStyle = '#795548';
      ctx.beginPath(); ctx.ellipse(sx, h * 0.87, sw * 0.55, 16, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      // corp pergament
      ctx.fillStyle = '#FFF3E0'; ctx.fillRect(sx - sw / 2, sy - sh / 2, sw, sh);
      ctx.strokeStyle = '#D7CCC8'; ctx.lineWidth = 2; ctx.strokeRect(sx - sw / 2, sy - sh / 2, sw, sh);
      // suluri sus/jos
      const roll = (ry) => {
        ctx.fillStyle = '#A1887F'; ctx.beginPath(); ctx.ellipse(sx, ry, sw * 0.56, 16, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#BCAAA4'; ctx.beginPath(); ctx.ellipse(sx, ry, sw * 0.48, 10, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#8D6E63';
        ctx.beginPath(); ctx.arc(sx - sw * 0.56, ry, 9, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(sx + sw * 0.56, ry, 9, 0, Math.PI * 2); ctx.fill();
      };
      roll(sy - sh / 2); roll(sy + sh / 2);
      // rânduri de „text" care se aprind pe rând
      for (let i = 0; i < 7; i++) {
        const ly = sy - sh / 2 + 34 + i * (sh - 60) / 7;
        const lit = 0.35 + 0.5 * (0.5 + 0.5 * Math.sin(t * 1.4 - i * 0.7));
        ctx.save(); ctx.globalAlpha = lit; ctx.strokeStyle = '#8D6E63'; ctx.lineWidth = 5; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(sx - sw * 0.36, ly); ctx.lineTo(sx + sw * (0.2 + (i % 3) * 0.07), ly); ctx.stroke(); ctx.restore();
      }
      // pană de scris plutind
      const qx = sx + sw * 0.42, qy = sy - sh * 0.34 + Math.sin(t * 1.6) * 8;
      ctx.save(); ctx.translate(qx, qy); ctx.rotate(-0.5 + Math.sin(t) * 0.06);
      ctx.fillStyle = '#ECEFF1'; ctx.beginPath();
      ctx.moveTo(0, 0); ctx.quadraticCurveTo(10, -26, 4, -46); ctx.quadraticCurveTo(-2, -26, 0, 0); ctx.fill();
      ctx.strokeStyle = '#90A4AE'; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(3, -44); ctx.stroke();
      ctx.restore();
    },
  },
];

/* ── alegerea scenei după pagina curentă ───────────────────── */
function pickScene(pageVerses, pageIndex = 0) {
  const text = pageVerses.map(v => v.text.replace('{0}', v.blanks[0].answer)).join(' ').toLowerCase();
  const matches = SCENES.filter(sc => sc.keywords.length && sc.keywords.some(kw => text.includes(kw.toLowerCase())));
  if (matches.length === 0) return SCENES[SCENES.length - 1];
  return matches[pageIndex % matches.length];
}

/* ── motorul de randare: un canvas, crossfade între scene ──── */
const SceneEngine = (() => {
  let canvas = null, ctx = null, w = 0, h = 0;
  let cur = null, prev = null, fadeStart = 0;
  const FADE_MS = 1100;
  let mirror = false;

  function resize() {
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (cur) cur.state = cur.scene.init(w, h);
    if (prev) prev.state = prev.scene.init(w, h);
  }

  function drawScene(entry, now, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    if (mirror) { ctx.translate(w, 0); ctx.scale(-1, 1); }
    try { entry.scene.draw(ctx, w, h, now - entry.start, entry.state); } catch (e) { /* scena nu blochează aplicația */ }
    ctx.restore();
  }

  function frame(now) {
    if (!canvas || !cur) return;
    ctx.clearRect(0, 0, w, h);
    if (prev && now - fadeStart < FADE_MS) {
      drawScene(prev, now, 1);
      drawScene(cur, now, (now - fadeStart) / FADE_MS);
    } else {
      prev = null;
      drawScene(cur, now, 1);
    }
    // văl fin peste tot, ca textul să rămână ușor de citit
    ctx.fillStyle = 'rgba(246,242,234,.22)';
    ctx.fillRect(0, 0, w, h);
  }

  function tick(now) {
    frame(now);
    requestAnimationFrame(tick);
  }

  function ensureCanvas() {
    if (canvas) return true;
    canvas = document.getElementById('scene-canvas');
    if (!canvas) return false;
    ctx = canvas.getContext('2d');
    window.addEventListener('resize', resize);
    resize();
    requestAnimationFrame(tick);
    return true;
  }

  function show(scene, mirrored) {
    if (!ensureCanvas()) return;
    mirror = !!mirrored;
    if (cur && cur.scene.id === scene.id) return; // aceeași temă — nu reporni
    prev = cur;
    cur = { scene, state: scene.init(w, h), start: performance.now() };
    fadeStart = performance.now();
  }

  return { show, frame };
})();
