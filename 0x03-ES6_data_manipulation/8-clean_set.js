export default function cleanSet(set = {}, string = '') {
  const mylist = [];

  for (const i of set) {
    if (i.startsWith(string) && string !== '') {
      mylist.push(i.slice(string.length));
    }
  }

  return mylist.join('-');
}
