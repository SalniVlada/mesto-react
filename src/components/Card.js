function Card({card, onCardClick}) {

  const handleCardClick = () => {
    onCardClick(card);
  };

  return(
    <li className="element">
      <button type="button" className="element__delete" aria-label="Удалить"></button>
      <img src={card.link} alt={card.name} className="element__photo" onClick={handleCardClick}/>
        <div className="element__group">
          <h3 className="element__title">{card.name}</h3>
          <div className="element__likes">
            <button type="button" className="element__button" aria-label="Нравится"></button>
            <p className="element__counter">{card.likes.lenght}</p>
          </div>
        </div>
    </li>
  )
}

export default Card;