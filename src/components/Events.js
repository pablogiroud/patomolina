import React from "react";
import Event from "./Event.js";

const events = [
  {
    id: 1,
    date: '2024/06/01',
    title: "Centro Cultural Kirchner",
    text: "Musica popular argentina",
    url: "https://www.youtube.com/watch?v=_sgk-qo-W_c",
  },
  {
    id: 2,
    date: '2024/05/26',
    title: "Pena el Cardon",
    text: "Danzas nativas que dan sed de la peligrosa",
    url: "https://www.youtube.com/watch?v=_sgk-qo-W_c",
  },
  {
    id: 3,
    date: '2024/05/18',
    title: "Homenaje a Don Andres Chazarreta",
    text: "Disfrutando el repertorio del Patriarca del Folclore argentino",
    url: "https://www.youtube.com/watch?v=oT5uNb45GNk",
  },
  {
    id: 4,
    date: '2024/05/18',
    title: "Homenaje a Don Andres Chazarreta",
    text: "Disfrutando el repertorio del Patriarca del Folclore argentino",
    url: "https://www.youtube.com/watch?v=oT5uNb45GNk",
  },
  {
    id: 5,
    date: '2024/05/18',
    title: "Homenaje a Don Andres Chazarreta",
    text: "Disfrutando el repertorio del Patriarca del Folclore argentino",
    url: "https://www.youtube.com/watch?v=oT5uNb45GNk",
  },
  {
    id: 6,
    date: '2024/05/18',
    title: "Homenaje a Don Andres Chazarreta",
    text: "Disfrutando el repertorio del Patriarca del Folclore argentino",
    url: "https://www.youtube.com/watch?v=oT5uNb45GNk",
  },
  {
    id: 7,
    date: '2024/05/18',
    title: "Homenaje a Don Andres Chazarreta",
    text: "Disfrutando el repertorio del Patriarca del Folclore argentino",
    url: "https://www.youtube.com/watch?v=oT5uNb45GNk",
  },
  {
    id: 8,
    date: '2024/05/18',
    title: "Homenaje a Don Andres Chazarreta",
    text: "Disfrutando el repertorio del Patriarca del Folclore argentino",
    url: "https://www.youtube.com/watch?v=oT5uNb45GNk",
  },
  {
    id: 9,
    date: '2024/05/18',
    title: "Homenaje a Don Andres Chazarreta",
    text: "Disfrutando el repertorio del Patriarca del Folclore argentino",
    url: "https://www.youtube.com/watch?v=oT5uNb45GNk",
  },
];

function Events() {
  return (
    <div className="container d-flex jus8tify-content-center align-items-center h-80">
      <div className="row row-cols-1">
        {events.map(({ date, title, text, url, id }) => (
          <div className="col mb-3" key={id}>
            <Event title={title} date={date} text={text} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
