import React from "react";

export default function RawData({ title, genre, author, dateOfRelease, album, description, image }) {
  return (
    <div className='container mt-5 mb-5'>
      <div className='row'>
        <div className='col-md-6 containerCol1'>
          <h2 className='containericonandtitle'>
            <svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-play-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
              <path d='M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />
            </svg>
            {title}
          </h2>
          <p className=''>{genre}</p>
          <span className='spanAuthorDate'>
            <h6>
              {author} - {dateOfRelease} - Album: {album}
            </h6>
          </span>
          <p className='mt-3'>{description}</p>
        </div>
        <div className='col-md-6 containerCol2'>
          <div className='containerImg text-center'>
            <a href='https://www.ecosia.org/'>
              <img src={image} href='albumpicture' width='400px' height='300px' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
