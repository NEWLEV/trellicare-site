const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#demo-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.querySelector('.form-status');
  status.textContent = 'Thanks — your request is ready for the Trellicare team.';
  status.style.color = '#1c6867';
  event.currentTarget.querySelector('button').textContent = 'Request received ✓';
});
