const form = document.querySelector('Form-block-logic');
const addButton = document.querySelectorAll('.new-field-button');
const outerWrapper = document.querySelectorAll('.new-form-field-wrapper');
const inputClasses = ['form-input-shadow', 'w-input'];
const placeholders = ['Substans', 'Råvara', 'Mängd', '%DRI'];

const createInputElement = (type, maxlength, placeholder) => {
  const input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('maxlength', maxlength);
  input.setAttribute('recept', 'true');
  input.setAttribute('place', 'infoRecept');
  input.setAttribute('data-name', placeholder + '-' + ingredientNumber);
  input.id = 'new-input-recept';
  input.placeholder = placeholder;
  input.classList.add(...inputClasses);
  return input;
};

let ingredientNumber = 2; // initialize the variable to 2

addButton.forEach(button => {
  button.addEventListener('click', function() {
    const row = document.createElement('div');
    row.classList.add('ingredient-row');

    const inputs = [
      createInputElement('text', '256', placeholders[0]),
      createInputElement('text', '256', placeholders[1]),
      createInputElement('text', '256', placeholders[2]),
      createInputElement('text', '256', placeholders[3]),
    ];

    const inputWrappers = inputs.map((input) => {
      const inputWrapper = document.createElement('div');
      inputWrapper.classList.add('form-field-wrapper');
      inputWrapper.appendChild(input);
      return inputWrapper;
    });

    inputWrappers.forEach((inputWrapper) => {
      row.appendChild(inputWrapper);
    });

    const ingrediensTextBlock = document.createElement('div');
    ingrediensTextBlock.classList.add('ingrediens');
    ingrediensTextBlock.innerText = 'Ingrediens ' + ingredientNumber; // update the text content

    const TextBlockWrapper = document.createElement('div');
    TextBlockWrapper.classList.add('ingredients-wrapper');

    TextBlockWrapper.appendChild(ingrediensTextBlock)
    row.appendChild(TextBlockWrapper);

    outerWrapper.forEach((wrapper) => {
      const clonedRow = row.cloneNode(true);
      wrapper.appendChild(clonedRow);
    });

    ingredientNumber++; // increment the variable
  });
});
