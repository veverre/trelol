'use client';
import Button from './components/atoms/Button';

export default function Home() {
  const isAuthenticated = true; // Replace with actual authentication logic
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1>Bienvenue sur Trelol-React!</h1>
      <p>L&apos;application qui fait comme Trello mais en moins bien !</p>
      <h2 className="text-blue-400">Desormais en React.js !!!</h2>
      {isAuthenticated && (
        <Button href="/boards">Aller à mes tableaux</Button>
      )}
    </div>
  );
}
