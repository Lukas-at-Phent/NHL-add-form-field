const checkbox2 = document.getElementById('checkbox-per-dos');
const textBlock = document.querySelector('.span-text-target');

function handleChange() {
  textBlock.innerText = checkbox2.checked 
                        ? 'Antal doser' 
                        : 'Antal kapslar';
}


checkbox2.addEventListener('click', handleChange);
