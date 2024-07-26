'use client';
import React, { FC, useEffect, useState } from 'react';
import Conversation from "../../../../components/Conversition/Conversition";
import { usePathname, useRouter } from 'next/navigation';
import { isAuthenticated } from '@/app/lib/Auth';
import Header from '@/components/Navbars/Header';
import SideNavbar from '@/components/Navbars/SideNavBar';

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

    const componentMap: Record<string, FC | ((props: { botNumber: string }) => JSX.Element)> = {
        "first": Conversation,
        "second": Conversation,
        "third": Conversation,
        "fourth": Conversation,
    };

    const ComponentToRender = componentMap[params.name] || (() => <div>Bot not found</div>);

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
            <SideNavbar
                ComponentToRender={ComponentToRender}
                isSidebarOpen={isSidebarOpen}
                handleRouteChange={handleRouteChange}
                isLoading={isLoading}
                selectedBot={selectedBot}
            />
        </div>
    );
}

export default Bot;
