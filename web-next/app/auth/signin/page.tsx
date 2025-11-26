"use client";
import Signin from "@/components/organisms/Signin";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from 'next/navigation'

export default function SigninPage() {
    const { signin } = useAuth();
    const router = useRouter(); 
    const handleSignin = async (data: { email: string; password: string }) => {
        if (!data.email || !data.password) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        signin(data).then((() => {
            router.push('/boards');
        })).catch((error) => {
            alert('Erreur de connexion : ' + error.message);
        });
    };

    return (
        <Signin onSubmit={handleSignin}></Signin>
    );
}