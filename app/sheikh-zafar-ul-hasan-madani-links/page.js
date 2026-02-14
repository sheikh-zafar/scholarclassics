'use client';

import Image from 'next/image';
import Logo from '@/public/img/logo192.png';

export default function AllLinks() {
    return (
        <div className="space-y-10">

            {/* Title */}
            <section className="text-center">
                <h5 className="text-xl font-semibold">
                    Sheikh Zafar ul Hasan Madani Updates
                </h5>
                <p className="text-lg mt-2">Groups</p>
                <hr className="mt-4" />
            </section>

            {/* Logo */}
            <section className="flex justify-center">
                <Image
                    src={Logo}
                    alt="zafar ul hasan madani"
                    width={180}
                    height={180}
                    className="rounded-full border-[9px] border-[#5c4033]"
                />
            </section>

            {/* Buttons */}
            <section className="space-y-6">
                {[
                    {
                        href: 'https://chat.whatsapp.com/Blmyg0w36Dp0fE92w0NLtD',
                        label: 'WhatsApp Announcement',
                        icon: 'fa-whatsapp',
                    },
                    {
                        href: 'https://chat.whatsapp.com/CbIqCENm52dK87wJ5SJNzN',
                        label: 'WhatsApp Group 2',
                        icon: 'fa-whatsapp',
                    },
                    {
                        href: 'https://t.me/zafarulhasan',
                        label: 'Telegram',
                        icon: 'fa-telegram',
                    },
                    {
                        href: 'https://www.facebook.com/Shaikh-Zafar-Ul-Hasan-Madani-%D8%AD%D9%81%D8%B8%D9%87-%D8%A7%D9%84%D9%84%D9%87-137613959649087/',
                        label: 'Facebook',
                        icon: 'fa-facebook',
                    },
                    {
                        href: 'https://www.youtube.com/c/ZafarulHasan',
                        label: 'YouTube',
                        icon: 'fa-youtube',
                    },
                    {
                        href: 'https://calendar.google.com',
                        label: 'Calendar',
                        icon: 'fa-calendar',
                    },
                ].map((item, index) => (
                    <div key={index} className="flex justify-center">
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-60 text-center px-4 py-3 border border-gray-800 bg-[#5c4033] text-beige text-lg hover:opacity-90"
                        >
                            <i className={`fa ${item.icon} mr-2`} />
                            {item.label}
                        </a>
                    </div>
                ))}
            </section>
        </div>
    );
}