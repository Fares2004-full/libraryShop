// kalimat-shared.js — Mobile drawer logic
(function () {
  const toggle  = document.querySelector('.tnav-toggle');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const drawer  = document.querySelector('.mobile-drawer');
  const close   = document.querySelector('.drawer-close');

  function openDrawer()  { drawer?.classList.add('open');  overlay?.classList.add('open');  document.body.style.overflow = 'hidden'; }
  function closeDrawer() { drawer?.classList.remove('open'); overlay?.classList.remove('open'); document.body.style.overflow = ''; }

  toggle?.addEventListener('click', openDrawer);
  close?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);
})();
