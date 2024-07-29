'use client';
import React, { FC, useEffect, useState } from 'react';
import Conversation from "../../../../components/Conversition/Conversition";
import { usePathname, useRouter } from 'next/navigation';
import { isAuthenticated } from '@/app/lib/Auth';
import Header from '@/components/Navbars/Header';
import SideNavbar from '@/components/Navbars/SideNavBar';
import GlobalLoader from '@/components/Loaders/GlobalLoader';

interface BotProps {
    params: {
        name: string;
    };
}

const Bot: FC<BotProps> = ({ params }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const currentPath = usePathname();

    const selectedBot = currentPath.split('/');
    useEffect(() => {
        (async () => {
            const res = await isAuthenticated();
            if (!res) {
                router.push('/login');
            }
        })();
    }, [router]);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleRouteChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newPath = e.currentTarget.value;
        if (currentPath !== newPath) {
            setIsLoading(true);
            router.push(newPath);
        }
    };

    return (
        <div className="h-screen flex flex-col">
            <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex flex-grow">
                <SideNavbar
                    isSidebarOpen={isSidebarOpen}
                    handleRouteChange={handleRouteChange}
                />
                <main className={`flex-grow flex justify-center items-center bg-black w-96 p-5 overflow-y-auto ${isSidebarOpen ? "md:ml-64" : "ml-0"} transition-all duration-300`}>
                    {isLoading ? <GlobalLoader /> : <Conversation botNumber={'second'} />}
                </main>
            </div>
        </div>
    );
}

export default Bot;
