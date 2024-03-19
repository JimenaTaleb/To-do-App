import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import backgroundImage from './assets/background.jpg'

function App() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  };

  return (
    <div style={divStyle}>
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
