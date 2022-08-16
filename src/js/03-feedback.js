import localStorageApi from './localstorage';
import throttle from 'lodash.throttle'


const contactFormEl = document.querySelector('.feedback-form');
const userData = {};

const fillFormFields = () => {
   const userDataFromLocalStorage = localStorageApi.load('formData');

   if (!userDataFromLocalStorage) {
      return;
   }

   const formElements = contactFormEl.elements;

   for (const key in userDataFromLocalStorage) {
      if (userDataFromLocalStorage.hasOwnProperty(key)) {
         formElements[key].value = userDataFromLocalStorage[key];
      }
   }
};


const onFormELChange = ({target: { name, value}}) => {
   userData[name] = value;

   localStorageApi.save('formData', userData);
}





const onContactFormElSubmit = (event) => {
   event.preventDefault();

   if (!contactFormEl.email.value || !contactFormEl.message.value) {
      alert('ERROR');
      return;
    }



   localStorageApi.remove('formData');
   console.log(userData);
   event.currentTarget.reset();
}



contactFormEl.addEventListener('input', throttle(onFormELChange, 500));
contactFormEl.addEventListener('submit', onContactFormElSubmit);
fillFormFields();