import React from "react";
import "./Card.css";

const Card = ({ title, content, footer, imageUrl }) => {
  return (
    <div className="card-container">
      <header className="card-header">
        <h2 className="card-title">{title}</h2>
      </header>
      <main className="card-body">
        {imageUrl && (
          <div className="card-image-container">
            <img src={imageUrl} alt={title} className="card-image" />
          </div>
        )}
        <div className="card-content">
          {content}
        </div>
      </main>
      {footer && (
        <footer className="card-footer">
          <p className="footer-text">{footer}</p>
        </footer>
      )}
    </div>
  );
};

export default Card;
