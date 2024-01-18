import React from 'react';
function Button() {
  function iWillBeCalledOnButtonClick() {
    alert('Hello React');
  }
  //jsx
  return (
    //react fragment
    // <React.Fragment>
    //   <button onClick={iWillBeCalledOnButtonClick}>Click me</button>
    //   <h1>Hello I am react compoent</h1>
    // </React.Fragment>
    <>
      <button onClick={iWillBeCalledOnButtonClick}>Click me</button>
    </>
  );
}
//export component
export default Button;
