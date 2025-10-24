import React from 'react';

export default function KategoriFiltre(props) {
  function handleChange(e) {
    props.onChange(e.target.value);
  }

  return (
    <select
      value={props.value}
      onChange={handleChange}
      style={{
        padding: '12px',
        fontSize: '16px',
        border: '2px solid #ccc',
        borderRadius: '8px',
        backgroundColor: 'white',
        cursor: 'pointer'
      }}
    >
      <option value="Tümü">Tümü</option>
      <option value="Web">Web</option>
      <option value="CS">CS</option>
      <option value="Tasarım">Tasarım</option>
    </select>
  );
}
