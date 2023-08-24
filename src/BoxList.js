import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';


/** Renders list of boxes and NewBoxForm
 *
 * Props: none
 *
 * State: boxes (array of objects holding box data)
 *
 * BoxList > Box + NewBoxForm
 */
function BoxList() {

  const [boxes, setBoxes] = useState([]);

  console.log("HERE ARE OUR BOXES ==> ", boxes);

  function addBox(formData) {
    //creates a new Box given the formData sent from newBoxForm
    let newBox = { ...formData, id: uuid() };
    setBoxes(currBoxes => [...currBoxes, newBox]);
  }

  function removeBox(id) {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  return (
    <div>
      {boxes.map(
        ({id, height, width, backgroundColor}) =>
          <Box
            key={id}
            id={id}
            height={height}
            width={width}
            backgroundColor={backgroundColor}
            removeBox={removeBox}
          />
        )
      }
      <NewBoxForm addBox={addBox} />
    </div>

  );
}

export default BoxList;