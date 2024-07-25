export default function uploadPhoto(filename) {
  const promise = new Promise((resolve, reject) => {
    const x = false;
    if (x) resolve('processed successfully');
    else reject(new Error(`${filename} cannot be processed`));
  });
  return promise;
}
