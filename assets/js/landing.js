/* Landing interactions: particle hero, sticky nav, reveal-on-scroll, mobile menu */
(function () {
  "use strict";

  /* ---- sticky nav state ---- */
  var nav = document.querySelector(".nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- mobile menu ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav .links");
  if (toggle && links) {
    toggle.addEventListener("click", function () { links.classList.toggle("open"); });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  /* ---- reveal on scroll ---- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  /* ---- particle network in hero ---- */
  var canvas = document.getElementById("hero-canvas");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var ctx = canvas.getContext("2d");
  var w, h, dpr, points;
  var GOLD = "rgba(199,154,91,";
  var BLUE = "rgba(120,170,235,";

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var count = Math.round(Math.min(120, (w * h) / 11000));
    points = [];
    for (var i = 0; i < count; i++) {
      points.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
        gold: Math.random() < 0.35
      });
    }
  }

  function step() {
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      // links
      for (var j = i + 1; j < points.length; j++) {
        var q = points[j];
        var dx = p.x - q.x, dy = p.y - q.y;
        var d2 = dx * dx + dy * dy;
        if (d2 < 19000) {
          var a = (1 - d2 / 19000) * 0.5;
          ctx.strokeStyle = (p.gold ? GOLD : BLUE) + a.toFixed(3) + ")";
          ctx.lineWidth = 0.6;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
    }
    for (var k = 0; k < points.length; k++) {
      var pt = points[k];
      ctx.fillStyle = (pt.gold ? GOLD : BLUE) + "0.9)";
      ctx.beginPath(); ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2); ctx.fill();
    }
    requestAnimationFrame(step);
  }

  window.addEventListener("resize", resize);
  resize();
  step();
})();
