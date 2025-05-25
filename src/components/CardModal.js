import './CardModal.css';

function CardModal({place, onClose}){
    return (
        <div className="card-modal-overlay" onClick={onClose} >
      <div className="card-modal-content" onClick={e => e.stopPropagation()}>
        <button className="card-close-btn" onClick={onClose}>x</button>
        <img src={place.imageUrl} alt={place.title} className="card-modal-image" />
        <div className="card-modal-text">
          <p className="country">{place.country}</p>
          <p className="full-desc">{place.fullDesc}</p>
        </div>
      </div>
    </div>
    );
}

export default CardModal;