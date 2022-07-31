
import './App.css';
import PrimaryButton from './components/common/Buttons/Primary/PrimaryButton';
import SecondaryButton from './components/common/Buttons/Secondary/SecondaryButton';
import Links from './components/common/Links/Links';
import Subtitle from './components/common/Subtitle/Subtitle';
import Title from './components/common/Title/Title';
function App() {
  return (
    <div className="App">
      <Title />
      <Subtitle variant="center" />
      <PrimaryButton />
      <SecondaryButton />
      <Links label="Inicio" />
      <Links label="Servicios" />
      <Links label="Eventos" />
      <Links label="Aprende" />
      <Links label="Ayuda" />
      <Links label="Contact us" />


    </div>
  );
}

export default App;
