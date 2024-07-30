export default function getListStudentIds(value) {
  if (Array.isArray(value)) {
    const newArray = value.map((x) => x.id);
    return newArray;
  }
  return [];
}
