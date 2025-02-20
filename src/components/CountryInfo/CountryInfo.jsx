import s from './CountryInfo.module.css';

const CountryInfo = ({
  flag,
  capital,
  countryName,
  languages = [],
  population,
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.flag}>
        <img className={s.img} src={flag} alt={countryName} />
      </div>
      <div className={s.box}>
        <h3 className={s.capital}>
          Capital: <span className={s.accent}>{capital}</span>
        </h3>

        <h1 className={s.title}>
          {countryName === 'Russian Federation' ? 'MORDOR' : countryName}
        </h1>

        <p className={s.details}>
          Population: <span className={s.accent}>{population}</span>
        </p>

        <p className={s.details}>
          Languages: <span className={s.accent}>{languages.join(', ')}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryInfo;
