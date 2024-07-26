import React from 'react'
import { XIcon } from '../icons/XIcon'
import Link from 'next/link'

const Header = ({ toggleSidebar, isSidebarOpen }: { toggleSidebar: () => void, isSidebarOpen: boolean }) => {
    return (
        <header className="bg-black text-white h-16 flex items-center justify-between px-6">
            {/* Hamburger Menu Button for Mobile */}
            <button className="md:hidden text-white" onClick={toggleSidebar}>
                {isSidebarOpen ? (
                    <XIcon className="h-6 w-6" />
                ) : (
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                )}
            </button>
            <Link href="/" className="text-2xl text-[#36E891]">
                Weya.ai
            </Link>
            <div className="flex items-center gap-6 text-sm">
                {/* Add any header buttons or links here */}
            </div>
        </header>
    )
}

export default Header