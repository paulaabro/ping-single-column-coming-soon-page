function isEmailValid(email) {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const result = email.match(regex);
  return !!result;
}

function toogleClass(cls, time) {
  form.classList.add(cls);
  setTimeout(() => {
    if (form.classList.contains(cls)) {
    form.classList.remove(cls);
    }
  }, time);
}


function handleForm() {
  const email = input.value;
  if (isEmailValid(email)) {
    if (form.classList.contains('err')) {
      form.classList.remove('err');
    }
    input.value = '';
    toogleClass('success', 3000);
  } else {
    if (form.classList.contains('success')) {
      form.classList.remove('success');
    }
    toogleClass('err', 3000)
  }
}


const form = document.querySelector('.form');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', handleForm);