/* eslint-disable no-unused-vars */

import nav from './nav';

const counter = (() => {
  let count = 0;
  const figure = document.querySelector('#figure');
  const buttons = document.querySelectorAll('.btn');
  const main = document.querySelector('.main-content');
  main.classList = 'text-center aligh-items-center mt-4 pt-4';
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const styles = e.currentTarget.classList;
      if (styles.contains('decrease')) {
        count -= 1;
      } else if (styles.contains('increase')) {
        count += 1;
      } else {
        count = 0;
      }
      figure.textContent = count;
      if (count > 0) {
        figure.className = 'text-success';
      }
      if (count < 0) {
        figure.className = 'text-danger';
      }
      if (count === 0) {
        figure.className = 'text-dark';
      }
    });
  });
})();