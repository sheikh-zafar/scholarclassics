'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const slides = [
    "/img/Quran&Hadith1Arabic.png",
    "/img/Quran&Hadith1Urdu.png",
    "/img/Quran&Hadith1English.png",
    "/img/Quran&Hadith2Arabic.png",
    "/img/Quran&Hadith2Urdu.png",
    "/img/Quran&Hadith2English.png",
];

export default function Navbar() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 2500);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-4 py-6 grid md:grid-cols-2 gap-6 items-center">
                {/* Carousel */}
                <div className="relative w-full h-75 md:h-75 overflow-hidden">
                    {slides.map((img, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <Image
                                src={img}
                                alt="Quran Hadith"
                                fill
                                className="object-contain"
                                priority={i === 0}
                            />
                        </div>
                    ))}
                </div>

                {/* Sheikh Image */}
                <div className="flex justify-center md:justify-start">
                    <Image
                        src="/img/sheikhname.png"
                        alt="Zafar ul Hasan Madani"
                        className="max-w-full h-auto"
                        width={500}
                        height={150}
                        priority
                    />
                </div>
            </div>

            {/* Navbar */}
            <nav className="bg-[#f5efe6] bg">
                <div className="max-w-7xl mx-auto px-4">
                    <ul className="flex flex-wrap justify-center gap-6 py-4 text-[#5c4033] font-medium">
                        <li>
                            <Link href="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link href="/lecture-schedule" className="hover:underline">Schedule</Link>
                        </li>
                        <li>
                            <Link href="/lectures" className="hover:underline">Duroos</Link>
                        </li>
                        <li>
                            <Link href="/books" className="hover:underline">Books</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline">About Shaikh</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}