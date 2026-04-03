/* ============================================
   AI Agent Service - Main JavaScript
   ============================================ */

// ---- Preloader ----
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => preloader.classList.add('hidden'), 600);
  }
});

// ---- Navbar Scroll Effect ----
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---- Active Nav Link on Scroll ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

function updateActiveNav() {
  const scrollPos = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', updateActiveNav);

// ---- Close navbar on link click (mobile) ----
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse, { toggle: true });
    }
  });
});

// ---- Particles.js Config ----
function initParticles() {
  if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#00d4ff' },
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
        size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.3 } },
        line_linked: { enable: true, distance: 150, color: '#00d4ff', opacity: 0.1, width: 1 },
        move: { enable: true, speed: 1.5, direction: 'none', random: false, straight: false, out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.4 } },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  }
}

// ---- Typed.js Config ----
function initTyped() {
  if (typeof Typed !== 'undefined' && document.getElementById('typed-output')) {
    new Typed('#typed-output', {
      strings: [
        'Voice Call AI Agent — Auto Dials &amp; Qualifies',
        'EMI Reminder Agent — Collects 98% On Time',
        'Doctor Appointment Agent — Zero No-Shows',
        'Salon Booking AI — Smart Time Suggestions',
        'Lead Generation Agent — Captures 24/7',
        'Task Automation Agent — Runs on Auto-Pilot',
        'Real Estate AI — Books Viewings Instantly',
        'Customer Support AI — Resolves in Seconds',
        'Follow-Up Agent — Never Misses a Lead',
        'Payment Collection AI — Polite &amp; Persistent',
        'AI SEO Agent — #1 Rankings on Google',
        'GEO Agent — Appear in AI Answers'
      ],
      typeSpeed: 40,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }
}

// ---- Counter Animation ----
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    function update() {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current).toLocaleString() + suffix;
        requestAnimationFrame(update);
      } else {
        counter.textContent = target.toLocaleString() + suffix;
      }
    }
    update();
  });
}

// ---- Intersection Observer for Counters ----
function initCounterObserver() {
  const statsRow = document.querySelector('.stats-row');
  if (!statsRow) return;

  let counted = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsRow);
}

// ---- Testimonials Data ----
const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'CEO, Sharma Properties',
    text: 'The Voice Call AI Agent transformed our real estate sales. We saw a 40% increase in qualified leads within the first month. The AI handles initial inquiries perfectly and books viewings automatically.',
    avatar: 'RS',
    rating: 5
  },
  {
    name: 'Priya Patel',
    role: 'Operations Manager, FinServ Co.',
    text: 'The EMI Reminder Agent reduced our default rates by 35%. Customers appreciate the timely and polite reminders. It has saved our team hundreds of hours of manual calling.',
    avatar: 'PP',
    rating: 5
  },
  {
    name: 'Dr. Anita Desai',
    role: 'Director, City Health Clinic',
    text: 'Patient no-shows dropped by 60% after implementing the Doctor Appointment AI. It handles rescheduling beautifully and patients love the convenience of AI-powered booking.',
    avatar: 'AD',
    rating: 5
  },
  {
    name: 'Vikram Singh',
    role: 'Founder, GlamStyle Salons',
    text: 'The Salon Appointment Agent is a game-changer. It suggests optimal time slots, handles cancellations, and even upsells our premium services. Our booking efficiency improved by 50%.',
    avatar: 'VS',
    rating: 5
  },
  {
    name: 'Sneha Reddy',
    role: 'Marketing Head, TechStart Inc.',
    text: 'Aishan.ai built our entire website and then ranked us #1 on Google within 4 months with their SEO service. The GEO optimization got us mentioned in ChatGPT answers too — absolute game changer.',
    avatar: 'SR',
    rating: 5
  },
  {
    name: 'Amit Joshi',
    role: 'Freelance Photographer',
    text: 'My portfolio website from Aishan.ai is stunning. The animations, the galleries, the speed — clients are blown away. Inquiries went up 3x the month it launched. Best investment ever.',
    avatar: 'AJ',
    rating: 5
  },
  {
    name: 'Neha Gupta',
    role: 'Founder, QuickBite App',
    text: 'Aishan.ai developed our food delivery app from scratch — iOS, Android, admin panel, everything. The app handles 5,000+ orders daily now. Their agile process kept us in the loop throughout.',
    avatar: 'NG',
    rating: 5
  },
  {
    name: 'Karan Malhotra',
    role: 'CEO, EduLearn Platform',
    text: 'The AI SEO and GEO services from Aishan.ai are incredible. When students ask ChatGPT for course recommendations, our platform appears in the answer. Organic traffic is up 200%.',
    avatar: 'KM',
    rating: 5
  },
  {
    name: 'Ritu Agarwal',
    role: 'Director, Wellness Spa Chain',
    text: 'We got both the Salon AI Agent and a beautiful website built by Aishan.ai. The combination of automated booking + an amazing online presence has increased our revenue by 45% this year.',
    avatar: 'RA',
    rating: 5
  }
];

