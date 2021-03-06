import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const Card = ({ toggleFavorited, ...attributes}) => {
  const attributeKeys = Object.keys(attributes);

  const cardContent = attributeKeys.map(attributeKey => {
    if (attributeKey === 'url') {
      return (
        <button value={attributes[attributeKey]} key={attributeKey}>
          click to favorite!
        </button>
      );
    } else {
      return (
        <h4 value={attributes[attributeKey]} key={attributeKey}>
          <span className="info-title">{attributeKey}:</span> {attributes[attributeKey]}
        </h4>
      );
    }
  });

  return (
    <div>
      <article
        className='card unfavorited'
        onClick={toggleFavorited}>
        {cardContent}
        <span className="card-background"></span>
      </article>
    </div>
  );
};

Card.propTypes = {
  vehicleName: PropTypes.string,
  model: PropTypes.string,
  passengers: PropTypes.string,
  vehicleClass: PropTypes.string,
  personName: PropTypes.string,
  homeworld: PropTypes.string,
  population: PropTypes.string,
  species: PropTypes.string,
  planetName: PropTypes.string,
  terrain: PropTypes.string,
  climate: PropTypes.string,
  residents: PropTypes.array,
  selected: PropTypes.string,
  toggleFavorited: PropTypes.func
};

export default Card;
