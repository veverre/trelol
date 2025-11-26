'use client';
import Button from "@/components/atoms/Button";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  const { user, isLoading } = useAuth();
  const isAuthenticated = !!user;
  const action = isAuthenticated ? <Button href="/boards">Aller à mes tableaux</Button> : <Button href="/auth/signin">Se connecter</Button>;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1>Bienvenue sur Trelol-React!</h1>
      <p>L&apos;application qui fait comme Trello mais en moins bien !</p>
      <h2 className="text-blue-400 mb-4">Desormais en React.js !!!</h2>
      {isLoading ? <p>Chargement...</p> : action}
    </div>
  );
}
