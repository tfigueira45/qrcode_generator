import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Preview from './components/Preview/Preview';
import './App.css';
import { QrcodeProvider } from './contexts/QrCodeContext';

function App() {
  return (
    <main>
      <Header />
      <QrcodeProvider>
        <Dashboard />
        <Preview />
      </QrcodeProvider>
    </main>
  );
}

export default App;
