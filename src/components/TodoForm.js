import { useState } from 'react';
// state
function TodoForm() {
  const returnedFromUseState = useState('New todo');
  const valueOfInput = returnedFromUseState[0];
  const setValue = returnedFromUseState[1];

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(valueOfInput);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Please enter new todo'
        name='todo'
        value={valueOfInput}
        onChange={handleChange}
      />
      <button type='submit'>submit</button>
    </form>
  );
}

export default TodoForm;
