function lang(){
  if((navigator.language) === 'pt-BR'){
    language = 'pt-BR'
  }else{
    language = 'en'        
  }
  changeLanguage();
}

function changeLanguage(){
  var home__titleEn = document.getElementById('home__title-en');
  var riMobEn = document.getElementById('4riMob-en');
  var contactMobEn = document.getElementById('contactMob-en');
  var langMobEn = document.getElementById('langMob-en');
  var riEn = document.getElementById('4ri-en');
  var contactEn = document.getElementById('contact-en');
  var langEn = document.getElementById('lang-en');
  var novoJogo__titleEn = document.getElementById('novoJogo__title-en');
  var novoJogo__paragEn = document.getElementById('novoJogo__parag-en');
  var profissionais__textEn = document.getElementById('profissionais__text-en');
  var contProfissionais__textEn = document.getElementById('contProfissionais__text-en');
  var diversiade__titleEn = document.getElementById('diversiade__title-en');
  var trabalhopragEn = document.getElementById('trabalhoprag-en');
  var trabalhoprag2En = document.getElementById('trabalhoprag2-en');
  var diversiade__titleMobEn = document.getElementById('diversiade__titleMob-en');

  var home__titlePt = document.getElementById('home__title-pt');
  var riMobPt = document.getElementById('4riMob-pt');
  var contactMobPt = document.getElementById('contactMob-pt');
  var langMobPt = document.getElementById('langMob-pt');
  var riPt = document.getElementById('4ri-pt');
  var contactPt = document.getElementById('contact-pt');
  var langPt = document.getElementById('lang-pt');
  var novoJogo__titlePt = document.getElementById('novoJogo__title-pt');
  var novoJogo__paragPt = document.getElementById('novoJogo__parag-pt');
  var profissionais__textPt = document.getElementById('profissionais__text-pt');
  var contProfissionais__textPt = document.getElementById('contProfissionais__text-pt');
  var diversiade__titlePt = document.getElementById('diversiade__title-pt');
  var trabalhopragPt = document.getElementById('trabalhoprag-pt');
  var trabalhoprag2Pt = document.getElementById('trabalhoprag2-pt');
  var diversiade__titleMobPt = document.getElementById('diversiade__titleMob-pt');

  if( language === 'pt-BR'){
    home__titleEn.style.display = 'none',
    home__titlePt.style.display = 'block',
    riMobEn.style.display = 'none',
    riMobPt.style.display = 'block',
    contactMobEn.style.display = 'none',
    contactMobPt.style.display = 'block',
    langMobEn.style.display = 'none',
    langMobPt.style.display = 'block',
    riEn.style.display = 'none',
    riPt.style.display = 'block',
    contactEn.style.display = 'none',
    contactPt.style.display = 'block',
    langEn.style.display = 'none',
    langPt.style.display = 'block',
    novoJogo__titleEn.style.display = 'none',
    novoJogo__titlePt.style.display = 'block',
    novoJogo__paragEn.style.display = 'none',
    novoJogo__paragPt.style.display = 'block',
    profissionais__textEn.style.display = 'none',
    profissionais__textPt.style.display = 'block',
    contProfissionais__textEn.style.display = 'none',
    contProfissionais__textPt.style.display = 'block',
    diversiade__titleEn.style.display = 'none',
    diversiade__titlePt.style.display = 'block',
    trabalhopragEn.style.display = 'none',
    trabalhopragPt.style.display = 'block',
    trabalhoprag2En.style.display = 'none',
    trabalhoprag2Pt.style.display = 'block',
    diversiade__titleMobEn.style.display = 'none',
    diversiade__titleMobPt.style.display = 'block'
  }else{
    home__titleEn.style.display = 'block',
    home__titlePt.style.display = 'none',
    riMobEn.style.display = 'block',
    riMobPt.style.display = 'none',
    contactMobEn.style.display = 'block',
    contactMobPt.style.display = 'none',
    langMobEn.style.display = 'block',
    langMobPt.style.display = 'none',
    riEn.style.display = 'block',
    riPt.style.display = 'none',
    contactEn.style.display = 'block',
    contactPt.style.display = 'none',
    langEn.style.display = 'block',
    langPt.style.display = 'none',
    novoJogo__titleEn.style.display = 'block',
    novoJogo__titlePt.style.display = 'none',
    novoJogo__paragEn.style.display = 'block',
    novoJogo__paragPt.style.display = 'none',
    profissionais__textEn.style.display = 'block',
    profissionais__textPt.style.display = 'none',
    contProfissionais__textEn.style.display = 'block',
    contProfissionais__textPt.style.display = 'none'
    diversiade__titleEn.style.display = 'block',
    diversiade__titlePt.style.display = 'none',
    trabalhopragEn.style.display = 'block',
    trabalhopragPt.style.display = 'none',
    trabalhoprag2En.style.display = 'block',
    trabalhoprag2Pt.style.display = 'none',
    diversiade__titleMobEn.style.display = 'block',
    diversiade__titleMobPt.style.display = 'none'
  }
}

function changeLanguageClick(){
  if(language === 'pt-BR'){
    language = 'en'
  }else{
    language = 'pt-BR'        
  }
  changeLanguage();
  closeMenu()
}