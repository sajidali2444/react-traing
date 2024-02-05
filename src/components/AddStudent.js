import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const storageKey = 'students';
export default function AddStudent() {
  const navigate = useNavigate();

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
      <h1>Add student page</h1>
      <form>
        <div style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '200px',
              }}
            >
              <label> First Name </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={getFirstName}
              ></input>
              <label> Last Name </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={getLastName}
              ></input>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '200px',
              }}
            >
              <label> Father Name </label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                onChange={getFatherName}
              ></input>
              <label> Mobile </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                onChange={getMobile}
              ></input>
            </div>
          </div>

          <div style={{ marginTop: '10px', marginBottom: '20px' }}>
            <button
              onClick={onSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '10px',
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
