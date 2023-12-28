import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Preview from './components/Preview/Preview';
import Footer from './components/Footer/Footer';
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
      <Footer /> 
    </main>
  );
}

export default App;
