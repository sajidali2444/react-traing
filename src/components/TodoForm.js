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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [dob, setDOB] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const getFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const getLastName = (event) => {
    setLastName(event.target.value);
  };
  const getFatherName = (event) => {
    setFatherName(event.target.value);
  };
  const getDOB = (event) => {
    setDOB(event.target.value);
  };
  const getAdmissionDate = (event) => {
    setAdmissionDate(event.target.value);
  };
  const getCotactNumber = (event) => {
    setContactNumber(event.target.value);
  };

  const submit = () => {
    /*
    if (firstName === '') {
      alert('first name is empty');
      alert('first name is empty');
      alert('first name is empty');
      alert('first name is empty');
    }
    alert('first name is not empty');
*/
    /*

    if (firstName === '') {
      alert('Student First Name is required');
    } else if (lastName === '') {
      alert('Student Last Name is required');
    } else if (fatherName === '') {
      alert('Student father name is required');
    } else {
      console.log({
        firstName,
        lastName,
        fatherName,
        contactNumber,
        admissionDate,
        dob,
      });
    }
    */

    if (firstName === '') {
      alert('Student First Name is required');
      return;
    }
    if (lastName === '') {
      alert('Student Last Name is required');
      return;
    }
    if (fatherName === '') {
      alert('Student father name is required');
      return;
    }

    console.log({
      firstName,
      lastName,
      fatherName,
      contactNumber,
      admissionDate,
      dob,
    });
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid red',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Student Registration Form</h1>
      <form>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <label>First name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={getFirstName}
              />
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <label>Last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={getLastName}
              />
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <label>Father name</label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                onChange={getFatherName}
              />
            </div>
          </div>
          <div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <label>DOB</label>
              <input type="date" id="dob" name="dob" onChange={getDOB} />
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <label>Admission Date</label>
              <input
                type="date"
                id="adminissionDate"
                name="adminissionDate"
                onChange={getAdmissionDate}
              />
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <label>Contact</label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                onChange={getCotactNumber}
              />
            </div>
          </div>
        </div>
        <div>
          <button onClick={submit} type="button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoAppForm;
