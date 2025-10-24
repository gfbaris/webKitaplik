import React, { useState, useEffect } from 'react';
import { KITAPLAR } from './components/KitapVeri';
import AramaCubugu from './components/AramaCubugu';
import KategoriFiltre from './components/KategoriFiltre';
import KitapListe from './components/KitapListe';
import FavoriPaneli from './components/FavoriPaneli';

export default function App() {
  const [aramaMetni, setAramaMetni] = useState(function () {
    const kayitli = localStorage.getItem('aramaMetni');
    return kayitli ? kayitli : '';
  });

  const [kategori, setKategori] = useState('Tümü');

  const [favoriler, setFavoriler] = useState(function () {
    const kayitli = localStorage.getItem('favoriler');
    return kayitli ? JSON.parse(kayitli) : [];
  });

  useEffect(function () {
    localStorage.setItem('aramaMetni', aramaMetni);
  }, [aramaMetni]);

  useEffect(function () {
    localStorage.setItem('favoriler', JSON.stringify(favoriler));
  }, [favoriler]);

  function filtreliKitaplar() {
    let sonuc = KITAPLAR;

    if (aramaMetni !== '') {
      sonuc = sonuc.filter(function (kitap) {
        const baslikKucuk = kitap.baslik.toLowerCase();
        const yazarKucuk = kitap.yazar.toLowerCase();
        const aramaKucuk = aramaMetni.toLowerCase();

        return baslikKucuk.includes(aramaKucuk) || yazarKucuk.includes(aramaKucuk);
      });
    }

    if (kategori !== 'Tümü') {
      sonuc = sonuc.filter(function (kitap) {
        return kitap.kategori === kategori;
      });
    }

    return sonuc;
  }

  function favoriToggle(id) {
    let yeniFavoriler = [...favoriler];

    if (yeniFavoriler.includes(id)) {
      yeniFavoriler = yeniFavoriler.filter(function (fId) {
        return fId !== id;
      });
    } else {
      yeniFavoriler.push(id);
    }

    setFavoriler(yeniFavoriler);
  }

  const filtrelenmisKitaplar = filtreliKitaplar();

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f4f8',
      padding: '20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '40px',
          marginBottom: '20px',
          color: '#1a1a1a'
        }}>
          Mini Kitaplık
        </h1>

        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '20px',
          flexWrap: 'wrap'
        }}>
          <AramaCubugu
            value={aramaMetni}
            onChange={setAramaMetni}
          />
          <KategoriFiltre
            value={kategori}
            onChange={setKategori}
          />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '20px'
        }}>
          <KitapListe
            kitaplar={filtrelenmisKitaplar}
            favoriler={favoriler}
            onFavoriToggle={favoriToggle}
          />

          <FavoriPaneli
            kitaplar={KITAPLAR}
            favoriler={favoriler}
            onFavoriCikar={favoriToggle}
          />
        </div>
      </div>
    </div>
  );
}
