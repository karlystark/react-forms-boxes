import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';

function BoxList() {

  const [boxes, setBoxes] = useState([]);


  function addBox(formData) {
    //creates a new Box given the formData sent from newBoxForm
    let newBox = { ...formData, id: uuid() };
    setBoxes(currBoxes => [...currBoxes, newBox]);
  }

  function removeBox(id) {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  return (
    <div>{boxes.map(box => <Box
      key={box.id}
      id={box.id}
      height={box.height}
      width={box.width}
      backgroundColor={box.backgroundColor}
      removeBox={removeBox}
    />)}
      <NewBoxForm addBox={addBox} />
    </div>

  );
  // state that contains all of the boxes
  // should render all of the box components (pass in backgroundColor, width, height)
  // along with the NewBoxForm component
  // with each box component, add a button with the text "X" next to each Box.
  // when "X" is clicked, remove that specific box
  // pass the "remove" function down to Box as props (button will be included in Box component)

}

export default BoxList;