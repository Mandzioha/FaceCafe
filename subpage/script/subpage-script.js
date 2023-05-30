if (/Android|iPhone/i.test(navigator.userAgent)) {
  document.querySelector('body').innerHTML = '<h1 class="mobile">Currently only on Desktop ;)</h1>';
}
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