import HomePage from './components/HomePage/homePage';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function App() {
  const albums = getRandomInt(1, 1000);
  return (
    <HomePage albums={albums} />
  );
}
