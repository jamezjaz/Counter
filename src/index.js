const counter = (() => {
  let count = 0;
  const figure = document.querySelector('#figure');
  const buttons = document.querySelectorAll('.btn');   
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const styles = e.currentTarget.classList;
      if (styles.contains('decrease')) {
        count--;
      } else if (styles.contains('increase')) {
        count++;
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