import throttle from 'lodash.throttle';

const FEEDBACK_FORM_STATE = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
const formData = {};

setSavedValuesToElements();

feedbackForm.addEventListener('input', throttle(onInputElementsForm, 500));
feedbackForm.addEventListener('submit', onSubmitForm);

function onInputElementsForm(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  console.log(getSavedFormValues());
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
}

function getSavedFormValues() {
  const formObjectValues = localStorage.getItem(FEEDBACK_FORM_STATE);
  if (formObjectValues) {
    return JSON.parse(formObjectValues);
  }
}

function setSavedValuesToElements() {
  const data = getSavedFormValues();
  data &&
    Object.entries(data).forEach(([name, value]) => {
      feedbackForm.elements[name].value = value;
    });
}
