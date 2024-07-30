export default function updateStudentGradeByCity(wholelist = [], city = '', newGrades = []) {
  return wholelist.filter((x) => x.location === city).map((x) => {
    const cur = x;
    for (const i of newGrades) {
      if (i.studentId === cur.id) {
        cur.grade = i.grade;
        return cur;
      }
    }
    cur.grade = 'N/A';
    return cur;
  });
}
