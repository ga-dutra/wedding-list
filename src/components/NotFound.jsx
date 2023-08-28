import React from 'react';
import { unstable_HistoryRouter } from 'react-router-dom';

const NotFound = () => {
  const history = unstable_HistoryRouter();

  const redirectToBase = () => {
    history.push('/');
  };

  return (
    <div>
      <h1>404 - Página não encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <button onClick={redirectToBase}>Ir para a página inicial</button>
    </div>
  );
};

export default NotFound;