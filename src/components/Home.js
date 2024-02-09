import { useEffect, useState } from 'react';

export default function Home() {
  /*
http = protocol
www = subdomain
google.com = domain(domain name) => bussiness
.com type of domain
com = commerical

https://www.facebook.com
https://mobile.facebook.com
https://www.punjabcollege.edu.pk
https://fsd.punjbacollege.edu.pk
https://multan.punjbacollege.edu.pk
https://www.facebook.com/users 

root => /
https://www.google.com
https://www.google.com/search?q=fsd
/search => 
page path or page name or route name
resource name
/pathName=> paramters or query string
pass data page to another page
parameter
/pathName/anything called parameter value
/pathName/11/2233/444/555/666
query string (key value){key:value}
{
  firstName:'sajid',
  lastName:'ali'
}
/pathName?name=sajid&age=30&mobile=23423&city=fsd&location=aligarde


https://www.googel.com/q?query=asdfasdfasdf




  const students = Array.from({ length: 10 }).map((item, index) => ({
    id: index,
    firstName: `Student ${index}`,
    lastName: `Student ${index}`,
    rollNumber: index + index,
  }));
  */
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const studentList = localStorage.getItem('students');
    if (studentList !== null) {
      const studentData = JSON.parse(studentList);
      //setStudents((prev) => [...prev, ...studentData]);
      setStudents(studentData);
    }
  }, []);

  const removeStudent = (id /*parameter name */) => {
    const reaminingStudents = students.map((item) =>
      item.id !== id ? item : null
    );
    debugger;
    setStudents(reaminingStudents);
    /*
    const remainingStudents = [];
    for (let i = 0; i < students.length; i++) {
      //current item
      const student = students[i];
      if (student.id !== id) {
        remainingStudents.push(student);
      }
    }
    setStudents(remainingStudents);
    */
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
            <th>Mobile#</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, index) => (
            <tr>
              <td>{item.id}</td>
              <td>{`${item.firstName} ${item.lastName}`}</td>
              <td>{item.rollNumber}</td>
              <td>{item.mobile}</td>
              <td>
                <a href={`/add/${item.id}`}>Edit</a>
                <button onClick={() => removeStudent(item.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
