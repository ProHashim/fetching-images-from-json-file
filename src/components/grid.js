import images from "../data/images.json"
import React, { useState } from 'react';
import '../App.css'

function ImageGallery() {
  const [filter, setFilter] = useState('');
  const [idFilter, setIdFilter] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 12;

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const handleIdFilterChange = (e) => {
    setIdFilter(e.target.value);
  }

  const filteredImages = images.filter(image =>
    image.author.toLowerCase().includes(filter.toLowerCase()) &&
    image.id.toString().includes(idFilter)
  )

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter by author name"
        className="input-filter"
        onClick={() => setPage(1)}
      />

      <input
        type="text"
        value={idFilter}
        onChange={handleIdFilterChange}
        placeholder="Filter by ID"
        className="input-filter"
        onClick={() => setPage(1)}
      />

      <div className="image-grid">
        {filteredImages.slice((page - 1) * perPage, page * perPage)
          .map((image, i) => (
            <div className="item" key={i}>
              <img src={`${image.download_url}`} alt={image.author} />
              <div className="author-name">
                <p>Author name: <b>{image.author}</b></p>
              </div>
              <div className="width-height">
                <span>Width: <b>{image.width}</b></span>
                <span>Height: <b>{image.height}</b></span>
              </div>
              <div className="download-url">Download URL:
                <a href={ image.download_url} > {image.download_url}</a>
              </div>
              <div className="id">
                <p>ID: <b>{image.id}</b></p>
              </div>

            </div>
          ))}

      </div>


      <div className="pagination-container">
        <button
          onClick={() => setPage(page - 1)}
          className="prev"
          disabled={page === 1}
        >
          Prev
        </button>
        {[...Array(Math.ceil(images.length / perPage))].map((_, i) =>
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            style={{
              background: page === i + 1 ? '#fff' : '',
              border: page === i + 1 ? '1px solid #111' : '1px solid #ddd'
            }}
            className="page"
          >
            {i + 1}
          </button>
        )}
        <button
          onClick={() => setPage(page + 1)}
          className="next"
          disabled={page === Math.ceil(images.length / perPage)}
        >
          Next
        </button>


      </div>

    </div>
  );
}

export default ImageGallery;