import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import './card.css'; 

const Card = ({ title, description, image, link }) => (
  <div className="card">
    {image && <GatsbyImage className="card-image" image={image} alt={title} />}
    <h2 className="card-title">{title}</h2>
    <p className="card-description">{description}</p>
    <a href={link} className="card-button" target="_blank" rel="noopener noreferrer">
      Más info
    </a>
  </div>
);

export default Card;
