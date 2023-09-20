import './App.css';
import SearchHeader from './SearchHeader';

// Axios kütüphanesini içe aktarıyoruz, bu HTTP isteklerini yapmamıza yardımcı olur.
import axios from 'axios';

// React kütüphanesinden 'useState' fonksiyonunu içe aktarıyoruz, bu bileşende durum yönetimini sağlar.
import { useState } from 'react';
import ImageList from './ImageList';

// Ana uygulama işlevimizi oluşturuyoruz.
function App() {
  // 'images' adında bir durum değişkeni tanımlıyoruz ve boş bir dizi ile başlatıyoruz.
  const [images, setImages] = useState([]);

  // Arama terimini alarak ve Unsplash API'sini kullanarak görüntüleri arayan bir işlev tanımlıyoruz.
  const handleSubmit = async (term) => {
    // Axios ile Unsplash API'sine GET isteği gönderiyoruz.
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID GDBgUNOgh8lmd3ncFYl_Ht0jhtCN2wD0fBmKeVUXBJ0'
      },
      params: {
        query: term,
      }
    });

    // API yanıtından gelen görüntüleri 'images' durumuyla güncelliyoruz.
    setImages(response.data.results);
  }

  // Uygulama bileşenini oluşturuyoruz.
  return (
    <div className='App'>
      {/* 'SearchHeader' component'ini kullanarak arama çubuğunu görüntülüyoruz ve 'handleSubmit' işlevini iletiyoruz. */}
      <SearchHeader Search={handleSubmit} />

      {/* 'ImageList' component'ini kullanarak API'den alınan görüntüleri listeleyerek  görüntülüyoruz. */}
      <ImageList imagePlaceholders={images} />
    </div>
  );
}

// 'App' component'ini dışa aktarıyoruz, böylece başka componentler tarafından kullanılabilir hale gelir.
export default App;




