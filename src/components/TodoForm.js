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
  const [users, setUsers] = useState([]);
  const [isApiCall, setIsApiCall] = useState(false);

  useEffect(() => {
    //fetch
    //default request type is GET
    setIsApiCall(true);
    fetch('https://jsonplaceholder.typicode.com/users').then(async (data) => {
      //console.log('data fetched ');
      //console.log(data);
      const users = await data.json();
      setUsers(users);
      setIsApiCall(false);
    });
  }, []);

  return (
    <div
      style={{
        margin: '20px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {isApiCall === false ? (
          <table style={{ width: '500px' }}>
            <thead>
              <th>ID#</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </thead>
            <tbody>
              {users?.map((item) => {
                return (
                  <tr key={item.id}>
                    <td style={{ textAlign: 'center' }}>{item.id}</td>
                    <td style={{ textAlign: 'center' }}>{item.name}</td>
                    <td style={{ textAlign: 'center' }}>{item.email}</td>
                    <td>{item.address.city}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          'Loading data....'
        )}
      </div>
    </div>
  );
}

export default TodoAppForm;
