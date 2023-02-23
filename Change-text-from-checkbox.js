const checkbox_dos = document.querySelectorAll('#checkbox-per-dos');
const radio_kapslar = document.getElementById('radio-kapslar');
const radio_tabletter = document.getElementById('radio-tabletter');
const radio_pulver = document.getElementById('radio-pulver');
const radio_flytande = document.getElementById('radio-flytande');
//const radio_fodertillskott = document.getElementById('radio-fodertillskott');
//const radio_packning = document.getElementById('radio-packning');
const textBlocks = document.querySelectorAll('.span-text-target');

function textChange() {
  let checkedDos = Array.from(checkbox_dos).find((checkbox) => checkbox.checked) !== undefined;
  if (checkedDos) {
    textBlocks.forEach((textBlock) => {
      textBlock.innerText = 'Antal doser';
    });
  } else {
    textBlocks.forEach((textBlock) => {
      textBlock.innerText = radio_kapslar.checked
        ? 'Antal kapslar'
        : radio_tabletter.checked
        ? 'Antal tabletter'
        : radio_pulver.checked
        ? 'Fyllvikt'
        : radio_flytande.checked
        ? 'Fyllvolym'
        : 'Fyllvikt/fyllvolym';
    });
  }
}

radio_kapslar.addEventListener('click', textChange);
radio_tabletter.addEventListener('click', textChange);
radio_pulver.addEventListener('click', textChange);
radio_flytande.addEventListener('click', textChange);
checkbox_dos.forEach((checkbox) => {
  checkbox.addEventListener('click', textChange);
});
