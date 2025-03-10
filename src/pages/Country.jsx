import { useEffect, useRef, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { fetchCountry } from '../service/countryApi';
import { useLocation, useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';

const Country = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [error, setError] = useState(null);
  const { countryId } = useParams();
  const location = useLocation();

  const goBack = useRef(location?.state ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [countryId]);
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBack.current} />
        {isLoading && <Loader />}
        {error && (
          <Heading
            title={`Oops! Something went wrong... Error:${error}`}
            bottom
          />
        )}
        {country && <CountryInfo {...country} />}
      </Container>
    </Section>
  );
};

export default Country;
