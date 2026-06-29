const hero = document.querySelector(".hero");
const useImageHero = hero.classList.contains("hero-image");

const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, active: false, strength: 0 };

function animateImageHero(time = 0) {
  pointer.x += (pointer.tx - pointer.x) * 0.08;
  pointer.y += (pointer.ty - pointer.y) * 0.08;
  pointer.strength += ((pointer.active ? 1 : 0) - pointer.strength) * 0.07;

  const idleX = Math.sin(time * 0.00022) * 4;
  const idleY = Math.cos(time * 0.00018) * 3;
  const x = (0.5 - pointer.x) * 18 * pointer.strength + idleX;
  const y = (0.5 - pointer.y) * 12 * pointer.strength + idleY;
  const scale = 1.016 + pointer.strength * 0.008;

  hero.style.setProperty("--cover-x", `${x.toFixed(2)}px`);
  hero.style.setProperty("--cover-y", `${y.toFixed(2)}px`);
  hero.style.setProperty("--cover-scale", scale.toFixed(3));
  hero.style.setProperty("--light-x", `${(48 + pointer.x * 28).toFixed(2)}%`);
  hero.style.setProperty("--light-y", `${(22 + pointer.y * 34).toFixed(2)}%`);

  requestAnimationFrame(animateImageHero);
}

hero.addEventListener("pointermove", (event) => {
  const rect = hero.getBoundingClientRect();
  pointer.tx = (event.clientX - rect.left) / rect.width;
  pointer.ty = (event.clientY - rect.top) / rect.height;
  pointer.active = true;
  hero.classList.add("is-reacting");
});

hero.addEventListener("pointerleave", () => {
  pointer.active = false;
  hero.classList.remove("is-reacting");
});

if (useImageHero) {
  requestAnimationFrame(animateImageHero);
}
