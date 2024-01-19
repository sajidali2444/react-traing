//JSX syntax
//JSX return value
// React Fragment <></>
// naming conventions of variables/ functions
// React Expression {}
// React style apply {}

import { useEffect, useState } from 'react';
const studentList = [];

for (let i = 1; i <= 5; i++) {
  let fail = false;
  if (i % 2 === 0) {
    fail = true;
  }
  studentList.push({ id: i, name: 'Student  ' + i, result: fail });
}
//component functon always start form Upercase.
function TodoAppForm() {
  const [students, setStudents] = useState(studentList);
  const [studentId, setStudentId] = useState(0);
  const [usestate1, setUsestate1] = useState(0);
  const [usestate2, setUsestate2] = useState(0);

  function updateStudent(student) {
    if (student.id === studentId) {
      if (student.result === true) {
        student.result = false;
        return student;
      } else {
        student.result = true;
        return student;
      }
    }
    return student;
    //break fuction
  }

  const updateStudentResultInUseEffectg = () => {
    //if (studentId !== 0) {
    const tmpStudents = [...students];
    const matchingStudent = tmpStudents.find((item) => item.id === studentId);
    const matchingStudentIndex = tmpStudents.findIndex(
      (item) => item.id === studentId
    );
    matchingStudent.result = !matchingStudent.result;

    tmpStudents[matchingStudentIndex] = matchingStudent;
    setStudents(tmpStudents);
    //}
  };

  const updateStudentResult = (studentId) => {
    setStudentId(studentId);
    setUsestate1(studentId);
    setUsestate2(studentId);
  };

  // useEffect will execute on following steps.
  // on page load or on render
  // will execute if any depnedncy change
  useEffect(() => {
    console.log('I am useEffect I will run on page load or re-reder');
  }, []);

  // true / false
  // true = 1
  // false = 0

  useEffect(() => {
    //if (studentId) {
    updateStudentResultInUseEffectg();
    //}
  }, [studentId]);

  //use effect used for side effects
  useEffect(() => {
    //if (usestate1) {
    console.log('use state 1');
    //}
    //if (usestate2) {
    console.log('use state 2');
    // }
    console.log('I will be runing on render');
  }, [usestate1, usestate2]);

  return (
    <div
      style={{
        margin: '20px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <table style={{ width: '500px' }}>
          <thead>
            <th>Role#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </thead>
          <tbody>
            {students?.map((item) => {
              return (
                <tr key={item.id}>
                  <td style={{ textAlign: 'center' }}>{item.id}</td>
                  <td style={{ textAlign: 'center' }}>{item.name}</td>
                  <td style={{ textAlign: 'center' }}>
                    {item.result ? 'Pass' : 'Fail'}
                  </td>
                  <td>
                    <button onClick={() => updateStudentResult(item.id)}>
                      mark pass {usestate1} = {usestate2}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoAppForm;
