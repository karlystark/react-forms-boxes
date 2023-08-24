import React, { useState } from "react";


function NewBoxForm({ addBox }) {

  const initialState = {
    height: "",
    width: "",
    backgroundColor: ""
  };

  const [formData, setFormData] = useState(initialState);

  console.log("HERE'S OUR FORM DATA ===> ", formData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(currData => ({
      ...currData,
      [name]: value,
    }));

  }
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height"> Height: </label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="width"> Width: </label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="backgroundColor"> Background Color: </label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;

// render a form
// when submitted creates a new Box
// form will have inputs for height, width, backgroundColor
// these will get sent with the form submit
// be sure to clear the input values on submit