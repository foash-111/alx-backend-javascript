export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error());
    }
  });

  // arrow function
  const final = () => console.log('Got a response from the API');
  promise.finally(final);
  return promise;
}
