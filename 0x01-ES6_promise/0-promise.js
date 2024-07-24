export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    const something = true;
    if (something) {
      resolve('success');
    } else {
      reject(new Error('error'));
    }
  });
  return promise;
}
