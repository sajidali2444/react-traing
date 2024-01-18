//JSX syntax
//JSX return value
// React Fragment <></>
// naming conventions of variables/ functions
// React Expression {}
// React style apply {}

import { useState } from 'react';
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

  const markPass = (studentId) => {
    setStudentId(studentId);
    const updatedStudents = students.map(updateStudent);
    setStudents(updatedStudents);

    // const student = students.find((item) => item.id === studentId);
    // student.result = true;
    // const updatedStudents = [...students, student];
    // setStudents(updatedStudents);
    // for (let i = 0; i < students.length; i++) {
    //   const student = students[i];
    //   if (student.id === studentId) {
    //     student.result = true;
    //     setStudents(students);
    //     break;
    //   }
    // }
    // debugger;
    //setStudents(studentList1);
  };

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
                    <button onClick={() => markPass(item.id)}>mark pass</button>
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
