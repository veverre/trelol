'use client';
import { User } from '@/types/user';
import axios from 'axios';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type AuthContextType = {
  user: User | null;
  signin: (data: {email: string, password: string}) => Promise<void>;
  signup: (data: { email: string, password: string, name: string }) => Promise<void>;
  signout: () => Promise<void>;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const api = axios.create({
        baseURL: "http://localhost:4000",
        withCredentials: true,
    });

    useEffect(() => {
        const checkUser = async () => {
            try {
                const response = await api.get('/users/profile');
                setUser(response.data);
            } catch {
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };
        checkUser();
    }, [])

    const signin = async (data: {email: string, password: string}) => {
        try {
            const response = await api.post('/auth/signin', data);
            setUser(response.data);
        } catch {
            throw new Error('Les identifiants sont incorrects');
        }

    };

    const signup = async (data: { email: string, password: string, name: string }) => {
        try {
            const response = await api.post('/auth/signup', data);
            setUser(response.data);
        } catch {
            throw new Error('Erreur lors de l\'inscription');
        }
    };

    const signout = async () => {
        await api.post('/auth/signout');
        setUser(null);
    };

    const value = { user, isLoading, signin, signup, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
  }
  return context;
}
