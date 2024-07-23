export default function createIteratorObject(report) {
  const valuesArray = Object.values(report.allEmployees);
  let megeArray = [];
  for (const value of valuesArray) {
    megeArray = megeArray.concat(value);
  }
  return megeArray;
}
