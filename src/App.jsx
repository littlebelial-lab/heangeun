import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import TextPressure from "./TextPressure";

const data = window.STUDIO_DATA || { featured: [], portfolio: [] };

const assetUrl = (path = "") => {
  if (!path) return path;
  if (/^(https?:|data:|blob:)/i.test(path)) return path;
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, "")}`;
};

function LoadingIntro() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const start = performance.now();
    const duration = 1180;
    let raf = 0;

    const tick = (time) => {
      const elapsed = time - start;
      const raw = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - raw, 3);
      const jitter = raw < 0.94 ? Math.sin(time * 0.055) * 2.6 + Math.sin(time * 0.017) * 1.4 : 0;
      const nextProgress = Math.max(0, Math.min(100, Math.floor(eased * 100 + jitter)));
      setProgress(nextProgress);

      if (raw < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        window.setTimeout(() => setDone(true), 180);
        window.setTimeout(() => setMounted(false), 820);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`loading-intro${done ? " is-done" : ""}`} aria-label="LOADING">
      <div className="loading-symbols" aria-hidden="true">
        <span>+</span>
        <span>%</span>
        <span>+</span>
        <span>/</span>
      </div>
      <div className="loading-count">
        <span>{String(progress).padStart(2, "0")}</span>
        <em>%</em>
      </div>
      <div className="loading-track" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.16 },
    );

    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function useScrollMotion() {
  useEffect(() => {
    let frame = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const tick = () => {
      const height = window.innerHeight || 1;
      document.querySelectorAll(".scroll-motion").forEach((node) => {
        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const progress = Math.max(-1, Math.min(1, (center - height / 2) / height));
        const depth = Number(node.dataset.depth || 0);
        node.style.setProperty("--scroll-y", `${(progress * -44 + depth * 14).toFixed(2)}px`);
        node.style.setProperty("--scroll-scale", `${(1.015 - Math.abs(progress) * 0.045).toFixed(3)}`);
      });
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);
}

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;
    const context = canvas.getContext("2d", { alpha: true });
    const particles = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let raf = 0;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const ratio = 1;
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles.length = 0;
      const count = width < 800 ? 90 : 170;
      for (let index = 0; index < count; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: height * 0.56 + Math.random() * height * 0.42,
          r: Math.random() * 1.5 + 0.25,
          a: Math.random() * 0.34 + 0.1,
          s: Math.random() * 0.34 + 0.08,
        });
      }
    };

    const draw = () => {
      frame += 0.006;
      context.clearRect(0, 0, width, height);
      particles.forEach((point, index) => {
        point.x += Math.sin(frame + index) * point.s;
        point.y += Math.cos(frame * 0.8 + index) * point.s * 0.55;
        if (point.x < -4) point.x = width + 4;
        if (point.x > width + 4) point.x = -4;
        context.globalAlpha = point.a;
        context.fillStyle = "#e6e5df";
        context.beginPath();
        context.arc(point.x, point.y, point.r, 0, Math.PI * 2);
        context.fill();
      });
      context.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" />;
}

function ThreeFluidDistortion() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const hero = mount?.closest(".hero");
    if (!mount || !hero) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2, 1, 1);
    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0.56, 0.46) },
      uVelocity: { value: new THREE.Vector2(0, 0) },
      uIntensity: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthTest: false,
      depthWrite: false,
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        varying vec2 vUv;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform vec2 uVelocity;
        uniform float uTime;
        uniform float uIntensity;

        float wave(vec2 p, float scale, float speed, float amp) {
          return sin((p.x * scale + p.y * scale * 0.42) + uTime * speed) * amp;
        }

        void main() {
          vec2 uv = vUv;
          vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
          vec2 p = (uv - uMouse) * aspect;
          float dist = length(p);
          float mask = smoothstep(0.42, 0.03, dist);
          float soft = smoothstep(0.55, 0.0, dist);
          float speed = clamp(length(uVelocity) * 2.8, 0.0, 1.0);
          float flow =
            wave(uv + uVelocity * 0.012, 24.0, 1.9, 0.5) +
            wave(uv.yx - uVelocity * 0.008, 38.0, -1.35, 0.32) +
            wave(uv + vec2(0.18, -0.08), 58.0, 0.78, 0.16);
          float ring = sin((dist * 68.0) - uTime * 5.4 + flow * 1.2);
          float caustic = pow(max(0.0, 0.5 + 0.5 * ring), 5.0);
          float shear = dot(normalize(p + 0.0001), normalize(uVelocity + vec2(0.001)));
          float highlight = (caustic * 0.38 + abs(shear) * 0.22 + flow * 0.045) * mask * uIntensity;
          float alpha = (0.012 + speed * 0.04) * soft * uIntensity + highlight * 0.18;
          vec3 base = vec3(0.92, 0.91, 0.86) * highlight;
          vec3 rgb = vec3(0.26, 0.52, 0.72) * max(0.0, shear) * mask * speed * uIntensity * 0.08;
          rgb += vec3(0.72, 0.24, 0.28) * max(0.0, -shear) * mask * speed * uIntensity * 0.07;
          gl_FragColor = vec4(base + rgb + vec3(alpha * 0.5), clamp(alpha, 0.0, 0.16));
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const state = {
      width: 1,
      height: 1,
      targetX: 0.56,
      targetY: 0.46,
      x: 0.56,
      y: 0.46,
      lastX: 0.56,
      lastY: 0.46,
      vx: 0,
      vy: 0,
      intensity: 0,
      targetIntensity: 0,
      lastMove: 0,
    };
    let raf = 0;

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      state.width = Math.max(1, rect.width);
      state.height = Math.max(1, rect.height);
      renderer.setSize(state.width, state.height, false);
      uniforms.uResolution.value.set(state.width, state.height);
    };

    const handleMove = (event) => {
      const rect = hero.getBoundingClientRect();
      const nextX = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      const nextY = Math.max(0, Math.min(1, 1 - (event.clientY - rect.top) / rect.height));
      state.vx += (nextX - state.lastX) * 0.9;
      state.vy += (nextY - state.lastY) * 0.9;
      state.lastX = nextX;
      state.lastY = nextY;
      state.targetX = nextX;
      state.targetY = nextY;
      state.targetIntensity = 1;
      state.lastMove = performance.now();
    };

    const render = (time) => {
      if (time - state.lastMove > 260) state.targetIntensity = 0;
      state.x += (state.targetX - state.x) * 0.055;
      state.y += (state.targetY - state.y) * 0.055;
      state.vx *= 0.9;
      state.vy *= 0.9;
      state.intensity += (state.targetIntensity - state.intensity) * 0.065;
      uniforms.uTime.value = time * 0.001;
      uniforms.uMouse.value.set(state.x, state.y);
      uniforms.uVelocity.value.set(state.vx, state.vy);
      uniforms.uIntensity.value = state.intensity;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    hero.addEventListener("pointermove", handleMove);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      hero.removeEventListener("pointermove", handleMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="three-fluid-layer" ref={mountRef} aria-hidden="true" />;
}

function LiquidFluidBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = canvas?.closest(".hero");
    if (!canvas || !hero) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const context = canvas.getContext("2d", { alpha: true });
    const pointer = {
      targetX: 0.58,
      targetY: 0.46,
      x: 0.58,
      y: 0.46,
      intensity: 0,
      targetIntensity: 0,
      lastMove: 0,
    };
    let width = 0;
    let height = 0;
    let raf = 0;

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const updatePointer = (event) => {
      const rect = hero.getBoundingClientRect();
      pointer.targetX = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      pointer.targetY = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
      pointer.targetIntensity = 1;
      pointer.lastMove = performance.now();
    };

    const draw = (time) => {
      if (time - pointer.lastMove > 650) pointer.targetIntensity = 0;
      pointer.x += (pointer.targetX - pointer.x) * 0.038;
      pointer.y += (pointer.targetY - pointer.y) * 0.038;
      pointer.intensity += (pointer.targetIntensity - pointer.intensity) * 0.035;

      const px = pointer.x * width;
      const py = pointer.y * height;
      const t = time * 0.00018;
      const parallaxX = (pointer.x - 0.5) * 2;
      const parallaxY = (pointer.y - 0.5) * 2;

      hero.style.setProperty("--liquid-x", `${(pointer.x * 100).toFixed(2)}%`);
      hero.style.setProperty("--liquid-y", `${(pointer.y * 100).toFixed(2)}%`);
      hero.style.setProperty("--liquid-parallax-x", (parallaxX * pointer.intensity * 0.34).toFixed(4));
      hero.style.setProperty("--liquid-parallax-y", (parallaxY * pointer.intensity * 0.28).toFixed(4));
      hero.style.setProperty("--liquid-intensity", pointer.intensity.toFixed(4));

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "screen";

      for (let band = 0; band < 8; band += 1) {
        const baseY = height * (0.2 + band * 0.085);
        const alpha = 0.022 + band * 0.0025;
        const gradient = context.createLinearGradient(0, baseY - 80, width, baseY + 80);
        gradient.addColorStop(0, "rgba(255,255,255,0)");
        gradient.addColorStop(0.5, `rgba(236,236,228,${alpha})`);
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        context.strokeStyle = gradient;
        context.lineWidth = 1.4 + band * 0.18;
        context.beginPath();
        for (let step = 0; step <= 92; step += 1) {
          const x = (step / 92) * width;
          const distance = Math.hypot((x - px) / width, (baseY - py) / height);
          const disturbance = Math.max(0, 1 - distance * 4.8) * pointer.intensity;
          const wave =
            Math.sin(step * 0.13 + t * 9 + band * 0.9) * 18 +
            Math.sin(step * 0.04 - t * 13 + band) * 32 +
            disturbance * Math.sin(step * 0.2 + time * 0.006) * 42;
          const y = baseY + wave;
          if (step === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.stroke();
      }

      const glow = context.createRadialGradient(px, py, 0, px, py, Math.max(width, height) * 0.34);
      glow.addColorStop(0, `rgba(255,255,246,${0.07 * pointer.intensity})`);
      glow.addColorStop(0.18, `rgba(216,216,210,${0.035 * pointer.intensity})`);
      glow.addColorStop(0.54, `rgba(255,255,255,${0.012 * pointer.intensity})`);
      glow.addColorStop(1, "rgba(255,255,255,0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      context.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(draw);
    };

    const handleMove = (event) => updatePointer(event);
    const handleLeave = () => {
      pointer.targetIntensity = 0;
    };

    resize();
    window.addEventListener("resize", resize);
    hero.addEventListener("pointermove", handleMove);
    hero.addEventListener("pointerleave", handleLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      hero.removeEventListener("pointermove", handleMove);
      hero.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return <canvas className="liquid-fluid-layer" ref={canvasRef} aria-hidden="true" />;
}

function InvisibleLiquidDistortion() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = canvas?.closest(".hero");
    if (!canvas || !hero) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const context = canvas.getContext("2d", { alpha: true });
    const state = {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      lastX: 0,
      lastY: 0,
      vx: 0,
      vy: 0,
      smoothVx: 0,
      smoothVy: 0,
      intensity: 0,
      targetIntensity: 0,
      speed: 0,
      lastMove: 0,
    };
    let raf = 0;

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      state.width = Math.max(1, rect.width);
      state.height = Math.max(1, rect.height);
      canvas.width = Math.floor(state.width * ratio);
      canvas.height = Math.floor(state.height * ratio);
      canvas.style.width = `${state.width}px`;
      canvas.style.height = `${state.height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      if (!state.x) {
        state.x = state.width * 0.56;
        state.y = state.height * 0.46;
        state.targetX = state.x;
        state.targetY = state.y;
        state.lastX = state.x;
        state.lastY = state.y;
      }
    };

    const setPoint = (event) => {
      const rect = hero.getBoundingClientRect();
      const nextX = event.clientX - rect.left;
      const nextY = event.clientY - rect.top;
      state.vx += (nextX - state.lastX) * 0.42;
      state.vy += (nextY - state.lastY) * 0.42;
      state.lastX = nextX;
      state.lastY = nextY;
      state.targetX = Math.max(0, Math.min(rect.width, nextX));
      state.targetY = Math.max(0, Math.min(rect.height, nextY));
      state.targetIntensity = 1;
      state.lastMove = performance.now();
    };

    const drawRipple = (time) => {
      const radius = Math.min(state.width, state.height) * (0.2 + state.speed * 0.055);
      const alpha = state.intensity * (0.12 + state.speed * 0.08);
      const angle = Math.atan2(state.smoothVy, state.smoothVx || 0.001);

      context.save();
      context.translate(state.x, state.y);
      context.rotate(angle * 0.08);
      context.globalCompositeOperation = "screen";

      for (let ring = 0; ring < 4; ring += 1) {
        const progress = ring / 4;
        const localRadius = radius * (0.34 + progress * 0.74);
        context.beginPath();
        for (let step = 0; step <= 64; step += 1) {
          const theta = (step / 64) * Math.PI * 2;
          const noise =
            Math.sin(theta * 3 + time * 0.002 + ring) * 10 +
            Math.sin(theta * 5 - time * 0.0014 + ring * 0.8) * 6 +
            state.speed * Math.cos(theta - angle) * 34;
          const stretchX = 1 + Math.min(0.24, state.speed * 0.18);
          const stretchY = 0.7 + Math.min(0.12, state.speed * 0.08);
          const x = Math.cos(theta) * (localRadius + noise) * stretchX;
          const y = Math.sin(theta) * (localRadius + noise) * stretchY;
          if (step === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.closePath();
        context.strokeStyle = `rgba(255,255,246,${alpha * (1 - progress) * 0.5})`;
        context.lineWidth = 0.9;
        context.stroke();
      }

      const glow = context.createRadialGradient(0, 0, 0, 0, 0, radius * 1.45);
      glow.addColorStop(0, `rgba(255,255,246,${state.intensity * 0.05})`);
      glow.addColorStop(0.26, `rgba(220,224,218,${state.intensity * 0.024})`);
      glow.addColorStop(0.72, `rgba(255,255,255,${state.intensity * 0.007})`);
      glow.addColorStop(1, "rgba(255,255,255,0)");
      context.fillStyle = glow;
      context.fillRect(-radius * 1.5, -radius * 1.5, radius * 3, radius * 3);

      context.restore();
    };

    const render = (time) => {
      if (time - state.lastMove > 220) state.targetIntensity = 0;
      state.x += (state.targetX - state.x) * 0.075;
      state.y += (state.targetY - state.y) * 0.075;
      state.smoothVx += (state.vx - state.smoothVx) * 0.085;
      state.smoothVy += (state.vy - state.smoothVy) * 0.085;
      state.vx *= 0.86;
      state.vy *= 0.86;
      state.intensity += (state.targetIntensity - state.intensity) * 0.07;
      state.speed += (Math.min(1, Math.hypot(state.smoothVx, state.smoothVy) / 38) - state.speed) * 0.09;

      hero.style.setProperty("--distort-x", `${state.x.toFixed(2)}px`);
      hero.style.setProperty("--distort-y", `${state.y.toFixed(2)}px`);
      hero.style.setProperty("--distort-intensity", state.intensity.toFixed(4));
      hero.style.setProperty("--distort-speed", state.speed.toFixed(4));
      hero.style.setProperty("--distort-offset-x", `${(state.smoothVx * 0.3).toFixed(2)}px`);
      hero.style.setProperty("--distort-offset-y", `${(state.smoothVy * 0.24).toFixed(2)}px`);
      hero.style.setProperty("--distort-red-x", `${(state.smoothVx * -0.065).toFixed(2)}px`);
      hero.style.setProperty("--distort-red-y", `${(state.smoothVy * -0.045).toFixed(2)}px`);
      hero.style.setProperty("--distort-cyan-x", `${(state.smoothVx * 0.065).toFixed(2)}px`);
      hero.style.setProperty("--distort-cyan-y", `${(state.smoothVy * 0.045).toFixed(2)}px`);
      hero.style.setProperty("--distort-blur", `${(0.95 + state.speed * 4.2).toFixed(2)}px`);
      hero.style.setProperty("--distort-alpha", (state.intensity * 0.64).toFixed(4));
      hero.style.setProperty("--distort-rgb-alpha", (state.intensity * state.speed * 0.13).toFixed(4));

      context.clearRect(0, 0, state.width, state.height);
      if (state.intensity > 0.004) drawRipple(time);

      raf = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    hero.addEventListener("pointermove", setPoint);
    hero.addEventListener("pointerleave", () => {
      state.targetIntensity = 0;
    });
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      hero.removeEventListener("pointermove", setPoint);
    };
  }, []);

  return (
    <>
      <canvas className="invisible-distortion-ripples" ref={canvasRef} aria-hidden="true" />
      <div className="invisible-distortion-filter" aria-hidden="true" />
      <div className="invisible-distortion-rgb invisible-distortion-rgb-red" aria-hidden="true" />
      <div className="invisible-distortion-rgb invisible-distortion-rgb-cyan" aria-hidden="true" />
    </>
  );
}

