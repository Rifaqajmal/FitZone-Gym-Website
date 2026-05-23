/* ============================================================
   FitZone — script.js
   ============================================================ */

// ---- AOS Init ----
AOS.init({
  duration: 700,
  once: true,
  offset: 60,
  easing: 'ease-out-cubic'
});

// ---- Navbar scroll effect ----
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

// ---- Dark / Light Theme Toggle ----
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
const html        = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('fitzone-theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('fitzone-theme', next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// ---- Animated Counters ----
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num[data-count]');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, 16);
  });
}

// Trigger counters when hero stats come into view
const statsEl = document.querySelector('.hero-stats');
if (statsEl) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  observer.observe(statsEl);
}

// ---- BMI Calculator ----
function calculateBMI() {
  const heightCm = parseFloat(document.getElementById('bmiHeight').value);
  const weightKg = parseFloat(document.getElementById('bmiWeight').value);
  const age      = parseFloat(document.getElementById('bmiAge').value);

  // Validation
  if (!heightCm || !weightKg || heightCm < 100 || heightCm > 250 || weightKg < 30 || weightKg > 300) {
    shakeInput();
    return;
  }

  const heightM = heightCm / 100;
  const bmi     = weightKg / (heightM * heightM);
  const bmiVal  = bmi.toFixed(1);

  // Category & tip
  let category, color, tip, needleAngle;

  if (bmi < 18.5) {
    category    = 'Underweight';
    color       = '#0ea5e9';
    tip         = 'Consider a calorie-surplus plan with strength training to build healthy mass.';
    needleAngle = -75 + ((bmi / 18.5) * 40);
  } else if (bmi < 25) {
    category    = 'Normal Weight';
    color       = '#10b981';
    tip         = 'Great! Maintain your healthy weight with balanced nutrition and regular exercise.';
    needleAngle = -35 + (((bmi - 18.5) / 6.5) * 35);
  } else if (bmi < 30) {
    category    = 'Overweight';
    color       = '#f59e0b';
    tip         = 'Consider a calorie-deficit diet combined with cardio and strength training.';
    needleAngle = 0 + (((bmi - 25) / 5) * 35);
  } else {
    category    = 'Obese';
    color       = '#ef4444';
    tip         = 'Consult a healthcare professional and consider our personalized coaching programs.';
    needleAngle = 35 + Math.min(((bmi - 30) / 10) * 40, 40);
  }

  // Update UI
  const numEl = document.getElementById('bmiNumber');
  const catEl = document.getElementById('bmiCategory');
  const tipEl = document.getElementById('bmiTip');

  animateBMINumber(numEl, 0, parseFloat(bmiVal));
  numEl.style.color = color;
  catEl.textContent = category;
  catEl.style.color = color;
  tipEl.textContent = tip;

  // Needle
  const needle = document.getElementById('gaugeNeedle');
  needle.setAttribute('transform', `rotate(${needleAngle}, 100, 100)`);
  needle.style.stroke = color;
}

function animateBMINumber(el, from, to) {
  const duration = 1000;
  const start = performance.now();
  function step(now) {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = (from + (to - from) * ease).toFixed(1);
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function shakeInput() {
  const form = document.querySelector('.bmi-form');
  form.style.animation = 'shake 0.4s ease';
  setTimeout(() => form.style.animation = '', 400);
}

// Add shake keyframe dynamically
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    75% { transform: translateX(8px); }
  }
`;
document.head.appendChild(shakeStyle);

// ---- Contact Form ----
function submitForm(e) {
  e.preventDefault();
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const btn     = form.querySelector('button[type="submit"]');

  // Simulate loading
  btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
  btn.disabled = true;

  setTimeout(() => {
    form.style.display = 'none';
    success.style.display = 'block';
  }, 1600);
}

// ---- Back to Top button ----
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
});

// ---- Smooth nav links ----
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });

      // Close mobile menu
      const navMenu = document.getElementById('navMenu');
      if (navMenu.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navMenu);
        if (bsCollapse) bsCollapse.hide();
      }
    }
  });
});

// ---- Button ripple effect ----
document.querySelectorAll('.btn-cta, .btn-outline-cta').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple   = document.createElement('span');
    const rect     = btn.getBoundingClientRect();
    const size     = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
      position: absolute; border-radius: 50%;
      width: ${size}px; height: ${size}px;
      left: ${e.clientX - rect.left - size/2}px;
      top: ${e.clientY - rect.top - size/2}px;
      background: rgba(255,255,255,0.25);
      transform: scale(0); pointer-events: none;
      animation: rippleAnim 0.6s ease-out forwards;
    `;
    if (!btn.style.position || btn.style.position === 'static') btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes rippleAnim {
    to { transform: scale(4); opacity: 0; }
  }
`;
document.head.appendChild(rippleStyle);

// ---- Scroll reveal for navbar style update ----
document.addEventListener('DOMContentLoaded', () => {
  console.log('%c💪 FitZone Loaded', 'color:#f97316;font-size:1.2rem;font-weight:bold;');
});
