// helper functions for menu toggle
function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
  }
  function closeMenu() {
    document.getElementById('nav-menu').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
  }
  
  
  // 1) Fetch & inject your header, THEN wire everything up
  fetch('header.html')
    .then(r => r.text())
    .then(html => {
      document.getElementById('site-header').innerHTML = html;
  
      // — now the DOM has #hamburger, #overlay, #nav-menu —
      document.getElementById('hamburger')
        .addEventListener('click', toggleMenu);
      document.getElementById('overlay')
        .addEventListener('click', closeMenu);
  
      // 2) Highlight the “current” nav link
      // inside the fetch('header.html').then(...)
        const current = window.location.pathname.split('/').pop() || 'index.html';
        console.log('CURRENT PAGE:', current);

        document.querySelectorAll('#nav-menu a').forEach(link => {
            const href = link.getAttribute('href');
            //console.log('Comparing:', href, 'vs', current);
            if (href === current) {
                console.log('→ MATCH! Highlighting:', href);
            link.classList.remove('nav_text');
            link.classList.add('nav_text_current');
            }
        });

    });
  
  
  // 3) Fetch & inject your footer (no event wiring needed there)
  fetch('footer.html')
    .then(r => r.text())
    .then(html => {
      document.getElementById('site-footer').innerHTML = html;
    });
  
  
  // 4) Reveal your “sign” after 5 seconds
  setTimeout(() => {
    document.getElementById('sign').style.opacity = 1;
  }, 5000);
  
  
  // 5) IntersectionObserver for your sections
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('show', entry.isIntersecting);
    });
  });
  document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
  