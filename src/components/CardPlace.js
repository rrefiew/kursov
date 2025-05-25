import './CardPlace.css';

function CardPlace ({ place, onClick }) {
  return (
    <div className="card-place" onClick={onClick}>
      <div className="image-container">
        <img src={place.imageUrl} alt={place.title} />
      </div>
      <div className="card-content">
        <p className="country">{place.country}</p>
        <p className="short-desc">{place.shortDesc}</p>
      </div>
    </div>
  );
};

export default CardPlace;