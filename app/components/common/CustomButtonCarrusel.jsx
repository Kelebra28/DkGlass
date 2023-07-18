import React from 'react';
import 'react-multi-carousel/lib/styles.css';

const CustomPrevButton = ({ onClick }) => (
  <button
    className="carousel-custom-button carousel-custom-button-prev"
    onClick={onClick}
    style={{ zIndex: 20, width: 50, height: 50, backgroundColor: 'black'}}
  >
    Anterior
  </button>
);

const CustomNextButton = ({ onClick }) => (
  <button
    className="carousel-custom-button carousel-custom-button-next"
    onClick={onClick}
    style={{ zIndex: 20 }}
  >
    Siguiente
  </button>
);

export {
    CustomNextButton,
    CustomPrevButton
}

