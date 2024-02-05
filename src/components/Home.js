import { useEffect, useState } from 'react';

export default function Home() {
  /*
  const students = Array.from({ length: 10 }).map((item, index) => ({
    id: index,
    firstName: `Student ${index}`,
    lastName: `Student ${index}`,
    rollNumber: index + index,
  }));
  */
  const [students, setStudents] = useState([]);

  useEffect(() => {
    debugger;
    const studentList = localStorage.getItem('students');
    if (studentList !== null) {
      const studentData = JSON.parse(studentList);
      //setStudents((prev) => [...prev, ...studentData]);
      setStudents(studentData);
    }
  }, []);

  const removeStudent = (id) => {
    const remainingStudents = [];
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      if (student.id === id) {
        continue;
      } else {
        remainingStudents.push(student);
      }
    }
    //students.push(remainingStudents);
    setStudents(remainingStudents);
  };

  return (
    <>
      <h1>Students</h1>
      <table border={'1'} style={{ width: '800px' }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Full name</th>
            <th>Roll Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, index) => (
            <tr>
              <td>{item.id}</td>
              <td>{`${item.firstName} ${item.lastName}`}</td>
              <td>{item.rollNumber}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => removeStudent(item.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
