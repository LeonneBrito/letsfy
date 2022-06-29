import { useEffect, useState } from 'react';

import Board from './components/Board';
import Footer from './components/Footer';
import Header from './components/Header';
import { NewCardModal } from './components/NewCardModal';
import { useAuth } from './hooks/useAuth';
import { CardsProvider } from './hooks/useCard';

function App() {
  const { signIn } = useAuth();
  const [isCardModalOpen, setCardModalOpen] = useState(false);

  function handleOpenCardModal() {
    setCardModalOpen(true);
  }

  function handleCloseCardModal() {
    setCardModalOpen(false);
  }

  useEffect(() => {
    signIn({
      login: import.meta.env.VITE_APP_API_LOGIN,
      senha: import.meta.env.VITE_APP_API_PASSWORD,
    });
  }, []);

  return (
    <CardsProvider>
      <Header />
      <Board />
      <NewCardModal isOpen={isCardModalOpen} onRequestClose={handleCloseCardModal} />
      <Footer openModal={handleOpenCardModal} />
    </CardsProvider>
  );
}

export default App;
