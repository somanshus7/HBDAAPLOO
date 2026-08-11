const launchBtn = document.getElementById("launchBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const particles = document.getElementById("particles");

function makeParticle() {
  const p = document.createElement("div");
  p.className = "particle";
  p.textContent = ["🎓", "🚀", "⚡", "🍺", "🍕", "🔥", "✨"][Math.floor(Math.random() * 7)];
  p.style.left = Math.random() * 100 + "vw";
  p.style.setProperty("--drift", (Math.random() * 240 - 120) + "px");
  p.style.animationDuration = (4 + Math.random() * 5) + "s";
  p.style.fontSize = (14 + Math.random() * 16) + "px";
  particles.appendChild(p);
  setTimeout(() => p.remove(), 10000);
}

setInterval(makeParticle, 350);

function triggerEffect(type) {
  confettiOverload();
  let toastMsg = "";
  if (type === 'proxy') toastMsg = "📢 Proxy marked! Attendance saved! 🎓";
  if (type === 'chai') toastMsg = "☕ Tapri Chai break activated!";
  if (type === 'treat') toastMsg = "🍕 Party treat demanded from Applooo!";
  if (type === 'night') toastMsg = "🌙 Night out plan locked!";

  const toast = document.createElement("div");
  toast.textContent = toastMsg;
  toast.style.position = "fixed";
  toast.style.bottom = "80px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = "rgba(56, 189, 248, 0.9)";
  toast.style.color = "#0f172a";
  toast.style.padding = "10px 20px";
  toast.style.borderRadius = "999px";
  toast.style.fontWeight = "700";
  toast.style.zIndex = "100";
  toast.style.boxShadow = "0 10px 25px rgba(0,0,0,0.5)";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

function confettiOverload() {
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("div");
    c.textContent = ["🎓", "✨", "🚀", "💥", "🍺", "🍕", "🔥"][Math.floor(Math.random() * 7)];
    c.style.position = "fixed";
    c.style.left = "50vw";
    c.style.top = "45vh";
    c.style.zIndex = "30";
    c.style.pointerEvents = "none";
    c.style.fontSize = (14 + Math.random() * 20) + "px";
    document.body.appendChild(c);

    const x = (Math.random() * 2 - 1) * innerWidth;
    const y = (Math.random() * 2 - 1) * innerHeight;

    c.animate([
      { transform: "translate(-50%,-50%) scale(.2)", opacity: 1 },
      { transform: `translate(${x}px,${y}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], {
      duration: 1200 + Math.random() * 1000,
      easing: "cubic-bezier(.2,.8,.3,1)"
    }).onfinish = () => c.remove();
  }
}

launchBtn.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.scrollIntoView({ behavior: "smooth", block: "center" });
  music.play().then(() => { musicBtn.classList.add("playing"); }).catch(() => {});
  confettiOverload();
});

document.getElementById("celebrate").addEventListener("click", () => {
  confettiOverload();
});

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.classList.add("playing");
  } else {
    music.pause();
    musicBtn.classList.remove("playing");
  }
});
