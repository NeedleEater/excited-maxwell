import CommandBar from './components/CommandBar.jsx';
import HeroCockpit from './components/HeroCockpit.jsx';
import BentoPlatforms from './components/BentoPlatforms.jsx';
import CareerMatrix from './components/CareerMatrix.jsx';
import TerminalDispatch from './components/TerminalDispatch.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app-shell telemetry-grid">
      <CommandBar />
      <main className="main-canvas">
        <HeroCockpit />
        <BentoPlatforms />
        <CareerMatrix />
        <TerminalDispatch />
      </main>
      <Footer />
    </div>
  );
}
