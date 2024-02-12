import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Input from './Input';
const storageKey = 'students';

/**
 *
 * @returns
 * Acccept params
 * Add student component
 */
//url
//https://www.google.com/search?q=best-book
//protocol => http
//subdomain=www
//main domain=google.com
//.com => domain type
//path name or resource => search
//query=>?q
//query string => key=value
//https://localhost.com/add or edit or delete or search
export default function AddStudent() {
  const navigate = useNavigate();
  const param = useParams();
  const url = window.location.href;
  console.log(url);

  //console.log(url.get('rollnumber'));
  const studentId = Number(param.studentId);
  console.log(typeof studentId);
  console.log(studentId);

  const students = localStorage.getItem('students');
  const convertedResult = JSON.parse(students);

  const singleStudent = convertedResult?.find((item) => item.id === studentId);
  //console.log(singleStudent);

  //const url = window.location.href;
  //console.log(url[url.length - 1]);
  //console.log(url.charAt(url.length - 1));
  //const url2 = url.split('/');
  //console.log(url2[url2.length - 1]);
  //console.log(url2[url2.length - 2]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    if (studentId) {
      console.log('i got stduent');
      const { firstName, lastName, fatherName, mobile } = singleStudent;
      setFirstName(firstName);
      setLastName(lastName);
      setFatherName(fatherName);
      setMobile(mobile);
    }
  }, [studentId]);

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

  const onEdit = (event) => {
    event.preventDefault();
    //get existing stduent from local storage
    //update existing student and save in local storage
    const existingStudent = convertedResult?.find(
      (item) => item.id === studentId
    );
    const updatedStudent = {
      ...existingStudent,
      firstName,
      lastName,
      fatherName,
      mobile,
    };

    const updatedStudetns = convertedResult?.map((item) => {
      if (item.id === studentId) {
        return updatedStudent;
      }
      return item;
    });

    localStorage.setItem('students', JSON.stringify(updatedStudetns));

    //navigate('/');
    window.location.href = '/';

    console.log('editing student');
  };
  function OnEdit() {}
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>{studentId ? 'Edit' : 'Add'} student page</h1>
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
              {/*self close 
              props or properties
              */}
              <Input
                id={'firstName'}
                name={'firstName'}
                value={firstName}
                type="text"
                onchange={getFirstName}
              />
              {/* <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={getFirstName}
              ></input> */}
              <label> Last Name </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
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
                value={fatherName}
                onChange={getFatherName}
              ></input>
              <label> Mobile </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={mobile}
                onChange={getMobile}
              ></input>
            </div>
          </div>

          <div style={{ marginTop: '10px', marginBottom: '20px' }}>
            {!studentId && (
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
            )}

            {studentId ? (
              <button
                onClick={onEdit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '10px',
                }}
              >
                Edit
              </button>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
}
