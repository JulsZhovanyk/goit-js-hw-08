const formRef = document.querySelector('.feedback-form');
const throttle = require('lodash.throttle');

formRef.addEventListener('input', throttle(onTextareaInput, 500));
formRef.addEventListener('submit', onFormSubmit);

addInTextarea();

const formData = {};

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (
    e.currentTarget.elements.email.value === '' ||
    e.currentTarget.elements.message.value === ''
  ) {
    alert('Мають бути заповнені всі поля!');
    return;
  }
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}

function addInTextarea() {
  const savedData = localStorage.getItem('feedback-form-state');
  try {
    const dataArr = JSON.parse(savedData);
    if (dataArr.email) {
      formRef.elements.email.value = dataArr.email;
    }

    if (dataArr.message) {
      formRef.elements.message.value = dataArr.message;
    }
  } catch (error) {
    error.name;
    error.message;
  }
}
