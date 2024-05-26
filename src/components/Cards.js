import React from "react";
import Card from "./Card.js";

import image1 from "../assets/images/background1.png";
import image2 from "../assets/images/background2.png";
import image3 from "../assets/images/background3.png";

const cards = [
  {
    id: 1,
    title: "Musica en vivo",
    image: image1,
    url: "https://patomolina.netlify.app",
  },
  {
    id: 2,
    title: "Taller de musica popular argentina",
    image: image2,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 3,
    title: "Homenaje a Don Andres Chazarreta",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 4,
    title: "Homenaje a Don Andres Chazarreta",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 5,
    title: "Homenaje a Don Andres Chazarreta",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 6,
    title: "Taller de musica popular argentina",
    image: image2,
    url: "https://youtube.com/fazttech",
  },
];

function Cards() {
  return (
    <div className="row gx-0">
      {cards.map(({ title, image, url, id }) => (
        <div className="col-xs-1 col-sm-3 gx-5" >
          <div className="mb-5">
            <Card imageSource={image} title={title} url={url} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
