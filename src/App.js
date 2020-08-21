import React from "react";
import RawData from "./RawData";
import Suggestions from "./Suggestions";
import "bootstrap/dist/css/bootstrap.css"; // Importing bootstrap for layout
import "./index.css"; // Importing css file for additional stylish

export default function App() {
  const musicData = [
    // export default function RawData({ title, genre, author, dateOfRelease, album, description, image }) {
    // -- -- Music on Playlist -- -- //
    {
      title: "Yes and no ",
      genre: "Pop",
      author: "Salvador Da",
      dateOfRelease: "2008",
      album: "No and Yes",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
      image: "https://images.photowall.com/products/58341/foggy-forest-4.jpg?h=699&q=85",
    },
    {
      title: "Emigration Song",
      genre: "Bossanova",
      author: "Zed Leppelin",
      dateOfRelease: "2015",
      album: "Out of Out",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    },
    {
      title: "No hearth",
      genre: "Post-pop",
      author: "Mikael M. Junior",
      dateOfRelease: "1954",
      album: "Bastian Gerade",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
      image: "https://www.udiscovermusic.com/wp-content/uploads/2019/04/best-jazz-songs.jpg",
    },
    {
      title: "ReactisC00l",
      genre: "Alternative indie",
      author: "Jessy Robert",
      dateOfRelease: "1954",
      album: "Capodanno a Cerignola",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
      image: "https://www.metalinsider.net/site/wp-content/uploads/2018/06/ceek-768x512.jpg",
    },
  ];
  // -- -- Music Suggested -- -- //
  const suggestMusic = [
    {
      title: "Marade",
      genre: "Techno-Pop",
      author: "Smile Robert",
      dateOfRelease: "1997",
      album: "What a party",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. .",
      image: "https://m.media-amazon.com/images/M/MV5BNTc2ZGU0YTQtNmExYS00OWRiLTgyNmUtMjZkNTBmNDc5YzE2XkEyXkFqcGdeQXVyMzM2NzgzNjM@._V1_.jpg",
    },
    {
      title: "Rettil",
      genre: "Progressive-Punk",
      author: "Return",
      dateOfRelease: "2017",
      album: "StreetView",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
      image: "https://www.gotravelblogs.com/wp-content/uploads/travel-guide-Skopje-Macedonia-783x450.jpg",
    },
  ];

  return (
    <div className='App'>
      <h1 className='text-center'>
        Playlist of the day
        <svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-music-player-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
          <path fill-rule='evenodd' d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3zm7 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
          <circle cx='8' cy='11' r='1' />
        </svg>
      </h1>
      {musicData.map((element) => (
        <RawData title={element.title} genre={element.genre} author={element.author} dateOfRelease={element.dateOfRelease} album={element.album} description={element.description} image={element.image} />
      ))}
    </div>
  );
}