function renderTestimonials() {
  const carouselInner = document.getElementById('testimonial-carousel-inner');
  if (!carouselInner) return;

  // Group into slides of 3 (desktop) - we'll adjust with CSS
  const chunkSize = window.innerWidth < 768 ? 1 : (window.innerWidth < 992 ? 2 : 3);
  let html = '';

  for (let i = 0; i < testimonials.length; i += chunkSize) {
    const chunk = testimonials.slice(i, i + chunkSize);
    const isActive = i === 0 ? ' active' : '';
    html += `<div class="carousel-item${isActive}"><div class="row g-4">`;
    chunk.forEach(t => {
      const stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
      html += `
        <div class="col-md-${12 / chunkSize}">
          <div class="testimonial-card">
            <div class="testimonial-stars">${stars}</div>
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">${t.avatar}</div>
              <div class="testimonial-info">
                <h6>${t.name}</h6>
                <small>${t.role}</small>
              </div>
            </div>
          </div>
        </div>`;
    });
    html += '</div></div>';
  }

  carouselInner.innerHTML = html;

  // Update indicators
  const indicators = document.getElementById('testimonial-indicators');
  if (indicators) {
    const totalSlides = Math.ceil(testimonials.length / chunkSize);
    let indHtml = '';
    for (let i = 0; i < totalSlides; i++) {
      indHtml += `<button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="${i}" ${i === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${i + 1}"></button>`;
    }
    indicators.innerHTML = indHtml;
  }
}

// ---- Team Data ----
const teamMembers = [
  {
    name: 'Anubhav Singh',
    role: 'Founder & CEO',
    bio: 'Visionary leader driving AI innovation, business automation, and digital transformation. Built Aishan.ai to help 500+ businesses scale with intelligent AI agents, websites, and marketing.',
    icon: 'fa-user-tie',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Abhishek Singh',
    role: 'CTO',
    bio: 'CTO leading AI architecture, NLP research, and scalable cloud systems. Oversees model training, voice agent pipelines, and platform reliability.',
    icon: 'fa-laptop-code',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Ram Ratan Singh',
    role: 'Head of Product',
    bio: 'Product leader responsible for roadmap, UX strategy, and cross-functional delivery. Bridges design, engineering, and customers to build impactful AI products.',
    icon: 'fa-lightbulb',
    linkedin: '#',
    twitter: '#'
  }
];

function renderTeam() {
  const container = document.getElementById('team-grid');
  if (!container) return;

  let html = '';
  teamMembers.forEach((member, i) => {
    html += `
      <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${i * 100}">
        <div class="team-card">
          <div class="team-avatar">
            <i class="fas ${member.icon}"></i>
          </div>
          <h5>${member.name}</h5>
          <p class="team-role">${member.role}</p>
          <p class="team-bio">${member.bio}</p>
          <div class="team-socials">
            <a href="${member.linkedin}" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="${member.twitter}" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>`;
  });
  container.innerHTML = html;
}

// ---- Enquiry Form Validation & Submit ----
function initForm() {
  const form = document.getElementById('enquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    const formContent = document.getElementById('form-content');
    const successMsg = document.getElementById('form-success');
    const submitBtn = form.querySelector('.btn-submit');

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    const serviceSelect = document.getElementById('service');

    // Build payload for Web3Forms
    const payload = {
      access_key: typeof AISHAN_CONFIG !== 'undefined' ? AISHAN_CONFIG.web3forms.accessKey : '',
      subject: `New Enquiry: ${serviceSelect.options[serviceSelect.selectedIndex].text}`,
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      company: document.getElementById('company').value || 'N/A',
      service: serviceSelect.options[serviceSelect.selectedIndex].text,
      message: document.getElementById('message').value,
      from_name: 'Aishan.ai Website'
    };

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        if (formContent && successMsg) {
          formContent.style.display = 'none';
          successMsg.classList.add('show');
        }
        setTimeout(() => {
          form.reset();
          form.classList.remove('was-validated');
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Enquiry';
          if (formContent && successMsg) {
            formContent.style.display = 'block';
            successMsg.classList.remove('show');
          }
        }, 5000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    })
    .catch(err => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Enquiry';
      alert('Failed to send. Please try again.');
      console.error('Web3Forms error:', err);
    });
  });
}

// ---- Back to Top Button ----
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---- AOS Init ----
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80
    });
  }
}

// ---- Re-render testimonials on resize ----
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(renderTestimonials, 300);
});

