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
  const [firstNameRequired, setFirstNameRequired] = useState(false);
  const [lastNameRequired, setlastNameRequired] = useState(false);
  const [fatherNameRequired, setFatherNameRequired] = useState(false);
  const [students, setStudents] = useState([]);

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

  const onFocusOut = ({ target: { id, value } }) => {
    if (id === 'firstName' && value) {
      setFirstNameRequired(false);
    } else if (id === 'firstName' && !value) {
      setFirstNameRequired(true);
    }

    if (id === 'lastName' && value) {
      setlastNameRequired(false);
    } else if (id === 'lastName' && !value) {
      setlastNameRequired(true);
    }

    if (id === 'fatherName' && value) {
      setFatherNameRequired(false);
    } else if (id === 'fatherName' && !value) {
      setFatherNameRequired(true);
    }
  };

  const submit = () => {
    if (!firstName) {
      setFirstNameRequired(true);
    }
    if (!lastName) {
      setlastNameRequired(true);
    }
    if (!fatherName) {
      setFatherNameRequired(true);
    }

    if (!firstNameRequired && !lastNameRequired && !fatherNameRequired) {
      setStudents((prev) => [
        ...prev,
        {
          firstName,
          lastName,
          fatherName,
          contactNumber,
          admissionDate,
          dob,
          isFeesPaid: false,
        },
      ]);
    }
  };

  const deleteStudent = (elementIndex) => {
    //students
    //map
    //find
    //some
    //filter
    const remainingStudents = students.filter(
      (item, index) => index !== elementIndex
    );
    setStudents(remainingStudents);
    console.log(remainingStudents);
  };
  const receiveFees = (currentIndex) => {
    //find element by index
    // const stduent = students.find((item, index) => index === currentIndex);
    // stduent.isFeesPaid = true;
    // setStudents((prev) => [...prev, stduent]);
    // console.log(stduent);

    //map returns new array exactly as old array
    const updatedStudents = students.map((item, index) => {
      if (index === currentIndex) {
        item.isFeesPaid = true;
        return item;
        //return { ...item, isFeesPaid: true };
      }
      return item;
    });
    setStudents(updatedStudents);

    //const paidFeesStudent = { ...stduent, isFeesPaid:true };

    // update element property IsFeesPaid to true
    // update students array
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
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <label>First name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={getFirstName}
                style={{
                  ...(firstNameRequired && {
                    border: '1px solid red',
                  }),
                }}
                onBlur={onFocusOut}
              />
              {firstNameRequired === true ? (
                <p style={{ color: 'red', margin: '0 0 10px 0' }}>
                  First name is required.
                </p>
              ) : null}
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
                style={{
                  ...(lastNameRequired && {
                    border: '1px solid red',
                  }),
                }}
                onBlur={onFocusOut}
              />
              {lastNameRequired ? (
                <p style={{ color: 'red', margin: '0 0 10px 0' }}>
                  Last name is required.
                </p>
              ) : null}
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
                style={{
                  ...(fatherNameRequired && {
                    border: '1px solid red',
                  }),
                }}
                onBlur={onFocusOut}
              />
              {fatherNameRequired === true ? (
                <p style={{ color: 'red', margin: '0 0 10px 0' }}>
                  Father name is required.
                </p>
              ) : null}
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

      <div style={{ border: '1px solid gray', marginTop: '20px' }}>
        {students.length !== 0 ? (
          <table border={1} width={800} style={{ textAlign: 'center' }}>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>DOB</th>
            <th>Admission Date</th>
            <th>Contact#</th>
            <th>Is Fees Paid</th>
            <th>Delete</th>
            <tbody>
              {students.map((currentIem, index, items) => {
                const fullName =
                  currentIem.firstName + ' ' + currentIem.lastName;
                return (
                  <tr>
                    <td>{fullName}</td>
                    <td>{currentIem.fatherName}</td>
                    <td>{currentIem.dob}</td>
                    <td>{currentIem.admissionDate}</td>
                    <td>{currentIem.contactNumber}</td>
                    <td>{currentIem.isFeesPaid ? 'Paid' : 'Pending'}</td>
                    <td>
                      <button onClick={() => receiveFees(index)}>
                        Click to recive fees
                      </button>
                      <button onClick={() => deleteStudent(index)}>X</button>
                    </td>
                  </tr>
                );
              })}
              <tr></tr>
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
}

export default TodoAppForm;
