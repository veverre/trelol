'use client';
import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { InputType } from '@/enums/Input';
import { ButtonType } from '@/enums/Button';

export default function Signin({ onSubmit }: { onSubmit: (data: { email: string; password: string }) => void }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); 
      onSubmit({ email, password });
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6 rounded shadow-md">
            <h2>Hey mais on se connait non ?</h2>
            <p>Connecte toi pour voir tes tableaux !</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 font-medium">Email</label>
                    <Input type={InputType.EMAIL} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password" className="mb-1 font-medium">Mot de passe</label>
                    <Input type={InputType.PASSWORD} value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button type={ButtonType.SUBMIT}>
                    Se connecter
                </Button>
            </form>
        </div>
    )
}