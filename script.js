function isEmailValid(email) {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const result = email.match(regex);
  return !!result;
}

function handleForm() {
  const email = input.value;
  if (isEmailValid(email)) {
    if (form.classList.contains('err')) {
      form.classList.remove('err');
    }
    input.value = '';
    form.classList.add('success');
  } else {
    if (form.classList.contains('success')) {
      form.classList.remove('success');
    }
    form.classList.add('err');
  }
}


const form = document.querySelector('.form');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', handleForm);