"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import GlobalLoader from '@/components/Loaders/GlobalLoader';
import 'react-toastify/dist/ReactToastify.css';
import TopNavbar from '@/components/Navbars/TopNavBar';
import FeatureCard from '@/components/Card/FeatureCard';
const Home = () => {
  const router = useRouter();

  const [jwtToken, setJwtToken] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = window.localStorage.getItem('weya-userToken');
    if (token) {
      setJwtToken(token);
    } else {
      router.push('/login');
    }
    setLoading(false);
  }, [router]);

  const handleExploreClick = () => {
    setLoading(true);
    router.push('/chat/first');
  };

  const handleLogout = () => {
    window.localStorage.removeItem('weya-userToken');
    router.push('/login');
  };

  return (
    <>
      {loading ? (
        <GlobalLoader />
      ) : jwtToken ? (
        <div className="min-h-screen flex flex-col">
          <TopNavbar onLogout={handleLogout} />
          <main className="flex-grow bg-[#000000]">
            <section className="text-center py-16 bg-gradient-to-b from-[#000000] to-[#345830] text-white">
              <h1 className="text-5xl font-bold mb-4">Welcome to Weya.ai</h1>
              <p className="text-lg mb-8">Explore the new generation assistance</p>
            </section>
            <section className="py-16 px-4 bg-[#000000] text-[#7A7A7A]">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-[#000000]">Our Features</h2>
                <div className="mx-auto text-center">
                  <button onClick={handleExploreClick}>
                    <FeatureCard title="Explore Bot" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                  </button>
                </div>
              </div>
            </section>
          </main>
          <footer className="bg-[#000000] text-white py-4 text-center">
            {/* <p>Footer</p> */}
          </footer>
        </div>
      ) : (
        <GlobalLoader />
      )}
    </>
  );
};

export default Home;
