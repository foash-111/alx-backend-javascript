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
  const resolver = () => console.log('Got a response from the API');
  promise.then(resolver);
  return promise;
}
