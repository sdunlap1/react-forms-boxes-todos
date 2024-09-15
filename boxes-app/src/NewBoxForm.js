import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'; // For generating unique IDs

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: ''
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox({ ...formData, id: uuid() });
    setFormData({ width: '', height: '', backgroundColor: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button>Create Box</button>
    </form>
  );
}

export default NewBoxForm;
