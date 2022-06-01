import './App.css';
import Header from './Header';
import Container from './Container';
import Advanced from './Advanced';

function App() {
  return (
    <div className="App">
      <Header title="I am a styled-components title" />
      <Container />
      <Advanced inputColor="red" bgColor="cyan"/>
    </div>
  );
}

export default App;
