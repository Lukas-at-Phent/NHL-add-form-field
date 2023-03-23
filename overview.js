//Get all text-fields, checkboxes and radio buttons
const allInputs = [...document.querySelectorAll('.form-input-shadow, input[type="checkbox"], input[type="radio"]')];
const InputAddButton = [...document.querySelectorAll('.new-field-button.w-inline-block')];

function addInput() {
  const newInputs = [...document.querySelectorAll('#new-input-recept')];
  const updatedInputs = [...allInputs, ...newInputs];
  allInputs.length = 0; // Clear the existing allInputs array
  allInputs.push(...updatedInputs); // Push the updated inputs into allInputs
  updateOverview;
}



function updateOverview() {
    const allDivs = document.querySelectorAll('#infoGeneral, #infoFragor, #infoProdukt, #infoRecept, #infoPackning');
    allDivs.forEach(element => {
        element.innerHTML = '';
    });

    allInputs.forEach(element => {
        //Checks if the checkbox or radio button is checked
        const textCond = (element.type === 'text' || element.type === 'textarea' 
                      ||  element.type === 'email' ||  element.type === 'tel');

        if((element.type === 'checkbox' || element.type === 'radio') && element.checked) {
            const input = 'checkboxOrRadio';
            const place = element.getAttribute('place');
            appendOverview(element, place, input);

        } else if (textCond && element.value.trim() !== '') {
            const input = 'text';
            const place = element.getAttribute('place');
            appendOverview(element, place, input);
        }
    });
}

function appendOverview (element, place, input) {
    const overviewDiv = document.getElementById(place);
     if (input === 'checkboxOrRadio') {
        const label = element.getAttribute('data-heading')
                      ? element.getAttribute('data-heading')
                      : element.getAttribute('data-name');
        console.log('Radio or checkbox' + label);
        const inputText = document.createElement('p');
        inputText.classList.add('text-size-regular');
        inputText.innerHTML = `<span class="text-span-bold">${label}:</span> ${element.value === 'on'
                                                                               ? element.name
                                                                               : element.value}`;
        overviewDiv.appendChild(inputText);

    } else if (input === 'text') {
        const label = place === 'infoRecept'
                      ? element.placeholder
                      : element.id
                      ? document.querySelector(`[for="${element.id}"]`).textContent
                      : document.querySelector(`[for="${element.name}"]`).textContent;
                    
        const inputText = document.createElement('p');
        inputText.classList.add('text-size-regular');
        inputText.innerHTML = `<span class="text-span-bold">${label}:</span> ${element.value}`;
        overviewDiv.appendChild(inputText);
    }
}
InputAddButton.forEach(element => {
  element.addEventListener('click', addInput);
});

allInputs.forEach(element => {
    element.addEventListener('change', updateOverview);
});
