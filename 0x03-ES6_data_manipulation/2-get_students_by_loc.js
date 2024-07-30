export default function getStudentsByLocation(list = [], city = '') {
  if (Array.isArray(list)) {
    return list.filter((x) => x.location === city);
  }
  return [];
}
