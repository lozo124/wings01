// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {

  // Smooth scroll for all hash links
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 底部浮动按钮：滚动超过页面 30% 后显示
  var floatingBar = document.querySelector('.mobile-cta');
  if (floatingBar) {
    window.addEventListener('scroll', function() {
      var scrolled = window.scrollY;
      var pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      var scrollPercent = scrolled / pageHeight;

      if (scrollPercent >= 0.3) {
        floatingBar.classList.add('visible');
      } else {
        floatingBar.classList.remove('visible');
      }
    });
  }

});
