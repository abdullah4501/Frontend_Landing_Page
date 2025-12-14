import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import logo from '../assets/logo.png';
import user from '../assets/user1.png';
import searchIcon from '../assets/icon-search.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white border-b border-gray-200">
            <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
                <div className="h-[72px] flex items-center justify-between gap-[10px]">

                    <div className="flex items-center gap-4 md:gap-6 xl:gap-10 min-w-0 flex-1 overflow-hidden">

                        <div className="flex items-center gap-2 flex-shrink-0">
                            <img
                                src={logo}
                                alt="Logo"
                                className="object-contain"
                            />
                        </div>
                        <a className="text-[#0154AA] font-[600] text-[15px] xl:text-[16px] whitespace-nowrap" href="#">
                            Find Jobs
                        </a>

                        <nav className="hidden lg:flex items-center gap-4 xl:gap-[25px] text-[14px] xl:text-[15px] text-[#737A91] font-500 overflow-x-auto flex-shrink min-w-0">
                            <a href="#" className="hover:text-gray-900 whitespace-nowrap">
                                Top Companies
                            </a>
                            <a href="#" className="hover:text-gray-900 whitespace-nowrap">
                                Job Tracker
                            </a>
                            <a href="#" className="hover:text-gray-900 whitespace-nowrap">
                                My Calendar
                            </a>
                            <a href="#" className="hover:text-gray-900 whitespace-nowrap">
                                Documents
                            </a>
                            <a href="#" className="hover:text-gray-900 whitespace-nowrap">
                                Messages
                            </a>
                            <a href="#" className="hover:text-gray-900 whitespace-nowrap">
                                Notifications
                            </a>
                        </nav>
                    </div>

                    <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">

                        <div className="relative">
                            <img src={searchIcon} className="absolute left-4 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="h-[44px] w-[200px] lg:w-[260px] rounded-[8px] bg-[#F6F9FF] py-[6px] pl-12 text-[14px] text-gray-700 placeholder-[#737A91] outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button className="cursor-pointer rounded-[8px] bg-[#0154AA] text-white text-[14px] xl:text-[16px] py-[8px] px-[14px] xl:px-[22px] hover:bg-[#02468b] transition whitespace-nowrap">
                            Resume Builder
                        </button>

                        <img
                            src={user}
                            alt="Profile"
                            className="object-cover flex-shrink-0"
                        />
                    </div>

                    <div className="flex lg:hidden items-center gap-3 flex-shrink-0">
                        <img
                            src={user}
                            alt="Profile"
                            className="object-cover flex-shrink-0"
                        />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition"
                        >
                            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
                        </button>
                    </div>

                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4">

                        <div className="relative mb-4">
                            <img src={searchIcon} className="absolute left-4 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="h-[44px] w-full rounded-[8px] bg-[#F6F9FF] py-[6px] pl-12 text-[14px] text-gray-700 placeholder-[#737A91] outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <nav className="flex flex-col gap-4 text-[15px] text-[#737A91] font-500 mb-4">
                            <a className="text-[#0154AA] font-[600] text-[16px]" href="#">
                                Find Jobs
                            </a>
                            <a href="#" className="hover:text-gray-900">
                                Top Companies
                            </a>
                            <a href="#" className="hover:text-gray-900">
                                Job Tracker
                            </a>
                            <a href="#" className="hover:text-gray-900">
                                My Calendar
                            </a>
                            <a href="#" className="hover:text-gray-900">
                                Documents
                            </a>
                            <a href="#" className="hover:text-gray-900">
                                Messages
                            </a>
                            <a href="#" className="hover:text-gray-900">
                                Notifications
                            </a>
                        </nav>

                        <button className="w-full cursor-pointer rounded-[8px] bg-[#0154AA] text-white text-[16px] py-[8px] px-[22px] hover:bg-blue-700 transition">
                            Resume Builder
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
