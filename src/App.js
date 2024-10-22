import React, { useState } from "react";

const ValidaredForm = () => {
  const [FormData, setFormaData] = useState({email: ""});
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!FormData.email.includes("@")) {
      errors.email = "Invalid email";
    }
    return errors;
  };

  const hancdleChange = (e) => {
    const { name, value } = e.target;
    setFormaData({ ...prevData, [name]: value });
  };

  return (
    <form>
      <label>
        Name: <input type="text" value={Name} onChange={hancdleChange} />
      </label>
      <textarea onChange={(e) => setComment(e.target.value)}>

      </textarea>
      <h2>Name: {Name}</h2><h2>Comment: {comment}</h2>
    </form>
  );
}

function App() {
  return (
    <>
    <Form />
    </>
  );
}

export default App;
