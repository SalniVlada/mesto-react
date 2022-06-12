function PopupWithForm(props) {
  return(
  <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
    <div className={`popup__container popup__container_${props.name}`}>
      <button type="button" className={`popup__close popup__close_${props.name}`} onClick={props.onClose}></button>
      <h2 className={`popup__title popup__title_${props.name}`}>{props.title}</h2>
      <form name="myForm" className={`form form_${props.name}`}>
        {props.children}
        <button type="submit" className={`popup__save popup__save_${props.name}`}>Сохранить</button>
      </form>
    </div>
  </div>
  );
}

export default PopupWithForm;