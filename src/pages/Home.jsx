import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';
import Loader from '../components/Loader/Loader';
import CountryList from '../components/CountryList/CountryList';
// import useFetch from '../hooks/useFetch';

const Home = () => {
  // const { countries, isLoading, error } = useFetch();
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && (
          <Heading
            title={`Oops! Something went wrong... Error:${error}`}
            bottom
          />
        )}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
export default Home;
