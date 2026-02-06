'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { getAllWeeks } from '@/data/blogs';

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [weeklyDropdownOpen, setWeeklyDropdownOpen] = useState(false);
    const weeks = getAllWeeks();

    return (
        <nav className="border-b border-black bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link
                        href="/"
                        className="text-xl font-bold text-black hover:opacity-70 transition-opacity"
                    >
                        Lloyd's Blog
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-black hover:opacity-70 transition-opacity font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-black hover:opacity-70 transition-opacity font-medium"
                        >
                            About
                        </Link>

                        <div className="relative">
                            <button
                                onClick={() => setWeeklyDropdownOpen(!weeklyDropdownOpen)}
                                className="flex items-center space-x-1 text-black hover:opacity-70 transition-opacity font-medium"
                            >
                                <span>Weekly Blog</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${weeklyDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {weeklyDropdownOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-10"
                                        onClick={() => setWeeklyDropdownOpen(false)}
                                    />
                                    <div className="absolute right-0 mt-2 w-48 bg-white border border-black shadow-lg z-20">
                                        <div className="py-2 max-h-96 overflow-y-auto">
                                            {weeks.map((week) => (
                                                <Link
                                                    key={week}
                                                    href={`/weekly/${week}`}
                                                    onClick={() => setWeeklyDropdownOpen(false)}
                                                    className="block px-4 py-2 text-black hover:bg-black hover:text-white transition-colors"
                                                >
                                                    Week {week}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-black hover:opacity-70 transition-opacity"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden border-t border-black bg-white">
                    <div className="px-4 py-4 space-y-3">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-black hover:opacity-70 transition-opacity font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-black hover:opacity-70 transition-opacity font-medium"
                        >
                            About
                        </Link>

                        <div>
                            <button
                                onClick={() => setWeeklyDropdownOpen(!weeklyDropdownOpen)}
                                className="flex items-center justify-between w-full py-2 text-black hover:opacity-70 transition-opacity font-medium"
                            >
                                <span>Weekly Blog</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${weeklyDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {weeklyDropdownOpen && (
                                <div className="mt-2 pl-4 space-y-2 max-h-64 overflow-y-auto border-l-2 border-black">
                                    {weeks.map((week) => (
                                        <Link
                                            key={week}
                                            href={`/weekly/${week}`}
                                            onClick={() => {
                                                setWeeklyDropdownOpen(false);
                                                setMobileMenuOpen(false);
                                            }}
                                            className="block py-2 text-black hover:opacity-70 transition-opacity"
                                        >
                                            Week {week}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
