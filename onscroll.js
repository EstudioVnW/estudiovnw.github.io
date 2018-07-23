(function() {

  smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class,ID,data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
  });

  var section = document.querySelectorAll('section');
  var sections = {};
  var i = 0;
  var logo = document.querySelector('.header__logo');
  var menuItem = document.querySelectorAll('.header__menu-item');
  var menuList = document.querySelector('.header__menu');

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    for (i in sections) {
      if ((sections[i]) - 100 <= scrollPosition) { 
        if (i === 'programar') {
          logo.classList.add('--scale-down')
        }
        if (i === 'informacao') {
          logo.classList.add('--scale-down')
        }
        if (i === 'pumpkinbox') {
          logo.classList.add('--scale-down')
        }
        if (i === 'contribua') {
          logo.classList.add('--scale-down')
        }
        if (i === 'destaque') {
          logo.classList.remove('--scale-down')
        }
        if (i === 'modulo') {
          logo.classList.remove('--scale-down')
        }
        if (i === 'prelude') {
          logo.classList.remove('--scale-down')
        }
        if (i === 'banner') {
          logo.classList.remove('--scale-down')
        }
      }
    }
  };
})();