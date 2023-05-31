if (/Android|iPhone/i.test(navigator.userAgent)) {
  document.querySelector('body').innerHTML = '<h1 class="mobile">Currently only on Desktop ;)</h1>';
}
const navstrap = document.querySelector('#navstrap');

window.addEventListener('scroll', ()=> {
    if (window.scrollY >= 90) {
      navstrap.classList.add('hide');
      navstrap.classList.add('hidden');
    }else{
        navstrap.classList.remove('hide');
        navstrap.classList.remove('hidden');
    }
  });

  var previousScrollPosition = window.scrollY;

window.addEventListener('scroll', function() {
  var currentScrollPosition = window.scrollY;

  if (currentScrollPosition < previousScrollPosition) {
    navstrap.classList.remove('hide');
        navstrap.classList.remove('hidden');
}

  previousScrollPosition = currentScrollPosition;
});