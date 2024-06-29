import mainImage from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

export default function Header() {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src={mainImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}