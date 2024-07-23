export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const newArray = [...array];
  for (const value of newArray) {
    newArray[i] = appendString + value;
    i += 1;
  }
  return newArray;
}
