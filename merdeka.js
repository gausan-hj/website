// =================== 背景切换 ===================
const bg1 = document.querySelector('.background1');
const bg2 = document.querySelector('.background2');
const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Petronas_Twin_Towers_%28KLCC%29_Special_Light_Up_for_Malaysia%E2%80%99s_Independence_Day.jpeg/1200px-Petronas_Twin_Towers_%28KLCC%29_Special_Light_Up_for_Malaysia%E2%80%99s_Independence_Day.jpeg?20220308123006",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KL_Tower_outlooking_Merdeka_118_20230710_%2853331134637%29.jpg/640px-KL_Tower_outlooking_Merdeka_118_20230710_%2853331134637%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Masijd_Putra_170429.jpg/640px-Masijd_Putra_170429.jpg"
];

let index = 0;
let showing = 0; 

bg1.style.backgroundImage = `url(${images[0]})`;
bg2.style.opacity = 0;

function changeBackground() {
  index = (index + 1) % images.length;
  const newImg = new Image();
  newImg.src = images[index];
  newImg.onload = () => {
    if (showing === 0) {
      bg2.style.backgroundImage = `url(${images[index]})`;
      bg2.style.opacity = 1;
      bg1.style.opacity = 0;
      showing = 1;
    } else {
      bg1.style.backgroundImage = `url(${images[index]})`;
      bg1.style.opacity = 1;
      bg2.style.opacity = 0;
      showing = 0;
    }
  };
}
setInterval(changeBackground, 15000);

// =================== 烟花 (永远显示) ===================
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Firework {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = Math.random() * 2 + 2;
    this.angle = Math.random() * 2 * Math.PI;
    this.speed = Math.random() * 5 + 2;
    this.life = 100;
  }
  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.life--;
    this.speed *= 0.95;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

const fireworks = [];
function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff66ff', '#00ffff'];
  for (let i = 0; i < 50; i++) {
    fireworks.push(new Firework(x, y, colors[Math.floor(Math.random() * colors.length)]));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((f, i) => {
    f.update();
    f.draw();
    if (f.life <= 0) fireworks.splice(i, 1);
  });
  requestAnimationFrame(animate);
}
setInterval(createFirework, 800);
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// =================== 只在国庆日 (8月31日) 出现 ===================
const today = new Date();
const isMerdekaDay = (today.getMonth() === 7 && today.getDate() === 31); 

if (isMerdekaDay) {
  // 🎈 气球
  const slogans = [
    "🇲🇾 Bersatu Teguh",
    "🇬🇧 Unity is Strength",
    "🇨🇳 团结就是力量"
  ];

  function launchBalloons() {
    const container = document.getElementById("balloon-container");

    setInterval(() => {
      const balloon = document.createElement("div");
      balloon.className = "balloon";

      const colors = ["red", "blue", "green", "orange", "purple", "yellow"];
      balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.left = Math.random() * 90 + "vw";

      balloon.addEventListener("click", () => {
        const text = document.createElement("div");
        text.className = "slogan-text";
        text.innerText = slogans[Math.floor(Math.random() * slogans.length)];
        text.style.left = balloon.style.left;
        text.style.top = "50%";

        container.appendChild(text);
        setTimeout(() => text.remove(), 3000);
        balloon.remove();
      });

      container.appendChild(balloon);
      setTimeout(() => balloon.remove(), 10000);
    }, 2000);
  }
  launchBalloons();

  // 🎉 彩带效果
  function launchConfetti() {
    const confettiContainer = document.createElement("div");
    confettiContainer.id = "confetti-container";
    document.body.appendChild(confettiContainer);

    setInterval(() => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confettiContainer.appendChild(confetti);

      setTimeout(() => confetti.remove(), 5000);
    }, 200);
  }
  launchConfetti();
}

