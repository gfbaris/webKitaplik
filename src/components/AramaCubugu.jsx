import React from 'react';

export default function AramaCubugu(props) {
  function handleChange(e) {
    props.onChange(e.target.value);
  }

  return (
    <input
      type="text"
      value={props.value}
      onChange={handleChange}
      placeholder="Başlık veya yazar ara..."
      style={{
        flex: 1,
        padding: '12px',
        fontSize: '16px',
        border: '2px solid #ccc',
        borderRadius: '8px',
        minWidth: '250px'
      }}
    />
  );
}
