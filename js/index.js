// Sticky header show/hide on scroll
(function() {
  var stickyHeader = document.querySelector('.sticky-header');
  if (!stickyHeader) return;

  var logoBar = document.querySelector('.logo-bar');
  var isVisible = false;

  function checkScroll() {
    var logoBarBottom = logoBar ? logoBar.getBoundingClientRect().bottom : 0;

    if (logoBarBottom <= 0 && !isVisible) {
      stickyHeader.style.display = 'block';
      isVisible = true;
    } else if (logoBarBottom > 0 && isVisible) {
      stickyHeader.style.display = 'none';
      isVisible = false;
    }
  }

  // Check on desktop only
  function onResize() {
    if (window.innerWidth >= 1024) {
      window.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
    } else {
      window.removeEventListener('scroll', checkScroll);
      stickyHeader.style.display = 'none';
      isVisible = false;
    }
  }

  window.addEventListener('resize', onResize);
  onResize();
})();
