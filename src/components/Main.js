import api from '../utils/Api.js';
import React from 'react';
import Card from './Card';


function Main(props) {

  const [userName, setUserName] = React.useState(null);
  const [userDescription, setUserDescription] = React.useState(null);
  const [userAvatar, setUserAvatar] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name)
      setUserDescription(data.about)
      setUserAvatar(data.avatar)
    })
    .catch((err) => 
      console.error(err));
  }, []);

  React.useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data)
    })
    .catch((err) => 
      console.error(err));
  }, []);

  const renderCard = (card) => {
    return <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
  }

  return(
    <main className="content">
      <section className="profile">
        <img src={userAvatar} alt="Фотография Жак-Ив Кусто" className="profile__avatar" />
        <div className="profile__edit-avatar" onClick={props.isEditAvatarPopupOpen}></div>
        <div className="profile__info">
          <div className="profile__name-panel">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
          </div>
        <p className="profile__about">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить" onClick={props.isAddPlacePopupOpen}></button>
      </section>

      <section className="cards">
          <ul className="elements">
            {cards.map(renderCard)}
          </ul>
      </section>
    </main>
  );
}

export default Main;