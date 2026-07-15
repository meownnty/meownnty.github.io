console.log("🐱 Meownnty Studio — CHAOS MODE ENGAGED");

// ========== PARTICLE SYSTEM (Aggressive) ==========
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let w, h;
function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
resize();
window.addEventListener('resize', resize);

const particles = [];
const NUM = 120; // more particles

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 1.2;
    this.speedY = (Math.random() - 0.5) * 1.2;
    this.color = Math.random() > 0.6 ? '#FF0073' : '#00FF40';
    this.opacity = Math.random() * 0.6 + 0.3;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > w || this.x < 0) { this.speedX *= -1; this.x += this.speedX * 2; }
    if (this.y > h || this.y < 0) { this.speedY *= -1; this.y += this.speedY * 2; }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.shadowBlur = 25;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
  }
}

for (let i = 0; i < NUM; i++) particles.push(new Particle());

// ========== MOUSE TRAIL (Chaos Trail) ==========
let mouse = { x: -1000, y: -1000 };
let trail = [];

document.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  // Push a burst of color
  trail.push({ x: mouse.x, y: mouse.y, life: 1 });
  if (trail.length > 30) trail.shift();
});

function animate() {
  ctx.clearRect(0, 0, w, h);

  // Draw particles
  particles.forEach(p => { p.update(); p.draw(); });

  // Draw connecting lines (more connections for chaos)
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 180) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
        gradient.addColorStop(0, `rgba(255,0,115,${0.2 * (1 - dist/180)})`);
        gradient.addColorStop(1, `rgba(0,255,64,${0.2 * (1 - dist/180)})`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    }
  }

  // Draw Mouse Trail (Sparks)
  trail.forEach((t, idx) => {
    t.life -= 0.03;
    if (t.life <= 0) return;
    ctx.beginPath();
    ctx.arc(t.x, t.y, 6 * t.life, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 0, 115, ${t.life * 0.8})`;
    ctx.shadowBlur = 30;
    ctx.shadowColor = '#FF0073';
    ctx.fill();
    ctx.shadowBlur = 0;
  });
  trail = trail.filter(t => t.life > 0);

  requestAnimationFrame(animate);
}
animate();

// ========== FILTER BUTTONS (add smooth toggle) ==========
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
        card.style.animation = 'cardPop 0.4s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  });
});