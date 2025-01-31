import reactLogo from '../assets/images/react.svg'
import { Search } from '../components';

const Home = () => {
  return (
    <div>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <Search />
    </div>
  );
};

export default Home;
