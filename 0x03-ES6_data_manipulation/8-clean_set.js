export default function cleanSet(set = {}, string = '') {
  const mylist = [];

  for (const i of set) {
    if (i.includes(string) && string !== '') {
      mylist.push(i.replaceAll(string, ''));
    }
  }

  return mylist.join('-');
}
