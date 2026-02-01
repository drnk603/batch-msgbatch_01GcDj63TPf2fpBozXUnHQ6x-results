(function () {
  var header = document.querySelector('.dr-header');
  if (!header) return;

  var toggle = header.querySelector('.dr-header-menu-toggle');
  var nav = header.querySelector('.dr-nav');
  if (!toggle || !nav) return;

  function setNavState(open) {
    header.classList.toggle('dr-header-nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function () {
    var isOpen = header.classList.contains('dr-header-nav-open');
    setNavState(!isOpen);
  });
})();
