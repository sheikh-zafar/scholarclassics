'use client';

import Image from 'next/image';
import logo from '@/public/img/logo192.png';

export default function LinksPage() {
    return (
        <div className="flex items-center justify-center pt-12 sm:pt-4">
            <div className="space-y-6 w-full max-w-sm">

                {/* Logo */}
                <div className="flex justify-center">
                    <Image
                        src={logo}
                        alt="zafar"
                        width={80}
                        height={80}
                        className="rounded-full border"
                    />
                </div>

                {/* Links */}
                <LinkButton href="https://zafarulhasan.com" className='bg'>
                    Website
                </LinkButton>

                <LinkButton href="https://calendar.google.com" className='bg'>
                    Calendar
                </LinkButton>

                <LinkButton
                    href="https://chat.whatsapp.com/Blmyg0w36Dp0fE92w0NLtD"
                    className="bg-[#25D366] text-white"
                >
                    WhatsApp
                </LinkButton>

                <LinkButton
                    href="https://t.me/zafarulhasan"
                    className="bg-[#229ED9] text-white"
                >
                    Telegram
                </LinkButton>

                <LinkButton
                    href="https://www.youtube.com/zafarulhasan"
                    className="bg-red-600 text-white"
                >
                    YouTube
                </LinkButton>

                <LinkButton
                    href="https://www.facebook.com/zafarulhasan.official/"
                    className="bg-[#4267B2] text-white"
                >
                    Facebook
                </LinkButton>

                <LinkButton
                    href="https://www.instagram.com/zafarulhasan.official/"
                    className="text-white"
                    style={{
                        background:
                            'linear-gradient(to right,#F58529,#FFB900,#DD2A7B,#8134AF,#515BD4)',
                    }}
                >
                    Instagram
                </LinkButton>

                <LinkButton
                    href="https://mixlr.com/zafarulhasan"
                    className="text-[#FFF9FF]"
                    style={{
                        background:
                            'radial-gradient(circle at center,#ED1C24,#A52D2E,#F8A3A6,#CA666E)',
                    }}
                >
                    Mixlr
                </LinkButton>

            </div>
        </div>
    );
}

function LinkButton({ href, children, className = '', style = {} }) {
    return (
        <div className="py-3">
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`block text-center py-3 rounded-md font-medium linktree-bg ${className}`}
                style={style}
            >
                {children}
            </a>
        </div>
    );
}