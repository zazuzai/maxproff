let header = document.querySelector('.header');
let navHeader = document.querySelector('.header__nav');
let navToggle = document.querySelector('.header__toggle');


navToggle.addEventListener('click', function () {
  if (navHeader.classList.contains('header__nav--closed')) {
    navHeader.classList.remove('header__nav--closed');
    navHeader.classList.add('header__nav--opened');
  } else {
    navHeader.classList.add('header__nav--closed');
    navHeader.classList.remove('header__nav--opened');
  }
});
