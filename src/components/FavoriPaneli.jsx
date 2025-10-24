import React from 'react';

export default function FavoriPaneli(props) {
  const favoriKitaplar = props.kitaplar.filter(function (k) {
    return props.favoriler.includes(k.id);
  });

  return (
    <div style={{
      backgroundColor: 'white',
      border: '2px solid #ddd',
      borderRadius: '8px',
      padding: '20px'
    }}>
      <h2 style={{
        fontSize: '24px',
        marginBottom: '15px',
        fontWeight: 'bold'
      }}>
        Favoriler ({favoriKitaplar.length})
      </h2>

      {favoriKitaplar.length === 0 ? (
        <p style={{ color: '#666', textAlign: 'center', padding: '20px' }}>
          Henüz favori kitap eklenmemiş
        </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {favoriKitaplar.map(function (kitap) {
            return (
              <li key={kitap.id} style={{
                backgroundColor: '#f9fafb',
                padding: '12px',
                marginBottom: '10px',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontWeight: '600' }}>{kitap.baslik}</span>
                <button
                  onClick={function () { props.onFavoriCikar(kitap.id); }}
                  style={{
                    marginLeft: '10px',
                    fontSize: '14px',
                    color: '#666',
                    background: 'none',
                    border: 'none',
                    textDecoration: 'underline',
                    cursor: 'pointer'
                  }}
                >
                  Kaldır
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
