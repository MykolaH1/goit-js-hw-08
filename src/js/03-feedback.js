import localStorageApi from './localstorage';
import throttle from 'lodash.throttle'


const contactFormEl = document.querySelector('.feedback-form');
const userData = {};

const fillFormFields = () => {
   const userDataFromLocalStorage = localStorageApi.load('formData');

   if (userDataFromLocalStorage === undefined) {
      return;
   }

   const formElements = contactFormEl.elements;

   for (const key in userDataFromLocalStorage) {
      if (userDataFromLocalStorage.hasOwnProperty(key)) {
         formElements[key].value = userDataFromLocalStorage[key];
      }
   }
};


const onFormELChange = event => {
   const target = event.target;
   const formElValue = target.value;
   const formElName = target.name;

   userData[formElName] = formElValue;

   localStorageApi.save('formData', userData);
}


const onContactFormElSubmit = event => {
   event.preventDefault();

   localStorageApi.remove('formData');
   console.log(userData);
   event.currentTarget.reset();
}



contactFormEl.addEventListener('input', throttle(onFormELChange, 500));
contactFormEl.addEventListener('submit', onContactFormElSubmit);
fillFormFields();