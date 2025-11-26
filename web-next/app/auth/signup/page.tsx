"use client";
import Signup from "@/components/organisms/Signup";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from 'next/navigation'

export default function AuthPage() {
    const { signup } = useAuth();
    const router = useRouter();
    const handleSignup = async (data: { email: string; password: string; name: string }) => {
        if (!data.email || !data.password || !data.name) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        signup(data).then((() => {
            router.push('/boards');
        })).catch((error) => {
            alert('Erreur de connexion : ' + error.message);
        });
    };

    return (
        <Signup onSubmit={handleSignup}></Signup>
    );
}