function HeaderMeta({ className = "hero-meta" }) {
  const [time, setTime] = useState(() =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Shanghai",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date()),
  );

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Shanghai",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const timer = window.setInterval(() => {
      setTime(formatter.format(new Date()));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={className} aria-label="FOSHAN COORDINATES AND CURRENT TIME">
      <span>FOSHAN</span>
      <span>23.0215° N / 113.1214° E</span>
      <time>{time}</time>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="STUDIO HOME">
        <span />
        <strong>PORTFOLIO</strong>
      </a>
      <nav aria-label="PRIMARY NAVIGATION">
        <a href="#about">ABOUT</a>
        <a href="#portfolio">PROJECT</a>
        <a href="#cases">SELECTED CASES</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <span className="header-balance" aria-hidden="true" />
    </header>
  );
}

function AnimatedHeroTitle() {
  const lines = ["CRAFT", "WITH RESTRAINT"];

  return (
    <h1 className="hero-title" aria-label="CRAFT WITH RESTRAINT">
      {lines.map((line, index) => (
        <span className="hero-title-mask" key={line}>
          <span className="hero-title-line" style={{ "--line": index }}>
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}

function PressureHeroTitle() {
  return (
    <div className="hero-pressure-title" aria-label="HELLO THIS IS MY STUDIO">
      <div className="pressure-line pressure-line-hello">
        <TextPressure
          text="HELLO"
          flex
          alpha={false}
          stroke={false}
          width
          weight
          italic={false}
          textColor="#f4f1ea"
          strokeColor="#f4f1ea"
          className="hero-pressure-text"
          minFontSize={72}
        />
      </div>
      <div className="pressure-line pressure-line-studio">
        <TextPressure
          text="THIS IS MY STUDIO"
          flex
          alpha={false}
          stroke={false}
          width
          weight
          italic={false}
          textColor="#f4f1ea"
          strokeColor="#f4f1ea"
          className="hero-pressure-text"
          minFontSize={48}
        />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <video
        className="hero-bg-video"
        src={assetUrl("/视频/网页首页鲸鱼光影视频_3.mp4")}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="hero-video-shade" aria-hidden="true" />
      <div className="hero-particles">
        <ParticleCanvas />
      </div>
      <ThreeFluidDistortion />
      <HeaderMeta />
      <div className="hero-copy reveal">
        <p className="eyebrow">CREATIVE STUDIO / BRAND SYSTEM / MOTION</p>
        <PressureHeroTitle />
        <p className="hero-cn">让视觉回归纯粹，用克制的设计，构建有生命力的品牌生态。</p>
      </div>
      <div className="hero-index reveal">
        <span>01</span>
        <span>LIQUID IDENTITY FIELD</span>
      </div>
    </section>
  );
}

function MotionScreen() {
  const words = ["WE", "SHAPE", "QUIET", "SYSTEMS", "THAT", "MOVE"];

  return (
    <section className="video-statement" id="motion">
      <div className="video-copy reveal">
        <p className="eyebrow">02 / MOTION STUDY</p>
        <h2 aria-label="WE SHAPE QUIET SYSTEMS THAT MOVE">
          {words.map((word, index) => (
            <span key={word} style={{ "--i": index }}>
              {word}
            </span>
          ))}
        </h2>
        <p>A RESTRAINED MOTION LAYER, PLACED BEHIND TYPOGRAPHY AND TUNED FOR SLOW CINEMATIC SCROLLING.</p>
      </div>
      <div className="video-frame scroll-motion reveal" data-depth="1">
        <video src={assetUrl("/视频/0.mp4")} autoPlay muted loop playsInline preload="metadata" aria-label="STUDIO MOTION REEL" />
      </div>
    </section>
  );
}

function FloatingPortfolio() {
  const items = useMemo(() => data.portfolio || [], []);
  const cards = useMemo(() => items.slice(0, 12), [items]);
  const hero = cards.find((item) => item.orientation === "Portrait") || cards[0];
  const stageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const drag = { active: false, startX: 0 };
    let raf = 0;
    const onMove = (event) => {
      const rect = stage.getBoundingClientRect();
      pointer.targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onLeave = () => { pointer.targetX = 0; pointer.targetY = 0; };
    const onPointerDown = (event) => {
      drag.active = true;
      drag.startX = event.clientX;
      stage.setPointerCapture?.(event.pointerId);
      stage.classList.add("is-dragging");
    };
    const onPointerUp = (event) => {
      if (!drag.active) return;
      const distance = event.clientX - drag.startX;
      drag.active = false;
      stage.releasePointerCapture?.(event.pointerId);
      stage.classList.remove("is-dragging");
      if (Math.abs(distance) > 42) {
        setActiveIndex((current) => {
          const next = distance < 0 ? current + 1 : current - 1;
          return (next + stackCards.length) % stackCards.length;
        });
      }
    };
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      section.style.setProperty("--gallery-progress", progress.toFixed(4));
      stage.style.setProperty("--gallery-progress", progress.toFixed(4));
    };
    const render = () => {
      pointer.x += (pointer.targetX - pointer.x) * 0.08;
      pointer.y += (pointer.targetY - pointer.y) * 0.08;
      stage.style.setProperty("--pointer-x", reduce ? "0" : pointer.x.toFixed(4));
      stage.style.setProperty("--pointer-y", reduce ? "0" : pointer.y.toFixed(4));
      raf = requestAnimationFrame(render);
    };

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    stage.addEventListener("pointerdown", onPointerDown);
    stage.addEventListener("pointerup", onPointerUp);
    stage.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    raf = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
      stage.removeEventListener("pointerdown", onPointerDown);
      stage.removeEventListener("pointerup", onPointerUp);
      stage.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const labels = ["Brand Visual", "Motion Design", "IP Design", "Web Experience", "AI Visual System"];
  const stackCards = cards.slice(0, 9);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (stackCards.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % stackCards.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [stackCards.length]);

  return (
    <section className="floating-portfolio" id="portfolio" ref={sectionRef}>
      <div className="floating-sticky">
        <div className="floating-intro reveal">
          <p className="eyebrow">03 / LIVING VISUAL SYSTEM</p>
          <h2>让视觉<br /><em>成为流动的系统</em></h2>
          <div className="floating-labels">{labels.map((label) => <span key={label}>{label}</span>)}</div>
        </div>
        <div className="floating-stage" ref={stageRef}>
          <div className="floating-letter floating-letter-one" aria-hidden="true">A</div>
          <div className="floating-letter floating-letter-two" aria-hidden="true">∞</div>
          <div className="floating-fragment fragment-top">FORM / MOTION / IMAGE</div>
          <div className="floating-fragment fragment-bottom">A VISUAL SYSTEM IN MOTION</div>
          <div className="floating-rule rule-one" aria-hidden="true" />
          <div className="floating-rule rule-two" aria-hidden="true" />
          {stackCards.map((item, index) => {
            const position = (index - activeIndex + stackCards.length) % stackCards.length;
            const ratio = item.width && item.height ? item.width / item.height : 1;
            return (
              <article className={`floating-card stack-card stack-card-position-${position}`} key={`${item.src}-${index}`} style={{ "--stack-index": position, "--card-ratio": ratio }}>
                <img src={assetUrl(item.src)} alt={item.title || "Portfolio project"} loading={position < 3 ? "eager" : "lazy"} />
                <span>{String(index + 1).padStart(2, "0")} / {labels[index % labels.length]}</span>
              </article>
            );
          })}          <div className="floating-note note-left">SELECTED<br />WORKS 2024—26</div>
          <div className="floating-note note-right">SCROLL TO<br />ENTER THE ROOM</div>
        </div>
      </div>
    </section>
  );
}
function FeaturedCases() {
  return (
    <section className="featured section" id="cases">
      <div className="section-head reveal">
        <div>
          <p className="eyebrow">04 / SELECTED CASES</p>
          <h2>FEATURED CASES</h2>
        </div>
        <span>LARGE-FORMAT CAMPAIGN VISUALS SHAPED THROUGH QUIET CONTRAST AND PRECISE VISUAL HIERARCHY.</span>
      </div>
      <div className="featured-grid">
        {data.featured.map((item, index) => (
          <article className="case-card reveal scroll-motion" data-depth={index % 2 === 0 ? 1 : -1} key={item.src}>
            <div className="case-info">
              <span>{String(index + 1).padStart(2, "0")} / FEATURED CASE</span>
              <h3>{item.title}</h3>
            </div>
            <div className="case-image">
              <img src={assetUrl(item.src)} alt={item.title} loading={index === 0 ? "eager" : "lazy"} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutRevealBackground() {
  const revealRef = useRef(null);

  useEffect(() => {
    const reveal = revealRef.current;
    const section = reveal?.closest(".about");
    if (!reveal || !section) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const state = {
      x: 50,
      y: 50,
      targetX: 50,
      targetY: 50,
      intensity: 0,
      targetIntensity: 0,
    };
    let raf = 0;

    const updatePoint = (event) => {
      const rect = section.getBoundingClientRect();
      state.targetX = ((event.clientX - rect.left) / rect.width) * 100;
      state.targetY = ((event.clientY - rect.top) / rect.height) * 100;
      state.targetIntensity = 1;
    };

    const handleLeave = () => {
      state.targetIntensity = 0;
    };

    const render = () => {
      state.x += (state.targetX - state.x) * 0.16;
      state.y += (state.targetY - state.y) * 0.16;
      state.intensity += (state.targetIntensity - state.intensity) * 0.12;
      reveal.style.setProperty("--about-x", `${state.x.toFixed(2)}%`);
      reveal.style.setProperty("--about-y", `${state.y.toFixed(2)}%`);
      reveal.style.setProperty("--about-reveal", state.intensity.toFixed(4));
      raf = requestAnimationFrame(render);
    };

    section.addEventListener("pointermove", updatePoint);
    section.addEventListener("pointerleave", handleLeave);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener("pointermove", updatePoint);
      section.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return <div className="about-color-reveal" ref={revealRef} aria-hidden="true" />;
}

function About() {
  return (
    <section className="about section" id="about">
      <AboutRevealBackground />
      <div className="about-copy reveal">
        <p className="eyebrow">05 / ABOUT THE STUDIO</p>
        <h2>PURE DESIGN BEGINS WITH A CONVERSATION.</h2>
        <p className="about-cn">回归纯粹，始于对话。</p>
      </div>
      <div className="about-line" aria-hidden="true" />
    </section>
  );
}

function ContactRevealBackground() {
  const revealRef = useRef(null);

  useEffect(() => {
    const reveal = revealRef.current;
    const section = reveal?.closest(".contact");
    if (!reveal || !section) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const state = {
      x: 50,
      y: 50,
      targetX: 50,
      targetY: 50,
      intensity: 0,
      targetIntensity: 0,
    };
    let raf = 0;

    const updatePoint = (event) => {
      const rect = section.getBoundingClientRect();
      state.targetX = ((event.clientX - rect.left) / rect.width) * 100;
      state.targetY = ((event.clientY - rect.top) / rect.height) * 100;
      state.targetIntensity = 1;
    };

    const handleLeave = () => {
      state.targetIntensity = 0;
    };

    const render = () => {
      state.x += (state.targetX - state.x) * 0.16;
      state.y += (state.targetY - state.y) * 0.16;
      state.intensity += (state.targetIntensity - state.intensity) * 0.12;
      reveal.style.setProperty("--contact-x", `${state.x.toFixed(2)}%`);
      reveal.style.setProperty("--contact-y", `${state.y.toFixed(2)}%`);
      reveal.style.setProperty("--contact-reveal", state.intensity.toFixed(4));
      raf = requestAnimationFrame(render);
    };

    section.addEventListener("pointermove", updatePoint);
    section.addEventListener("pointerleave", handleLeave);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener("pointermove", updatePoint);
      section.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return <div className="contact-image-reveal" ref={revealRef} aria-hidden="true" />;
}

function Contact() {
  return (
    <section className="contact closing-section" id="contact">
      <ContactRevealBackground />
      <span className="closing-dot reveal" aria-hidden="true" />
      <p className="eyebrow reveal">06 / CONTACT</p>
      <h2 className="reveal">LET'S WORK TOGETHER</h2>
      <div className="closing-bar reveal">
        <a href="mailto:hello@studio.com">HELLO@STUDIO.COM</a>
        <a className="wechat-link" href="#wechat-qr" aria-label="SHOW WECHAT QR CODE">WECHAT</a>
        <a className="back-top" href="#home" aria-label="BACK TO TOP">BACK TO TOP</a>
      </div>
      <div className="wechat-modal" id="wechat-qr" aria-label="WECHAT QR CODE">
        <a className="wechat-modal-backdrop" href="#contact" aria-label="CLOSE WECHAT QR CODE" />
        <div className="wechat-modal-panel" role="dialog" aria-modal="true" aria-label="WECHAT QR CODE">
          <img src={assetUrl("/底图/wechat-qr.jpg")} alt="WECHAT QR CODE" />
          <span>WECHAT</span>
          <a href="#contact" aria-label="CLOSE WECHAT QR CODE">CLOSE</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useReveal();
  useScrollMotion();

  return (
    <>
      <LoadingIntro />
      <Header />
      <main>
        <Hero />
        <MotionScreen />
        <FloatingPortfolio />
        <FeaturedCases />
        <About />
        <Contact />
      </main>
      <footer className="site-footer">MADE ON HEANGEUN</footer>
    </>
  );
}







