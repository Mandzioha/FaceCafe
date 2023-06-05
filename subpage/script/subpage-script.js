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

const screenHeight = window.innerHeight;
const toTopBtn = document.querySelector('#ToTopBtn');
window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= screenHeight) {
    toTopBtn.classList.remove('totophide');
  } else {
    toTopBtn.classList.add('totophide');
  }
}); 