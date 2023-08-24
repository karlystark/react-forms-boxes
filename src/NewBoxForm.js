import React, { useState } from "react";

/** New Box Form
 *
 * Props: addBox is passed from BoxList, adds box to state
 *
 * State: formData { height, width, backgroundColor }
 *
 * BoxList > NewBoxForm
 */
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

