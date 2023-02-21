
function handleChange() {
  const checkbox2 = document.getElementById('checkbox-per-dos');
  const textBlock = document.querySelector('.checkbox-target');

  if (checkbox2.checked) {
    textBlock.innerText = 'Antal doser';
  } else {
    textBlock.innerText = 'Antal kapslar';
  }
}
