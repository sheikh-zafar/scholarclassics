'use client';

import Link from 'next/link';
import Image from 'next/image';

import Jummuah from '@/public/img/jummaicon.jpg';
import tafseer from '@/public/img/tafseericon.jpg';
import Moon from '@/public/img/moon.jpg';
import Arkan from '@/public/img/arkan.jpg';
import Taweel from '@/public/img/taweel.jpeg';
import Mukhtasar from '@/public/img/mukhtasar.jpeg';
import Aam from '@/public/img/aam.jpg';
import SisterSection from '@/public/img/sistersection.jpg';
import AhleHadith from '@/public/img/ahlehadith.jpg';

const items = [
    { href: '/lectures/jummuah', img: Jummuah, title: "Jumu'ah Khutbah" },
    { href: '/lectures/qurantafseer', img: tafseer, title: 'Quran Tafseer' },
    { href: '/comingsoon', img: Arkan, title: 'Arkan al-Islam' },

    { href: '/lectures/mausamiyat', img: Moon, title: 'Mausamiat' },
    {
        href: '/lectures/taweel',
        img: Taweel,
        title: 'Dawrah ilmiyyah',
        sub: '(Taweel)',
    },
    {
        href: '/lectures/muktasar',
        img: Mukhtasar,
        title: 'Dawrah ilmiyyah',
        sub: '(Mukhtasar)',
    },

    { href: '/lectures/aam', img: Aam, title: 'Aam Duroos' },
    {
        href: '/lectures/sisters-section',
        img: SisterSection,
        title: "Sister's Section",
    },
    {
        href: '/comingsoon',
        img: AhleHadith,
        title: 'Tareeq Ahlul',
        sub: 'Hadith',
    },
];

export default function LecturesPage() {
    return (
        <div>
            <section className="mt-6 px-4">
                <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3 text-center">
                    {items.map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className="flex flex-col items-center gap-3 group"
                        >
                            {/* Circle */}
                            <div className="w-36 h-36 rounded-full border-[9px] border-[#5c4033] bg-beige flex items-center justify-center overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    className="rounded-full object-cover"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-[18px] font-['Righteous'] text-beige leading-snug group-hover:underline">
                                {item.title}
                                {item.sub && (
                                    <>
                                        <br />
                                        <span className="text-sm font-normal">{item.sub}</span>
                                    </>
                                )}
                            </h3>
                        </Link>
                    ))}
                </div>
            </section>

        </div>
    );
}