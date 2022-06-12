import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isPopupEditAvatar, setPopupEditAvatar] = React.useState(false);
  const [isPopupEditProfile, setPopupEditProfile] = React.useState(false);
  const [isPopupAddPlace, setPopupAddPlace] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setPopupEditAvatar(true);
  }

  function handleEditProfileClick() {
    setPopupEditProfile(true);
  }

  function handleAddPlaceClick() {
    setPopupAddPlace(true);
  }

  function closeAllPopups() {
    setPopupEditAvatar(false);
    setPopupEditProfile(false);
    setPopupAddPlace(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className='root'>
      <div className="App">

        <Header/>

        <Main onEditProfile={handleEditProfileClick} isAddPlacePopupOpen={handleAddPlaceClick} isEditAvatarPopupOpen={handleEditAvatarClick} onCardClick={handleCardClick}/>

        <Footer/>

        <PopupWithForm name='person' title='Редактировать профиль' isOpen={isPopupEditProfile} onClose={closeAllPopups} caption='Сохранить'>
          <label className="popup__input-area">
            <input type="text" name="personName" className="popup__input popup__input_add_name" placeholder="Имя" required minLength={2} maxLength={40}/>
            <span className="error-text" id="personNameError"></span>
          </label>
          <label className="popup__input-area">
            <input type="text" name="personAbout" className="popup__input popup__input_add_about" placeholder="О себе" required minLength={2} maxLength={200}/>
            <span className="error-text" id="personAboutError"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm name='card' title='Новое место' isOpen={isPopupAddPlace} onClose={closeAllPopups} caption='Создать'>
          <label className="popup__input-area">
            <input type="text" name="cardName" className="popup__input popup__input_card_name" placeholder="Название" required />
            <span className="error-text" id="cardNameError"></span>
          </label>
          <label className="popup__input-area">
            <input type="url" name="cardLink" className="popup__input popup__input_card_link" placeholder="Ссылка на картинку" required />
            <span className="error-text" id="cardLinkError"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isPopupEditAvatar} onClose={closeAllPopups} caption='Сохранить'>
          <label className="popup__input-area">
            <input type="url" name="avatarLink" className="popup__input popup__input_avatar_link" placeholder="Ссылка на аватар" required />
            <span className="error-text" id="avatarLinkError"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm name='delete' title='Вы уверены?'/>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      </div>
    </div>
  );
}


export default App;
