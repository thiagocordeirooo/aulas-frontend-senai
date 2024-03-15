import Avatar from '../Avatar/Avatar';
import './Cabecalho.css';

const Cabecalho = () => {
  return (
    <header>
      <img src='/vite.svg' />
      <Avatar nome='João Silva' />
    </header>
  );
};

export default Cabecalho;