// ---- Initialize Everything ----
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initTyped();
  initCounterObserver();
  renderTestimonials();
  renderTeam();
  initForm();
  initBackToTop();
  initAOS();
  initHeroDynamic();
});

// ============================================
// Hero Right Side — Dynamic Interactions
// ============================================
function initHeroDynamic() {
  initTiltEffect();
  initDataStreams();
  initTerminalFeed();
  initLiveUptime();
  initMetricCounters();
  initHeroCounters();
}

// ---- 3D Tilt on mouse move ----
function initTiltEffect() {
  const visual = document.getElementById('agentVisual');
  if (!visual) return;

  const wrapper = visual.closest('.hero-image-wrapper');

  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    visual.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  });

  wrapper.addEventListener('mouseleave', () => {
    visual.style.transform = 'perspective(800px) rotateY(0) rotateX(0)';
  });
}

// ---- Matrix-like data streams ----
function initDataStreams() {
  const canvas = document.getElementById('dataStreams');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animId;

  function resize() {
    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const chars = '01AGENT>_●◆✓→↑✓';
  const fontSize = 10;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = Array(columns).fill(0);

  function draw() {
    ctx.fillStyle = 'rgba(10, 17, 40, 0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // Alternate between accent colors
      if (Math.random() > 0.5) {
        ctx.fillStyle = 'rgba(0, 212, 255, 0.4)';
      } else {
        ctx.fillStyle = 'rgba(123, 47, 247, 0.3)';
      }
      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.98) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    animId = requestAnimationFrame(draw);
  }

  // Only run when hero is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!animId) draw();
      } else {
        cancelAnimationFrame(animId);
        animId = null;
      }
    });
  }, { threshold: 0.1 });
  observer.observe(canvas.parentElement);
}

// ---- Live terminal feed ----
function initTerminalFeed() {
  const terminal = document.getElementById('terminalOutput');
  if (!terminal) return;

  const commands = [
    { cmd: 'agent.boot("voice")', result: '✓ Listening', type: 'success' },
    { cmd: 'agent.dial(leads)', result: '↑ 47 calls', type: 'warn' },
    { cmd: 'agent.qualify()', result: '✓ 23 hot leads', type: 'success' },
    { cmd: 'agent.book(appt)', result: '✓ 12 booked', type: 'success' },
    { cmd: 'emi.remind(batch)', result: '↑ 98% paid', type: 'warn' },
    { cmd: 'agent.followUp()', result: '✓ Sent 156', type: 'success' },
    { cmd: 'nlp.intent(call)', result: '→ Resolved', type: 'success' },
    { cmd: 'agent.learn(data)', result: '✓ Model +2.1%', type: 'success' },
    { cmd: 'geo.rank(query)', result: '#1 AI Answer', type: 'warn' },
    { cmd: 'agent.status()', result: '✓ All active', type: 'success' },
  ];

  let index = 0;

  function addLine() {
    const item = commands[index % commands.length];
    const line = document.createElement('div');
    line.className = 'term-line';
    line.innerHTML = `<span class="term-prompt">$</span> <span class="term-cmd">${item.cmd}</span> <span class="term-${item.type}">${item.result}</span>`;
    terminal.appendChild(line);

    // Keep max 4 lines visible
    while (terminal.children.length > 4) {
      terminal.removeChild(terminal.firstChild);
    }

    terminal.scrollTop = terminal.scrollHeight;
    index++;
  }

  // Start after 2.5s, then every 2.5s
  setTimeout(() => {
    terminal.innerHTML = '';
    addLine();
    setInterval(addLine, 2500);
  }, 2500);
}

// ---- Live uptime clock ----
function initLiveUptime() {
  const el = document.getElementById('liveUptime');
  if (!el) return;

  let seconds = 0;
  function tick() {
    seconds++;
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    el.textContent = h + ':' + m + ':' + s;
  }
  setInterval(tick, 1000);
}

// ---- Animated metric counters in hero visual ----
function initMetricCounters() {
  const clientsEl = document.getElementById('metricClients');
  const satEl = document.getElementById('metricSatisfaction');
  if (!clientsEl || !satEl) return;

  function animateValue(el, start, end, suffix, duration) {
    const startTime = performance.now();
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const value = Math.floor(start + (end - start) * eased);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // Start counters when hero section is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue(clientsEl, 0, 500, '+', 2000);
        animateValue(satEl, 0, 98, '%', 2000);
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(document.getElementById('hero'));
}

// ---- Animated hero stat counters (left side) ----
function initHeroCounters() {
  const counters = document.querySelectorAll('.hero-counter');
  if (!counters.length) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'));
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 2000;
          const startTime = performance.now();

          function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.floor(target * eased);
            el.textContent = value + suffix;
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const heroSection = document.getElementById('hero');
  if (heroSection) observer.observe(heroSection);
}
