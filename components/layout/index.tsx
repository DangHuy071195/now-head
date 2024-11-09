import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import About from '../about';
import Exprience from '../experience';
import Tech from '../tech';
import Works from '../work';
import Contact from '../contact';
import Feedbacks from '../feedbacks';
import StartsCanvas from '../starts-canvas';
import Header from './Header';
import StarCanvas from '../starts-canvas';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth';
import { auth } from '@/libs/firebase';
import { useRouter } from 'next/router';

interface LayoutPropsI {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutPropsI> = ({ children }) => {
  const [user, setUser] = useState<any>();
  const router = useRouter();

  // Add this to your SignInPage component
  useEffect(() => {
    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.onload = () => {
        //@ts-ignore
        window.google.accounts.id.initialize({
          client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
          callback: handleCredentialResponse, // This will handle the response from one-tap
          auto_select: true, // Automatically select account if one is available
        });
        //@ts-ignore
        window.google.accounts.id.prompt(); // Prompt for one-tap sign-in
      };
      document.body.appendChild(script);
    };

    loadGoogleScript();
  }, []);

  const handleCredentialResponse = (response: any) => {
    const credential = response.credential; // This is the JWT token
    // Use the credential to authenticate with Firebase
    const provider = new GoogleAuthProvider();
    return signInWithCredential(auth, GoogleAuthProvider.credential(credential))
      .then((userCredential) => {
        // Handle successful sign-in
        console.log('User signed in:', userCredential.user);
        router.push('/dashboard'); // Redirect to dashboard after sign-in
      })
      .catch((error) => {
        console.error('Error signing in with credential:', error);
      });
  };

  useEffect(() => {
    // Listen for authentication state changes

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(`user`, user);
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
        console.log('User is signed out');
        router.push('/sign-in');
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);
  return (
    <div className="bg-primary relative z-0 flex flex-col bg-[#0d1117] min-h-[100vh] max-w-[1024px] m-auto">
      {/* <NavBar /> */}
      <Header user={user} />
      <ToastContainer />
      {children}
    </div>
  );
};

export default Layout;
