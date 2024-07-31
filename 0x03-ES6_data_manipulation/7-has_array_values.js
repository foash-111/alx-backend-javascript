// returns a boolean if all the elements in the array exist within the set.
export default function hasValuesFromArray(set = {}, array = []) {
  for (const i of array) {
    if (!set.has(i)) {
      return false;
    }
  }

  return true;
}
