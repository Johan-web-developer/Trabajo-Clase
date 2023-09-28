import { useEffect, useState } from 'react';
import './App.css'

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random/3");
        if (response.ok) {
          const data = await response.json();
          setImages(data.message);
          setIsLoading(false);
          setError(null);
        } else {
          setError("No se pudieron obtener las imágenes");
        }
      } catch (error) {
        setError("El API no está respondiendo");
      }
    };
    fetchData();
  }, [isLoading]);


  const randomDog = () =>{
    setIsLoading(true)
  }

  if (isLoading) {
    return (
      <div className='App'>
        <h1>Cargando....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className='App'>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className='App'>
      {images.map((url, index) => (
        <img key={index} src={url} alt={`Dog ${index + 1}`} />
      ))}
      <button onClick={randomDog}>Otros Perritos</button>
    </div>
  );
}
