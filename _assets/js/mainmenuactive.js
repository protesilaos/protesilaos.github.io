function setMenuItemActive() {
  menuItem = document.getElementById('header-main-menu').getElementsByTagName('a');
  for(i = 0; i < menuItem.length; i++) {
    if(document.location.href.indexOf(menuItem[i].href)>=0) {
      menuItem[i].className='active';
    }
  }
}

window.onload = setMenuItemActive;
