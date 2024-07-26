import Link from "next/link";

const TopNavbar = ({ onLogout }: { onLogout: () => void }) => {
    return (
        <nav className="bg-[#000000] text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link legacyBehavior href="/">
                    Weya.ai
                </Link>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <button onClick={onLogout} className="text-white">
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default TopNavbar