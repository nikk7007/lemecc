/* ================================================================
   MAIN.JS — Menu mobile · scroll reveal · contador · header scroll
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // ── Menu hamburguer ───────────────────────────────────────────
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll(".nav__link").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ── Header scroll shadow ──────────────────────────────────────
  const header = document.getElementById("header");
  if (header) {
    const tick = () => header.classList.toggle("scrolled", window.scrollY > 20);
    window.addEventListener("scroll", tick, { passive: true });
    tick();
  }

  // ── Scroll reveal (IntersectionObserver) ─────────────────────
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  // ── Contador animado (stat__num[data-count]) ──────────────────
  const counters = document.querySelectorAll(".stat__num[data-count]");
  if (counters.length) {
    const ease = (t) => 1 - Math.pow(1 - t, 3); // cubic ease-out

    const animateCounter = (el) => {
      const target = parseInt(el.dataset.count, 10);
      const duration = 1400;
      const start = performance.now();

      const frame = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(ease(progress) * target);
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };

    // Trigger when hero stats enter view
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".stat__num[data-count]")
              .forEach(animateCounter);
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    const statsEl = document.querySelector(".hero__stats");
    if (statsEl) statsObserver.observe(statsEl);
  }

  // ── Máscara de telefone ───────────────────────────────────────
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      let d = e.target.value.replace(/\D/g, "").slice(0, 11);
      if (d.length <= 10) {
        d = d.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})$/, (_, a, b, c) =>
          a ? `(${a}${b ? `) ${b}` : ""}${c ? `-${c}` : ""}` : "",
        );
      } else {
        d = d.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
      }
      e.target.value = d;
    });
  }

  // ── Formulário de contato (Formspree via fetch) ───────────────
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("form-success");
  const errorMsg = document.getElementById("form-error");
  const submitBtn = document.getElementById("form-submit");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      successMsg.hidden = true;
      errorMsg.hidden = true;
      submitBtn.disabled = true;
      submitBtn.textContent = "Enviando…";

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          successMsg.hidden = false;
          form.reset();
          successMsg.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
          errorMsg.hidden = false;
        }
      } catch {
        errorMsg.hidden = false;
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar mensagem";
      }
    });
  }
});
