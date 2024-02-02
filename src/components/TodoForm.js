function TodoAppForm() {
  // scope and hositing
  //scope
  /*
var has gloabl or functioal scope
  function parent() {
    var parentVariable = undefined;
    console.log('pranet variable accessing=>', parentVariable);
    parentVariable = 'Parent value';
    function child1() {
      var childVariable = 'child value';
      console.log('parent variable value => ', parentVariable);
      function child2() {
        console.log(
          'child 2 access parents value => ',
          parentVariable,
          childVariable
        );
      }
      child2();
    }
    child1();
    console.log('child variable value inside parent', childVariable);
  }
  parent();
  console.log('parent variable value =>', parentVariable);
  */

  //block level scope
  //let/const

  /*
  let age = 20;
  if (age === 20) {
    let isMobileAllowed = 'allowed';
    {
      console.log('is mobile allowed inside the if block', isMobileAllowed);
    }
  }
  console.log('is mobile allowed out side the if command=>', isMobileAllowed);
*/

  var x = 10;
  function foo() {
    var x = undefined;
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxx', x);
    x = 20;
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxx', x);
  }
  foo();

  return <h1>Scope</h1>;
}

export default TodoAppForm;
