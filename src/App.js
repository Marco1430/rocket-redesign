
import './App.css';
import PrimaryButton from './components/common/Buttons/Primary/PrimaryButton';
import SecondaryButton from './components/common/Buttons/Secondary/SecondaryButton';
import Subtitle from './components/common/Subtitle/Subtitle';
import Title from './components/common/Title/Title';
function App() {
  return (
    <div className="App">
      <Title />
      <Subtitle variant="center" />
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
}

export default App;
