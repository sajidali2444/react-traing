//JSX syntax
//JSX return value
// React Fragment <></>
// naming conventions of variables/ functions
// React Expression {}
// React style apply {}

import { useState } from 'react';

const inputStyle = {
  padding: '10px',
  height: '20px',
  border: '1px solid',
  borderRadius: '10px',
  fontSize: '20px',
};

//component functon always start form Upercase.
function TodoAppForm() {
  // react hooks
  //maintain compoent state
  //1. useState // triger render method
  //useState syntax
  //      stateName, stateUpdater            initial value
  const [firstName, setFirstName] = useState('ABC');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [value, setValue] = useState('a');
  const [count, setCount] = useState(0);
  //es 6 javascript
  //destructing

  const user = {
    fName: 'Bilal',
    lName: 'Ahemd',
    mobile: '12345678',
    address: {
      country: 'USA',
      city: 'Mesa',
    },
  };

  // console.log('user first name =>', user.fName, user.mobile);
  // console.log(
  //   'user first name string way or index operator =>',
  //   user['fName'],
  //   user['mobile']
  // );
  // const userName = 'fName';
  // const mobile = 'mobile';
  // console.log(
  //   'user first name with variable way =>',
  //   user[userName],
  //   user[mobile]
  // );
  //destructing
  //object destructing
  //destrcuting with new name
  const {
    fName: fullName,
    mobile,
    lName,
    address: { country, city },
  } = user;
  console.log('destructing way => ', fullName, mobile, lName, country);
  //array destructing
  const options = ['React', 'Node'];
  const [option1, option2, option3] = options;
  console.log('array destructing=', option1, option2, option3);
  //spread operator
  //itertable => loop

  // const user3 = {};
  // user3.fName = user.fName;
  // user3.lName = user.lName;
  // user3.mobile = user.mobile;
  // user3.address = {
  //   country: user.address.country,
  //   city: user.address.city,
  // };
  //user fName = T'Bilal';
  const fName = 'Touseef';
  const phone = '1234554321';
  const user2 = {
    fName: 'Sajid',
    ...user,
    email: 'email@emai.com',
    mobile: 'abcdefgh',
    fName,
    phone,
  };
  //user2.phone = phone;
  const user3 = { ...user2 };
  //console.log('user2 =>', user3);

  const print = (name, ...rest) => {
    console.log({ name, rest });
  };
  //print('Sajid', 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 2, 222, 2332);

  //console.log('old user object', user);
  //setValue(1);
  //console.log('value => ', value);
  function incrimetValue(val) {
    return (val += 1);
    //val = val + 1;
    //return val;
  }
  const updateValue = (val) => {
    return val + 1;
  };
  const updateValue1 = (val) => {
    console.log(val + 'a');
    return val + 'a';
  };
  const buttonOnClick = () => {
    //setValue(value + 1);
    //setValue((val) => val + 1);
    setValue(updateValue1);
    console.log('I am button');
  };

  //buttonOnClick();

  //call in javascript

  //const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //es 6 array functions
  // map function
  // const printUser = (user) => {
  //   console.log('Printig user object using map array method');
  //   console.log(user);
  // };
  // users.map(function (item) {
  //   console.log('item usig map => ', item);
  // });
  //inline array function as callback
  //map method working;
  //map method/function is array function
  //map method receive callback and apply callback functio on each array item
  const users = [];
  for (let i = 1; i <= 100; i++) {
    users.push({ id: `${i}`, name: 'User ' + i });
  }
  console.log('orignal array=>', users);
  const modifiedUsers = users.map((item, index) => {
    // if (item.id % 2 === 0) {
    //   return { id: item, key: index };
    // }
    //ssreturn { id: item, key: index, label: 'this is a label' };
  });

  console.log('modified array=>', modifiedUsers);
  /*
  

  const showUsers = (printSingleUser) => {
    for (let i = 0; i <= users.length; i++) {
      printSingleUser(users[i]);
    }
  };

  showUsers(printUser);
  */
  // const showUsers = (printSingleUser) => {
  //   for (let i = 0; i <= users.length; i++) {
  //     printSingleUser(users[i]);
  //   }
  // };
  // showUsers(function (item) {
  //   console.log('native callback item', item);
  // });

  return (
    <div
      style={{
        margin: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '500px',
        }}
      >
        <label>First Name</label>
        <input
          type="text"
          onChange={(e) => {
            setValue((oldValue) => oldValue + 1);
            setFirstName(e.target.value);
          }}
          style={inputStyle}
        />
        <label>Last Name</label>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          style={inputStyle}
        />
        <label>Mobile Number</label>
        <input
          type="text"
          onChange={(e) => setMobileNumber(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <strong>First Name: {firstName}</strong>
        <strong>Last Name: {lastName}</strong>
        <strong>Mobile: {mobileNumber}</strong>
        <b>Value : {value}</b>
        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={() => setCount((val) => val - 1)}
            style={{ fontSize: 20 }}
          >
            Dcrease counter
          </button>
          <label style={{ fontWeight: 'bold' }}>Counter: {count}</label>
          <button
            onClick={() => setCount((val) => val + 1)}
            style={{ fontSize: 20 }}
          >
            Increase counter
          </button>
        </div>
        <ul>
          {users.map((item, index, orginalArray) => (
            <li>
              id : {item.id} - name: {item.name} - key: {index}
            </li>
          ))}
        </ul>
      </div>
      <button style={{ fontSize: 20 }} onClick={buttonOnClick}>
        Save Todo
      </button>
    </div>
  );
}

export default TodoAppForm;
