
'use client';
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import Button from "@/components/atoms/Button";

export default function AppHeader() {
    const { user, signout } = useAuth();
    const isAuthenticated = !!user;
    const handleSignout = () => {
        signout();
    }
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <Link href="/">
                <h1 className="text-2xl font-bold">Trelol</h1>
            </Link>
            <div>
                { isAuthenticated ? (
                    <Button onClick={handleSignout}>Se deconnecter</Button>
                ) : (
                    <div>
                        <Link href="/auth/signin">
                            <Button>Se connecter</Button>
                        </Link>
                        <Link href="/auth/signup" className="ml-4">
                            <Button>S&apos;inscrire</Button>
                        </Link>         
                    </div>
                )
            }
            </div>
        </header>
    );
}