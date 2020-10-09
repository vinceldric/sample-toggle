const beerMug = document.querySelector('.beer-mug');
const button = document.querySelector('button');

button.addEventListener('click', function () {
  // console.log('Hello Button!');

  beerMug.classList.toggle('change');

});