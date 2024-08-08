import swal from 'sweetalert';

const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};

const fillFormFields = () => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  for (let key in formData) {
    if (formDataFromLS.hasOwnProperty(key)) {
      feedbackFormEl.elements[key].value = formData[key];
    }
  }
};

fillFormFields();

const onFormSubmit = event => {
  event.preventDefault();
  if (
    event.target.elements.message.value === '' ||
    event.target.elements.email.value === ''
  ) {
    return swal('Fill please all fields');
  }
  console.log(formData);
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
};
const onFormInput = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
feedbackFormEl.addEventListener('input', onFormInput);
feedbackFormEl.addEventListener('submit', onFormSubmit);
