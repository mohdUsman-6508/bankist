'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector('.header');
////////////////////////////////////////////////

///////////////////////////////////////////////
///////////for future reference /////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

////we can select ,create and delete elements using DOM

/////selecting  elements
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// document.querySelector('.header');
// const allSec = document.querySelectorAll('.section');
// console.log(allSec);

// document.getElementById('section--1');
// const allBtn = document.getElementsByTagName('button');
// console.log(allBtn);

// console.log(document.getElementsByClassName('section'));

///// Creating and inserting elements
///////////// .insertAdjacentHTML can be used too(already used in bankist application)

// const message = document.createElement('div'); ///creating div element
// message.classList.add('cookie-message'); ///adding class to div element

// //here we can add html by using 'innerHTML'
// message.innerHTML =
//   'We collect cookies for better experience! <button class="btn btn--close--cookie">Got it</button>';

// // message.textContent = 'We collect cookies for better experience';

// ///by using these prepend and append method we can show message at one place only
// /// if we want to show at both places then we have to copy or clone it

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// ////////// Deleting elements

// document
//   .querySelector('.btn--close--cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     //////another way
//     // message.parentElement.removeChild(message);
//   });

// /////// Styles

// message.style.backgroundColor = '#37373e';
// message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// const Computedheight = (message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px');

// document.documentElement.style.setProperty('--color-primary', 'skyblue');

// //////////// Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// logo.alt = 'beautiful logo';

// ///////////////non standard
// console.log(logo.desinger);
// console.log(logo.getAttribute('designer'));

// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// const link = document.querySelector('.twitter-link');
// console.log(link);

// ///////////////////////////// data attributes
// console.log(logo.dataset.versionNumber);

// /////////// Classes

// logo.classList.add('multiple', 'class');
// logo.classList.remove('a');
// logo.classList.toggle('a');
// logo.classList.contains('a');

// ///////// don't use

// // logo.className = 'usman';

// implementing scrolling using both modern and old way

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  //finding coordinates of section-1
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // console.log('current scroll (X/Y)', scrollX, scrollY);
  // // console.log('current scroll x,y', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'height,width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  /////// Scrolling

  // window.scrollTo(s1coords.left + scrollX, s1coords.top + scrollY); //old way
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //////new way

  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////// page navigation
// old way
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// }); ///////////this method is not efficient

////////// we will use EVENT DELEGATION
//steps:  add event listener to common parent element
//        determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  ///Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

//////////// events --mouseenter

// const h1 = document.querySelector('h1');

// const a = function (e) {
//   alert('Welcome! Hope you are doing well');
//   h1.removeEventListener('mouseenter', a);
// };

// h1.addEventListener('mouseenter', function (e) {
//   alert('mouseenter');
// });

// h1.addEventListener('mouseenter', a);

// setTimeout(() => h1.removeEventListener('mouseenter', a), 3000);

////HTML onclick=" "

////////////// Event propagation
//// bubbling and capturing

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//   },
//   false
// );

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//   },
//   true ////event propagation stops
// );

///////

//// DOM traversing

// going downword

// const h1 = document.querySelector('h1');

// // console.log(h1.querySelectorAll('.highlight')); ///select class
// // console.log(h1.childNodes);
// // console.log(h1.children);

// h1.firstElementChild.style.color = 'blue';
// h1.lastElementChild.style.color = 'orange';

// /////// going upward
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'lightblue';
// h1.closest('h1').style.background = 'black';

// /// going sideways:siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.7)';
// });

/////////// Implementing tabbed components
/// application of event delegation

// tabbed component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

/// old way of selecting the button or tabs which will delay the time of website loading
///  better way is  event delegation

// tabs.forEach(t =>
//   t.addEventListener('click', () => console.log('clicked btn'))
// );

/// event delegation improves web efficiency

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  //// Active tab
  if (!clicked) return;

  // remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');

  ////// activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');

  //// in the end its all about adding and removing css classe
});

/////////fading menu

const nav = document.querySelector('.nav');

const handlehover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handlehover(e, 0.5);
// });
nav.addEventListener('mouseout', handlehover.bind(1));
nav.addEventListener('mouseover', handlehover.bind(0.5));

// nav.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) {
//         el.style.opacity = 1;
//       }
//     });
//     logo.style.opacity = 1;
//   }
// });

/////////// implementing sticky navigation

// const intialCoordinates = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (window.scrollY > intialCoordinates.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

/// efficient way

const headerEl = document.querySelector('.header');
const height = nav.getBoundingClientRect().height;

const sticky = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${height}px`,
});

headerObserver.observe(headerEl);

/// loading of sections

const allSection = document.querySelectorAll('.section');

const sectionLoading = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(sectionLoading, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//////////// lazy loading
////// good for website performance

const lazyImgs = document.querySelectorAll('img[data-src]');

const lazyLoad = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};
const imageObserver = new IntersectionObserver(lazyLoad, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

lazyImgs.forEach(img => imageObserver.observe(img));

//////////////// slider

const slider = function () {
  let currSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');

  const maxSlide = slides.length;
  const sliderBtnLeft = document.querySelector('.slider__btn--left');
  const sliderBtnRight = document.querySelector('.slider__btn--right');

  slides.forEach(
    (slide, i) => (slide.style.transform = `translateX(${100 * i}%)`)
  );

  // slider.style.transform = 'scale(0.3) translateX(-600px)';
  // slider.style.overflow = 'visible';

  const goToSlide = function (currSlide) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${(i - currSlide) * 100}%)`;
    });
  };

  const nextSlide = function () {
    if (currSlide == maxSlide - 1) currSlide = 0;
    else currSlide++;
    goToSlide(currSlide);
    activeDot(currSlide);
  };

  const prevSlide = function () {
    if (currSlide <= 0) {
      currSlide = maxSlide - 1;
    } else currSlide--;

    goToSlide(currSlide);
    activeDot(currSlide);
  };

  sliderBtnRight.addEventListener('click', nextSlide);
  sliderBtnLeft.addEventListener('click', prevSlide);

  //
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key == 'ArrowRight' && nextSlide();
  });

  const dotContainer = document.querySelector('.dots');

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  createDots();

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide;
      // const {slide}=e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  });

  const activeDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');

    console.log('working');
  };

  // activeDot(0);

  const init = function () {
    goToSlide(0);
    // createDots();
    activeDot(0);
  };
};

slider();
