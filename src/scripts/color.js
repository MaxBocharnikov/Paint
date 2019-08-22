const colors = document.querySelectorAll('.paint__color-item');

export let drawColor = '#000';

colors.forEach((color) => {
   color.addEventListener('click', (event) => {
       drawColor = event.target.attributes['data-color'].value;
   });
});