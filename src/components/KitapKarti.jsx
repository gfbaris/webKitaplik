import React from 'react';

export default function KitapKarti({ baslik, yazar, kategori, id, favorideMi, onFavoriToggle }) {
  function handleClick() {
    onFavoriToggle(id);
  }

  return (
    <div style={{
      backgroundColor: 'white',
      border: '2px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '15px'
    }}>
      <h3 style={{
        fontSize: '20px',
        marginBottom: '5px',
        fontWeight: 'bold'
      }}>
        {baslik}
      </h3>

      <p style={{
        color: '#666',
        fontSize: '14px',
        marginBottom: '15px'
      }}>
        {yazar} · {kategori}
      </p>

      <button
        onClick={handleClick}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '15px',
          borderRadius: '8px',
          cursor: 'pointer',
          border: favorideMi ? 'none' : '2px solid #ddd',
          backgroundColor: favorideMi ? '#fbbf24' : '#f3f4f6',
          fontWeight: favorideMi ? 'bold' : 'normal'
        }}
      >
        {favorideMi ? '⭐ Favorite' : '☆ Favori Ekle'}
      </button>
    </div>
  );
}
