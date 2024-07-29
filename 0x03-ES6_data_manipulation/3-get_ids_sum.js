
import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum (wholeList = []) {
  if (Array.isArray(wholeList)) {
    const idList = getListStudentIds(wholeList);
    return idList.reduce((accumulator, current) => {
      return accumulator + current;
    }
    , 0);
  }

  return [];
}
