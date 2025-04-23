function showInvitation() {
    const name = document.getElementById("nameInput").value.trim();
    if (!name) return alert("Please enter your name!");
  
    document.getElementById("nameScreen").classList.add("hidden");
    document.getElementById("invitationScreen").classList.remove("hidden");
    document.getElementById("personName").innerText = name;
  
    startConfetti(); 
    startBackgroundGlow(); 
  
    const letterText = `Dear ${name},\n\nWelcome to the grand unveiling of Shara Drive – a place where digital meets elegant. We're thrilled to have you join this new chapter of experiences, exploration, and ease.\n\nLet the drive begin.\n\nWe’re thrilled to invite you to the official launch of Shara Drive in Madurai on May 9!\n\nShara Drive is a community-driven, automated WhatsApp ride-booking bot — but wait, are we like Uber? Not quite!\n\nHere’s what makes us different:\n✅ Zero commission\n✅ No platform fees\n✅ No surge pricing\n✅ Fares based on carbon emissions — not meters\n✅ And for every ride you book, we plant a tree.\n\nThat means every time you ride, you're not just getting from A to B — you're helping save nature. 🌍💚\n\n🚨 Launch location will be revealed on May 1.\n\nThank you for believing in us and being a part of this journey. Your support means the world to us.\n\nWith gratitude,\nSarveshwar`;

    typeLetter(letterText, "letter");

  }
  function startBackgroundGlow() {
    const body = document.body;
    const glow = document.createElement("div");
    glow.style.position = "fixed";
    glow.style.top = 0;
    glow.style.left = 0;
    glow.style.width = "100%";
    glow.style.height = "100%";
    glow.style.zIndex = "-1";
    glow.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3), transparent 70%)`;
    glow.style.animation = "glowPulse 8s ease-in-out infinite";
    document.body.appendChild(glow);
  }
  function startConfetti() {
    const canvas = document.getElementById("confettiCanvas");
    const ctx = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const crystals = [];
    const colors = ["#a2d2ff", "#cdb4db", "#ffc8dd", "#bde0fe", "#d0f4de"];
    for (let i = 0; i < 100; i++) {
      crystals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 1 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      crystals.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
        ctx.fillStyle = c.color;
        ctx.fill();
      });
      update();
    }
  
    function update() {
      crystals.forEach(c => {
        c.y += c.d;
        c.x += Math.sin(c.y * 0.01);
        if (c.y > canvas.height) {
          c.y = -10;
          c.x = Math.random() * canvas.width;
        }
      });
    }
  
    function animate() {
      draw();
      requestAnimationFrame(animate);
    }
  
    animate();
  }
  const styleSheet = document.createElement("style");
  styleSheet.innerHTML = `
  @keyframes glowPulse {
    0% { background-position: 50% 50%; transform: scale(1); opacity: 0.6; }
    50% { background-position: 60% 60%; transform: scale(1.02); opacity: 0.9; }
    100% { background-position: 50% 50%; transform: scale(1); opacity: 0.6; }
  }`;
  document.head.appendChild(styleSheet);
  
  /* ✍️ Letter Typing + Thank You Fade-in */
  function typeLetter(text, elementId, speed = 30) {
    const el = document.getElementById(elementId);
    const thankYou = document.getElementById("thankYouMsg");
    const name = document.getElementById("personName").innerText;
    let i = 0;
    el.innerHTML = "";
    function typing() {
      if (i < text.length) {
        el.innerHTML += text.charAt(i) === '\n' ? "<br>" : text.charAt(i);
        i++;
        setTimeout(typing, speed);
      } else {
        thankYou.innerText = `Thank you, ${name}, for being part of this moment. 🌸`;
        thankYou.classList.remove("hidden");
        setTimeout(() => {
          thankYou.classList.add("show");
        }, 100);
      }
    }
    typing();
  }
  