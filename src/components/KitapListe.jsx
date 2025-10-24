import React from 'react';
import KitapKarti from './KitapKarti';

export default function KitapListe(props) {
  return (
    <div>
      {props.kitaplar.length === 0 ? (
        <div style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '8px',
          border: '2px solid #ddd',
          textAlign: 'center'
        }}>
          <p>Kitap bulunamadı.</p>
        </div>
      ) : (
        props.kitaplar.map(function (kitap) {
          const favorideMi = props.favoriler.includes(kitap.id);

          return (
            <KitapKarti
              key={kitap.id}
              baslik={kitap.baslik}
              yazar={kitap.yazar}
              kategori={kitap.kategori}
              id={kitap.id}
              favorideMi={favorideMi}
              onFavoriToggle={props.onFavoriToggle}
            />
          );
        })
      )}
    </div>
  );
}
