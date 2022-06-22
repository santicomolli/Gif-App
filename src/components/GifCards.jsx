import React from "react";

const GifCards = () => {
  return (
    <div className="col">
      <h3 className="text-white">Categoría Gifs</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Tarjetas con gifs */}
      </div>

      <div className="my-3 d-flex justify-content-center">
        <button className="btn btn-search">More</button>
      </div>
    </div>
  );
};

export default GifCards;
