function handleChange() {
  const checkbox2 = document.getElementById('checkbox-per-dos');
  const textBlock = document.querySelector('.span-text-target');

  if (checkbox2.checked) {
    textBlock.innerText = 'Antal doser';
  } else {
    textBlock.innerText = 'Antal kapslar';
  }
}

const checkbox2 = document.getElementById('checkbox-per-dos');
checkbox2.addEventListener('click', handleChange);
