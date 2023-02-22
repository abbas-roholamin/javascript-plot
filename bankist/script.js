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

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//smooth scrolling

const learnMoreButton = document.querySelector('.btn--scroll-to');
const sectionOne = document.querySelector('#section--1');

learnMoreButton.addEventListener('click', function () {
  // const sectionOneCoordination = sectionOne.getBoundingClientRect();
  // window.scrollTo(0, sectionOneCoordination.top + window.scrollY);
  // window.scrollTo({
  //   left: sectionOneCoordination.left + window.scrollX,
  //   top: sectionOneCoordination.top + window.scrollY,
  //   behavior: 'smooth',
  // });
  sectionOne.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Building  Tabbed Component

const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  const tab = clicked.dataset.tab;

  //Guard clause
  if (!clicked) return;

  // Remove ative class
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  // Add ative class
  clicked.classList.add('operations__tab--active');
  tabsContent.forEach(function (content) {
    if (content.classList.contains(`operations__content--${tab}`)) {
      content.classList.add('operations__content--active');
    }
  });
});

