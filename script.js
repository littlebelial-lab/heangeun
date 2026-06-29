const hero = document.querySelector(".hero");
const canvas = document.querySelector("#particle-field");
const moonCanvas = document.querySelector("#moon-canvas");
const caps = [...document.querySelectorAll(".cap")];
const ctx = canvas.getContext("2d");
const moonCtx = moonCanvas.getContext("2d");

const pointer = { x: 0.68, y: 0.42, tx: 0.68, ty: 0.42, active: false, strength: 0 };
let particles = [];
let moonCraters = [];
let moonDust = [];
let dpr = Math.min(window.devicePixelRatio || 1, 2);

function random(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function wrapX(x, width, margin = 120) {
  const span = width + margin * 2;
  return ((((x + margin) % span) + span) % span) - margin;
}

function resizeCanvas() {
  const rect = hero.getBoundingClientRect();
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(rect.width * dpr);
  canvas.height = Math.floor(rect.height * dpr);
  moonCanvas.width = Math.floor(rect.width * dpr);
  moonCanvas.height = Math.floor(rect.height * dpr);
  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;
  moonCanvas.style.width = `${rect.width}px`;
  moonCanvas.style.height = `${rect.height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  moonCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  buildParticles(rect.width, rect.height);
  buildMoonTexture(rect.width, rect.height);
}

function buildParticles(width, height) {
  const palette = ["#bdf6ff", "#79ddff", "#8a7cff", "#c17cff", "#f06eff", "#d8ff42"];
  const count = width < 760 ? 900 : 2600;
  particles = Array.from({ length: count }, (_, index) => {
    const plume = Math.pow(random(index + 17), 0.52);
    const side = random(index + 43);
    const plumeGroup = side > 0.34;
    const baseX = width * (plumeGroup ? 0.55 : 0.36 + random(index + 82) * 0.22);
    const baseY = height * (0.71 + (random(index + 31) - 0.5) * 0.06);
    const arc = plumeGroup ? plume : Math.pow(plume, 1.8);
    const driftX = plumeGroup
      ? width * (0.08 + arc * 0.26) + Math.pow(random(index + 113), 2.4) * width * 0.16
      : width * (random(index + 113) - 0.5) * 0.36;
    const riseY = plumeGroup
      ? height * (0.08 + arc * (0.18 + random(index + 142) * 0.55))
      : height * (0.02 + arc * 0.28);
    const fine = random(index + 181);
    return {
      plume,
      group: plumeGroup ? 1 : 0,
      x: baseX + driftX + Math.sin(index * 0.37) * (12 + plume * 60),
      y: baseY - riseY + Math.cos(index * 0.29) * (8 + plume * 46),
      size: 0.28 + fine * (fine > 0.93 ? 2.4 : 1.05),
      color: plumeGroup && plume > 0.62 ? palette[2 + (index % 3)] : palette[index % palette.length],
      speed: 0.18 + random(index + 90) * 0.92,
      phase: random(index + 140) * Math.PI * 2,
      alpha: 0.1 + random(index + 211) * (plumeGroup ? 0.48 : 0.26),
    };
  });
}

function buildMoonTexture(width, height) {
  const craterCount = width < 760 ? 120 : 280;
  moonCraters = Array.from({ length: craterCount }, (_, index) => ({
    x: random(index + 300) * width,
    y: height * (0.61 + Math.pow(random(index + 410), 0.72) * 0.38),
    r: 3 + Math.pow(random(index + 510), 2.65) * (width < 760 ? 58 : 118),
    flat: 0.22 + random(index + 610) * 0.28,
    alpha: 0.12 + random(index + 710) * 0.34,
    drift: 0.06 + random(index + 760) * 0.18,
    angle: (random(index + 820) - 0.5) * 0.3,
  }));

  const dustCount = width < 760 ? 2100 : 5200;
  moonDust = Array.from({ length: dustCount }, (_, index) => ({
    x: random(index + 900) * width,
    y: height * (0.6 + Math.pow(random(index + 1000), 0.72) * 0.4),
    r: 0.25 + Math.pow(random(index + 1100), 2) * 1.7,
    a: 0.06 + random(index + 1200) * 0.24,
    drift: 0.05 + random(index + 1300) * 0.2,
    dark: random(index + 1400) > 0.56,
  }));
}

function drawMoon(time) {
  const width = moonCanvas.clientWidth;
  const height = moonCanvas.clientHeight;
  moonCtx.clearRect(0, 0, width, height);

  const cx = width * 0.5 + (pointer.x - 0.5) * -20;
  const cy = height * 1.055 + Math.sin(time * 0.00028) * 8;
  const rx = width * 0.64;
  const ry = height * 0.48;
  const horizonY = cy - ry;

  const halo = moonCtx.createRadialGradient(cx, horizonY + 18, 0, cx, horizonY + 18, width * 0.52);
  halo.addColorStop(0, "rgba(255,255,255,0.92)");
  halo.addColorStop(0.18, "rgba(235,240,255,0.52)");
  halo.addColorStop(0.44, "rgba(150,170,255,0.13)");
  halo.addColorStop(1, "rgba(255,255,255,0)");
  moonCtx.fillStyle = halo;
  moonCtx.beginPath();
  moonCtx.ellipse(cx, horizonY + 10, width * 0.52, height * 0.15, 0, 0, Math.PI * 2);
  moonCtx.fill();

  moonCtx.save();
  moonCtx.beginPath();
  moonCtx.ellipse(cx, cy, rx, ry, 0, Math.PI, Math.PI * 2);
  moonCtx.lineTo(width, height);
  moonCtx.lineTo(0, height);
  moonCtx.closePath();
  moonCtx.clip();

  const surface = moonCtx.createRadialGradient(cx - rx * 0.38, cy - ry * 0.78, 0, cx, cy, rx * 1.14);
  surface.addColorStop(0, "#f8faf8");
  surface.addColorStop(0.16, "#d9dcda");
  surface.addColorStop(0.36, "#a8adb0");
  surface.addColorStop(0.58, "#636970");
  surface.addColorStop(0.78, "#2d3036");
  surface.addColorStop(1, "#0b0c10");
  moonCtx.fillStyle = surface;
  moonCtx.fillRect(0, horizonY - 80, width, height - horizonY + 120);

  moonCtx.globalCompositeOperation = "multiply";
  const shade = moonCtx.createLinearGradient(0, horizonY, width, height);
  shade.addColorStop(0, "rgba(255,255,255,0)");
  shade.addColorStop(0.44, "rgba(35,38,44,0.18)");
  shade.addColorStop(1, "rgba(0,0,0,0.82)");
  moonCtx.fillStyle = shade;
  moonCtx.fillRect(0, horizonY - 60, width, height);
  moonCtx.globalCompositeOperation = "source-over";

  const moonSpin = time * 0.012;
  moonDust.forEach((d, index) => {
    const x = wrapX(d.x + moonSpin * d.drift, width, 80);
    moonCtx.globalAlpha = d.a;
    moonCtx.fillStyle = d.dark || d.y > height * 0.78 ? "#15171c" : "#f0f1ed";
    moonCtx.beginPath();
    moonCtx.arc(x, d.y, d.r, 0, Math.PI * 2);
    moonCtx.fill();

    if (index % 9 === 0) {
      moonCtx.globalAlpha = d.a * 0.55;
      moonCtx.strokeStyle = d.dark ? "#090a0d" : "#ffffff";
      moonCtx.lineWidth = 0.45;
      moonCtx.beginPath();
      moonCtx.moveTo(x - d.r * 2.8, d.y + d.r * 0.5);
      moonCtx.lineTo(x + d.r * 3.8, d.y - d.r * 0.35);
      moonCtx.stroke();
    }
  });

  moonCraters.forEach((c) => {
    const x = wrapX(c.x + moonSpin * c.drift, width, 140);
    moonCtx.save();
    moonCtx.translate(x, c.y);
    moonCtx.rotate(c.angle);
    moonCtx.scale(1, c.flat);
    const g = moonCtx.createRadialGradient(-c.r * 0.28, -c.r * 0.26, c.r * 0.06, 0, 0, c.r);
    g.addColorStop(0, `rgba(255,255,255,${c.alpha * 1.25})`);
    g.addColorStop(0.28, `rgba(105,110,118,${c.alpha * 0.55})`);
    g.addColorStop(0.62, `rgba(0,0,0,${c.alpha * 1.85})`);
    g.addColorStop(0.84, `rgba(255,255,255,${c.alpha * 0.52})`);
    g.addColorStop(1, `rgba(0,0,0,${c.alpha * 0.38})`);
    moonCtx.fillStyle = g;
    moonCtx.beginPath();
    moonCtx.arc(0, 0, c.r, 0, Math.PI * 2);
    moonCtx.fill();
    moonCtx.globalAlpha = c.alpha * 0.9;
    moonCtx.lineWidth = Math.max(1, c.r * 0.06);
    moonCtx.strokeStyle = "rgba(255,255,255,0.42)";
    moonCtx.beginPath();
    moonCtx.arc(-c.r * 0.06, -c.r * 0.08, c.r * 0.9, Math.PI * 1.08, Math.PI * 1.78);
    moonCtx.stroke();
    moonCtx.strokeStyle = "rgba(0,0,0,0.34)";
    moonCtx.beginPath();
    moonCtx.arc(c.r * 0.08, c.r * 0.08, c.r * 0.92, Math.PI * 0.02, Math.PI * 0.72);
    moonCtx.stroke();
    moonCtx.restore();
  });

  moonCtx.restore();

  const rim = moonCtx.createLinearGradient(0, horizonY - 12, 0, horizonY + 44);
  rim.addColorStop(0, "rgba(255,255,255,0)");
  rim.addColorStop(0.42, "rgba(255,255,255,0.92)");
  rim.addColorStop(1, "rgba(255,255,255,0)");
  moonCtx.fillStyle = rim;
  moonCtx.beginPath();
  moonCtx.ellipse(cx, cy, rx, ry, 0, Math.PI * 1.04, Math.PI * 1.96);
  moonCtx.lineTo(width, horizonY + 42);
  moonCtx.lineTo(0, horizonY + 42);
  moonCtx.closePath();
  moonCtx.fill();
  moonCtx.globalAlpha = 1;
}

function drawParticles(time = 0) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  pointer.x += (pointer.tx - pointer.x) * 0.12;
  pointer.y += (pointer.ty - pointer.y) * 0.12;
  pointer.strength += ((pointer.active ? 1 : 0) - pointer.strength) * 0.08;

  drawMoon(time);
  ctx.clearRect(0, 0, width, height);

  const mouseX = pointer.x * width;
  const mouseY = pointer.y * height;
  const spreadX = (pointer.x - 0.58) * 260 * pointer.strength;
  const lift = (0.56 - pointer.y) * 130 * pointer.strength;
  const burst = 1 + pointer.strength * 0.34;

  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  particles.forEach((p, index) => {
    const curve = Math.sin(p.plume * Math.PI);
    const wave = Math.sin(time * 0.001 * p.speed + p.phase);
    const drift = p.group ? 1 : 0.42;
    let x = p.x + spreadX * curve * drift + wave * (10 + p.plume * 42);
    let y = p.y + lift * curve * drift + Math.cos(time * 0.0011 + p.phase) * (5 + p.plume * 22);
    const dx = x - mouseX;
    const dy = y - mouseY;
    const distance = Math.max(Math.hypot(dx, dy), 1);
    const reach = Math.max(width, height) * 0.18;
    const push = Math.max(0, 1 - distance / reach) * pointer.strength;
    x += (dx / distance) * push * (p.group ? 42 : 24);
    y += (dy / distance) * push * (p.group ? 30 : 18);

    const radius = p.size * burst * (0.42 + curve * (p.group ? 0.62 : 0.28) + push * 0.36);
    ctx.globalAlpha = p.alpha * (0.38 + curve * 0.8 + push * 0.32);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    if (p.group && index % 12 === 0) {
      ctx.globalAlpha = 0.018 + curve * 0.035;
      ctx.beginPath();
      ctx.arc(x, y, radius * 8.8, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  const plumeGlow = ctx.createRadialGradient(width * 0.69, height * 0.39, 0, width * 0.69, height * 0.39, width * 0.3);
  plumeGlow.addColorStop(0, "rgba(185,112,255,0.16)");
  plumeGlow.addColorStop(0.28, "rgba(120,220,255,0.11)");
  plumeGlow.addColorStop(0.56, "rgba(207,255,62,0.055)");
  plumeGlow.addColorStop(1, "rgba(255,255,255,0)");
  ctx.globalAlpha = 1;
  ctx.fillStyle = plumeGlow;
  ctx.fillRect(0, 0, width, height);

  if (pointer.strength > 0.01) {
    const cursorGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, Math.max(width, height) * 0.16);
    cursorGlow.addColorStop(0, `rgba(207,255,62,${0.18 * pointer.strength})`);
    cursorGlow.addColorStop(0.34, `rgba(111,232,255,${0.12 * pointer.strength})`);
    cursorGlow.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = cursorGlow;
    ctx.fillRect(0, 0, width, height);
  }

  ctx.restore();
  ctx.globalAlpha = 1;
  requestAnimationFrame(drawParticles);
}

hero.addEventListener("pointermove", (event) => {
  const rect = hero.getBoundingClientRect();
  pointer.tx = (event.clientX - rect.left) / rect.width;
  pointer.ty = (event.clientY - rect.top) / rect.height;
  pointer.active = true;
  hero.style.setProperty("--px", `${(pointer.tx - 0.5) * 22}px`);
  hero.style.setProperty("--py", `${(pointer.ty - 0.5) * 18}px`);
  hero.style.setProperty("--hex-rotate", `${(pointer.tx - 0.5) * 18}deg`);
  hero.style.setProperty("--hex-scale", `${1.02 + (0.5 - Math.abs(pointer.ty - 0.5)) * 0.045}`);
  hero.querySelector(".orbit")?.classList.add("is-reacting");
});

hero.addEventListener("pointerleave", () => {
  pointer.active = false;
  hero.querySelector(".orbit")?.classList.remove("is-reacting");
});

caps.forEach((cap, index) => {
  cap.addEventListener("pointerenter", () => {
    pointer.active = true;
    pointer.tx = 0.48 + index * 0.055;
    pointer.ty = 0.28 + (index % 3) * 0.08;
    hero.querySelector(".orbit")?.classList.add("is-reacting");
  });
});

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
requestAnimationFrame(drawParticles);
