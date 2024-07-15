import { IoIosHome } from "react-icons/io";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { PiHandDepositFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import Link from 'next/link';
import useSWR from 'swr';
import Logout from "./Logout";
import Image from "./Image";



const Sidebar = () => {

    const menuItems = [
        { name: 'Home', path: '/dashboard', icon: <IoIosHome size={30} color='white' /> },
        { name: 'Transfer', path: '/dashboard/transfer', icon: <FaMoneyBillTransfer size={30} color='white' /> },
        { name: 'Withdraw', path: '/dashboard/withdraw', icon: <BiMoneyWithdraw size={30} color='white' /> },
        { name: 'Deposit', path: '/dashboard/deposit', icon: <PiHandDepositFill size={30} color='white' /> },
        { name: 'Profile', path: '/dashboard/profile', icon: <CgProfile size={30} color='white' /> },
        { name: 'Settings', path: '/dashboard/settings', icon: <IoSettings size={30} color='white' /> },
    ];


    return (
        <div className=''>
            <div
                className={`transition-all bg-[#0c2243] md:hidden duration-300 fixed top-0 z-50 w-full`}
            >
                <div className="mycontainer">
                    <div
                        className={`navbar`}
                    >
                        <div className="navbar-start">
                            <div className="lg:h-[50px] lg:w-[65px] h-[45px] w-[55px]">
                                <a href="/">
                                    <img
                                        src="/crest.png"
                                        alt="logo"
                                        className="h-full w-full object-cover"
                                    />
                                </a>
                            </div>
                        </div>



                        <div className="navbar-end flex items-center gap-2 md:hidden">
                            <div className="dropdown">
                                <div className="avatar online" tabIndex={0}
                                    role="button"
                                >
                                    <Image />
                                </div>

                                
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content flex flex-col gap-2 top-14 right-0 text-white font-bold bg-[#0c2243] rounded-box z-[10] mt-3 w-52 p-3 shadow"
                                >
                                    <li>
                                        <a href="/dashboard" className='hover:text-accent transition-all ease-in-out duration-[0.2s]'>Home</a>
                                    </li>
                                    <li>
                                        <a href="/dashboard/transfer" className='hover:text-accent transition-all ease-in-out duration-[0.2s]'>Transfer</a>
                                    </li>
                                    <li>
                                        <a href="/dashboard/withdraw" className='hover:text-accent transition-all ease-in-out duration-[0.2s]'>Withdraw</a>
                                    </li>
                                    <li>
                                        <a href="/dashboard/deposit" className='hover:text-accent transition-all ease-in-out duration-[0.2s]'>Deposit</a>
                                    </li>
                                    <li>
                                        <a href="/dashboard/profile" className='hover:text-accent transition-all ease-in-out duration-[0.2s]'>Profile</a>
                                    </li>
                                    <li>
                                        <a href="/dashboard/settings" className='hover:text-accent transition-all ease-in-out duration-[0.2s]'>Settings</a>
                                    </li>
                                </ul>
                            </div>

                            <Logout />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`z-50 md:sticky md:top-0 hidden md:block md:h-screen bg-primary md:w-32`}>
                <div className="flex relative flex-col h-full">
                    <div className="flex items-center justify-center py-4 bg-primary text-white">
                        <img src="/crest.png" alt="" className='w-[60px]' />
                    </div>
                    <nav className="flex-1 mt-6 hidden md:flex md:flex-col md:gap-5">
                        {menuItems.map((item) => (
                            <Link key={item.name} href={item.path} className='flex py-3 items-center gap-3 px-2 hover:bg-[#00b3b31a]'>
                                {item.icon}
                                <p className="block text-white text-sm font-semibold">{item.name}</p>
                            </Link>
                        ))}
                    </nav>

                   <div className="pl-2">
                   <Logout />
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
