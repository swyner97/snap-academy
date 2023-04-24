const toggleSwitch = document.querySelector('#toggle');
const body = document.querySelector('body');
const footer = document.querySelector('footer');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    body.style.backgroundColor = 'white';
    footer.style.backgroundColor = 'black';
  } else {
    body.style.backgroundColor = '';
    footer.style.backgroundColor = '';
  }    
});