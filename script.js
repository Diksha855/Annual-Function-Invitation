function nextPage(n) {

  // play music on first interaction
    const music = document.getElementById('bgMusic');
    if (music && music.paused) {
    music.muted = false;  
    music.volume = 0.4; // soft background volume
    music.play().catch(() => {});
  }

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page' + n).classList.add('active');
  }

  // Snow Animation
  const canvas = document.getElementById('snow');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let flakes = [];

  function createSnowflakes() {
    flakes = [];
    for (let i = 0; i < 150; i++) {
      flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 1,
        d: Math.random() + 1
      });
    }
  }

  function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.beginPath();
    flakes.forEach(f => {
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    });
    ctx.fill();
    flakes.forEach(f => {
      f.y += Math.pow(f.d, 2) + 1;
      if (f.y > canvas.height) f.y = 0;
    });
    requestAnimationFrame(drawSnowflakes);
  }

  createSnowflakes();
  drawSnowflakes();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createSnowflakes();
  });