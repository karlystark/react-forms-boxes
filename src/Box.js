/** Box element with remove button (calls removeBox in BoxList)
 *
 * Props: { id, backgroundColor, width, height, removeBox }
 *
 * State: none
 *
 * BoxList > Box
 */


function Box({ id, backgroundColor, width, height, removeBox }) {

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor
  };

  return (
    <div>
      <div style={style}>
      </div>
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  );

}

export default Box;