const hero = document.querySelector(".hero");
const canvas = document.querySelector("#particle-field");
const moonCanvas = document.querySelector("#moon-canvas");
const cards = [...document.querySelectorAll(".work-card")];
const caps = [...document.querySelectorAll(".cap")];
const ctx = canvas.getContext("2d");
const moonCtx = moonCanvas.getContext("2d");
const useImageHero = hero.classList.contains("hero-image");

const pointer = { x: 0.68, y: 0.42, active: false };
let particles = [];
let dpr = Math.min(window.devicePixelRatio || 1, 2);
let activeCard = 0;
let moonCraters = [];
let moonDust = [];

function random(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function resizeCanvas() {
  if (useImageHero) return;
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
  drawMoon(0);
}

function buildParticles(width, height) {
  const palette = ["#bffcff", "#6ddcff", "#9b7cff", "#e472ff", "#426dff", "#d6ff46"];
  const count = width < 760 ? 520 : 1350;
  particles = Array.from({ length: count }, (_, index) => {
    const t = index / count;
    const plume = Math.pow(random(index + 17), 0.62);
    const band = random(index + 43);
    const spray = (random(index + 11) - 0.5) * (0.06 + plume * 0.34);
    const horizon = height * 0.69 + (random(index + 31) - 0.5) * 42;
    return {
      t,
      plume,
      band,
      x:
        width * (0.43 + plume * 0.34) +
        spray * width +
        Math.sin(plume * 7 + index) * 28,
      y:
        horizon -
        plume * height * (0.34 + band * 0.36) +
        Math.sin(index * 0.51) * 34,
      size: 0.45 + random(index + 51) * (band > 0.78 ? 2.1 : 1.35),
      color: palette[index % palette.length],
      speed: 0.22 + random(index + 90) * 0.86,
      phase: random(index + 140) * Math.PI * 2,
    };
  });
}

function buildMoonTexture(width, height) {
  const craterCount = width < 760 ? 70 : 150;
  moonCraters = Array.from({ length: craterCount }, (_, index) => ({
    x: random(index + 300) * width,
    y: height * (0.64 + random(index + 410) * 0.32),
    r: 7 + Math.pow(random(index + 510), 2.2) * (width < 760 ? 46 : 86),
    flat: 0.26 + random(index + 610) * 0.34,
    alpha: 0.16 + random(index + 710) * 0.22,
  }));

  const dustCount = width < 760 ? 700 : 1700;
  moonDust = Array.from({ length: dustCount }, (_, index) => ({
    x: random(index + 900) * width,
    y: height * (0.62 + random(index + 1000) * 0.36),
    r: 0.35 + random(index + 1100) * 1.15,
    a: 0.08 + random(index + 1200) * 0.22,
  }));
}

function drawMoon(time) {
  const width = moonCanvas.clientWidth;
  const height = moonCanvas.clientHeight;
  moonCtx.clearRect(0, 0, width, height);

  const cx = width * 0.5 + (pointer.x - 0.5) * -18;
  const cy = height * 1.055 + Math.sin(time * 0.00028) * 8;
  const rx = width * 0.64;
  const ry = height * 0.48;
  const horizonY = cy - ry;

  const halo = moonCtx.createRadialGradient(cx, horizonY + 18, 0, cx, horizonY + 18, width * 0.5);
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

  const surface = moonCtx.createRadialGradient(cx - rx * 0.26, cy - ry * 0.82, 0, cx, cy, rx * 1.12);
  surface.addColorStop(0, "#ffffff");
  surface.addColorStop(0.2, "#d9dde1");
  surface.addColorStop(0.48, "#8f959d");
  surface.addColorStop(0.74, "#40454e");
  surface.addColorStop(1, "#111318");
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

  moonDust.forEach((d) => {
    moonCtx.globalAlpha = d.a;
    moonCtx.fillStyle = d.y > height * 0.8 ? "#0d0f13" : "#f4f6f7";
    moonCtx.beginPath();
    moonCtx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    moonCtx.fill();
  });

  moonCraters.forEach((c) => {
    moonCtx.save();
    moonCtx.translate(c.x, c.y);
    moonCtx.scale(1, c.flat);
    const g = moonCtx.createRadialGradient(-c.r * 0.24, -c.r * 0.2, c.r * 0.08, 0, 0, c.r);
    g.addColorStop(0, `rgba(255,255,255,${c.alpha * 0.9})`);
    g.addColorStop(0.34, `rgba(70,76,86,${c.alpha * 0.7})`);
    g.addColorStop(0.7, `rgba(0,0,0,${c.alpha * 1.55})`);
    g.addColorStop(1, `rgba(255,255,255,${c.alpha * 0.42})`);
    moonCtx.fillStyle = g;
    moonCtx.beginPath();
    moonCtx.arc(0, 0, c.r, 0, Math.PI * 2);
    moonCtx.fill();
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
}

function drawParticles(time = 0) {
  if (useImageHero) return;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  drawMoon(time);
  ctx.clearRect(0, 0, width, height);

  const spreadX = pointer.active ? (pointer.x - 0.58) * 340 : 0;
  const lift = pointer.active ? (0.56 - pointer.y) * 150 : 0;
  const burst = pointer.active ? 1.38 : 1;

  ctx.save();
  ctx.globalCompositeOperation = "lighter";

  for (let index = 0; index < particles.length; index += 1) {
    const p = particles[index];
    const curve = Math.sin(p.plume * Math.PI);
    const wave = Math.sin(time * 0.001 * p.speed + p.phase);
    const x = p.x + spreadX * curve + wave * (18 + p.plume * 52);
    const y = p.y + lift * curve + Math.cos(time * 0.0011 + p.phase) * (9 + p.plume * 28);
    const radius = p.size * burst * (0.55 + curve * 0.9);

    ctx.globalAlpha = 0.12 + curve * 0.58;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    if (index % 10 === 0) {
      ctx.globalAlpha = 0.035 + curve * 0.035;
      ctx.beginPath();
      ctx.arc(x, y, radius * 7.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const plumeGlow = ctx.createRadialGradient(width * 0.61, height * 0.62, 0, width * 0.61, height * 0.62, width * 0.34);
  plumeGlow.addColorStop(0, "rgba(110,220,255,0.16)");
  plumeGlow.addColorStop(0.26, "rgba(190,96,255,0.12)");
  plumeGlow.addColorStop(0.5, "rgba(207,255,62,0.08)");
  plumeGlow.addColorStop(1, "rgba(255,255,255,0)");
  ctx.globalAlpha = 1;
  ctx.fillStyle = plumeGlow;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
  ctx.globalAlpha = 1;
  requestAnimationFrame(drawParticles);
}

hero.addEventListener("pointermove", (event) => {
  if (useImageHero) return;
  const rect = hero.getBoundingClientRect();
  pointer.x = (event.clientX - rect.left) / rect.width;
  pointer.y = (event.clientY - rect.top) / rect.height;
  pointer.active = true;
  hero.style.setProperty("--px", `${(pointer.x - 0.5) * 22}px`);
  hero.style.setProperty("--py", `${(pointer.y - 0.5) * 18}px`);
});

hero.addEventListener("pointerleave", () => {
  if (useImageHero) return;
  pointer.active = false;
});

function setActiveCard(index) {
  activeCard = index % cards.length;
  cards.forEach((card, cardIndex) => {
    const offset = cardIndex - activeCard;
    const wrapped = offset < -1 ? offset + cards.length : offset > 2 ? offset - cards.length : offset;
    const mobile = window.innerWidth < 900;
    const x = wrapped * (mobile ? 78 : 210);
    const y = Math.abs(wrapped) * (mobile ? 36 : 20);
    const r = wrapped * 4;
    card.classList.toggle("is-active", cardIndex === activeCard);
    card.style.setProperty("--card-x", `${x}px`);
    card.style.setProperty("--card-y", `${y}px`);
    card.style.setProperty("--card-r", `${r}deg`);
  });
}

cards.forEach((card, index) => {
  card.addEventListener("pointerenter", () => setActiveCard(index));
});

caps.forEach((cap, index) => {
  cap.addEventListener("pointerenter", () => {
    pointer.active = true;
    pointer.x = 0.48 + index * 0.055;
    pointer.y = 0.28 + (index % 3) * 0.08;
  });
});

setInterval(() => setActiveCard(activeCard + 1), 2600);

const reveal = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-ready");
    });
  },
  { threshold: 0.3 },
);

cards.forEach((card) => reveal.observe(card));
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
setActiveCard(0);
requestAnimationFrame(drawParticles);
