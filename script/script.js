const navstrap = document.querySelector('#navstrap');

window.addEventListener('scroll', ()=> {
    if (window.scrollY >= 90) {
      console.log("Użytkownik przescrollował w dół o 90px.");
      navstrap.classList.add('hide');
      navstrap.classList.add('hidden');
      console.log('test');
    }else{
        navstrap.classList.remove('hide');
        navstrap.classList.remove('hidden');
    }
  });

  var previousScrollPosition = window.scrollY;

window.addEventListener('scroll', function() {
  var currentScrollPosition = window.scrollY;

  if (currentScrollPosition < previousScrollPosition) {
    console.log("Użytkownik zaczął przewijać stronę do góry.");
    navstrap.classList.remove('hide');
        navstrap.classList.remove('hidden');
}

  previousScrollPosition = currentScrollPosition;
});

var dropdownToggle = document.querySelector('.dropdown-toggle');
var dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('mouseover', function() {
  dropdownMenu.classList.add('active');
  navstrap.classList.remove('hide');
        navstrap.classList.remove('hidden');
});
dropdownToggle.addEventListener('mouseout', function() {
    dropdownMenu.classList.remove('active');
  });
  dropdownMenu.addEventListener('mouseover', function() {
    dropdownMenu.classList.add('active');
    navstrap.classList.remove('hide');
        navstrap.classList.remove('hidden');
  });
  dropdownMenu.addEventListener('mouseout', function() {
      dropdownMenu.classList.remove('active');
    });