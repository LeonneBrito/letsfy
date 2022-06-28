import { useEffect } from 'react'
import { useAuth } from "./hooks/useAuth";

import Header from './components/Header';
import Board from './components/Board';

function App() {
  const { signIn } = useAuth();

  useEffect(() => {
    signIn({
      login: import.meta.env.VITE_APP_API_LOGIN,
      senha: import.meta.env.VITE_APP_API_PASSWORD
    });
  }, [signIn]);

  return (
    <>
      <Header />
      <Board />
    </>
  )
}

export default App;
