import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/Heading/Heading';

const NotFound = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      navigate('/');
      return;
    }
    const idInterval = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);
    return () => {
      clearInterval(idInterval);
    };
  }, [count, navigate]);

  return (
    <div>
      <Heading
        title={`Oops! We did not find the page.You will be redirected to the home page. ${count}`}
        top
      />
    </div>
  );
};

export default NotFound;
