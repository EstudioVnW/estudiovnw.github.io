var menu = document.getElementById('menu')

const hiddenMenu = function(){
  if(window.innerWidth <= '768'){
    menu.style.display = 'none'
  }else if(window.innerWidth > '768'){
    menu.style.display = 'flex'
  }
}

hiddenMenu();

function showMenu(){
  if( menu.style.display === 'none'){
    menu.style.display = 'flex';
  }else{
    menu.style.display = 'none';
  }
};