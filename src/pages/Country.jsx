import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { fetchCountry } from '../service/countryApi';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';

const Country = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [error, setError] = useState(null);
  const { countryId } = useParams();

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
        <GoBackBtn path="/" />
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
