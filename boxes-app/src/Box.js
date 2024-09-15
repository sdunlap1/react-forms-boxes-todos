import React from 'react';

function Box({ id, width, height, backgroundColor, removeBox }) {
  const handleRemove = () => removeBox(id);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: backgroundColor
        }}
      />
      <button onClick={handleRemove} style={{ marginTop: '10px' }}>X</button>
    </div>
  );
}

export default Box;
