import throttle from 'lodash.throttle';

const FEEDBACK_FORM_STATE = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');

setSavedValuesToElements();

feedbackForm.addEventListener('input', throttle(onInputElementsForm, 500));
feedbackForm.addEventListener('submit', onSubmitForm);

function onInputElementsForm(e) {
  const formData = new FormData(e.currentTarget);
  const formDataObject = Object.fromEntries(formData.entries());

  if (formDataObject) {
    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formDataObject));
  }
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
  if (data) {
    feedbackForm.querySelector('[name="email"]').value = data.email;
    feedbackForm.querySelector('[name="message"]').value = data.message;
  }
}
