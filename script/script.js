if (/Android|iPhone/i.test(navigator.userAgent)) {
  document.querySelector('body').innerHTML = '<h1 class="mobile">Currently only on Desktop ;)</h1>';
}
const navstrap = document.querySelector('#navstrap');
const getbtn = document.querySelector("#getbutton");
const dropdown_links = document.querySelectorAll('dropdown-menu a');

getbtn.addEventListener("click", () => {
  window.open('https://daftpunk.com', '_blank');
})

window.addEventListener('scroll', () => {
  if (window.scrollY >= 90) {
    navstrap.classList.add('hide');
    navstrap.classList.add('hidden');
  } else {
    navstrap.classList.remove('hide');
    navstrap.classList.remove('hidden');
  }
});

var previousScrollPosition = window.scrollY;

window.addEventListener('scroll', function () {
  var currentScrollPosition = window.scrollY;

  if (currentScrollPosition < previousScrollPosition) {
    navstrap.classList.remove('hide');
    navstrap.classList.remove('hidden');
  }

  previousScrollPosition = currentScrollPosition;
});

var dropdownToggle = document.querySelector('.dropdown-toggle');
var dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('mouseover', function () {
  dropdownMenu.classList.add('active');
  navstrap.classList.remove('hide');
  navstrap.classList.remove('hidden');
});
dropdownToggle.addEventListener('mouseout', function () {
  dropdownMenu.classList.remove('active');
  dropdown_links.forEach((element) => {
    element.classlist.remove('active');
  })
});
dropdownMenu.addEventListener('mouseover', function () {
  dropdownMenu.classList.add('active');
  navstrap.classList.remove('hide');
  navstrap.classList.remove('hidden');
});
dropdownMenu.addEventListener('mouseout', function () {
  dropdownMenu.classList.remove('active');
  dropdown_links.forEach((element) => {
    element.classlist.remove('active');
  })
});

dropdownMenu.addEventListener('scroll', () => {
  dropdown_links.forEach((element) => {
    element.style.opacity = '1';
  })
  console.log('scrolling');
})