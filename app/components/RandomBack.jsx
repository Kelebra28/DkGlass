'use client'
// import React, { useState, useEffect } from 'react';

// const RandomImages = () => {
//   const [randomImages, setRandomImages] = useState([]);

//   useEffect(() => {
//     const generateRandomPosition = () => ({
//       x: Math.floor(Math.random() * 11), // Valores entre 0 y 10 para posición X (ajusta según tus necesidades)
//       y: Math.floor(Math.random() * 7), // Valores entre 0 y 6 para posición Y (ajusta según tus necesidades)
//     });

//     const generateRandomImage = () => ({
//       position: generateRandomPosition(),
//       imageUrl: 'logoFondo.svg', // Reemplaza 'ruta/de/la/imagen.jpg' con la ruta de tu imagen
//     });

//     const generateRandomImages = () => {
//       const newImages = [];
//       for (let i = 0; i < 4; i++) {
//         let newPosition;
//         do {
//           newPosition = generateRandomPosition();
//         } while (
//           newImages.some(
//             (image) => image.position.x === newPosition.x && image.position.y === newPosition.y
//           ) ||
//           (newPosition.x === 6 && newPosition.y === 3) // Evitar que una imagen se coloque en la posición fija
//         );
//         newImages.push({ position: newPosition, imageUrl: 'logoFondo.svg' });
//       }

//       setRandomImages(newImages);
//     };

//     generateRandomImages(); // Generar imágenes iniciales
//     const intervalId = setInterval(generateRandomImages, 3000);

//     // Limpia el intervalo cuando el componente se desmonta
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="random-images-container">
//       <div
//         className="fixed-image"
//         style={{
//           backgroundImage: 'url(logoFondo.svg)', // Reemplaza 'ruta/de/la/imagen-fija.jpg' con la ruta de tu imagen fija
//         }}
//       />
//       {randomImages.map((image, index) => (
//         <div
//           key={index}
//           className="random-image"
//           style={{
//             backgroundImage: `url(${image.imageUrl})`,
//             left: `${image.position.x * 30}vw`,
//             top: `${image.position.y * 15}vh`,
//             zIndex: 0,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default RandomImages;


import React, { useState, useEffect } from 'react';

const RandomImages = () => {
//   const [randomImages, setRandomImages] = useState([]);

//   useEffect(() => {
//     const generateRandomPosition = () => ({
//       x: Math.floor(Math.random() * 11), // Valores entre 0 y 10 para posición X (ajusta según tus necesidades)
//       y: Math.floor(Math.random() * 7), // Valores entre 0 y 6 para posición Y (ajusta según tus necesidades)
//     });


//     const generateRandomImages = () => {
//       const newPositionFija = { x: 6, y: 3 }; // Posición fija (ajusta según tus necesidades)
//       const newImages = [];
//       let newPosition;
//       do {
//         newPosition = generateRandomPosition();
//       } while (
//         newPosition.x === newPositionFija.x && newPosition.y === newPositionFija.y
//       );
//       newImages.push({ position: newPosition, imageUrl: 'logoFondo.svg' });
//       for (let i = 1; i < 10; i++) {
//         do {
//           newPosition = generateRandomPosition();
//         } while (
//           newImages.some(
//             (image) => image.position.x === newPosition.x && image.position.y === newPosition.y
//           ) ||
//           (newPosition.x === newPositionFija.x && newPosition.y === newPositionFija.y)
//         );
//         newImages.push({ position: newPosition, imageUrl: 'logoFondo.svg' });
//       }

//       setRandomImages(newImages);
//     };

//     generateRandomImages(); // Generar imágenes iniciales
//     const intervalId = setInterval(generateRandomImages, 1000);

//     // Limpia el intervalo cuando el componente se desmonta
//     return () => clearInterval(intervalId);
//   }, []);

  return (
    <div className="random-images-container">
      <div
        className="fixed-image"
        style={{
          backgroundImage: 'url(logoFondo.svg)', // Reemplaza 'ruta/de/la/imagen-fija.jpg' con la ruta de tu imagen fija
        }}
      />
       <div
        className="fixed-image1"
        style={{
          backgroundImage: 'url(logoFondo.svg)', // Reemplaza 'ruta/de/la/imagen-fija.jpg' con la ruta de tu imagen fija
        }}
      />
       <div
        className="fixed-image2"
        style={{
          backgroundImage: 'url(logoFondo.svg)', // Reemplaza 'ruta/de/la/imagen-fija.jpg' con la ruta de tu imagen fija
        }}
      />
      <div
        className="fixed-image3"
        style={{
          backgroundImage: 'url(logoFondo.svg)', // Reemplaza 'ruta/de/la/imagen-fija.jpg' con la ruta de tu imagen fija
        }}
      />
      <div
        className="fixed-image4"
        style={{
          backgroundImage: 'url(logoFondo.svg)', // Reemplaza 'ruta/de/la/imagen-fija.jpg' con la ruta de tu imagen fija
        }}
      />
      <div
        className="fixed-image5"
        style={{
          backgroundImage: 'url(logoFondo.svg)', // Reemplaza 'ruta/de/la/imagen-fija.jpg' con la ruta de tu imagen fija
        }}
      />
       <div
        className="fixed-image6"
        style={{
          backgroundImage: 'url(logoFondo.svg)', // Reemplaza 'ruta/de/la/imagen-fija.jpg' con la ruta de tu imagen fija
        }}
      />
       <div
        className="fixed-image7"
        style={{
          backgroundImage: 'url(logoFondo.svg)', // Reemplaza 'ruta/de/la/imagen-fija.jpg' con la ruta de tu imagen fija
        }}
      />
       <div
        className="fixed-image8"
        style={{
          backgroundImage: 'url(logoFondo.svg)', // Reemplaza 'ruta/de/la/imagen-fija.jpg' con la ruta de tu imagen fija
        }}
      />
       <div
        className="fixed-image9"
        style={{
          backgroundImage: 'url(logoFondo.svg)', // Reemplaza 'ruta/de/la/imagen-fija.jpg' con la ruta de tu imagen fija
        }}
      />
        <div
        className="fixed-image10"
        style={{
          backgroundImage: 'url(logoFondo.svg)', // Reemplaza 'ruta/de/la/imagen-fija.jpg' con la ruta de tu imagen fija
        }}
      />
        <div
        className="fixed-image11"
        style={{
          backgroundImage: 'url(logoFondo.svg)', // Reemplaza 'ruta/de/la/imagen-fija.jpg' con la ruta de tu imagen fija
        }}
      />
        <div
        className="fixed-image12"
        style={{
          backgroundImage: 'url(logoFondo.svg)', // Reemplaza 'ruta/de/la/imagen-fija.jpg' con la ruta de tu imagen fija
        }}
      />
      {/* {randomImages.map((image, index) => (
        <div
          key={index}
          className="random-image"
          style={{
            backgroundImage: `url(${image.imageUrl})`,
            left: `${image.position.x * 30}vw`,
            top: `${image.position.y * 15}vh`,
            zIndex: 0,
          }}
        />
      ))} */}
    </div>
  );
};

export default RandomImages;

