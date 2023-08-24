
function Box({ id, backgroundColor, width, height, removeBox }) {
  // display a div with a background color, width, and height based on props sent

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