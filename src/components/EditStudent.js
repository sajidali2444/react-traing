import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const storageKey = 'students';
export default function EditStudent() {
  const navigate = useNavigate();
  const param = useParams();
  console.log('params => ', param);
  // const queryParameters = new URLSearchParams(window.location.search);
  // const q = queryParameters.get('q');
  // const key = queryParameters.get('key');
  // console.log('q value => ', q);
  // console.log('key value => ', key);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [mobile, setMobile] = useState('');
  const getFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const getLastName = (event) => {
    setLastName(event.target.value);
  };
  const getFatherName = (event) => {
    setFatherName(event.target.value);
  };
  const getMobile = (event) => {
    setMobile(event.target.value);
  };

  const onSubmit = () => {
    //const student = { firstName, lastName, fatherName, mobile };
    const student = {
      firstName: firstName,
      lastName: lastName,
      fatherName: fatherName,
      mobile: mobile,
    };

    const oldStudent = localStorage.getItem(storageKey);
    if (oldStudent !== null) {
      const oldData = JSON.parse(oldStudent);
      student.rollNumber = oldData.length + 1;
      student.id = oldData.length + 1;
      oldData.push(student);
      const newData = JSON.stringify(oldData);
      localStorage.setItem(storageKey, newData);
    } else {
      student.rollNumber = 1;
      student.id = 1;
      const studentData = JSON.stringify([student]);
      localStorage.setItem(storageKey, studentData);
    }

    navigate('/');
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Edit student page</h1>
    </div>
  );
}
