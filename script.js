// set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll for internal nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if (target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      // collapse navbar on small screens if open
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navCollapse = document.querySelector('.navbar-collapse');
      if (window.getComputedStyle(navbarToggler).display !== 'none' && navCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navCollapse).toggle();
      }
    }
  });
});

// simple contact form handler (demo - doesn't send mail)
const form = document.getElementById('contactForm');
const alertBox = document.getElementById('contactAlert');

form.addEventListener('submit', function(e){
  e.preventDefault();
  // fake submit feedback
  alertBox.style.display = 'block';
  alertBox.className = 'alert alert-success';
  alertBox.textContent = 'Thanks! Your message was received (demo).';
  form.reset();
  setTimeout(()=> alertBox.style.display = 'none', 4000);
});
