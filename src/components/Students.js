export default function Students() {
  const students = [
    {
      id: 1,
      firstName: "Ammar",
      lastName: "Malhi",
      mobile: "12345",
      fatherName: "Javid",
      rollNumber: 1122,
    },
    {
      id: 2,
      firstName: "Sharafat",
      lastName: "Ali",
      fatherName: "Suleman",
      mobile: "12345678",
      rollNumber: "15",
    },
  ];

  const onEdit = (item) => {
    console.log("edit itme=>", item);
  };

  const onRemove = (item) => {
    console.log("on remove => ", item);
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Full Name</th>
          <th>Father Name</th>
          <th>Mobile</th>
          <th>Roll Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((item, index) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{`${item.firstName} ${item.lastName}`}</td>
              <td>{item.fatherName}</td>
              <td>{item.mobile}</td>
              <td>{item.rollNumber}</td>
              <td>
                <button onClick={() => onEdit(item)}>Edit</button>
                <button onClick={() => onRemove(item)}> X</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
