'use client';

import Link from 'next/link';

export default function ComingSoon() {
    return (
        <div>
            <div className="min-h-[60vh] flex items-center justify-center px-4">
                <div className="text-center bg-gray-100 p-10 rounded-lg shadow-md">
                    <i className="fa fa-commenting text-5xl text-[#2e856e] mb-4" aria-hidden="true"></i>

                    <h3 className="text-4xl font-semibold mb-6">
                        Coming soon!
                    </h3>

                    <Link
                        href="/lectures"
                        className="inline-block px-6 py-3 text-lg border border-gray-800 bg-[#2e856e] text-beige hover:bg-[#256f5c]"
                    >
                        Go To Lectures Page
                    </Link>
                </div>
            </div>
        </div>
    );
}