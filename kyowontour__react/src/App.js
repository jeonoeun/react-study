import './App.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import Section01 from './component/Section01';

function App() {
  return (
    <div className="Wrap">
      <Header />
      <main>
        <MainVisual />
        <Section01 />
      </main>
    </div>
  );
}

export default App;