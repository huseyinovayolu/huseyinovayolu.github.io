// Tiny, progressive-enhancement JS only.
// - Adds a mobile menu toggle without inline handlers.
// - Enhances the mailto form to compose a readable email.
// - Adds accessible collapsible toggle for Microsoft Forms embed.
// - Updates footer year.
// CSP allows 'self' scripts only; no inline JS.

(function () {
  'use strict';

  // Mark that JS is available for CSS hooks
  document.documentElement.classList.remove('no-js');
  document.body.classList.add('js');

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    // initial state for PE
    nav.setAttribute('data-open', 'false');
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.setAttribute('data-open', String(!expanded));
      if (!expanded) {
        const firstLink = nav.querySelector('a');
        if (firstLink) firstLink.focus({ preventScroll: true });
      } else {
        toggle.focus({ preventScroll: true });
      }
    });

    // Close menu after selecting a nav link (mobile)
    nav.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.setAttribute('data-open', 'false');
      }
    });
  }

  // (Microsoft Forms collapsible removed per request)

  // Mailto form enhancement
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      // Let the native mailto submission work if JS fails.
      try {
        e.preventDefault();
        const name = (document.getElementById('name') || {}).value || '';
        const email = (document.getElementById('email') || {}).value || '';
        const message = (document.getElementById('message') || {}).value || '';

        const to = 'elifeeldemir@gmail.com';
        const subject = encodeURIComponent('Consultation Request – Website');
        const body = encodeURIComponent(
          `Hello Ms. Eldemir,

I would like to request a consultation.

Name: ${name}
Email: ${email}

Message:
${message}

Thank you.`
        );

        const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
        window.location.href = mailto;
      } catch {
        // Fallback: allow default behavior
      }
    });
  }
})();