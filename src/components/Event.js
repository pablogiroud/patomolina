import React from "react";
import PropTypes from "prop-types";
import "../styles/cards.css";

function Event({ date, title, text, url }) {
  return (
    <div className="col-sm">
      <div className="card">
        <div className="card-body px-md-3">
          <div className="col-sm px-2">
            <h4>{date} - {title}</h4>
          </div>
          <p className="card-text">{text}</p>
          <a href={url} className="btn btn-dark ">
            Comprar entradas
          </a>
        </div>
      </div>
    </div>
  );
}

Event.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
};

export default Event;
