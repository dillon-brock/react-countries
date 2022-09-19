import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country">
      <h3>{name}</h3>
      <img src={`https://flagcdn.com/72x54/${iso2.toLowerCase()}.png`}/>
    </div>
  );
}