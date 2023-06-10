import React from 'react';
import PropTypes from 'prop-types';

const CardList = ({ cards }) => {
  const renderCards = (cardArray) => {

    return cardArray.map((card) => (
      <li key={card.id}>
        {card.score}
      </li>
    ));
  };

  return (
    <section>
      <h2>Score Card</h2>
      <ul>{renderCards(cards)}</ul>
    </section>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    score: PropTypes.number
  })).isRequired,
};

export default CardList;