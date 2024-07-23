export default function iterateThroughObject(reportWithIterator) {
  let newString = '';
  for (const value of reportWithIterator) {
    if (value === reportWithIterator[reportWithIterator.length - 1]) {
      newString += value;
    } else {
      newString += `${value} | `;
    }
  }
  return newString;
}
