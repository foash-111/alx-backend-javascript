import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      let myArray = [];
      for (const value of values) {
        myArray = myArray.concat(
          Object.entries(value)
            .filter(([key]) => key !== 'status') // Ignore entries where the key is 'status'
            .map(([, value]) => value), // Extract values
        );
      }
      const myString = myArray.join(' ');
      console.log(myString);
    })
    .catch('Signup system offline');
}
