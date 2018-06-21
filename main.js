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
        if (i === 'destaque') {
          logo.classList.remove('--scale-down')
        }
        if (i === 'modulo') {
          logo.classList.remove('--scale-down')
        }
        if (i === 'prelude') {
          logo.classList.remove('--scale-down')
        }
      }
    }
  };
})();

var slidesIncentivadores = 1;
showIncentivadores(slidesIncentivadores);

function plusIncentivadores(n){
  showIncentivadores(slidesIncentivadores += n);
}

function showIncentivadores(n){
  var i;
  var x = document.getElementsByClassName("conteudo-incentivo-caixa");
  if (n > x.length) {slidesIncentivadores = 1}
  if (n < 1 ) {slidesIncentivadores = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slidesIncentivadores-1].style.display = "flex"
};


var changeDesk;
var elementDesk = document.querySelectorAll(".conteudo-projetos-caixa");

const codProjetosDesk = function(){
  if (window.innerWidth > '768') {
    var i;
    for(i = 0;i < elementDesk.length;i++){
      elementDesk[i].classList.add("sliderDesk")
    }

    var slideProjetosDesk = 1;
    showProjetosDesk(slideProjetosDesk);

    changeDesk = function plusProjetosDesk(n){
      showProjetosDesk(slideProjetosDesk += n);
    }

    function showProjetosDesk(n){
      var i;
      var x = document.getElementsByClassName("sliderDesk");
      if (n > x.length) {slideProjetosDesk = 1}
      if (n < 1 ) {slideProjetosDesk = x.length};
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[slideProjetosDesk-1].style.display = "flex"
    };
  }else if (window.innerWidth <= '768') {
    var i;
    for(i = 0;i < elementDesk.length;i++){
      elementDesk[i].classList.remove("sliderDesk");
      elementDesk[i].style.display = "none"
    }
  }
};


var change;
var element = document.querySelectorAll(".conteudo-projetos-caixa--mobile");

const codProjetosMob = function(){
  if (window.innerWidth <= '768') {
    var i;
    for(i = 0;i < element.length;i++){
      element[i].classList.add("sliderMob")
    }

    var slideProjetos = 1;
    showProjetos(slideProjetos);

    change = function plusProjetos(n){
      showProjetos(slideProjetos += n);
    }

    function showProjetos(n){
      var i;
      var x = document.getElementsByClassName("sliderMob");
      if (n > x.length) {slideProjetos = 1}
      if (n < 1 ) {slideProjetos = x.length};
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[slideProjetos-1].style.display = "flex"
    };
  }else if (window.innerWidth > '768') {
    var i;
    for(i = 0;i < element.length;i++){
      element[i].classList.remove("sliderMob");
      element[i].style.display = "none"
    }
  }
};

codProjetosDesk();

codProjetosMob();

function resize(){
  codProjetosDesk();
  codProjetosMob()
};