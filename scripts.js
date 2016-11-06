const doc = window.document.documentElement;
const body = window.document.body;
const switcher = document.getElementById('switcher');

doc.className += 'js';

const handleSwitch = event => {
  const checked = event.target.checked;
  body.classList[checked ? 'add' : 'remove']('l-vert');
  body.classList[!checked ? 'add' : 'remove']('l-horz');
};

switcher.addEventListener('change', handleSwitch);