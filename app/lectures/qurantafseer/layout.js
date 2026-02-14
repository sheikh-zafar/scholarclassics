// Next.js Metadata (SEO) - Place this in your page.js or layout.js
export const metadata = {
    title: "فضيلة الشيخ ظفر الحسن مدني حفظه الله",
    description: "Quran Tafseer - Listen and Download Quran Tafseer Explanation by zafar ul hasan madani",
    alternates: {
        canonical: "https://zafarulhasan.com",
    },
    openGraph: {
        title: "Zafar ul hasan madani | Quran tafseer",
    },
};

export default function RootLayout({ children }) {
    return (
        <>{children}</>
    );
}
