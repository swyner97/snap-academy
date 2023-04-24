const toggleSwitch = document.querySelector('#toggle');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const hero = document.querySelector('.hero');
const logo = document.querySelector('#logo');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    body.style.backgroundColor = 'white';
    footer.style.backgroundColor = 'black';
    hero.classList.remove('hero1');
    hero.classList.add('hero2');
    logo.src="./assets/images/logo2.png"

  } else {
    body.style.backgroundColor = '';
    footer.style.backgroundColor = '';
    hero.classList.remove('hero2');
    hero.classList.add('hero1');
    logo.src="./assets/images/logo1.png"

  }    
});