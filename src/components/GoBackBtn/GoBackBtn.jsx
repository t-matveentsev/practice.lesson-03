import { Link } from 'react-router-dom';
import s from './GoBackBtn.module.css';
const GoBackBtn = ({ path }) => {
  return (
    <Link to={path} className={s.link}>
      GoBackBtn
    </Link>
  );
};

export default GoBackBtn;
